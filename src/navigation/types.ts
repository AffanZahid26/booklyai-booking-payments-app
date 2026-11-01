import { AIRecommendation, BookingDraft } from '../types';

export type AuthStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  OTPVerification: { email: string };
};

export type CustomerTabParamList = {
  Home: undefined;
  Discover: undefined;
  Bookings: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  ProviderDetail: { providerId: string };
  BookingFlow: { draft?: BookingDraft } | undefined;
  Checkout: undefined;
  PaymentResult: {
    success: boolean;
    transactionId?: string;
    amount?: number;
    method?: string;
    bookingId?: string;
    message?: string;
  };
  BookingDetails: { bookingId: string };
  ChatDetail: { conversationId: string };
  AIAssistant: undefined;
  Notifications: undefined;
  Favorites: undefined;
  PaymentHistory: undefined;
  PersonalInfo: undefined;
  Preferences: undefined;
  HelpSupport: undefined;
  Security: undefined;
  DiscoverMap: undefined;
  Business: undefined;
  BusinessAppointments: undefined;
  BusinessCustomers: undefined;
  BusinessCustomerDetail: { customerId: string };
  BusinessStaff: undefined;
  BusinessServices: undefined;
  BusinessCalendar: undefined;
  BusinessAnalytics: undefined;
  BusinessPayments: undefined;
  Reschedule: { bookingId: string };
  AIBookFromRecommendation: { recommendation: AIRecommendation };
};
