import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { Badge, Button, Header, Modal, StatCard } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import * as paymentService from '../../services/paymentService';
import { AnalyticsData, PaymentTransaction } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessPayments'>;

export function BusinessPaymentsScreen({ navigation }: Props) {
  const [items, setItems] = useState<PaymentTransaction[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [refundTarget, setRefundTarget] = useState<PaymentTransaction | null>(null);
  const [toast, setToast] = useState('');

  const load = useCallback(async () => {
    const [payments, stats] = await Promise.all([
      businessService.getBusinessPayments(),
      businessService.getBusinessAnalytics(),
    ]);
    setItems(payments);
    setAnalytics(stats);
  }, []);

  useFocusEffect(useCallback(() => { void load(); }, [load]));

  return (
    <View style={styles.flex}>
      <Header title="Payments" onBack={() => navigation.goBack()} />
      <View style={styles.stats}>
        <StatCard label="Today" value={formatCurrency(analytics?.revenueToday ?? 0)} />
        <StatCard label="Weekly" value={formatCurrency(analytics?.revenueWeek ?? 0)} accent={colors.accent} />
      </View>
      <View style={[styles.stats, { marginTop: 0 }]}>
        <StatCard label="Monthly" value={formatCurrency(analytics?.revenueMonth ?? 0)} accent={colors.success} style={{ flex: 1 }} />
      </View>
      {toast ? <Text style={styles.toast}>{toast}</Text> : null}
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.pad}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.customerName}</Text>
              <Badge label={item.status} tone={item.status === 'Paid' ? 'success' : item.status === 'Refunded' ? 'warning' : 'neutral'} />
            </View>
            <Text style={styles.meta}>{item.serviceName} · {item.date}</Text>
            <Text style={styles.amount}>{formatCurrency(item.amount)}</Text>
            {item.status === 'Paid' ? (
              <Button title="Refund" variant="outline" onPress={() => setRefundTarget(item)} style={{ marginTop: spacing.sm, minHeight: 42 }} />
            ) : null}
          </View>
        )}
      />
      <Modal
        visible={!!refundTarget}
        title="Confirm refund"
        message={`Refund ${formatCurrency(refundTarget?.amount ?? 0)} to ${refundTarget?.customerName}?`}
        confirmLabel="Refund"
        destructive
        onCancel={() => setRefundTarget(null)}
        onConfirm={async () => {
          if (!refundTarget) return;
          await paymentService.refundPayment(refundTarget.id);
          setRefundTarget(null);
          setToast('Refund processed successfully.');
          await load();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  stats: { flexDirection: 'row', gap: spacing.md, paddingHorizontal: spacing.lg, marginBottom: spacing.md },
  pad: { padding: spacing.lg, paddingBottom: spacing.massive },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm, ...shadows.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { ...typography.bodySemibold, color: colors.text },
  meta: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  amount: { ...typography.h3, color: colors.primary, marginTop: spacing.sm },
  toast: { ...typography.captionMedium, color: colors.success, textAlign: 'center', marginBottom: spacing.sm },
});
