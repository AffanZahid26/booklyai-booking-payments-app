export type UserRole = 'customer' | 'owner' | 'manager' | 'staff';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  role: UserRole;
  memberSince: string;
}

export interface Provider {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  rating: number;
  reviewCount: number;
  distanceKm: number;
  startingPrice: number;
  image: string;
  avatar: string;
  verified: boolean;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  amenities: string[];
  openingHours: OpeningHour[];
  nextAvailable: string;
  staffIds: string[];
  serviceIds: string[];
}

export type ServiceCategory =
  | 'Wellness'
  | 'Beauty'
  | 'Fitness'
  | 'Medical'
  | 'Consulting'
  | 'Home Services';

export interface OpeningHour {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface ServiceItem {
  id: string;
  providerId: string;
  name: string;
  description: string;
  durationMin: number;
  price: number;
  category: ServiceCategory;
  staffIds: string[];
}

export interface StaffMember {
  id: string;
  providerId: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  avatar: string;
  appointmentsToday: number;
  available: boolean;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  totalBookings: number;
  totalSpent: number;
  lastAppointment: string;
  notes: string;
}

export type BookingStatus =
  | 'upcoming'
  | 'confirmed'
  | 'completed'
  | 'cancelled'
  | 'pending';

export interface Booking {
  id: string;
  providerId: string;
  providerName: string;
  serviceId: string;
  serviceName: string;
  staffId: string;
  staffName: string;
  customerId: string;
  customerName: string;
  date: string;
  time: string;
  durationMin: number;
  price: number;
  status: BookingStatus;
  address: string;
  createdAt: string;
  timeline: BookingTimelineEvent[];
}

export interface BookingTimelineEvent {
  id: string;
  label: string;
  completed: boolean;
  at?: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  text: string;
  createdAt: string;
  read: boolean;
  type: 'text' | 'voice' | 'image' | 'system';
  voiceDurationSec?: number;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantAvatar: string;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
  online: boolean;
  providerId?: string;
}

export type NotificationType =
  | 'booking'
  | 'payment'
  | 'message'
  | 'reminder'
  | 'recommendation';

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  type: NotificationType;
  createdAt: string;
  read: boolean;
  actionRoute?: string;
}

export type PaymentStatus = 'Paid' | 'Refunded' | 'Failed' | 'Pending';

export interface PaymentMethod {
  id: string;
  brand: 'Visa' | 'Mastercard' | 'Apple Pay' | 'Google Pay';
  last4?: string;
  isDefault: boolean;
}

export interface PaymentTransaction {
  id: string;
  bookingId?: string;
  customerId: string;
  customerName: string;
  providerId: string;
  providerName: string;
  serviceName: string;
  amount: number;
  status: PaymentStatus;
  method: string;
  date: string;
}

export interface Review {
  id: string;
  providerId: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AnalyticsData {
  revenueToday: number;
  revenueWeek: number;
  revenueMonth: number;
  appointmentsToday: number;
  newCustomers: number;
  completionRate: number;
  cancellationRate: number;
  weeklyRevenue: { day: string; value: number }[];
  weeklyBookings: { day: string; value: number }[];
  monthlyGrowth: { month: string; value: number }[];
  popularServices: { name: string; bookings: number; revenue: number }[];
}

export interface AIMessage {
  id: string;
  role: 'assistant' | 'user';
  text: string;
  createdAt: string;
  recommendations?: AIRecommendation[];
}

export interface AIRecommendation {
  providerId: string;
  providerName: string;
  serviceId: string;
  serviceName: string;
  time: string;
  date: string;
  price: number;
  rating: number;
  staffId?: string;
  staffName?: string;
}

export interface BookingDraft {
  providerId?: string;
  providerName?: string;
  serviceId?: string;
  serviceName?: string;
  staffId?: string;
  staffName?: string;
  date?: string;
  time?: string;
  durationMin?: number;
  price?: number;
  address?: string;
}

export interface UserPreferences {
  notificationsEnabled: boolean;
  emailUpdates: boolean;
  language: string;
  darkMode: boolean;
}
