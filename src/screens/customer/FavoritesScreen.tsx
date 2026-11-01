import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HeartOff } from 'lucide-react-native';
import { EmptyState, Header, ProviderCard } from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import * as providerService from '../../services/providerService';
import { Provider } from '../../types';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

export function FavoritesScreen({ navigation }: Props) {
  const { favorites, toggleFavorite } = useApp();
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    void providerService.getProviders({ favoritesOnly: true, favoriteIds: favorites }).then(setProviders);
  }, [favorites]);

  return (
    <View style={styles.flex}>
      <Header title="Saved Providers" onBack={() => navigation.goBack()} />
      <FlatList
        data={providers}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.pad}
        ListEmptyComponent={<EmptyState icon={HeartOff} title="No saved providers" subtitle="Tap the heart on a provider to save them here." />}
        renderItem={({ item }) => (
          <ProviderCard
            provider={item}
            favorited
            onToggleFavorite={() => toggleFavorite(item.id)}
            onPress={() => navigation.navigate('ProviderDetail', { providerId: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg },
});
