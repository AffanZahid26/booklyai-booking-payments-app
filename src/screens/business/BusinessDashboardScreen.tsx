import React, { useCallback, useState } from 'react';
import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Header, SimpleBarChart, StatCard } from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import { AnalyticsData, UserRole } from '../../types';
import { colors, radius, spacing, typography } from '../../theme';
import { formatCurrency, greetingForHour } from '../../utils/helpers';

const links: Array<{ label: string; route: keyof RootStackParamList; area: Parameters<typeof businessService.canAccess>[1] }> = [
  { label: 'Appointments', route: 'BusinessAppointments', area: 'appointments' },
  { label: 'Customers', route: 'BusinessCustomers', area: 'customers' },
  { label: 'Staff', route: 'BusinessStaff', area: 'staff' },
  { label: 'Services', route: 'BusinessServices', area: 'services' },
  { label: 'Calendar', route: 'BusinessCalendar', area: 'appointments' },
  { label: 'Analytics', route: 'BusinessAnalytics', area: 'analytics' },
  { label: 'Payments', route: 'BusinessPayments', area: 'payments' },
];

export function BusinessDashboardScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { activeRole, switchRole, setBusinessMode } = useApp();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setData(await businessService.getBusinessAnalytics());
  }, []);

  useFocusEffect(useCallback(() => { void load(); }, [load]));

  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={{ paddingBottom: spacing.massive, paddingTop: insets.top }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => { setRefreshing(true); await load(); setRefreshing(false); }} />}>
      <Header
        title={`${greetingForHour()}, Sarah`}
        subtitle="Nova Wellness Studio"
        onBack={async () => {
          await setBusinessMode(false);
          navigation.goBack();
        }}
        large
      />
      <View style={styles.roles}>
        {(['owner', 'manager', 'staff'] as UserRole[]).map(role => (
          <Pressable key={role} onPress={() => void switchRole(role)} style={[styles.role, activeRole === role && styles.roleActive]}>
            <Text style={[styles.roleText, activeRole === role && styles.roleTextActive]}>{role}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.stats}>
        <StatCard label="Today's Appointments" value={`${data?.appointmentsToday ?? '—'}`} accent={colors.primary} />
        <StatCard label="Revenue" value={formatCurrency(data?.revenueToday ?? 0)} accent={colors.success} />
      </View>
      <View style={styles.stats}>
        <StatCard label="New Customers" value={`${data?.newCustomers ?? '—'}`} accent={colors.accent} />
        <StatCard label="Completion Rate" value={`${data?.completionRate ?? '—'}%`} accent={colors.info} />
      </View>
      <Text style={styles.section}>7-day revenue</Text>
      {data ? <SimpleBarChart data={data.weeklyRevenue.map(d => ({ label: d.day, value: d.value }))} color={colors.chartViolet} /> : null}
      <Text style={styles.section}>Weekly bookings</Text>
      {data ? <SimpleBarChart data={data.weeklyBookings.map(d => ({ label: d.day, value: d.value }))} color={colors.chartGreen} /> : null}
      <View style={styles.links}>
        {links.filter(link => businessService.canAccess(activeRole, link.area)).map(link => (
          <Button key={link.route} title={link.label} variant="outline" onPress={() => navigation.navigate(link.route as never)} style={{ marginBottom: spacing.sm }} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  roles: { flexDirection: 'row', gap: spacing.sm, paddingHorizontal: spacing.lg, marginBottom: spacing.lg },
  role: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.full, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  roleActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  roleText: { ...typography.captionMedium, color: colors.textSecondary, textTransform: 'capitalize' },
  roleTextActive: { color: colors.textInverse },
  stats: { flexDirection: 'row', gap: spacing.md, paddingHorizontal: spacing.lg, marginBottom: spacing.md },
  section: { ...typography.h3, color: colors.text, marginHorizontal: spacing.lg, marginTop: spacing.xl, marginBottom: spacing.md },
  links: { padding: spacing.lg },
});
