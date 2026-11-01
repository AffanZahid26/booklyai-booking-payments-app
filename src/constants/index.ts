export const STORAGE_KEYS = {
  AUTH: '@booklyai/auth',
  BOOKINGS: '@booklyai/bookings',
  MESSAGES: '@booklyai/messages',
  CONVERSATIONS: '@booklyai/conversations',
  FAVORITES: '@booklyai/favorites',
  PROFILE: '@booklyai/profile',
  PREFERENCES: '@booklyai/preferences',
  ROLE: '@booklyai/role',
  PAYMENTS: '@booklyai/payments',
  SERVICES: '@booklyai/services',
  NOTIFICATIONS: '@booklyai/notifications',
  RECENT_SEARCHES: '@booklyai/recent_searches',
  ONBOARDING: '@booklyai/onboarding',
} as const;

export const DEMO_CREDENTIALS = {
  email: 'demo@booklyai.app',
  password: 'Demo@123',
} as const;

export const PROMO_CODES: Record<
  string,
  { type: 'percent' | 'fixed'; value: number; label: string }
> = {
  WELCOME10: { type: 'percent', value: 10, label: '10% off' },
  FIRSTBOOKING: { type: 'fixed', value: 10, label: '$10 off' },
};

export const SERVICE_FEE = 3.5;

export const CATEGORIES = [
  'Wellness',
  'Beauty',
  'Fitness',
  'Medical',
  'Consulting',
  'Home Services',
] as const;

export const QUICK_REPLIES = [
  'Is my booking confirmed?',
  'What time should I arrive?',
  'Can I reschedule?',
  'Where are you located?',
] as const;

export const AI_SUGGESTED_PROMPTS = [
  'Hi, I want to know the best service',
  'Book me a massage tomorrow',
  'Find something nearby',
  'Show me evening appointments',
] as const;
