import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT, Region } from 'react-native-maps';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header, ProviderCard, Skeleton } from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import * as providerService from '../../services/providerService';
import { Provider } from '../../types';
import { colors, radius, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'DiscoverMap'>;

const DEFAULT_REGION: Region = {
  latitude: 51.5074,
  longitude: -0.1278,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08,
};

export function DiscoverMapScreen({ navigation }: Props) {
  const mapRef = useRef<MapView>(null);
  const { favorites, toggleFavorite } = useApp();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selected, setSelected] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void providerService.getProviders({ sort: 'nearest' }).then(data => {
      const list = data.slice(0, 14);
      setProviders(list);
      setSelected(list[0] ?? null);
      setLoading(false);
    });
  }, []);

  const region = useMemo<Region>(() => {
    if (!providers.length) {
      return DEFAULT_REGION;
    }
    const lats = providers.map(p => p.latitude);
    const lngs = providers.map(p => p.longitude);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    return {
      latitude: (minLat + maxLat) / 2,
      longitude: (minLng + maxLng) / 2,
      latitudeDelta: Math.max(0.05, (maxLat - minLat) * 1.6 || 0.08),
      longitudeDelta: Math.max(0.05, (maxLng - minLng) * 1.6 || 0.08),
    };
  }, [providers]);

  useEffect(() => {
    if (!loading && providers.length) {
      mapRef.current?.animateToRegion(region, 450);
    }
  }, [loading, providers.length, region]);

  const onSelect = (provider: Provider) => {
    setSelected(provider);
    mapRef.current?.animateToRegion(
      {
        latitude: provider.latitude,
        longitude: provider.longitude,
        latitudeDelta: 0.035,
        longitudeDelta: 0.035,
      },
      350,
    );
  };

  return (
    <View style={styles.flex}>
      <Header title="Nearby Providers" onBack={() => navigation.goBack()} />
      <View style={styles.mapWrap}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_DEFAULT}
          initialRegion={DEFAULT_REGION}
          showsUserLocation={false}
          showsCompass={false}
          showsPointsOfInterests
          mapType="standard"
          userInterfaceStyle={Platform.OS === 'ios' ? 'dark' : undefined}>
          {providers.map(provider => {
            const active = selected?.id === provider.id;
            return (
              <Marker
                key={provider.id}
                coordinate={{
                  latitude: provider.latitude,
                  longitude: provider.longitude,
                }}
                onPress={() => onSelect(provider)}
                tracksViewChanges={false}>
                <View style={[styles.pin, active && styles.pinActive]}>
                  <Text style={[styles.pinText, active && styles.pinTextActive]}>
                    ${provider.startingPrice}
                  </Text>
                </View>
              </Marker>
            );
          })}
        </MapView>
      </View>

      <View style={styles.sheet}>
        {loading || !selected ? (
          <Skeleton height={140} radius={radius.xl} />
        ) : (
          <Pressable>
            <ProviderCard
              provider={selected}
              favorited={favorites.includes(selected.id)}
              onToggleFavorite={() => toggleFavorite(selected.id)}
              onPress={() =>
                navigation.navigate('ProviderDetail', { providerId: selected.id })
              }
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  mapWrap: {
    flex: 1,
    marginHorizontal: spacing.lg,
    borderRadius: radius.xxl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceMuted,
  },
  map: {
    ...StyleSheet.absoluteFill,
  },
  pin: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: '#18181B',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  pinActive: {
    backgroundColor: '#18181B',
    borderColor: '#FFFFFF',
  },
  pinText: {
    ...typography.captionMedium,
    color: '#18181B',
    fontWeight: '700',
  },
  pinTextActive: {
    color: '#FFFFFF',
  },
  sheet: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
});
