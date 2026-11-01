import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CalendarDays,
  Compass,
  Home,
  MessageCircle,
  UserRound,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens/customer/HomeScreen';
import { DiscoverScreen } from '../screens/customer/DiscoverScreen';
import { BookingsScreen } from '../screens/customer/BookingsScreen';
import { MessagesScreen } from '../screens/customer/MessagesScreen';
import { ProfileScreen } from '../screens/customer/ProfileScreen';
import { CustomerTabParamList } from './types';
import { TAB_BAR_HEIGHT } from '../constants/layout';
import { colors, spacing } from '../theme';

const Tab = createBottomTabNavigator<CustomerTabParamList>();

export function CustomerTabs() {
  const insets = useSafeAreaInsets();
  const bottom = Math.max(insets.bottom, 10);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          left: spacing.lg,
          right: spacing.lg,
          bottom,
          height: TAB_BAR_HEIGHT,
          borderRadius: 18,
          backgroundColor: colors.surface,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: colors.border,
          paddingBottom: 6,
          paddingTop: 6,
        },
        tabBarItemStyle: {
          paddingVertical: 2,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 2,
        },
        tabBarIcon: ({ color, focused }) => {
          const icons = {
            Home,
            Discover: Compass,
            Bookings: CalendarDays,
            Messages: MessageCircle,
            Profile: UserRound,
          } as const;
          const Icon = icons[route.name];
          return (
            <View style={[styles.iconWrap, focused && styles.activeIcon]}>
              <Icon size={focused ? 20 : 18} color={color} strokeWidth={focused ? 2.4 : 2} />
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 28,
    borderRadius: 8,
  },
  activeIcon: {
    backgroundColor: colors.surfaceMuted,
  },
});
