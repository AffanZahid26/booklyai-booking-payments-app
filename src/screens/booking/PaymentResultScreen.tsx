import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Check, X } from 'lucide-react-native';
import { Button, Header } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentResult'>;

export function PaymentResultScreen({ navigation, route }: Props) {
  const { success } = route.params;
  const scale = useSharedValue(0.6);
  useEffect(() => {
    scale.value = withSpring(1, { damping: 12 });
  }, [scale]);
  const iconStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  return (
    <View style={styles.flex}>
      <Header title={success ? 'Payment Successful' : 'Payment Failed'} onBack={() => navigation.popToTop()} />
      <View style={styles.content}>
        <Animated.View style={[styles.icon, success ? styles.ok : styles.bad, iconStyle]}>
          {success ? <Check size={36} color={colors.textInverse} /> : <X size={36} color={colors.textInverse} />}
        </Animated.View>
        <Text style={styles.title}>{success ? 'Payment completed' : "Payment couldn't be completed"}</Text>
        <Text style={styles.copy}>
          {success
            ? 'Your booking is confirmed and a receipt has been saved to Payment History.'
            : route.params.message ?? 'Please try another payment method.'}
        </Text>
        {success ? (
          <View style={styles.card}>
            <Text style={styles.row}>Transaction ID: {route.params.transactionId}</Text>
            <Text style={styles.row}>Amount: {formatCurrency(route.params.amount ?? 0)}</Text>
            <Text style={styles.row}>Payment method: {route.params.method}</Text>
            <Text style={styles.row}>Booking ID: {route.params.bookingId}</Text>
          </View>
        ) : null}
        {success ? (
          <>
            <Text style={styles.confirmed}>Booking Confirmed</Text>
            <Button title="View Booking" onPress={() => navigation.replace('BookingDetails', { bookingId: route.params.bookingId! })} />
            <Button title="Message Provider" variant="outline" onPress={() => navigation.replace('ChatDetail', { conversationId: 'cnv_01' })} style={{ marginTop: spacing.sm }} />
            <Button title="Add to Calendar" variant="ghost" onPress={() => navigation.popToTop()} style={{ marginTop: spacing.sm }} />
          </>
        ) : (
          <Button title="Try Again" onPress={() => navigation.replace('Checkout')} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.xl, alignItems: 'center' },
  icon: { width: 72, height: 72, borderRadius: 36, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg },
  ok: { backgroundColor: colors.success },
  bad: { backgroundColor: colors.error },
  title: { ...typography.h2, color: colors.text, textAlign: 'center' },
  copy: { ...typography.body, color: colors.textSecondary, textAlign: 'center', marginTop: spacing.sm, marginBottom: spacing.xl },
  card: { width: '100%', backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.lg, gap: spacing.sm, marginBottom: spacing.xl, ...shadows.sm },
  row: { ...typography.body, color: colors.text },
  confirmed: { ...typography.h3, color: colors.success, marginBottom: spacing.lg },
});
