import React, { useCallback, useMemo, useState } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { BellOff } from 'lucide-react-native';
import { Button, EmptyState, Header, NotificationItem } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as notificationService from '../../services/notificationService';
import { AppNotification } from '../../types';
import { colors, spacing, typography } from '../../theme';
import { groupNotificationDay } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'Notifications'>;

export function NotificationsScreen({ navigation }: Props) {
  const [items, setItems] = useState<AppNotification[]>([]);

  const load = useCallback(async () => {
    setItems(await notificationService.getNotifications());
  }, []);

  useFocusEffect(useCallback(() => { void load(); }, [load]));

  const sections = useMemo(() => {
    const groups: Record<string, AppNotification[]> = { Today: [], Yesterday: [], Earlier: [] };
    items.forEach(item => { groups[groupNotificationDay(item.createdAt)].push(item); });
    return Object.entries(groups)
      .filter(([, data]) => data.length > 0)
      .map(([title, data]) => ({ title, data }));
  }, [items]);

  return (
    <View style={styles.flex}>
      <Header
        title="Notifications"
        onBack={() => navigation.goBack()}
        right={
          <Button title="Read all" variant="ghost" onPress={async () => { await notificationService.markAllNotificationsRead(); await load(); }} style={{ minHeight: 36, paddingHorizontal: 8 }} />
        }
      />
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.pad}
        ListEmptyComponent={<EmptyState icon={BellOff} title="You're all caught up" subtitle="New booking and message alerts will appear here." />}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
        renderItem={({ item }) => (
          <NotificationItem
            item={item}
            onPress={async () => {
              await notificationService.markNotificationRead(item.id);
              await load();
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg, paddingBottom: spacing.massive },
  section: { ...typography.captionMedium, color: colors.textMuted, marginBottom: spacing.sm, marginTop: spacing.md },
});
