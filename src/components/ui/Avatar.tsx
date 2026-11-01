import React, { useMemo, useState } from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, typography } from '../../theme';

interface AvatarProps {
  uri?: string;
  name?: string;
  size?: number;
  style?: ViewStyle;
  online?: boolean;
}

const palette = ['#3F3F46', '#52525B', '#71717A', '#27272A', '#A1A1AA', '#18181B'];

export function Avatar({ uri, name = '', size = 44, style, online }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const initials = useMemo(() => {
    const parts = name.trim().split(/\s+/);
    return parts
      .slice(0, 2)
      .map(p => p[0]?.toUpperCase() ?? '')
      .join('');
  }, [name]);

  const bg = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return palette[Math.abs(hash) % palette.length];
  }, [name]);

  const showImage = !!uri && !failed;

  return (
    <View style={[{ width: size, height: size }, style]}>
      {showImage ? (
        <Image
          source={{ uri }}
          style={{ width: size, height: size, borderRadius: size / 2 }}
          onError={() => setFailed(true)}
          accessibilityIgnoresInvertColors
        />
      ) : (
        <View
          style={[
            styles.fallback,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: bg,
              borderWidth: 1,
              borderColor: colors.border,
            },
          ]}>
          <Text style={[styles.initials, { fontSize: size * 0.36 }]}>
            {initials || 'B'}
          </Text>
        </View>
      )}
      {online ? (
        <View
          style={[
            styles.online,
            {
              width: size * 0.28,
              height: size * 0.28,
              borderRadius: size * 0.14,
              right: 0,
              bottom: 0,
            },
          ]}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    ...typography.bodySemibold,
    color: colors.text,
  },
  online: {
    position: 'absolute',
    backgroundColor: colors.online,
    borderWidth: 2,
    borderColor: colors.surface,
  },
});
