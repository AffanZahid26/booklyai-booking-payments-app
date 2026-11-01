import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthStackParamList } from '../../navigation/types';
import { Button, Header, Input } from '../../components';
import * as authService from '../../services/authService';
import { colors, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'OTPVerification'>;

export function OTPVerificationScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const [code, setCode] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async () => {
    setError('');
    try {
      setLoading(true);
      const ok = await authService.verifyOtp(code);
      if (!ok) {
        setError('Invalid code. Please try again.');
        return;
      }
      navigation.navigate('Login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.flex, { paddingBottom: insets.bottom + spacing.xl }]}>
      <Header title="Verify Code" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.copy}>
          Enter the 6-digit code sent to {route.params.email}.
        </Text>
        <Input
          label="Verification code"
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={6}
          error={error}
        />
        <Button title="Verify" onPress={onSubmit} loading={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.xl, gap: spacing.lg },
  copy: { ...typography.body, color: colors.textSecondary },
});
