import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import * as authService from '../services/authService';
import * as businessService from '../services/businessService';
import { currentUser as seedUser } from '../mock/data';
import {
  BookingDraft,
  User,
  UserPreferences,
  UserRole,
} from '../types';
import { loadJSON, saveJSON, STORAGE_KEYS } from '../utils/storage';

interface AppContextValue {
  bootstrapping: boolean;
  user: User | null;
  isAuthenticated: boolean;
  favorites: string[];
  preferences: UserPreferences;
  activeRole: UserRole;
  businessMode: boolean;
  bookingDraft: BookingDraft;
  recentSearches: string[];
  login: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  toggleFavorite: (providerId: string) => Promise<void>;
  setPreferences: (prefs: Partial<UserPreferences>) => Promise<void>;
  switchRole: (role: UserRole) => Promise<void>;
  setBusinessMode: (enabled: boolean) => Promise<void>;
  setBookingDraft: (draft: BookingDraft) => void;
  updateBookingDraft: (patch: Partial<BookingDraft>) => void;
  clearBookingDraft: () => void;
  addRecentSearch: (query: string) => Promise<void>;
  updateProfile: (patch: Partial<User>) => Promise<void>;
}

const defaultPreferences: UserPreferences = {
  notificationsEnabled: true,
  emailUpdates: true,
  language: 'English',
  darkMode: false,
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [bootstrapping, setBootstrapping] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [preferences, setPreferencesState] =
    useState<UserPreferences>(defaultPreferences);
  const [activeRole, setActiveRole] = useState<UserRole>('customer');
  const [businessMode, setBusinessModeState] = useState(false);
  const [bookingDraft, setBookingDraft] = useState<BookingDraft>({});
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const session = await authService.getSession();
        if (session) {
          setUser(session.user);
        }
        const favs = await loadJSON<string[]>(STORAGE_KEYS.FAVORITES, []);
        setFavorites(favs);
        const prefs = await loadJSON(STORAGE_KEYS.PREFERENCES, defaultPreferences);
        setPreferencesState(prefs);
        const role = await businessService.getStoredRole();
        setActiveRole(role === 'customer' ? 'customer' : role);
        setBusinessModeState(role !== 'customer');
        const searches = await loadJSON<string[]>(
          STORAGE_KEYS.RECENT_SEARCHES,
          [],
        );
        setRecentSearches(searches);
        // Only merge profile extras when a real auth session exists.
        if (session) {
          const profile = await loadJSON<User | null>(STORAGE_KEYS.PROFILE, null);
          if (profile) {
            setUser({ ...session.user, ...profile, ...session.user });
          }
        }
      } finally {
        setBootstrapping(false);
      }
    };
    bootstrap();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const session = await authService.login(email, password);
    setUser(session.user);
    setActiveRole('customer');
    setBusinessModeState(false);
    await businessService.setStoredRole('customer');
    await saveJSON(STORAGE_KEYS.PROFILE, session.user);
  }, []);

  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      const session = await authService.signUp({ name, email, password });
      setUser(session.user);
      await saveJSON(STORAGE_KEYS.PROFILE, session.user);
    },
    [],
  );

  const logout = useCallback(async () => {
    await authService.logout();
    setUser(null);
    setBusinessModeState(false);
    setActiveRole('customer');
    await businessService.setStoredRole('customer');
  }, []);

  const toggleFavorite = useCallback(async (providerId: string) => {
    setFavorites(prev => {
      const next = prev.includes(providerId)
        ? prev.filter(id => id !== providerId)
        : [...prev, providerId];
      void saveJSON(STORAGE_KEYS.FAVORITES, next);
      return next;
    });
  }, []);

  const setPreferences = useCallback(
    async (prefs: Partial<UserPreferences>) => {
      setPreferencesState(prev => {
        const next = { ...prev, ...prefs };
        void saveJSON(STORAGE_KEYS.PREFERENCES, next);
        return next;
      });
    },
    [],
  );

  const switchRole = useCallback(async (role: UserRole) => {
    setActiveRole(role);
    setBusinessModeState(role !== 'customer');
    await businessService.setStoredRole(role);
  }, []);

  const setBusinessMode = useCallback(async (enabled: boolean) => {
    setBusinessModeState(enabled);
    const role = enabled ? 'owner' : 'customer';
    setActiveRole(role);
    await businessService.setStoredRole(role);
  }, []);

  const updateBookingDraft = useCallback((patch: Partial<BookingDraft>) => {
    setBookingDraft(prev => ({ ...prev, ...patch }));
  }, []);

  const clearBookingDraft = useCallback(() => setBookingDraft({}), []);

  const addRecentSearch = useCallback(async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    setRecentSearches(prev => {
      const next = [trimmed, ...prev.filter(item => item !== trimmed)].slice(
        0,
        8,
      );
      void saveJSON(STORAGE_KEYS.RECENT_SEARCHES, next);
      return next;
    });
  }, []);

  const updateProfile = useCallback(async (patch: Partial<User>) => {
    setUser(prev => {
      const next = { ...(prev ?? seedUser), ...patch };
      void saveJSON(STORAGE_KEYS.PROFILE, next);
      return next;
    });
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      bootstrapping,
      user,
      isAuthenticated: !!user,
      favorites,
      preferences,
      activeRole,
      businessMode,
      bookingDraft,
      recentSearches,
      login,
      signUp,
      logout,
      toggleFavorite,
      setPreferences,
      switchRole,
      setBusinessMode,
      setBookingDraft,
      updateBookingDraft,
      clearBookingDraft,
      addRecentSearch,
      updateProfile,
    }),
    [
      bootstrapping,
      user,
      favorites,
      preferences,
      activeRole,
      businessMode,
      bookingDraft,
      recentSearches,
      login,
      signUp,
      logout,
      toggleFavorite,
      setPreferences,
      switchRole,
      setBusinessMode,
      updateBookingDraft,
      clearBookingDraft,
      addRecentSearch,
      updateProfile,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider');
  }
  return ctx;
}
