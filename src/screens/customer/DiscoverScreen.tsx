import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Map as MapIcon, List, SearchX, SlidersHorizontal } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  BottomSheet,
  Button,
  EmptyState,
  ProviderCard,
  ProviderCardSkeleton,
  Screen,
  SearchBar,
} from '../../components';
import { useApp } from '../../context/AppContext';
import { CATEGORIES } from '../../constants';
import { tabContentPadding } from '../../constants/layout';
import { RootStackParamList } from '../../navigation/types';
import * as providerService from '../../services/providerService';
import { Provider, ServiceCategory } from '../../types';
import { colors, spacing, typography } from '../../theme';
import { SKELETON_DELAY_MS, delay } from '../../utils/helpers';

const CATEGORY_OPTIONS: Array<ServiceCategory | 'All'> = [
  'All',
  ...CATEGORIES,
];

export function DiscoverScreen() {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { favorites, toggleFavorite, addRecentSearch, recentSearches } = useApp();
  const [query, setQuery] = useState('');
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<ServiceCategory | 'All'>('All');
  const [sort, setSort] = useState<providerService.SortOption>('recommended');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [maxDistance, setMaxDistance] = useState(10);
  const [maxPrice, setMaxPrice] = useState(250);

  const load = useCallback(async () => {
    setLoading(true);
    const [data] = await Promise.all([
      providerService.getProviders({
        query,
        category,
        sort,
        minRating: minRating || undefined,
        maxDistance,
        maxPrice,
      }),
      delay(SKELETON_DELAY_MS),
    ]);
    setProviders(data);
    setLoading(false);
  }, [query, category, sort, minRating, maxDistance, maxPrice]);

  useFocusEffect(
    useCallback(() => {
      void load();
    }, [load]),
  );

  const onSearch = async () => {
    if (query.trim()) {
      await addRecentSearch(query);
    }
    await load();
  };

  return (
    <Screen style={styles.flex}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <View style={styles.headerActions}>
          <Pressable
            onPress={() => navigation.navigate('DiscoverMap')}
            style={styles.iconBtn}
            accessibilityLabel="Map view">
            <MapIcon size={18} color={colors.text} />
          </Pressable>
          <Pressable
            onPress={() => setFiltersOpen(true)}
            style={[styles.iconBtn, styles.iconBtnPrimary]}
            accessibilityLabel="Filters">
            <SlidersHorizontal size={18} color={colors.textInverse} />
          </Pressable>
        </View>
      </View>

      <View style={styles.searchWrap}>
        <SearchBar value={query} onChangeText={setQuery} onSubmit={onSearch} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cats}
        style={styles.catsScroll}>
        {CATEGORY_OPTIONS.map(item => {
          const active = category === item;
          return (
            <Pressable
              key={item}
              onPress={() => setCategory(item)}
              style={[styles.chip, active && styles.chipActive]}>
              <Text
                numberOfLines={1}
                style={[styles.chipText, active && styles.chipTextActive]}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {recentSearches.length > 0 && !query ? (
        <View style={styles.recent}>
          <Text style={styles.recentLabel}>Recent</Text>
          <View style={styles.recentRow}>
            {recentSearches.slice(0, 4).map(item => (
              <Pressable
                key={item}
                onPress={() => setQuery(item)}
                style={styles.recentChip}>
                <Text style={styles.recentText}>{item}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ) : null}

      {loading ? (
        <View style={styles.listPad}>
          <ProviderCardSkeleton />
          <ProviderCardSkeleton />
          <ProviderCardSkeleton />
        </View>
      ) : (
        <FlatList
          data={providers}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.listPad,
            { paddingBottom: tabContentPadding(insets.bottom) + 24 },
          ]}
          ListEmptyComponent={
            <EmptyState
              icon={SearchX}
              title="No providers found"
              subtitle="Try a different category or clear your filters."
              actionLabel="Clear Filters"
              onAction={() => {
                setCategory('All');
                setMinRating(0);
                setQuery('');
              }}
            />
          }
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(Math.min(index, 8) * 60).springify()}>
              <ProviderCard
                provider={item}
                favorited={favorites.includes(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
                onPress={() =>
                  navigation.navigate('ProviderDetail', { providerId: item.id })
                }
              />
            </Animated.View>
          )}
        />
      )}

      <BottomSheet
        visible={filtersOpen}
        title="Filters & Sort"
        onClose={() => setFiltersOpen(false)}>
        <Text style={styles.filterLabel}>Sort</Text>
        {(
          [
            ['recommended', 'Recommended'],
            ['highest_rated', 'Highest Rated'],
            ['nearest', 'Nearest'],
            ['lowest_price', 'Lowest Price'],
          ] as const
        ).map(([value, label]) => (
          <Pressable
            key={value}
            onPress={() => setSort(value)}
            style={[styles.sortRow, sort === value && styles.sortActive]}>
            <Text style={styles.sortText}>{label}</Text>
          </Pressable>
        ))}
        <Button
          title="Apply Filters"
          onPress={() => {
            setFiltersOpen(false);
            void load();
          }}
          style={{ marginTop: spacing.lg, marginBottom: spacing.lg }}
        />
      </BottomSheet>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  header: {
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { ...typography.h2, color: colors.text },
  headerActions: { flexDirection: 'row', gap: spacing.sm },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtnPrimary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  searchWrap: { paddingHorizontal: spacing.lg, marginTop: spacing.md },
  catsScroll: { flexGrow: 0, marginTop: spacing.md, maxHeight: 48 },
  cats: {
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    alignItems: 'center',
    paddingBottom: spacing.sm,
  },
  chip: {
    minWidth: 56,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'center',
  },
  chipTextActive: {
    color: colors.textInverse,
    fontWeight: '700',
  },
  listPad: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm },
  recent: { paddingHorizontal: spacing.lg, marginBottom: spacing.sm },
  recentLabel: { ...typography.captionMedium, color: colors.textMuted },
  recentRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  recentChip: {
    backgroundColor: colors.surfaceMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: 10,
  },
  recentText: { ...typography.caption, color: colors.textSecondary },
  filterLabel: {
    ...typography.captionMedium,
    color: colors.textSecondary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  sortRow: {
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sortActive: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 10,
    paddingHorizontal: spacing.sm,
  },
  sortText: { ...typography.body, color: colors.text },
});
