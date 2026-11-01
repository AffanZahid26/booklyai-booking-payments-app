import { initialBookings } from '../mock/data';
import { Booking, BookingDraft, BookingStatus } from '../types';
import { delay, uid } from '../utils/helpers';
import { loadJSON, saveJSON, STORAGE_KEYS } from '../utils/storage';

async function getStore(): Promise<Booking[]> {
  return loadJSON(STORAGE_KEYS.BOOKINGS, initialBookings);
}

async function setStore(bookings: Booking[]): Promise<void> {
  await saveJSON(STORAGE_KEYS.BOOKINGS, bookings);
}

export async function getBookings(
  status?: 'upcoming' | 'past' | 'cancelled',
): Promise<Booking[]> {
  await delay(400);
  const all = await getStore();
  if (!status) {
    return all;
  }
  if (status === 'upcoming') {
    return all.filter(b =>
      ['upcoming', 'confirmed', 'pending'].includes(b.status),
    );
  }
  if (status === 'past') {
    return all.filter(b => b.status === 'completed');
  }
  return all.filter(b => b.status === 'cancelled');
}

export async function getBookingById(id: string): Promise<Booking | null> {
  await delay(250);
  const all = await getStore();
  return all.find(b => b.id === id) ?? null;
}

export async function createBooking(draft: BookingDraft): Promise<Booking> {
  await delay(700);
  if (
    !draft.providerId ||
    !draft.serviceId ||
    !draft.staffId ||
    !draft.date ||
    !draft.time
  ) {
    throw new Error('Please complete all booking steps.');
  }
  const all = await getStore();
  const conflict = all.find(
    b =>
      b.providerId === draft.providerId &&
      b.date === draft.date &&
      b.time === draft.time &&
      b.status !== 'cancelled',
  );
  if (conflict) {
    throw new Error('That time is no longer available. Please choose another slot.');
  }
  const booking: Booking = {
    id: `BK-2026-${10480 + all.length}`,
    providerId: draft.providerId,
    providerName: draft.providerName ?? 'Provider',
    serviceId: draft.serviceId,
    serviceName: draft.serviceName ?? 'Service',
    staffId: draft.staffId,
    staffName: draft.staffName ?? 'Specialist',
    customerId: 'cus_01',
    customerName: 'Affan',
    date: draft.date,
    time: draft.time,
    durationMin: draft.durationMin ?? 60,
    price: draft.price ?? 0,
    status: 'confirmed',
    address: draft.address ?? '',
    createdAt: new Date().toISOString(),
    timeline: [
      { id: uid('t'), label: 'Booked', completed: true, at: new Date().toISOString() },
      { id: uid('t'), label: 'Confirmed', completed: true, at: new Date().toISOString() },
      { id: uid('t'), label: 'Reminder Sent', completed: false },
      { id: uid('t'), label: 'Upcoming', completed: true },
    ],
  };
  await setStore([booking, ...all]);
  return booking;
}

export async function cancelBooking(id: string): Promise<Booking> {
  await delay(500);
  const all = await getStore();
  const index = all.findIndex(b => b.id === id);
  if (index < 0) {
    throw new Error('Booking not found.');
  }
  all[index] = { ...all[index], status: 'cancelled' };
  await setStore(all);
  return all[index];
}

export async function rescheduleBooking(
  id: string,
  date: string,
  time: string,
): Promise<Booking> {
  await delay(500);
  const all = await getStore();
  const index = all.findIndex(b => b.id === id);
  if (index < 0) {
    throw new Error('Booking not found.');
  }
  all[index] = { ...all[index], date, time, status: 'confirmed' };
  await setStore(all);
  return all[index];
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus,
): Promise<Booking> {
  await delay(350);
  const all = await getStore();
  const index = all.findIndex(b => b.id === id);
  if (index < 0) {
    throw new Error('Booking not found.');
  }
  all[index] = { ...all[index], status };
  await setStore(all);
  return all[index];
}
