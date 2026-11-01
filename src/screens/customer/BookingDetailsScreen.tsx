import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Badge, Button, Header, Skeleton } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as bookingService from '../../services/bookingService';
import { Booking } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency, formatDateLabel } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'BookingDetails'>;

export function BookingDetailsScreen({ navigation, route }: Props) {
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    void bookingService.getBookingById(route.params.bookingId).then(setBooking);
  }, [route.params.bookingId]);

  if (!booking) {
    return (
      <View style={styles.flex}>
        <Header title="Booking Details" onBack={() => navigation.goBack()} />
        <View style={{ padding: spacing.lg }}><Skeleton height={180} /></View>
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      <Header title="Booking Details" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Badge label={booking.status} tone="success" />
          <Text style={styles.provider}>{booking.providerName}</Text>
          <Text style={styles.service}>{booking.serviceName}</Text>
          <Text style={styles.meta}>{formatDateLabel(booking.date)} · {booking.time}</Text>
          <Text style={styles.meta}>With {booking.staffName} · {booking.durationMin} min</Text>
          <Text style={styles.price}>{formatCurrency(booking.price)}</Text>
          <Text style={styles.address}>{booking.address}</Text>
          <Text style={styles.id}>Booking ID: {booking.id}</Text>
        </View>
        <Text style={styles.section}>Timeline</Text>
        {booking.timeline.map(event => (
          <View key={event.id} style={styles.timelineRow}>
            <View style={[styles.dot, event.completed && styles.dotDone]} />
            <View>
              <Text style={styles.timelineLabel}>{event.label}</Text>
              {event.at ? <Text style={styles.timelineAt}>{new Date(event.at).toLocaleString()}</Text> : null}
            </View>
          </View>
        ))}
        <Button title="Message Provider" onPress={() => navigation.navigate('ChatDetail', { conversationId: 'cnv_01' })} style={{ marginTop: spacing.xl }} />
        <Button title="Reschedule" variant="outline" onPress={() => navigation.navigate('Reschedule', { bookingId: booking.id })} style={{ marginTop: spacing.sm }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: spacing.massive },
  card: { backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.xl, ...shadows.md, gap: spacing.sm },
  provider: { ...typography.h2, color: colors.text },
  service: { ...typography.body, color: colors.textSecondary },
  meta: { ...typography.captionMedium, color: colors.textSecondary },
  price: { ...typography.h3, color: colors.primary, marginTop: spacing.sm },
  address: { ...typography.caption, color: colors.textMuted },
  id: { ...typography.small, color: colors.textMuted, marginTop: spacing.sm },
  section: { ...typography.h3, color: colors.text, marginTop: spacing.xxl, marginBottom: spacing.md },
  timelineRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg, alignItems: 'flex-start' },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: colors.border, marginTop: 4 },
  dotDone: { backgroundColor: colors.success },
  timelineLabel: { ...typography.bodySemibold, color: colors.text },
  timelineAt: { ...typography.small, color: colors.textMuted },
});
