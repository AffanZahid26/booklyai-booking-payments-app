import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Mail } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../navigation/types';
import { Button, Header, Input } from '../../components';
import * as authService from '../../services/authService';
import { colors, spacing, typography } from '../../theme';
import { validateEmail } from '../../utils/helpers';

type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

export function ForgotPasswordScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async () => {
    setError('');
    if (!validateEmail(email)) {
      setError('Enter a valid email address.');
      return;
    }
    try {
      setLoading(true);
      await authService.requestPasswordReset(email);
      setSent(true);
      navigation.navigate('OTPVerification', { email });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unable to send code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.flex, { paddingBottom: insets.bottom + spacing.xl }]}>
      <Header title="Forgot Password" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.copy}>
          Enter your email and we’ll send a verification code to reset your password.
        </Text>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          leftIcon={<Mail size={18} color={colors.textMuted} />}
          error={error}
        />
        {sent ? (
          <Text style={styles.success}>Verification code sent. Use 123456 to continue.</Text>
        ) : null}
        <Button title="Send Code" onPress={onSubmit} loading={loading} style={styles.btn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.xl, gap: spacing.lg },
  copy: { ...typography.body, color: colors.textSecondary },
  success: { ...typography.caption, color: colors.success },
  btn: { marginTop: spacing.md },
});
