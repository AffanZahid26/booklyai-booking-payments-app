import { initialNotifications } from '../mock/data';
import { AppNotification } from '../types';
import { delay, uid } from '../utils/helpers';
import { loadJSON, saveJSON, STORAGE_KEYS } from '../utils/storage';

async function getStore(): Promise<AppNotification[]> {
  return loadJSON(STORAGE_KEYS.NOTIFICATIONS, initialNotifications);
}

export async function getNotifications(): Promise<AppNotification[]> {
  await delay(300);
  return getStore();
}

export async function markNotificationRead(id: string): Promise<void> {
  const all = await getStore();
  await saveJSON(
    STORAGE_KEYS.NOTIFICATIONS,
    all.map(n => (n.id === id ? { ...n, read: true } : n)),
  );
}

export async function markAllNotificationsRead(): Promise<void> {
  const all = await getStore();
  await saveJSON(
    STORAGE_KEYS.NOTIFICATIONS,
    all.map(n => ({ ...n, read: true })),
  );
}

export async function pushNotification(
  partial: Omit<AppNotification, 'id' | 'createdAt' | 'read'>,
): Promise<AppNotification> {
  const item: AppNotification = {
    ...partial,
    id: uid('ntf'),
    createdAt: new Date().toISOString(),
    read: false,
  };
  const all = await getStore();
  await saveJSON(STORAGE_KEYS.NOTIFICATIONS, [item, ...all]);
  return item;
}

export async function getUnreadCount(): Promise<number> {
  const all = await getStore();
  return all.filter(n => !n.read).length;
}
