import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { Input } from './Input';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onFilterPress?: () => void;
  onSubmit?: () => void;
}

export function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search services, providers...',
  onFilterPress,
  onSubmit,
}: SearchBarProps) {
  return (
    <View style={styles.row}>
      <View style={styles.inputWrap}>
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          leftIcon={<Search size={18} color={colors.textMuted} />}
          returnKeyType="search"
          onSubmitEditing={onSubmit}
          accessibilityLabel="Search"
        />
      </View>
      {onFilterPress ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open filters"
          onPress={onFilterPress}
          style={styles.filter}>
          <SlidersHorizontal size={18} color={colors.text} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  inputWrap: {
    flex: 1,
  },
  filter: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    ...shadows.sm,
  },
});
