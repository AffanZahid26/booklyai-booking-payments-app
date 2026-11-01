import React, { useCallback, useState } from 'react';
import {
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Bell,
  BriefcaseMedical,
  Dumbbell,
  Home as HomeIcon,
  Scissors,
  Sparkles,
  Stethoscope,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Avatar,
  Badge,
  Button,
  HomeUpcomingSkeleton,
  ProviderCard,
  ProviderCardSkeleton,
  Screen,
  SearchBar,
  Skeleton,
} from '../../components';
import { useApp } from '../../context/AppContext';
import { tabContentPadding } from '../../constants/layout';
import { RootStackParamList } from '../../navigation/types';
import * as bookingService from '../../services/bookingService';
import * as notificationService from '../../services/notificationService';
import * as providerService from '../../services/providerService';
import { Booking, Provider, ServiceCategory } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatDateLabel, greetingForHour, delay, SKELETON_DELAY_MS } from '../../utils/helpers';

const categories: { label: ServiceCategory; icon: typeof Sparkles; color: string }[] = [
  { label: 'Wellness', icon: Sparkles, color: '#818CF8' },
  { label: 'Beauty', icon: Scissors, color: '#F472B6' },
  { label: 'Fitness', icon: Dumbbell, color: '#34D399' },
  { label: 'Medical', icon: Stethoscope, color: '#60A5FA' },
  { label: 'Consulting', icon: BriefcaseMedical, color: '#A78BFA' },
  { label: 'Home Services', icon: HomeIcon, color: '#FBBF24' },
];

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user, favorites, toggleFavorite, addRecentSearch } = useApp();
  const [query, setQuery] = useState('');
  const [providers, setProviders] = useState<Provider[]>([]);
  const [upcoming, setUpcoming] = useState<Booking | null>(null);
  const [unread, setUnread] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const [recs, bookings, count] = await Promise.all([
      providerService.getRecommendedProviders(),
      bookingService.getBookings('upcoming'),
      notificationService.getUnreadCount(),
      delay(SKELETON_DELAY_MS),
    ]);
    setProviders(recs);
    setUpcoming(bookings[0] ?? null);
    setUnread(count);
    setLoading(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };

  return (
    <Screen style={styles.flex}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: tabContentPadding(insets.bottom) },
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <View style={{ flex: 1, paddingRight: spacing.sm }}>
            <Text style={styles.greeting} numberOfLines={1}>
              {greetingForHour()}, {user?.name.split(' ')[0] ?? 'Alex'}
            </Text>
            <Text style={styles.subtitle} numberOfLines={1}>
              Book services near you today
            </Text>
          </View>
          <Pressable
            accessibilityLabel="Notifications"
            onPress={() => navigation.navigate('Notifications')}
            style={styles.bell}>
            <Bell size={20} color={colors.text} />
            {unread > 0 ? <View style={styles.badgeDot} /> : null}
          </Pressable>
          <Avatar uri={user?.avatar} name={user?.name} size={44} />
        </View>

        <SearchBar
          value={query}
          onChangeText={setQuery}
          onSubmit={async () => {
            if (query.trim()) {
              await addRecentSearch(query);
            }
            navigation.getParent()?.navigate('Discover' as never);
          }}
        />

        {loading ? (
          <HomeUpcomingSkeleton />
        ) : upcoming ? (
          <View style={styles.upcoming}>
            <View style={styles.upcomingTop}>
              <Text style={styles.upcomingLabel}>Upcoming</Text>
              <Badge label="Confirmed" tone="success" />
            </View>
            <Text style={styles.upcomingProvider}>{upcoming.providerName}</Text>
            <Text style={styles.upcomingService}>{upcoming.serviceName}</Text>
            <Text style={styles.upcomingWhen}>
              {formatDateLabel(upcoming.date)} · {upcoming.time}
            </Text>
            <Button
              title="View Booking"
              onPress={() =>
                navigation.navigate('BookingDetails', { bookingId: upcoming.id })
              }
              style={styles.upcomingBtn}
            />
          </View>
        ) : null}

        <Text style={styles.section}>Categories</Text>
        {loading ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4].map(i => (
              <View key={i} style={styles.category}>
                <Skeleton height={40} width={40} radius={14} />
                <Skeleton height={12} width={64} style={{ marginTop: spacing.sm }} />
              </View>
            ))}
          </ScrollView>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <Pressable
                  key={cat.label}
                  style={styles.category}
                  onPress={() =>
                    navigation.navigate('Main', {
                      screen: 'Discover',
                      params: undefined,
                    } as never)
                  }>
                  <View style={[styles.categoryIcon, { backgroundColor: `${cat.color}22` }]}>
                    <Icon size={20} color={cat.color} />
                  </View>
                  <Text style={styles.categoryLabel}>{cat.label}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        )}

        <LinearGradient
          colors={[colors.aiGradientStart, colors.aiGradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiCard}>
          <Text style={styles.aiTitle}>Need a recommendation?</Text>
          <Text style={styles.aiCopy}>
            Describe the service you want and get matched with available providers.
          </Text>
          <Button
            title="Open Assistant"
            onPress={() => navigation.navigate('AIAssistant')}
            style={styles.aiBtn}
          />
        </LinearGradient>

        <Text style={styles.section}>Recommended</Text>
        {loading ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProviderCardSkeleton compact />
            <ProviderCardSkeleton compact />
          </ScrollView>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {providers.map(provider => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                compact
                favorited={favorites.includes(provider.id)}
                onToggleFavorite={() => toggleFavorite(provider.id)}
                onPress={() =>
                  navigation.navigate('ProviderDetail', { providerId: provider.id })
                }
              />
            ))}
          </ScrollView>
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  greeting: { ...typography.h2, color: colors.text, fontSize: 24 },
  subtitle: { ...typography.caption, color: colors.textSecondary, marginTop: 4 },
  bell: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  badgeDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.error,
  },
  upcoming: {
    marginTop: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    ...shadows.md,
  },
  upcomingTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upcomingLabel: { ...typography.captionMedium, color: colors.textSecondary },
  upcomingProvider: { ...typography.h3, color: colors.text, marginTop: spacing.md },
  upcomingService: { ...typography.body, color: colors.textSecondary, marginTop: 4 },
  upcomingWhen: {
    ...typography.bodySemibold,
    color: colors.primary,
    marginTop: spacing.md,
  },
  upcomingBtn: { marginTop: spacing.lg },
  section: {
    ...typography.h3,
    color: colors.text,
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
  },
  category: {
    width: 108,
    marginRight: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.sm,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  categoryLabel: { ...typography.captionMedium, color: colors.text },
  aiCard: {
    marginTop: spacing.xxl,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    ...shadows.lg,
  },
  aiTitle: { ...typography.h2, color: colors.textInverse, fontSize: 22 },
  aiCopy: {
    ...typography.body,
    color: 'rgba(255,255,255,0.9)',
    marginTop: spacing.sm,
  },
  aiBtn: {
    marginTop: spacing.lg,
  },
});
