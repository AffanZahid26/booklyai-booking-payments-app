import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../theme';

interface ScreenProps {
  children: React.ReactNode;
  style?: ViewStyle;
  edges?: Array<'top' | 'bottom' | 'left' | 'right'>;
  padded?: boolean;
}

/** Ensures content never sits under the iPhone status bar / home indicator. */
export function Screen({
  children,
  style,
  edges = ['top'],
  padded = false,
}: ScreenProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.root,
        padded ? { paddingHorizontal: spacing.lg } : null,
        style,
      ]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
