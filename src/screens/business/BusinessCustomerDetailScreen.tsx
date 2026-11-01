import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Avatar, Button, Header, Skeleton } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import { Customer } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessCustomerDetail'>;

export function BusinessCustomerDetailScreen({ navigation, route }: Props) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  useEffect(() => { void businessService.getCustomerById(route.params.customerId).then(setCustomer); }, [route.params.customerId]);
  if (!customer) return <View style={styles.flex}><Header title="Customer" onBack={() => navigation.goBack()} /><View style={{ padding: spacing.lg }}><Skeleton height={160} /></View></View>;
  return (
    <View style={styles.flex}>
      <Header title="Customer" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.pad}>
        <View style={styles.card}>
          <Avatar uri={customer.avatar} name={customer.name} size={64} />
          <Text style={styles.name}>{customer.name}</Text>
          <Text style={styles.meta}>{customer.email}</Text>
          <Text style={styles.meta}>{customer.phone}</Text>
          <Text style={styles.stats}>{customer.totalBookings} bookings · {formatCurrency(customer.totalSpent)}</Text>
          <Text style={styles.meta}>Last appointment: {customer.lastAppointment}</Text>
        </View>
        <Text style={styles.section}>Notes</Text>
        <Text style={styles.notes}>{customer.notes}</Text>
        <Text style={styles.section}>Quick actions</Text>
        <Button title="Messages" onPress={() => navigation.navigate('ChatDetail', { conversationId: 'cnv_01' })} />
        <Button title="Bookings" variant="outline" onPress={() => navigation.navigate('BusinessAppointments')} style={{ marginTop: spacing.sm }} />
        <Button title="Payments" variant="outline" onPress={() => navigation.navigate('BusinessPayments')} style={{ marginTop: spacing.sm }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg },
  card: { backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.xl, alignItems: 'center', gap: spacing.xs, ...shadows.sm },
  name: { ...typography.h3, color: colors.text, marginTop: spacing.sm },
  meta: { ...typography.caption, color: colors.textSecondary },
  stats: { ...typography.bodySemibold, color: colors.primary, marginTop: spacing.sm },
  section: { ...typography.h3, color: colors.text, marginTop: spacing.xl, marginBottom: spacing.sm },
  notes: { ...typography.body, color: colors.textSecondary, backgroundColor: colors.surface, padding: spacing.lg, borderRadius: radius.lg },
});
