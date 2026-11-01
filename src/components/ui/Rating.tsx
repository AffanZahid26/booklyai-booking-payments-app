import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Star } from 'lucide-react-native';
import { colors, spacing, typography } from '../../theme';

interface RatingProps {
  value: number;
  reviewCount?: number;
  size?: number;
  showValue?: boolean;
}

export function Rating({
  value,
  reviewCount,
  size = 14,
  showValue = true,
}: RatingProps) {
  return (
    <View style={styles.row}>
      <Star size={size} color={colors.warning} fill={colors.warning} />
      {showValue ? <Text style={styles.value}>{value.toFixed(1)}</Text> : null}
      {typeof reviewCount === 'number' ? (
        <Text style={styles.count}>({reviewCount})</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  value: {
    ...typography.captionMedium,
    color: colors.text,
  },
  count: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
