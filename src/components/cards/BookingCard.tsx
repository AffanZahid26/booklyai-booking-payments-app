import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Booking } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { formatCurrency, formatDateLabel } from '../../utils/helpers';

interface BookingCardProps {
  booking: Booking;
  onView: () => void;
  onMessage?: () => void;
  onCancel?: () => void;
  onReschedule?: () => void;
}

function statusTone(status: Booking['status']) {
  switch (status) {
    case 'confirmed':
    case 'upcoming':
      return 'success' as const;
    case 'pending':
      return 'warning' as const;
    case 'cancelled':
      return 'error' as const;
    default:
      return 'neutral' as const;
  }
}

export function BookingCard({
  booking,
  onView,
  onMessage,
  onCancel,
  onReschedule,
}: BookingCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onView}
      style={styles.card}>
      <View style={styles.top}>
        <View style={{ flex: 1 }}>
          <Text style={styles.provider}>{booking.providerName}</Text>
          <Text style={styles.service}>{booking.serviceName}</Text>
        </View>
        <Badge
          label={booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          tone={statusTone(booking.status)}
        />
      </View>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>
          {formatDateLabel(booking.date)} · {booking.time}
        </Text>
        <Text style={styles.price}>{formatCurrency(booking.price)}</Text>
      </View>
      <View style={styles.actions}>
        <Button title="View Details" variant="secondary" size="sm" onPress={onView} style={styles.action} />
        {onMessage ? (
          <Button title="Message" variant="outline" size="sm" onPress={onMessage} style={styles.action} />
        ) : null}
      </View>
      {(onReschedule || onCancel) &&
      ['upcoming', 'confirmed', 'pending'].includes(booking.status) ? (
        <View style={styles.actions}>
          {onReschedule ? (
            <Button
              title="Reschedule"
              variant="ghost"
              size="sm"
              onPress={onReschedule}
              style={styles.action}
            />
          ) : null}
          {onCancel ? (
            <Button
              title="Cancel"
              variant="ghost"
              size="sm"
              onPress={onCancel}
              style={styles.action}
            />
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  top: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  provider: {
    ...typography.bodySemibold,
    color: colors.text,
  },
  service: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  meta: {
    ...typography.captionMedium,
    color: colors.textSecondary,
  },
  price: {
    ...typography.bodySemibold,
    color: colors.primary,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  action: {
    flex: 1,
    minHeight: 40,
    height: 40,
  },
});
