import React, { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Avatar, Button, Header, Rating, TimeSlot } from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import * as providerService from '../../services/providerService';
import { ServiceItem, StaffMember } from '../../types';
import { availableTimes, unavailableTimes } from '../../mock/data';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency, getDateOptions } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'BookingFlow'>;
type Step = 'Service' | 'Staff' | 'Date' | 'Time' | 'Confirm';
const steps: Step[] = ['Service', 'Staff', 'Date', 'Time', 'Confirm'];

export function BookingFlowScreen({ navigation, route }: Props) {
  const { bookingDraft, updateBookingDraft, setBookingDraft } = useApp();
  const [stepIndex, setStepIndex] = useState(0);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const dates = useMemo(() => getDateOptions(7), []);

  useEffect(() => {
    if (route.params?.draft) {
      setBookingDraft({ ...bookingDraft, ...route.params.draft });
      if (route.params.draft.serviceId && route.params.draft.staffId && route.params.draft.date && route.params.draft.time) {
        setStepIndex(4);
      } else if (route.params.draft.serviceId) {
        setStepIndex(1);
      }
    }
  }, [route.params?.draft]);

  useEffect(() => {
    const providerId = bookingDraft.providerId ?? 'prv_01';
    void providerService.getServicesByProvider(providerId).then(setServices);
    void providerService.getStaffByProvider(providerId).then(setStaff);
    if (!bookingDraft.providerId) {
      updateBookingDraft({
        providerId: 'prv_01',
        providerName: 'Nova Wellness Studio',
        address: '24 King Street, London',
      });
    }
  }, [bookingDraft.providerId]);

  const step = steps[stepIndex];
  const canNext =
    (step === 'Service' && !!bookingDraft.serviceId) ||
    (step === 'Staff' && !!bookingDraft.staffId) ||
    (step === 'Date' && !!bookingDraft.date) ||
    (step === 'Time' && !!bookingDraft.time) ||
    step === 'Confirm';

  return (
    <View style={styles.flex}>
      <Header title="Book Appointment" onBack={() => (stepIndex === 0 ? navigation.goBack() : setStepIndex(i => i - 1))} />
      <View style={styles.progress}>
        {steps.map((label, index) => (
          <View key={label} style={styles.progressItem}>
            <View style={[styles.dot, index <= stepIndex && styles.dotActive]} />
            <Text style={[styles.progressLabel, index <= stepIndex && styles.progressLabelActive]}>{label}</Text>
          </View>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {step === 'Service' ? services.map(service => (
          <Pressable
            key={service.id}
            onPress={() => updateBookingDraft({
              serviceId: service.id,
              serviceName: service.name,
              durationMin: service.durationMin,
              price: service.price,
            })}
            style={[styles.card, bookingDraft.serviceId === service.id && styles.selected]}>
            <Text style={styles.cardTitle}>{service.name}</Text>
            <Text style={styles.cardMeta}>{service.durationMin} min · {formatCurrency(service.price)}</Text>
          </Pressable>
        )) : null}

        {step === 'Staff' ? staff.map(member => (
          <Pressable
            key={member.id}
            onPress={() => updateBookingDraft({ staffId: member.id, staffName: member.name })}
            style={[styles.card, styles.staffCard, bookingDraft.staffId === member.id && styles.selected]}>
            <Avatar uri={member.avatar} name={member.name} size={48} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{member.name}</Text>
              <Text style={styles.cardMeta}>{member.specialty}</Text>
              <Rating value={member.rating} />
            </View>
          </Pressable>
        )) : null}

        {step === 'Date' ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map(date => (
              <Pressable
                key={date.iso}
                onPress={() => updateBookingDraft({ date: date.iso })}
                style={[styles.dateCard, bookingDraft.date === date.iso && styles.selected]}>
                <Text style={styles.dateLabel}>{date.label}</Text>
                <Text style={styles.dateDay}>{date.day}</Text>
              </Pressable>
            ))}
          </ScrollView>
        ) : null}

        {step === 'Time' ? (
          <View style={styles.timeGrid}>
            {availableTimes.map(time => (
              <TimeSlot
                key={time}
                label={time}
                selected={bookingDraft.time === time}
                disabled={(unavailableTimes as readonly string[]).includes(time)}
                onPress={() => updateBookingDraft({ time })}
              />
            ))}
          </View>
        ) : null}

        {step === 'Confirm' ? (
          <View style={styles.summary}>
            {[
              ['Provider', bookingDraft.providerName],
              ['Service', bookingDraft.serviceName],
              ['Staff', bookingDraft.staffName],
              ['Date', bookingDraft.date],
              ['Time', bookingDraft.time],
              ['Duration', `${bookingDraft.durationMin ?? 60} min`],
              ['Price', formatCurrency(bookingDraft.price ?? 0)],
            ].map(([label, value]) => (
              <View key={label} style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>{label}</Text>
                <Text style={styles.summaryValue}>{value}</Text>
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>
      <View style={styles.footer}>
        <Button
          title={step === 'Confirm' ? 'Continue to Payment' : 'Continue'}
          disabled={!canNext}
          onPress={() => {
            if (step === 'Confirm') {
              navigation.navigate('Checkout');
            } else {
              setStepIndex(i => Math.min(i + 1, steps.length - 1));
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  progress: { flexDirection: 'row', paddingHorizontal: spacing.md, gap: 4 },
  progressItem: { flex: 1, alignItems: 'center', gap: 4 },
  dot: { width: '100%', height: 4, borderRadius: 2, backgroundColor: colors.border },
  dotActive: { backgroundColor: colors.primary },
  progressLabel: { ...typography.small, color: colors.textMuted },
  progressLabelActive: { color: colors.primary, fontWeight: '600' },
  content: { padding: spacing.lg, paddingBottom: spacing.massive },
  card: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm, borderWidth: 1.5, borderColor: colors.border },
  staffCard: { flexDirection: 'row', gap: spacing.md, alignItems: 'center' },
  selected: { borderColor: colors.primary, backgroundColor: colors.accentSoft },
  cardTitle: { ...typography.bodySemibold, color: colors.text },
  cardMeta: { ...typography.caption, color: colors.textSecondary, marginTop: 4, marginBottom: 4 },
  dateCard: { width: 88, marginRight: spacing.sm, borderRadius: radius.lg, padding: spacing.md, backgroundColor: colors.surface, alignItems: 'center', borderWidth: 1.5, borderColor: colors.border },
  dateLabel: { ...typography.caption, color: colors.textSecondary },
  dateDay: { ...typography.h2, color: colors.text, marginTop: 4 },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  summary: { backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.xl, ...shadows.md },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.md },
  summaryLabel: { ...typography.body, color: colors.textSecondary },
  summaryValue: { ...typography.bodySemibold, color: colors.text },
  footer: { padding: spacing.lg, borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.surface },
});
