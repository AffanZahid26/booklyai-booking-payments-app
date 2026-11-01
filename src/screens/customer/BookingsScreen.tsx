import React, { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CalendarX } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BookingCard, BookingCardSkeleton, EmptyState, Modal, Screen } from '../../components';
import { tabContentPadding } from '../../constants/layout';
import { RootStackParamList } from '../../navigation/types';
import * as bookingService from '../../services/bookingService';
import { Booking } from '../../types';
import { colors, radius, spacing, typography } from '../../theme';
import { delay, SKELETON_DELAY_MS } from '../../utils/helpers';

type Tab = 'upcoming' | 'past' | 'cancelled';

export function BookingsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [tab, setTab] = useState<Tab>('upcoming');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancelId, setCancelId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const [data] = await Promise.all([
      bookingService.getBookings(tab),
      delay(SKELETON_DELAY_MS),
    ]);
    setBookings(data);
    setLoading(false);
  }, [tab]);

  useFocusEffect(useCallback(() => { void load(); }, [load]));

  return (
    <Screen style={styles.flex}>
      <Text style={styles.title}>Bookings</Text>
      <View style={styles.tabs}>
        {([
          ['upcoming', 'Upcoming'],
          ['past', 'Past'],
          ['cancelled', 'Cancelled'],
        ] as const).map(([value, label]) => (
          <Pressable key={value} onPress={() => setTab(value)} style={[styles.tab, tab === value && styles.tabActive]}>
            <Text style={[styles.tabText, tab === value && styles.tabTextActive]}>{label}</Text>
          </Pressable>
        ))}
      </View>
      {loading ? (
        <View style={styles.pad}>
          <BookingCardSkeleton />
          <BookingCardSkeleton />
          <BookingCardSkeleton />
        </View>
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={item => item.id}
          contentContainerStyle={[styles.pad, { paddingBottom: tabContentPadding(insets.bottom) }]}
          ListEmptyComponent={
            <EmptyState
              icon={CalendarX}
              title="No bookings here"
              subtitle="When you book a service, it will appear in this list."
              actionLabel="Discover Services"
              onAction={() => navigation.navigate('Main' as never)}
            />
          }
          renderItem={({ item }) => (
            <BookingCard
              booking={item}
              onView={() => navigation.navigate('BookingDetails', { bookingId: item.id })}
              onMessage={() => navigation.navigate('ChatDetail', { conversationId: 'cnv_01' })}
              onCancel={() => setCancelId(item.id)}
              onReschedule={() => navigation.navigate('Reschedule', { bookingId: item.id })}
            />
          )}
        />
      )}
      <Modal
        visible={!!cancelId}
        title="Cancel booking?"
        message="This appointment will be moved to Cancelled. You can book again anytime."
        confirmLabel="Cancel Booking"
        destructive
        onCancel={() => setCancelId(null)}
        onConfirm={async () => {
          if (cancelId) {
            await bookingService.cancelBooking(cancelId);
            setCancelId(null);
            await load();
          }
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  title: { ...typography.h2, color: colors.text, paddingHorizontal: spacing.lg },
  tabs: {
    flexDirection: 'row', margin: spacing.lg, backgroundColor: colors.surfaceMuted,
    borderRadius: radius.lg, padding: 4,
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: spacing.sm, borderRadius: radius.md },
  tabActive: { backgroundColor: colors.surface },
  tabText: { ...typography.captionMedium, color: colors.textSecondary },
  tabTextActive: { color: colors.primary },
  pad: { paddingHorizontal: spacing.lg, paddingBottom: spacing.massive },
});
