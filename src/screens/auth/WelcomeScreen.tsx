import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../navigation/types';
import { Button } from '../../components';
import { colors, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/welcome-travel-hero.png')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['rgba(15,23,42,0.2)', 'rgba(15,23,42,0.55)', 'rgba(15,23,42,0.9)']}
        locations={[0, 0.4, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={[
          styles.content,
          {
            paddingTop: insets.top + spacing.xxl,
            paddingBottom: Math.max(insets.bottom, spacing.md) + spacing.lg,
          },
        ]}>
        <View>
          <Text style={styles.brand}>BooklyAI</Text>
          <Text style={styles.headline}>Book services with confidence.</Text>
          <Text style={styles.copy}>
            Find trusted providers, schedule appointments, and manage everything in one place.
          </Text>
        </View>
        <View style={styles.actions}>
          <Button title="Log In" size="lg" onPress={() => navigation.navigate('Login')} />
          <Button
            title="Create Account"
            variant="outline"
            size="lg"
            onPress={() => navigation.navigate('SignUp')}
            style={styles.secondary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.text },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xxl,
  },
  brand: {
    ...typography.h2,
    color: '#FFFFFF',
    marginBottom: spacing.lg,
    letterSpacing: 0.4,
    textShadowColor: 'rgba(255,255,255,0.45)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  headline: {
    ...typography.hero,
    color: '#FFFFFF',
    maxWidth: 320,
    fontSize: 30,
    lineHeight: 36,
  },
  copy: {
    ...typography.body,
    color: 'rgba(255,255,255,0.88)',
    marginTop: spacing.md,
    maxWidth: 340,
  },
  actions: { gap: spacing.md },
  secondary: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.35)',
    borderWidth: 1,
  },
});
