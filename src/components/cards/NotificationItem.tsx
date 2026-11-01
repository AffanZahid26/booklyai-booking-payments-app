import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppNotification } from '../../types';
import { colors, radius, spacing, typography } from '../../theme';
import { relativeTime } from '../../utils/helpers';

interface NotificationItemProps {
  item: AppNotification;
  onPress: () => void;
}

export function NotificationItem({ item, onPress }: NotificationItemProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.row, !item.read && styles.unread]}>
      <View style={[styles.dot, !item.read && styles.dotActive]} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body} numberOfLines={2}>
          {item.body}
        </Text>
      </View>
      <Text style={styles.time}>{relativeTime(item.createdAt)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginBottom: spacing.sm,
  },
  unread: {
    borderWidth: 1,
    borderColor: colors.accentSoft,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.border,
    marginTop: 6,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  title: {
    ...typography.bodySemibold,
    color: colors.text,
  },
  body: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  time: {
    ...typography.small,
    color: colors.textMuted,
  },
});
