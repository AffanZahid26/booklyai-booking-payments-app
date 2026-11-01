import React, { useEffect } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { colors, radius, shadows, spacing } from '../../theme';

interface SkeletonProps {
  height?: number;
  width?: number | `${number}%`;
  style?: ViewStyle;
  radius?: number;
}

export function Skeleton({
  height = 16,
  width = '100%',
  style,
  radius: r = radius.md,
}: SkeletonProps) {
  const opacity = useSharedValue(0.35);
  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 750 }), -1, true);
  }, [opacity]);
  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.View
      style={[
        styles.base,
        { height, width, borderRadius: r },
        animatedStyle,
        style,
      ]}
    />
  );
}

export function ProviderCardSkeleton({ compact }: { compact?: boolean }) {
  return (
    <View style={[styles.card, compact && styles.compact]}>
      <Skeleton height={compact ? 100 : 160} radius={radius.lg} />
      <View style={styles.row}>
        <Skeleton height={44} width={44} radius={22} />
        <View style={{ flex: 1, gap: 8 }}>
          <Skeleton height={14} width="70%" />
          <Skeleton height={12} width="42%" />
        </View>
        <Skeleton height={28} width={28} radius={14} />
      </View>
      <View style={[styles.row, { marginTop: spacing.sm }]}>
        <Skeleton height={12} width="22%" />
        <Skeleton height={12} width="28%" />
        <Skeleton height={22} width={72} radius={radius.full} />
      </View>
    </View>
  );
}

export function BookingCardSkeleton() {
  return (
    <View style={styles.booking}>
      <View style={styles.rowBetween}>
        <Skeleton height={14} width="55%" />
        <Skeleton height={22} width={72} radius={radius.full} />
      </View>
      <Skeleton height={12} width="40%" style={{ marginTop: spacing.sm }} />
      <Skeleton height={12} width="60%" style={{ marginTop: spacing.sm }} />
      <View style={[styles.row, { marginTop: spacing.md }]}>
        <Skeleton height={40} width="48%" radius={radius.md} />
        <Skeleton height={40} width="48%" radius={radius.md} />
      </View>
    </View>
  );
}

export function ListRowSkeleton() {
  return (
    <View style={styles.listRow}>
      <Skeleton height={48} width={48} radius={24} />
      <View style={{ flex: 1, gap: 8 }}>
        <Skeleton height={14} width="50%" />
        <Skeleton height={12} width="75%" />
      </View>
    </View>
  );
}

export function HomeUpcomingSkeleton() {
  return (
    <View style={styles.upcoming}>
      <View style={styles.rowBetween}>
        <Skeleton height={12} width="40%" />
        <Skeleton height={22} width={80} radius={radius.full} />
      </View>
      <Skeleton height={20} width="70%" style={{ marginTop: spacing.md }} />
      <Skeleton height={14} width="45%" style={{ marginTop: spacing.sm }} />
      <Skeleton height={14} width="55%" style={{ marginTop: spacing.sm }} />
      <Skeleton height={48} radius={radius.md} style={{ marginTop: spacing.lg }} />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#2A2A30',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  compact: {
    width: 280,
    marginRight: spacing.md,
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.md,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  booking: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  upcoming: {
    marginTop: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    ...shadows.md,
  },
});
