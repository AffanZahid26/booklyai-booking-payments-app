import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Avatar, Badge, Header, Rating } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import { StaffMember } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessStaff'>;

export function BusinessStaffScreen({ navigation }: Props) {
  const [items, setItems] = useState<StaffMember[]>([]);
  useEffect(() => { void businessService.getStaff().then(setItems); }, []);
  return (
    <View style={styles.flex}>
      <Header title="Staff" onBack={() => navigation.goBack()} />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.pad}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar uri={item.avatar} name={item.name} size={52} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.specialty}</Text>
              <Rating value={item.rating} />
              <Text style={styles.meta}>{item.appointmentsToday} appointments today</Text>
            </View>
            <Badge label={item.available ? 'Available' : 'Busy'} tone={item.available ? 'success' : 'warning'} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg },
  card: { flexDirection: 'row', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm, alignItems: 'center', ...shadows.sm },
  name: { ...typography.bodySemibold, color: colors.text },
  meta: { ...typography.caption, color: colors.textSecondary, marginVertical: 2 },
});
