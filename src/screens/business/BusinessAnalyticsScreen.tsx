import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header, SimpleBarChart, StatCard } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import { AnalyticsData } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessAnalytics'>;

export function BusinessAnalyticsScreen({ navigation }: Props) {
  const [data, setData] = useState<AnalyticsData | null>(null);
  useEffect(() => { void businessService.getBusinessAnalytics().then(setData); }, []);
  return (
    <View style={styles.flex}>
      <Header title="Analytics" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.pad}>
        <View style={styles.row}>
          <StatCard label="Monthly Revenue" value={formatCurrency(data?.revenueMonth ?? 0)} />
          <StatCard label="Cancel Rate" value={`${data?.cancellationRate ?? 0}%`} accent={colors.warning} />
        </View>
        <Text style={styles.section}>Customer growth</Text>
        {data ? <SimpleBarChart data={data.monthlyGrowth.map(d => ({ label: d.month, value: d.value }))} color={colors.chartAmber} /> : null}
        <Text style={styles.section}>Popular services</Text>
        {data?.popularServices.map(service => (
          <View key={service.name} style={styles.card}>
            <Text style={styles.name}>{service.name}</Text>
            <Text style={styles.meta}>{service.bookings} bookings · {formatCurrency(service.revenue)}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg, paddingBottom: spacing.massive },
  row: { flexDirection: 'row', gap: spacing.md },
  section: { ...typography.h3, color: colors.text, marginTop: spacing.xl, marginBottom: spacing.md },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm, ...shadows.sm },
  name: { ...typography.bodySemibold, color: colors.text },
  meta: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
});
