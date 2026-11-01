import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Heart, MapPin, BadgeCheck } from 'lucide-react-native';
import { Provider } from '../../types';
import { colors, spacing, typography } from '../../theme';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Rating } from '../ui/Rating';

interface ProviderCardProps {
  provider: Provider;
  onPress: () => void;
  onToggleFavorite?: () => void;
  favorited?: boolean;
  compact?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function heroUri(provider: Provider): string {
  if (provider.image?.startsWith('http')) {
    return provider.image;
  }
  return `https://picsum.photos/seed/${provider.id}/1200/800`;
}

export function ProviderCard({
  provider,
  onPress,
  onToggleFavorite,
  favorited,
  compact,
}: ProviderCardProps) {
  const scale = useSharedValue(1);
  const [imgFailed, setImgFailed] = useState(false);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const imageSource = {
    uri: imgFailed
      ? `https://picsum.photos/seed/${provider.id}-fallback/1200/800`
      : heroUri(provider),
  };

  return (
    <AnimatedPressable
      accessibilityRole="button"
      accessibilityLabel={`${provider.name}, ${provider.rating} stars`}
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.985);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      style={[styles.card, compact && styles.compact, animatedStyle]}>
      {!compact ? (
        <Animated.View entering={FadeIn.duration(400)}>
          <Image
            source={imageSource}
            style={styles.hero}
            onError={() => setImgFailed(true)}
          />
        </Animated.View>
      ) : null}
      <View style={styles.body}>
        <View style={styles.topRow}>
          <Avatar uri={provider.avatar} name={provider.name} size={compact ? 44 : 48} />
          <View style={styles.meta}>
            <View style={styles.nameRow}>
              <Text style={styles.name} numberOfLines={1}>
                {provider.name}
              </Text>
              {provider.verified ? (
                <BadgeCheck size={16} color={colors.primary} />
              ) : null}
            </View>
            <Text style={styles.category}>{provider.category}</Text>
            <Rating value={provider.rating} reviewCount={provider.reviewCount} />
          </View>
          {onToggleFavorite ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={favorited ? 'Remove favorite' : 'Add favorite'}
              hitSlop={8}
              onPress={onToggleFavorite}
              style={styles.fav}>
              <Heart
                size={18}
                color={favorited ? colors.error : colors.textMuted}
                fill={favorited ? colors.error : 'transparent'}
              />
            </Pressable>
          ) : null}
        </View>
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <MapPin size={14} color={colors.textMuted} />
            <Text style={styles.footerText}>{provider.distanceKm} km</Text>
          </View>
          <Text style={styles.price}>From ${provider.startingPrice}</Text>
          <Badge label={provider.nextAvailable} tone="neutral" />
        </View>
      </View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  compact: {
    width: 280,
    marginRight: spacing.md,
    marginBottom: 0,
  },
  hero: {
    width: '100%',
    height: 150,
    backgroundColor: colors.surfaceMuted,
  },
  body: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  topRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  meta: {
    flex: 1,
    gap: 2,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    ...typography.bodySemibold,
    color: colors.text,
    flexShrink: 1,
  },
  category: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  fav: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  price: {
    ...typography.captionMedium,
    color: colors.primary,
  },
});
