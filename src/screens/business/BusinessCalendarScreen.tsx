import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Badge, Header } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import { Booking } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { getDateOptions } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessCalendar'>;
type Mode = 'Day' | 'Week' | 'Month';

export function BusinessCalendarScreen({ navigation }: Props) {
  const [mode, setMode] = useState<Mode>('Week');
  const [items, setItems] = useState<Booking[]>([]);
  const dates = getDateOptions(7);

  useEffect(() => { void businessService.getBusinessAppointments().then(setItems); }, []);

  return (
    <View style={styles.flex}>
      <Header title="Calendar" onBack={() => navigation.goBack()} />
      <View style={styles.modes}>
        {(['Day', 'Week', 'Month'] as Mode[]).map(m => (
          <Pressable key={m} onPress={() => setMode(m)} style={[styles.mode, mode === m && styles.modeActive]}>
            <Text style={[styles.modeText, mode === m && styles.modeTextActive]}>{m}</Text>
          </Pressable>
        ))}
      </View>
      <ScrollView horizontal contentContainerStyle={styles.dates}>
        {dates.map(d => (
          <View key={d.iso} style={styles.dateCol}>
            <Text style={styles.dateLabel}>{d.label}</Text>
            <View style={styles.lane}>
              {items.filter(i => i.date === d.iso).slice(0, 3).map(item => (
                <View key={item.id} style={[styles.block, item.status === 'cancelled' ? styles.blocked : item.status === 'pending' ? styles.available : styles.booked]}>
                  <Text style={styles.blockText}>{item.time}</Text>
                  <Text style={styles.blockText} numberOfLines={1}>{item.customerName}</Text>
                </View>
              ))}
              {items.filter(i => i.date === d.iso).length === 0 ? <Badge label="Available" tone="success" /> : null}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.legend}>
        <Badge label="Available" tone="success" />
        <Badge label="Booked" tone="primary" />
        <Badge label="Blocked" tone="error" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  modes: { flexDirection: 'row', marginHorizontal: spacing.lg, backgroundColor: colors.surfaceMuted, borderRadius: radius.lg, padding: 4 },
  mode: { flex: 1, alignItems: 'center', paddingVertical: spacing.sm, borderRadius: radius.md },
  modeActive: { backgroundColor: colors.surface },
  modeText: { ...typography.captionMedium, color: colors.textSecondary },
  modeTextActive: { color: colors.primary },
  dates: { padding: spacing.lg, gap: spacing.sm },
  dateCol: { width: 140, marginRight: spacing.sm },
  dateLabel: { ...typography.captionMedium, color: colors.textSecondary, marginBottom: spacing.sm },
  lane: { minHeight: 220, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.sm, gap: spacing.sm, ...shadows.sm },
  block: { borderRadius: radius.md, padding: spacing.sm },
  booked: { backgroundColor: colors.accentSoft },
  available: { backgroundColor: colors.successSoft },
  blocked: { backgroundColor: colors.errorSoft },
  blockText: { ...typography.small, color: colors.text },
  legend: { flexDirection: 'row', gap: spacing.sm, padding: spacing.lg },
});
