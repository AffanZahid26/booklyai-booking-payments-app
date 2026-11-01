import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BadgeCheck, Heart, MapPin } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Avatar,
  Badge,
  Button,
  Header,
  Rating,
  Screen,
  ServiceCard,
  Skeleton,
} from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import * as providerService from '../../services/providerService';
import { Provider, Review, ServiceItem } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ProviderDetail'>;

export function ProviderDetailScreen({ navigation, route }: Props) {
  const insets = useSafeAreaInsets();
  const { favorites, toggleFavorite, updateBookingDraft, clearBookingDraft } =
    useApp();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [tab, setTab] = useState<'Overview' | 'Services' | 'Reviews'>('Overview');
  const [loading, setLoading] = useState(true);
  const [heroFailed, setHeroFailed] = useState(false);

  useEffect(() => {
    const load = async () => {
      const [p, s, r] = await Promise.all([
        providerService.getProviderById(route.params.providerId),
        providerService.getServicesByProvider(route.params.providerId),
        providerService.getReviewsByProvider(route.params.providerId),
      ]);
      setProvider(p);
      setServices(s);
      setReviews(r);
      setHeroFailed(false);
      setLoading(false);
    };
    void load();
  }, [route.params.providerId]);

  if (loading || !provider) {
    return (
      <Screen>
        <Header title="Provider" onBack={() => navigation.goBack()} skipTopInset />
        <View style={{ padding: spacing.lg }}>
          <Skeleton height={220} />
          <Skeleton height={24} width="60%" style={{ marginTop: spacing.lg }} />
        </View>
      </Screen>
    );
  }

  const favorited = favorites.includes(provider.id);

  const startBooking = (service?: ServiceItem) => {
    clearBookingDraft();
    updateBookingDraft({
      providerId: provider.id,
      providerName: provider.name,
      address: `${provider.address}, ${provider.city}`,
      serviceId: service?.id,
      serviceName: service?.name,
      durationMin: service?.durationMin,
      price: service?.price,
    });
    navigation.navigate('BookingFlow');
  };

  return (
    <View style={[styles.flex, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: heroFailed
              ? `https://picsum.photos/seed/${provider.id}-detail/1200/800`
              : provider.image,
          }}
          style={styles.hero}
          onError={() => setHeroFailed(true)}
        />
        <Header title="" onBack={() => navigation.goBack()} transparent />
        <View style={styles.body}>
          <View style={styles.top}>
            <Avatar uri={provider.avatar} name={provider.name} size={64} />
            <Pressable onPress={() => toggleFavorite(provider.id)} style={styles.fav}>
              <Heart
                size={20}
                color={favorited ? colors.error : colors.textMuted}
                fill={favorited ? colors.error : 'transparent'}
              />
            </Pressable>
          </View>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{provider.name}</Text>
            {provider.verified ? <BadgeCheck size={18} color={colors.primary} /> : null}
          </View>
          {provider.verified ? <Badge label="Verified" tone="primary" /> : null}
          <View style={styles.stats}>
            <Rating value={provider.rating} reviewCount={provider.reviewCount} />
            <View style={styles.dist}>
              <MapPin size={14} color={colors.textMuted} />
              <Text style={styles.distText}>{provider.distanceKm} km away</Text>
            </View>
          </View>
          <View style={styles.actions}>
            <Button title="Book Now" onPress={() => startBooking(services[0])} style={{ flex: 1 }} />
            <Button
              title="Message"
              variant="outline"
              onPress={() => navigation.navigate('ChatDetail', { conversationId: 'cnv_01' })}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles.tabs}>
            {(['Overview', 'Services', 'Reviews'] as const).map(item => (
              <Pressable
                key={item}
                onPress={() => setTab(item)}
                style={[styles.tab, tab === item && styles.tabActive]}>
                <Text style={[styles.tabText, tab === item && styles.tabTextActive]}>{item}</Text>
              </Pressable>
            ))}
          </View>
          {tab === 'Overview' ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.copy}>{provider.description}</Text>
              <Text style={styles.sectionTitle}>Opening Hours</Text>
              {provider.openingHours.map(h => (
                <View key={h.day} style={styles.hourRow}>
                  <Text style={styles.hourDay}>{h.day}</Text>
                  <Text style={styles.hourTime}>
                    {h.closed ? 'Closed' : `${h.open} – ${h.close}`}
                  </Text>
                </View>
              ))}
              <Text style={styles.sectionTitle}>Location</Text>
              <Text style={styles.copy}>
                {provider.address}, {provider.city}
              </Text>
              <Text style={styles.sectionTitle}>Amenities</Text>
              <View style={styles.amenities}>
                {provider.amenities.map(a => (
                  <Badge key={a} label={a} tone="neutral" />
                ))}
              </View>
            </View>
          ) : null}
          {tab === 'Services' ? (
            <View style={styles.section}>
              {services.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onBook={() => startBooking(service)}
                />
              ))}
            </View>
          ) : null}
          {tab === 'Reviews' ? (
            <View style={styles.section}>
              {reviews.map(review => (
                <View key={review.id} style={styles.review}>
                  <View style={styles.reviewTop}>
                    <Avatar uri={review.avatar} name={review.author} size={40} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.reviewAuthor}>{review.author}</Text>
                      <Rating value={review.rating} />
                    </View>
                  </View>
                  <Text style={styles.copy}>{review.comment}</Text>
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  hero: { width: '100%', height: 280, backgroundColor: colors.surfaceMuted },
  body: { padding: spacing.lg, marginTop: -30 },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  fav: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: spacing.md },
  name: { ...typography.h2, color: colors.text },
  stats: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg, marginTop: spacing.sm },
  dist: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  distText: { ...typography.caption, color: colors.textSecondary },
  actions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.lg },
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.lg,
    padding: 4,
    marginTop: spacing.xl,
  },
  tab: { flex: 1, paddingVertical: spacing.sm, alignItems: 'center', borderRadius: radius.md },
  tabActive: { backgroundColor: colors.surface, ...shadows.sm },
  tabText: { ...typography.captionMedium, color: colors.textSecondary },
  tabTextActive: { color: colors.primary },
  section: { marginTop: spacing.xl, gap: spacing.sm, paddingBottom: spacing.massive },
  sectionTitle: { ...typography.h3, color: colors.text, marginTop: spacing.md },
  copy: { ...typography.body, color: colors.textSecondary },
  hourRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  hourDay: { ...typography.bodyMedium, color: colors.text },
  hourTime: { ...typography.body, color: colors.textSecondary },
  amenities: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  review: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    ...shadows.sm,
  },
  reviewTop: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.sm },
  reviewAuthor: { ...typography.bodySemibold, color: colors.text },
});
