import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Bell,
  Briefcase,
  ChevronRight,
  CreditCard,
  Heart,
  HelpCircle,
  Languages,
  Lock,
  LogOut,
  Settings,
  UserRound,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar, Button, Screen } from '../../components';
import { useApp } from '../../context/AppContext';
import { tabContentPadding } from '../../constants/layout';
import { RootStackParamList } from '../../navigation/types';
import { colors, radius, shadows, spacing, typography } from '../../theme';

const rows = [
  { label: 'Personal Information', icon: UserRound, route: 'PersonalInfo' as const },
  { label: 'Saved Providers', icon: Heart, route: 'Favorites' as const },
  { label: 'My Bookings', icon: Briefcase, route: 'Main' as const },
  { label: 'Payment History', icon: CreditCard, route: 'PaymentHistory' as const },
  { label: 'Notifications', icon: Bell, route: 'Notifications' as const },
  { label: 'Preferences', icon: Settings, route: 'Preferences' as const },
  { label: 'Language', icon: Languages, route: 'Preferences' as const },
  { label: 'Security', icon: Lock, route: 'Security' as const },
  { label: 'Help & Support', icon: HelpCircle, route: 'HelpSupport' as const },
];

export function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user, logout, setBusinessMode } = useApp();

  return (
    <Screen style={styles.flex} edges={['top']}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={{
          paddingBottom: tabContentPadding(insets.bottom) + 16,
        }}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.hero}>
          <Avatar uri={user?.avatar} name={user?.name} size={72} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name} numberOfLines={1}>
              {user?.name}
            </Text>
            <Text style={styles.email} numberOfLines={1}>
              {user?.email}
            </Text>
          </View>
        </View>

        <View style={styles.actionsPad}>
          <Button
            title="Switch to Business"
            onPress={async () => {
              await setBusinessMode(true);
              navigation.navigate('Business');
            }}
          />
        </View>

        <View style={styles.card}>
          {rows.map((row, index) => {
            const Icon = row.icon;
            const isLast = index === rows.length - 1;
            return (
              <Pressable
                key={row.label}
                style={[styles.row, isLast && styles.rowLast]}
                onPress={() => {
                  if (row.route === 'Main') {
                    navigation.navigate('Main');
                    return;
                  }
                  navigation.navigate(row.route);
                }}>
                <View style={styles.icon}>
                  <Icon size={18} color={colors.primary} />
                </View>
                <Text style={styles.label}>{row.label}</Text>
                <ChevronRight size={18} color={colors.textMuted} />
              </Pressable>
            );
          })}
        </View>

        <Pressable style={styles.logout} onPress={() => void logout()}>
          <LogOut size={18} color={colors.error} />
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  title: {
    ...typography.h2,
    color: colors.text,
    paddingHorizontal: spacing.lg,
  },
  hero: {
    flexDirection: 'row',
    gap: spacing.lg,
    alignItems: 'center',
    margin: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    ...shadows.sm,
  },
  name: { ...typography.h3, color: colors.text },
  email: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  actionsPad: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: 'hidden',
    ...shadows.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    minHeight: 56,
  },
  rowLast: { borderBottomWidth: 0 },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { ...typography.bodyMedium, color: colors.text, flex: 1 },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
    minHeight: 52,
    marginHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.errorSoft,
  },
  logoutText: { ...typography.bodySemibold, color: colors.error },
});
