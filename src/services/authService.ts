import { DEMO_CREDENTIALS } from '../constants';
import { currentUser } from '../mock/data';
import { User } from '../types';
import { delay } from '../utils/helpers';
import { loadJSON, removeKey, saveJSON, STORAGE_KEYS } from '../utils/storage';

export interface AuthSession {
  token: string;
  user: User;
}

function credentialsMatch(email: string, password: string): boolean {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();
  const emailOk = normalizedEmail === DEMO_CREDENTIALS.email.toLowerCase();
  const passwordOk =
    normalizedPassword === DEMO_CREDENTIALS.password ||
    normalizedPassword.toLowerCase() === DEMO_CREDENTIALS.password.toLowerCase();
  return emailOk && passwordOk;
}

export async function login(
  email: string,
  password: string,
): Promise<AuthSession> {
  await delay(700);
  if (!credentialsMatch(email, password)) {
    throw new Error(
      `Use ${DEMO_CREDENTIALS.email} / ${DEMO_CREDENTIALS.password}`,
    );
  }
  const session: AuthSession = {
    token: 'booklyai-session-token',
    user: currentUser,
  };
  await saveJSON(STORAGE_KEYS.AUTH, session);
  await saveJSON(STORAGE_KEYS.PROFILE, currentUser);
  return session;
}

export async function signUp(input: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthSession> {
  await delay(1000);
  if (input.password.trim().length < 6) {
    throw new Error('Password must be at least 6 characters.');
  }
  const user: User = {
    ...currentUser,
    name: input.name.trim() || currentUser.name,
    email: input.email.trim().toLowerCase() || currentUser.email,
  };
  const session: AuthSession = {
    token: 'booklyai-session-token',
    user,
  };
  await saveJSON(STORAGE_KEYS.AUTH, session);
  await saveJSON(STORAGE_KEYS.PROFILE, user);
  return session;
}

export async function requestPasswordReset(email: string): Promise<void> {
  await delay(700);
  if (!email.includes('@')) {
    throw new Error('Enter a valid email address.');
  }
}

export async function verifyOtp(code: string): Promise<boolean> {
  await delay(800);
  return code === '123456' || code.length === 6;
}

export async function getSession(): Promise<AuthSession | null> {
  const session = await loadJSON<AuthSession | null>(STORAGE_KEYS.AUTH, null);
  if (!session?.token) {
    return null;
  }
  return {
    ...session,
    user: currentUser,
  };
}

export async function logout(): Promise<void> {
  await delay(300);
  await removeKey(STORAGE_KEYS.AUTH);
}
