import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ServiceItem } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../utils/helpers';

interface ServiceCardProps {
  service: ServiceItem;
  onBook: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function ServiceCard({
  service,
  onBook,
  onEdit,
  onDelete,
}: ServiceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{service.name}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {service.description}
          </Text>
          <Text style={styles.meta}>
            {service.durationMin} min · {formatCurrency(service.price)}
          </Text>
        </View>
        <Button title="Book" onPress={onBook} style={styles.book} />
      </View>
      {onEdit || onDelete ? (
        <View style={styles.admin}>
          {onEdit ? (
            <Button title="Edit" variant="outline" onPress={onEdit} style={styles.adminBtn} />
          ) : null}
          {onDelete ? (
            <Button title="Delete" variant="ghost" onPress={onDelete} style={styles.adminBtn} />
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  name: {
    ...typography.bodySemibold,
    color: colors.text,
  },
  desc: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 4,
  },
  meta: {
    ...typography.captionMedium,
    color: colors.primary,
    marginTop: spacing.sm,
  },
  book: {
    minHeight: 44,
    paddingHorizontal: spacing.lg,
  },
  admin: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  adminBtn: {
    flex: 1,
    minHeight: 42,
  },
});
