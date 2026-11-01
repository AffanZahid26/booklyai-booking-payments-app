import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { Badge, Button, Header, Modal } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as bookingService from '../../services/bookingService';
import * as businessService from '../../services/businessService';
import { Booking } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessAppointments'>;

export function BusinessAppointmentsScreen({ navigation }: Props) {
  const [items, setItems] = useState<Booking[]>([]);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setItems(await businessService.getBusinessAppointments());
  }, []);
  useFocusEffect(useCallback(() => { void load(); }, [load]));

  return (
    <View style={styles.flex}>
      <Header title="Appointments" onBack={() => navigation.goBack()} />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.pad}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.customerName}</Text>
              <Badge label={item.status} tone={item.status === 'confirmed' ? 'success' : item.status === 'pending' ? 'warning' : 'neutral'} />
            </View>
            <Text style={styles.meta}>{item.serviceName} · {item.staffName}</Text>
            <Text style={styles.meta}>{item.date} · {item.time}</Text>
            <View style={styles.actions}>
              <Button title="Confirm" variant="secondary" onPress={() => void bookingService.updateBookingStatus(item.id, 'confirmed').then(load)} style={styles.btn} />
              <Button title="Cancel" variant="ghost" onPress={() => setConfirmId(item.id)} style={styles.btn} />
              <Button title="Details" variant="outline" onPress={() => navigation.navigate('BookingDetails', { bookingId: item.id })} style={styles.btn} />
            </View>
          </View>
        )}
      />
      <Modal
        visible={!!confirmId}
        title="Cancel appointment?"
        message="This will mark the appointment as cancelled."
        destructive
        confirmLabel="Cancel Appointment"
        onCancel={() => setConfirmId(null)}
        onConfirm={async () => {
          if (confirmId) {
            await bookingService.cancelBooking(confirmId);
            setConfirmId(null);
            await load();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm, ...shadows.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { ...typography.bodySemibold, color: colors.text },
  meta: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  actions: { flexDirection: 'row', gap: spacing.xs, marginTop: spacing.md },
  btn: { flex: 1, minHeight: 40, paddingHorizontal: 4 },
});
