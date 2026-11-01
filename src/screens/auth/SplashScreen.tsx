import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { colors, spacing, typography } from '../../theme';
import { useApp } from '../../context/AppContext';

type Props = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

export function SplashScreen({ navigation }: Props) {
  const { isAuthenticated } = useApp();
  const scale = useSharedValue(0.85);
  const opacity = useSharedValue(0);
  const subtitle = useSharedValue(0);
  const shine = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1, { duration: 700, easing: Easing.out(Easing.cubic) });
    opacity.value = withTiming(1, { duration: 600 });
    subtitle.value = withDelay(350, withTiming(1, { duration: 500 }));
    shine.value = withDelay(
      400,
      withRepeat(withTiming(1, { duration: 1600, easing: Easing.inOut(Easing.quad) }), -1, true),
    );
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        return;
      }
      navigation.replace('Welcome');
    }, 1800);
    return () => clearTimeout(timer);
  }, [isAuthenticated, navigation, opacity, scale, shine, subtitle]);

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));
  const subStyle = useAnimatedStyle(() => ({ opacity: subtitle.value }));
  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(shine.value, [0, 1], [0.82, 1]),
    transform: [{ scale: interpolate(shine.value, [0, 1], [1, 1.02]) }],
  }));
  const glowStyle = useAnimatedStyle(() => ({
    opacity: interpolate(shine.value, [0, 1], [0.25, 0.55]),
    transform: [{ scale: interpolate(shine.value, [0, 1], [0.92, 1.08]) }],
  }));

  return (
    <LinearGradient
      colors={['#18181B', '#09090B', '#000000']}
      style={styles.container}>
      <Animated.View style={[styles.logoWrap, logoStyle]}>
        <View style={styles.markWrap}>
          <Animated.View style={[styles.glow, glowStyle]} />
          <View style={styles.mark}>
            <Text style={styles.markText}>B</Text>
          </View>
        </View>
        <Animated.Text style={[styles.brand, brandStyle]}>BooklyAI</Animated.Text>
      </Animated.View>
      <Animated.Text style={[styles.subtitle, subStyle]}>
        Book trusted services nearby.
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  logoWrap: {
    alignItems: 'center',
    gap: spacing.lg,
  },
  markWrap: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  mark: {
    width: 84,
    height: 84,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.55)',
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
  },
  markText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
    textShadowColor: 'rgba(255,255,255,0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  brand: {
    ...typography.hero,
    color: '#FFFFFF',
    letterSpacing: -0.6,
    textShadowColor: 'rgba(255,255,255,0.55)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  subtitle: {
    ...typography.body,
    color: 'rgba(255,255,255,0.78)',
    marginTop: spacing.xl,
  },
});
