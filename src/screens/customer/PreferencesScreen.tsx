import React from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header } from '../../components';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import { colors, radius, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Preferences'>;

export function PreferencesScreen({ navigation }: Props) {
  const { preferences, setPreferences } = useApp();
  return (
    <View style={styles.flex}>
      <Header title="Preferences" onBack={() => navigation.goBack()} />
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Push notifications</Text>
          <Switch
            value={preferences.notificationsEnabled}
            onValueChange={v => void setPreferences({ notificationsEnabled: v })}
            trackColor={{ true: colors.primary }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email updates</Text>
          <Switch
            value={preferences.emailUpdates}
            onValueChange={v => void setPreferences({ emailUpdates: v })}
            trackColor={{ true: colors.primary }}
          />
        </View>
        <Pressable
          style={styles.row}
          onPress={() => void setPreferences({ language: preferences.language === 'English' ? 'Español' : 'English' })}>
          <Text style={styles.label}>Language</Text>
          <Text style={styles.value}>{preferences.language}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  card: { margin: spacing.lg, backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.lg, gap: spacing.lg },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { ...typography.bodyMedium, color: colors.text },
  value: { ...typography.body, color: colors.primary },
});
