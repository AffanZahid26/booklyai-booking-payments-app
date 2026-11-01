import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Header, TimeSlot } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as bookingService from '../../services/bookingService';
import { availableTimes, unavailableTimes } from '../../mock/data';
import { colors, radius, spacing, typography } from '../../theme';
import { getDateOptions } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'Reschedule'>;

export function RescheduleScreen({ navigation, route }: Props) {
  const dates = useMemo(() => getDateOptions(7), []);
  const [date, setDate] = useState(dates[1]?.iso ?? dates[0].iso);
  const [time, setTime] = useState('4:00 PM');
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.flex}>
      <Header title="Reschedule" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.label}>Choose a new date</Text>
        <View style={styles.row}>
          {dates.slice(0, 5).map(d => (
            <Pressable key={d.iso} onPress={() => setDate(d.iso)} style={[styles.date, date === d.iso && styles.active]}>
              <Text style={styles.dateText}>{d.label}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.label}>Choose a time</Text>
        <View style={styles.timeGrid}>
          {[...availableTimes, '4:00 PM', '5:30 PM'].map(t => (
            <TimeSlot
              key={t}
              label={t}
              selected={time === t}
              disabled={(unavailableTimes as readonly string[]).includes(t)}
              onPress={() => setTime(t)}
            />
          ))}
        </View>
        <Button
          title="Save Changes"
          loading={loading}
          onPress={async () => {
            setLoading(true);
            await bookingService.rescheduleBooking(route.params.bookingId, date, time);
            setLoading(false);
            navigation.replace('BookingDetails', { bookingId: route.params.bookingId });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg },
  label: { ...typography.h3, color: colors.text, marginBottom: spacing.md, marginTop: spacing.md },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  date: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.md, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  active: { backgroundColor: colors.primary, borderColor: colors.primary },
  dateText: { ...typography.captionMedium, color: colors.text },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: spacing.xl },
});
