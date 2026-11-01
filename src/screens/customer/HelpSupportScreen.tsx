import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Header, Input } from '../../components';
import { RootStackParamList } from '../../navigation/types';
import { colors, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'HelpSupport'>;

export function HelpSupportScreen({ navigation }: Props) {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <View style={styles.flex}>
      <Header title="Help & Support" onBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.copy}>Tell us what you need help with and our team will get back to you.</Text>
        <Input label="Message" value={message} onChangeText={setMessage} multiline style={{ minHeight: 120 }} />
        {sent ? <Text style={styles.ok}>Message sent. We'll reply within a few hours.</Text> : null}
        <Button title="Send Message" onPress={() => setSent(true)} disabled={!message.trim()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, gap: spacing.lg },
  copy: { ...typography.body, color: colors.textSecondary },
  ok: { ...typography.caption, color: colors.success },
});
