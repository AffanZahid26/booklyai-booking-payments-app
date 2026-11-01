import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Badge, Header, Skeleton } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as paymentService from '../../services/paymentService';
import { PaymentTransaction } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentHistory'>;

export function PaymentHistoryScreen({ navigation }: Props) {
  const [items, setItems] = useState<PaymentTransaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void paymentService.getPaymentHistory().then(data => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.flex}>
      <Header title="Payment History" onBack={() => navigation.goBack()} />
      {loading ? <View style={styles.pad}><Skeleton height={80} /></View> : (
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.pad}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.id}>{item.id}</Text>
                <Badge
                  label={item.status}
                  tone={item.status === 'Paid' ? 'success' : item.status === 'Failed' ? 'error' : item.status === 'Refunded' ? 'warning' : 'neutral'}
                />
              </View>
              <Text style={styles.service}>{item.serviceName}</Text>
              <Text style={styles.meta}>{item.providerName} · {item.date}</Text>
              <Text style={styles.amount}>{formatCurrency(item.amount)}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm, ...shadows.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  id: { ...typography.captionMedium, color: colors.textMuted },
  service: { ...typography.bodySemibold, color: colors.text, marginTop: spacing.sm },
  meta: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
  amount: { ...typography.h3, color: colors.primary, marginTop: spacing.sm },
});
