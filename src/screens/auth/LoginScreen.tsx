import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Lock, Mail } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../navigation/types';
import { Button, Input } from '../../components';
import { useApp } from '../../context/AppContext';
import { DEMO_CREDENTIALS } from '../../constants';
import { colors, radius, spacing, typography } from '../../theme';
import { validateEmail } from '../../utils/helpers';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { login } = useApp();
  const [email, setEmail] = useState<string>(DEMO_CREDENTIALS.email);
  const [password, setPassword] = useState<string>(DEMO_CREDENTIALS.password);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onSubmit = async () => {
    setError('');
    setEmailError('');
    setPasswordError('');
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    let valid = true;
    if (!validateEmail(cleanEmail)) {
      setEmailError('Enter a valid email address.');
      valid = false;
    }
    if (cleanPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      valid = false;
    }
    if (!valid) {
      return;
    }
    try {
      setLoading(true);
      await login(cleanEmail, cleanPassword);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to sign in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + spacing.xxl, paddingBottom: insets.bottom + spacing.xl },
        ]}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.brand}>BooklyAI</Text>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to continue booking with confidence.</Text>

        <View style={styles.form}>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="username"
            leftIcon={<Mail size={18} color={colors.textMuted} />}
            error={emailError}
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            leftIcon={<Lock size={18} color={colors.textMuted} />}
            error={passwordError}
          />
          <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </Pressable>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Button title="Log In" onPress={onSubmit} loading={loading} />
          <Text style={styles.hint}>
            Demo account is already filled — tap Log In.
          </Text>
        </View>

        <Pressable onPress={() => navigation.navigate('SignUp')} style={styles.footer}>
          <Text style={styles.footerText}>
            New here? <Text style={styles.link}>Create an account</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.xxl, flexGrow: 1 },
  brand: { ...typography.captionMedium, color: colors.primary, marginBottom: spacing.md },
  title: { ...typography.h1, color: colors.text },
  subtitle: { ...typography.body, color: colors.textSecondary, marginTop: spacing.sm },
  form: { marginTop: spacing.xxxl, gap: spacing.lg },
  forgot: { ...typography.captionMedium, color: colors.primary, textAlign: 'right' },
  error: {
    ...typography.caption,
    color: colors.error,
    backgroundColor: colors.errorSoft,
    padding: spacing.md,
    borderRadius: radius.md,
  },
  hint: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
  },
  footer: { marginTop: 'auto', paddingTop: spacing.xxl, alignItems: 'center' },
  footerText: { ...typography.body, color: colors.textSecondary },
  link: { color: colors.primary, fontWeight: '600' },
});
