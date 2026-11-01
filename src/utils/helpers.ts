export const delay = (ms = 500): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

/** Demo skeleton duration so lists feel like a real network load. */
export const SKELETON_DELAY_MS = 2400;

export const formatCurrency = (amount: number): string =>
  `$${amount.toFixed(2)}`;

export const formatDateLabel = (isoDate: string): string => {
  const date = new Date(`${isoDate}T12:00:00`);
  const today = new Date(2026, 8, 7);
  const tomorrow = new Date(2026, 8, 8);
  const sameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  if (sameDay(date, today)) {
    return 'Today';
  }
  if (sameDay(date, tomorrow)) {
    return 'Tomorrow';
  }
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};

export const greetingForHour = (hour = new Date().getHours()): string => {
  if (hour < 12) {
    return 'Good morning';
  }
  if (hour < 18) {
    return 'Good afternoon';
  }
  return 'Good evening';
};

export const uid = (prefix: string): string =>
  `${prefix}-${Date.now().toString(36)}-${Math.floor(Math.random() * 1000)}`;

export const relativeTime = (iso: string): string => {
  const now = new Date('2026-09-07T14:00:00').getTime();
  const then = new Date(iso).getTime();
  const diffMin = Math.round((now - then) / 60000);
  if (diffMin < 1) {
    return 'Just now';
  }
  if (diffMin < 60) {
    return `${diffMin}m`;
  }
  const hours = Math.round(diffMin / 60);
  if (hours < 24) {
    return `${hours}h`;
  }
  const days = Math.round(hours / 24);
  if (days === 1) {
    return 'Yesterday';
  }
  return `${days}d`;
};

export const groupNotificationDay = (
  iso: string,
): 'Today' | 'Yesterday' | 'Earlier' => {
  const date = new Date(iso);
  const today = new Date('2026-09-07T12:00:00');
  const yesterday = new Date('2026-09-06T12:00:00');
  const same = (a: Date, b: Date) =>
    a.toDateString() === b.toDateString();
  if (same(date, today)) {
    return 'Today';
  }
  if (same(date, yesterday)) {
    return 'Yesterday';
  }
  return 'Earlier';
};

export const validateEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateCardNumber = (value: string): boolean => {
  const digits = value.replace(/\s/g, '');
  return /^\d{16}$/.test(digits);
};

export const validateExpiry = (value: string): boolean =>
  /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);

export const validateCvv = (value: string): boolean => /^\d{3,4}$/.test(value);

export const getDateOptions = (count = 7) => {
  const base = new Date(2026, 8, 7);
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(base);
    date.setDate(base.getDate() + index);
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    let label = date.toLocaleDateString('en-US', { weekday: 'short' });
    if (index === 0) {
      label = 'Today';
    }
    if (index === 1) {
      label = 'Tomorrow';
    }
    return {
      iso,
      label,
      day: String(date.getDate()),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
    };
  });
};
