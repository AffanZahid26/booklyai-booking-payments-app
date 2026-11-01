import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme';

interface TimeSlotProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export function TimeSlot({ label, selected, disabled, onPress }: TimeSlotProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected, disabled }}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.slot,
        selected && styles.selected,
        disabled && styles.disabled,
      ]}>
      <Text
        style={[
          styles.label,
          selected && styles.selectedLabel,
          disabled && styles.disabledLabel,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  slot: {
    minWidth: '30%',
    flexGrow: 1,
    paddingVertical: spacing.md,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    marginBottom: spacing.sm,
    marginHorizontal: '1.5%',
  },
  selected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  disabled: {
    backgroundColor: colors.surfaceMuted,
    opacity: 0.55,
  },
  label: {
    ...typography.captionMedium,
    color: colors.text,
  },
  selectedLabel: {
    color: colors.textInverse,
  },
  disabledLabel: {
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
});
