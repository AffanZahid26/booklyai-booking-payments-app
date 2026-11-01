import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Header, Input } from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'PersonalInfo'>;

export function PersonalInfoScreen({ navigation }: Props) {
  const { user, updateProfile } = useApp();
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [phone, setPhone] = useState(user?.phone ?? '');
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.flex}>
      <Header title="Personal Information" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full name" value={name} onChangeText={setName} />
        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
        <Input label="Phone" value={phone} onChangeText={setPhone} />
        <Button
          title="Save Changes"
          loading={loading}
          onPress={async () => {
            setLoading(true);
            await updateProfile({ name, email, phone });
            setLoading(false);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, gap: spacing.lg },
});
