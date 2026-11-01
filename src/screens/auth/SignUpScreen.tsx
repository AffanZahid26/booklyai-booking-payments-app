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
import { Lock, Mail, User } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../navigation/types';
import { Button, Input } from '../../components';
import { useApp } from '../../context/AppContext';
import { colors, spacing, typography } from '../../theme';
import { validateEmail } from '../../utils/helpers';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

export function SignUpScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { signUp } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async () => {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) {
      next.name = 'Enter your full name.';
    }
    if (!validateEmail(email)) {
      next.email = 'Enter a valid email address.';
    }
    if (password.length < 6) {
      next.password = 'Password must be at least 6 characters.';
    }
    setErrors(next);
    if (Object.keys(next).length) {
      return;
    }
    try {
      setLoading(true);
      await signUp(name.trim(), email, password);
    } catch (e) {
      setErrors({ form: e instanceof Error ? e.message : 'Unable to create account.' });
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
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Join BooklyAI and book smarter in minutes.</Text>
        <View style={styles.form}>
          <Input
            label="Full name"
            value={name}
            onChangeText={setName}
            leftIcon={<User size={18} color={colors.textMuted} />}
            error={errors.name}
          />
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            leftIcon={<Mail size={18} color={colors.textMuted} />}
            error={errors.email}
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            leftIcon={<Lock size={18} color={colors.textMuted} />}
            error={errors.password}
          />
          {errors.form ? <Text style={styles.error}>{errors.form}</Text> : null}
          <Button title="Sign Up" onPress={onSubmit} loading={loading} />
        </View>
        <Pressable onPress={() => navigation.navigate('Login')} style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account? <Text style={styles.link}>Log in</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.xxl, flexGrow: 1 },
  title: { ...typography.h1, color: colors.text },
  subtitle: { ...typography.body, color: colors.textSecondary, marginTop: spacing.sm },
  form: { marginTop: spacing.xxxl, gap: spacing.lg },
  error: { ...typography.caption, color: colors.error },
  footer: { marginTop: 'auto', paddingTop: spacing.xxl, alignItems: 'center' },
  footerText: { ...typography.body, color: colors.textSecondary },
  link: { color: colors.primary, fontWeight: '600' },
});
