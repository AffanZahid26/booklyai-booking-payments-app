import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../../theme';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  right?: React.ReactNode;
  large?: boolean;
  /** When true, no opaque bar and no extra top inset (parent already handles safe area). */
  transparent?: boolean;
  /** Skip adding status-bar inset (use when Screen already padded). */
  skipTopInset?: boolean;
}

export function Header({
  title,
  subtitle,
  onBack,
  right,
  large = false,
  transparent = false,
  skipTopInset = false,
}: HeaderProps) {
  const insets = useSafeAreaInsets();
  const topPad = skipTopInset
    ? spacing.sm
    : Math.max(insets.top, 44) + spacing.xs;

  return (
    <View
      style={[
        styles.wrap,
        { paddingTop: topPad },
        transparent && styles.transparent,
      ]}>
      <View style={styles.row}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={onBack}
            style={[styles.back, transparent && styles.backOnMedia]}>
            <ChevronLeft size={22} color={colors.text} />
          </Pressable>
        ) : (
          <View style={styles.backPlaceholder} />
        )}
        <View style={styles.center}>
          {title ? (
            <Text style={large ? styles.largeTitle : styles.title} numberOfLines={1}>
              {title}
            </Text>
          ) : null}
          {subtitle ? (
            <Text style={styles.subtitle} numberOfLines={1}>
              {subtitle}
            </Text>
          ) : null}
        </View>
        <View style={styles.right}>{right}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: colors.background,
    zIndex: 20,
  },
  transparent: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
  },
  back: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  backOnMedia: {
    backgroundColor: 'rgba(24,24,27,0.85)',
  },
  backPlaceholder: {
    width: 40,
  },
  center: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  title: {
    ...typography.h3,
    color: colors.text,
    textAlign: 'center',
  },
  largeTitle: {
    ...typography.h2,
    color: colors.text,
    textAlign: 'left',
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
  right: {
    minWidth: 40,
    alignItems: 'flex-end',
  },
});
