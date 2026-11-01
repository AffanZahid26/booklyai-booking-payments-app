import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Header, Input } from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import * as bookingService from '../../services/bookingService';
import * as notificationService from '../../services/notificationService';
import * as paymentService from '../../services/paymentService';
import { PaymentMethod } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency, validateCardNumber, validateCvv, validateExpiry } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'Checkout'>;

export function CheckoutScreen({ navigation }: Props) {
  const { bookingDraft, clearBookingDraft } = useApp();
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [selected, setSelected] = useState('pm_1');
  const [promo, setPromo] = useState('WELCOME10');
  const [appliedPromo, setAppliedPromo] = useState('WELCOME10');
  const [loading, setLoading] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardError, setCardError] = useState('');

  useEffect(() => {
    void paymentService.getPaymentMethods().then(data => {
      setMethods(data);
      setSelected(data[0]?.id ?? 'pm_1');
    });
  }, []);

  const totals = useMemo(
    () => paymentService.calculateTotals(bookingDraft.price ?? 75, appliedPromo),
    [bookingDraft.price, appliedPromo],
  );

  const pay = async (forceFail = false) => {
    try {
      setLoading(true);
      const result = await paymentService.processPayment({
        amount: totals.total,
        serviceAmount: totals.service,
        discount: totals.discount,
        methodId: forceFail ? 'fail' : selected,
        providerId: bookingDraft.providerId ?? 'prv_01',
        providerName: bookingDraft.providerName ?? 'Nova Wellness Studio',
        serviceName: bookingDraft.serviceName ?? 'Deep Tissue Massage',
        forceFail,
      });
      if (!result.success || !result.transaction) {
        navigation.replace('PaymentResult', {
          success: false,
          message: result.message,
        });
        return;
      }
      const booking = await bookingService.createBooking(bookingDraft);
      await notificationService.pushNotification({
        title: 'Payment successful',
        body: `Payment of ${formatCurrency(totals.total)} completed for ${booking.serviceName}.`,
        type: 'payment',
      });
      await notificationService.pushNotification({
        title: 'Booking confirmed',
        body: `Your appointment at ${booking.providerName} is confirmed.`,
        type: 'booking',
      });
      clearBookingDraft();
      navigation.replace('PaymentResult', {
        success: true,
        transactionId: result.transaction.id,
        amount: totals.total,
        method: result.transaction.method,
        bookingId: booking.id,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.flex}>
      <Header title="Secure Checkout" onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.card}>
          <Text style={styles.section}>Order summary</Text>
          {[
            ['Provider', bookingDraft.providerName],
            ['Service', bookingDraft.serviceName],
            ['Date', bookingDraft.date],
            ['Time', bookingDraft.time],
            ['Duration', `${bookingDraft.durationMin ?? 60} min`],
          ].map(([label, value]) => (
            <View key={label} style={styles.row}>
              <Text style={styles.muted}>{label}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Pricing</Text>
          <View style={styles.row}><Text style={styles.muted}>Service</Text><Text style={styles.value}>{formatCurrency(totals.service)}</Text></View>
          <View style={styles.row}><Text style={styles.muted}>Service fee</Text><Text style={styles.value}>{formatCurrency(totals.fee)}</Text></View>
          <View style={styles.row}><Text style={styles.muted}>Discount</Text><Text style={[styles.value, { color: colors.success }]}>-{formatCurrency(totals.discount)}</Text></View>
          <View style={styles.row}><Text style={styles.totalLabel}>Total</Text><Text style={styles.total}>{formatCurrency(totals.total)}</Text></View>
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Payment methods</Text>
          {methods.map(method => {
            const label = method.last4 ? `${method.brand} •••• ${method.last4}` : method.brand;
            return (
              <Pressable key={method.id} onPress={() => setSelected(method.id)} style={[styles.method, selected === method.id && styles.methodActive]}>
                <Text style={styles.value}>{label}</Text>
              </Pressable>
            );
          })}
          <Button title="Add Card" variant="outline" onPress={() => setShowAddCard(v => !v)} style={{ marginTop: spacing.sm }} />
          {showAddCard ? (
            <View style={{ gap: spacing.md, marginTop: spacing.md }}>
              <Input label="Cardholder Name" value={cardName} onChangeText={setCardName} />
              <Input label="Card Number" value={cardNumber} onChangeText={setCardNumber} keyboardType="number-pad" />
              <Input label="Expiry" value={expiry} onChangeText={setExpiry} placeholder="MM/YY" />
              <Input label="CVV" value={cvv} onChangeText={setCvv} keyboardType="number-pad" secureTextEntry />
              {cardError ? <Text style={styles.error}>{cardError}</Text> : null}
              <Button
                title="Save Card"
                onPress={async () => {
                  if (!cardName || !validateCardNumber(cardNumber) || !validateExpiry(expiry) || !validateCvv(cvv)) {
                    setCardError('Please check your card details.');
                    return;
                  }
                  const card = await paymentService.addCard({ name: cardName, number: cardNumber, expiry, cvv });
                  setMethods(prev => [...prev, card]);
                  setSelected(card.id);
                  setShowAddCard(false);
                  setCardError('');
                }}
              />
            </View>
          ) : null}
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Promo code</Text>
          <Input value={promo} onChangeText={setPromo} autoCapitalize="characters" />
          <Button title="Apply" variant="secondary" onPress={() => setAppliedPromo(promo.trim().toUpperCase())} style={{ marginTop: spacing.sm }} />
          {totals.promoLabel ? <Text style={styles.promo}>{totals.promoLabel} applied</Text> : null}
        </View>

        <Button title={`Pay ${formatCurrency(totals.total)}`} loading={loading} onPress={() => void pay(false)} />
        <Button title="Simulate Failed Payment" variant="ghost" onPress={() => void pay(true)} style={{ marginTop: spacing.sm }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.massive },
  card: { backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.lg, ...shadows.sm, gap: spacing.sm },
  section: { ...typography.h3, color: colors.text, marginBottom: spacing.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  muted: { ...typography.body, color: colors.textSecondary },
  value: { ...typography.bodyMedium, color: colors.text },
  totalLabel: { ...typography.bodySemibold, color: colors.text },
  total: { ...typography.h3, color: colors.primary },
  method: { padding: spacing.md, borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.border, marginBottom: spacing.sm },
  methodActive: { borderColor: colors.primary, backgroundColor: colors.accentSoft },
  promo: { ...typography.caption, color: colors.success },
  error: { ...typography.caption, color: colors.error },
});
