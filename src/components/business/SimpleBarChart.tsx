import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '../../theme';

interface BarChartProps {
  data: { label: string; value: number }[];
  color?: string;
  height?: number;
}

export function SimpleBarChart({
  data,
  color = colors.chartBlue,
  height = 140,
}: BarChartProps) {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <View style={[styles.wrap, { height }]}>
      {data.map(item => (
        <View key={item.label} style={styles.col}>
          <View style={styles.barTrack}>
            <View
              style={[
                styles.bar,
                {
                  height: `${(item.value / max) * 100}%`,
                  backgroundColor: color,
                },
              ]}
            />
          </View>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  col: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  barTrack: {
    flex: 1,
    width: '70%',
    justifyContent: 'flex-end',
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  bar: {
    width: '100%',
    borderRadius: radius.sm,
  },
  label: {
    ...typography.small,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});
