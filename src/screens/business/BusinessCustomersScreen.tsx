import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Avatar, Header } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import { Customer } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { formatCurrency } from '../../utils/helpers';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessCustomers'>;

export function BusinessCustomersScreen({ navigation }: Props) {
  const [items, setItems] = useState<Customer[]>([]);
  useEffect(() => { void businessService.getCustomers().then(setItems); }, []);
  return (
    <View style={styles.flex}>
      <Header title="Customers" onBack={() => navigation.goBack()} />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.pad}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => navigation.navigate('BusinessCustomerDetail', { customerId: item.id })}>
            <Avatar uri={item.avatar} name={item.name} size={48} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.email}</Text>
              <Text style={styles.meta}>{item.phone}</Text>
              <Text style={styles.stats}>{item.totalBookings} bookings · {formatCurrency(item.totalSpent)}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg },
  card: { flexDirection: 'row', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, marginBottom: spacing.sm, ...shadows.sm },
  name: { ...typography.bodySemibold, color: colors.text },
  meta: { ...typography.caption, color: colors.textSecondary },
  stats: { ...typography.captionMedium, color: colors.primary, marginTop: 4 },
});
