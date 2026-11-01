import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, spacing, typography } from '../../theme';

type Tone = 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'info';

interface BadgeProps {
  label: string;
  tone?: Tone;
  style?: ViewStyle;
}

const toneStyles: Record<Tone, { bg: string; fg: string }> = {
  primary: { bg: colors.surfaceMuted, fg: colors.text },
  success: { bg: colors.successSoft, fg: colors.success },
  warning: { bg: colors.warningSoft, fg: colors.warning },
  error: { bg: colors.errorSoft, fg: colors.error },
  neutral: { bg: colors.surfaceMuted, fg: colors.textSecondary },
  info: { bg: colors.surfaceMuted, fg: colors.textSecondary },
};

export function Badge({ label, tone = 'primary', style }: BadgeProps) {
  const t = toneStyles[tone];
  return (
    <View style={[styles.badge, { backgroundColor: t.bg }, style]}>
      <Text style={[styles.text, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    ...typography.captionMedium,
    fontSize: 12,
  },
});
