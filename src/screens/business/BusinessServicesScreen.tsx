import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { BottomSheet, Button, Header, Input, ServiceCard } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import * as businessService from '../../services/businessService';
import { ServiceItem } from '../../types';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'BusinessServices'>;

export function BusinessServicesScreen({ navigation }: Props) {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('60');
  const [price, setPrice] = useState('75');
  const [editingId, setEditingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setItems(await businessService.getManagedServices());
  }, []);
  useFocusEffect(useCallback(() => { void load(); }, [load]));

  return (
    <View style={styles.flex}>
      <Header
        title="Services"
        onBack={() => navigation.goBack()}
        right={<Button title="Add" variant="ghost" onPress={() => { setEditingId(null); setOpen(true); }} style={{ minHeight: 36 }} />}
      />
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.pad}
        renderItem={({ item }) => (
          <ServiceCard
            service={item}
            onBook={() => {}}
            onEdit={() => {
              setEditingId(item.id);
              setName(item.name);
              setDescription(item.description);
              setDuration(String(item.durationMin));
              setPrice(String(item.price));
              setOpen(true);
            }}
            onDelete={async () => { await businessService.deleteService(item.id); await load(); }}
          />
        )}
      />
      <BottomSheet visible={open} title={editingId ? 'Edit Service' : 'Add Service'} onClose={() => setOpen(false)}>
        <View style={{ gap: spacing.md, paddingBottom: spacing.xl }}>
          <Input label="Name" value={name} onChangeText={setName} />
          <Input label="Description" value={description} onChangeText={setDescription} />
          <Input label="Duration (min)" value={duration} onChangeText={setDuration} keyboardType="number-pad" />
          <Input label="Price" value={price} onChangeText={setPrice} keyboardType="decimal-pad" />
          <Button
            title="Save"
            onPress={async () => {
              const payload = {
                name,
                description,
                durationMin: Number(duration) || 60,
                price: Number(price) || 0,
                category: 'Wellness' as const,
                staffIds: ['stf_01'],
              };
              if (editingId) await businessService.updateService(editingId, payload);
              else await businessService.addService(payload);
              setOpen(false);
              await load();
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  pad: { padding: spacing.lg },
});
