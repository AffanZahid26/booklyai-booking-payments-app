import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomerTabs } from './CustomerTabs';
import { RootStackParamList } from './types';
import { ProviderDetailScreen } from '../screens/customer/ProviderDetailScreen';
import { DiscoverMapScreen } from '../screens/customer/DiscoverMapScreen';
import { BookingFlowScreen } from '../screens/booking/BookingFlowScreen';
import { CheckoutScreen } from '../screens/booking/CheckoutScreen';
import { PaymentResultScreen } from '../screens/booking/PaymentResultScreen';
import { BookingDetailsScreen } from '../screens/customer/BookingDetailsScreen';
import { ChatDetailScreen } from '../screens/customer/ChatDetailScreen';
import { AIAssistantScreen } from '../screens/customer/AIAssistantScreen';
import { NotificationsScreen } from '../screens/customer/NotificationsScreen';
import { FavoritesScreen } from '../screens/customer/FavoritesScreen';
import { PaymentHistoryScreen } from '../screens/customer/PaymentHistoryScreen';
import { PersonalInfoScreen } from '../screens/customer/PersonalInfoScreen';
import { PreferencesScreen } from '../screens/customer/PreferencesScreen';
import { HelpSupportScreen } from '../screens/customer/HelpSupportScreen';
import { SecurityScreen } from '../screens/customer/SecurityScreen';
import { RescheduleScreen } from '../screens/booking/RescheduleScreen';
import { BusinessDashboardScreen } from '../screens/business/BusinessDashboardScreen';
import { BusinessAppointmentsScreen } from '../screens/business/BusinessAppointmentsScreen';
import { BusinessCustomersScreen } from '../screens/business/BusinessCustomersScreen';
import { BusinessCustomerDetailScreen } from '../screens/business/BusinessCustomerDetailScreen';
import { BusinessStaffScreen } from '../screens/business/BusinessStaffScreen';
import { BusinessServicesScreen } from '../screens/business/BusinessServicesScreen';
import { BusinessCalendarScreen } from '../screens/business/BusinessCalendarScreen';
import { BusinessAnalyticsScreen } from '../screens/business/BusinessAnalyticsScreen';
import { BusinessPaymentsScreen } from '../screens/business/BusinessPaymentsScreen';
import { colors } from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Main" component={CustomerTabs} />
      <Stack.Screen name="ProviderDetail" component={ProviderDetailScreen} />
      <Stack.Screen name="DiscoverMap" component={DiscoverMapScreen} />
      <Stack.Screen name="BookingFlow" component={BookingFlowScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="PaymentResult" component={PaymentResultScreen} />
      <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
      <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
      <Stack.Screen name="AIAssistant" component={AIAssistantScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="PaymentHistory" component={PaymentHistoryScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />
      <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
      <Stack.Screen name="Security" component={SecurityScreen} />
      <Stack.Screen name="Reschedule" component={RescheduleScreen} />
      <Stack.Screen name="Business" component={BusinessDashboardScreen} />
      <Stack.Screen name="BusinessAppointments" component={BusinessAppointmentsScreen} />
      <Stack.Screen name="BusinessCustomers" component={BusinessCustomersScreen} />
      <Stack.Screen name="BusinessCustomerDetail" component={BusinessCustomerDetailScreen} />
      <Stack.Screen name="BusinessStaff" component={BusinessStaffScreen} />
      <Stack.Screen name="BusinessServices" component={BusinessServicesScreen} />
      <Stack.Screen name="BusinessCalendar" component={BusinessCalendarScreen} />
      <Stack.Screen name="BusinessAnalytics" component={BusinessAnalyticsScreen} />
      <Stack.Screen name="BusinessPayments" component={BusinessPaymentsScreen} />
    </Stack.Navigator>
  );
}
