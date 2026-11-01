import {
  analyticsData,
  customers,
  initialBookings,
  initialPayments,
  services,
  staffMembers,
} from '../mock/data';
import {
  AnalyticsData,
  Booking,
  Customer,
  PaymentTransaction,
  ServiceItem,
  StaffMember,
  UserRole,
} from '../types';
import { delay, uid } from '../utils/helpers';
import { loadJSON, saveJSON, STORAGE_KEYS } from '../utils/storage';

export async function getBusinessAnalytics(): Promise<AnalyticsData> {
  await delay(400);
  const payments = await loadJSON(STORAGE_KEYS.PAYMENTS, initialPayments);
  const paid = payments.filter(p => p.status === 'Paid');
  const refunded = payments.filter(p => p.status === 'Refunded');
  const revenueToday =
    paid
      .filter(p => p.date === '2026-09-07')
      .reduce((sum, p) => sum + p.amount, 0) || analyticsData.revenueToday;
  return {
    ...analyticsData,
    revenueToday,
    revenueWeek: Math.max(
      analyticsData.revenueWeek - refunded.reduce((s, p) => s + p.amount, 0) * 0.1,
      revenueToday,
    ),
  };
}

export async function getBusinessAppointments(): Promise<Booking[]> {
  await delay(350);
  const bookings = await loadJSON(STORAGE_KEYS.BOOKINGS, initialBookings);
  return bookings.filter(b => b.providerId === 'prv_01' || b.status !== 'cancelled');
}

export async function getCustomers(): Promise<Customer[]> {
  await delay(300);
  return customers;
}

export async function getCustomerById(id: string): Promise<Customer | null> {
  await delay(250);
  return customers.find(c => c.id === id) ?? null;
}

export async function getStaff(): Promise<StaffMember[]> {
  await delay(250);
  return staffMembers.filter(s => s.providerId === 'prv_01');
}

export async function getManagedServices(): Promise<ServiceItem[]> {
  await delay(300);
  const local = await loadJSON<ServiceItem[] | null>(STORAGE_KEYS.SERVICES, null);
  if (local) {
    return local.filter(s => s.providerId === 'prv_01');
  }
  return services.filter(s => s.providerId === 'prv_01');
}

export async function saveManagedServices(
  items: ServiceItem[],
): Promise<ServiceItem[]> {
  await delay(400);
  const all = await loadJSON(STORAGE_KEYS.SERVICES, services);
  const others = all.filter(s => s.providerId !== 'prv_01');
  const next = [...items, ...others];
  await saveJSON(STORAGE_KEYS.SERVICES, next);
  return items;
}

export async function addService(
  input: Omit<ServiceItem, 'id' | 'providerId'>,
): Promise<ServiceItem[]> {
  const current = await getManagedServices();
  const item: ServiceItem = {
    ...input,
    id: uid('svc'),
    providerId: 'prv_01',
  };
  return saveManagedServices([item, ...current]);
}

export async function updateService(
  id: string,
  patch: Partial<ServiceItem>,
): Promise<ServiceItem[]> {
  const current = await getManagedServices();
  return saveManagedServices(
    current.map(s => (s.id === id ? { ...s, ...patch } : s)),
  );
}

export async function deleteService(id: string): Promise<ServiceItem[]> {
  const current = await getManagedServices();
  return saveManagedServices(current.filter(s => s.id !== id));
}

export async function getBusinessPayments(): Promise<PaymentTransaction[]> {
  await delay(350);
  return loadJSON(STORAGE_KEYS.PAYMENTS, initialPayments);
}

export async function getStoredRole(): Promise<UserRole> {
  return loadJSON(STORAGE_KEYS.ROLE, 'customer');
}

export async function setStoredRole(role: UserRole): Promise<void> {
  await saveJSON(STORAGE_KEYS.ROLE, role);
}

export function canAccess(
  role: UserRole,
  area:
    | 'dashboard'
    | 'appointments'
    | 'customers'
    | 'staff'
    | 'services'
    | 'analytics'
    | 'payments'
    | 'messages',
): boolean {
  if (role === 'owner' || role === 'customer') {
    return true;
  }
  if (role === 'manager') {
    return [
      'dashboard',
      'appointments',
      'customers',
      'staff',
      'services',
      'analytics',
      'messages',
    ].includes(area);
  }
  if (role === 'staff') {
    return ['appointments', 'customers', 'messages'].includes(area);
  }
  return false;
}
