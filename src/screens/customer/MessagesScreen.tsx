import React, { useCallback, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MessageSquare } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar, EmptyState, ListRowSkeleton, Screen } from '../../components';
import { tabContentPadding } from '../../constants/layout';
import { RootStackParamList } from '../../navigation/types';
import * as chatService from '../../services/chatService';
import { Conversation } from '../../types';
import { colors, radius, spacing, typography } from '../../theme';
import { delay, relativeTime, SKELETON_DELAY_MS } from '../../utils/helpers';

export function MessagesScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [items, setItems] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      void (async () => {
        const [data] = await Promise.all([
          chatService.getConversations(),
          delay(SKELETON_DELAY_MS),
        ]);
        setItems(data);
        setLoading(false);
      })();
    }, []),
  );

  return (
    <Screen style={styles.flex}>
      <Text style={styles.title}>Messages</Text>
      {loading ? (
        <View style={styles.pad}>
          <ListRowSkeleton />
          <ListRowSkeleton />
          <ListRowSkeleton />
          <ListRowSkeleton />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          contentContainerStyle={[styles.pad, { paddingBottom: tabContentPadding(insets.bottom) }]}
          ListEmptyComponent={
            <EmptyState icon={MessageSquare} title="No conversations yet" subtitle="Message a provider from their profile or booking details." />
          }
          renderItem={({ item }) => (
            <Pressable
              style={styles.row}
              onPress={() => navigation.navigate('ChatDetail', { conversationId: item.id })}>
              <Avatar uri={item.participantAvatar} name={item.participantName} size={52} online={item.online} />
              <View style={{ flex: 1 }}>
                <View style={styles.top}>
                  <Text style={styles.name}>{item.participantName}</Text>
                  <Text style={styles.time}>{relativeTime(item.lastMessageAt)}</Text>
                </View>
                <Text style={styles.preview} numberOfLines={1}>{item.lastMessage}</Text>
              </View>
              {item.unreadCount > 0 ? (
                <View style={styles.badge}><Text style={styles.badgeText}>{item.unreadCount}</Text></View>
              ) : null}
            </Pressable>
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  title: { ...typography.h2, color: colors.text, paddingHorizontal: spacing.lg, marginBottom: spacing.md },
  pad: { paddingHorizontal: spacing.lg, paddingBottom: spacing.massive },
  row: {
    flexDirection: 'row', gap: spacing.md, alignItems: 'center',
    backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.sm,
  },
  top: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm },
  name: { ...typography.bodySemibold, color: colors.text, flex: 1 },
  time: { ...typography.small, color: colors.textMuted },
  preview: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
  badge: {
    minWidth: 22, height: 22, borderRadius: 11, backgroundColor: colors.primary,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6,
  },
  badgeText: { ...typography.small, color: colors.textInverse, fontWeight: '700' },
});
