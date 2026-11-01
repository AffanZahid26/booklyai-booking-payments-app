import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Camera, Mic, Paperclip, Send, Smile } from 'lucide-react-native';
import { colors, radius, spacing } from '../../theme';

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  onAttachment?: () => void;
  onCamera?: () => void;
  onEmoji?: () => void;
  onVoice?: () => void;
}

export function ChatInput({
  value,
  onChangeText,
  onSend,
  onAttachment,
  onCamera,
  onEmoji,
  onVoice,
}: ChatInputProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.tools}>
        <Pressable accessibilityLabel="Attach" onPress={onAttachment} style={styles.iconBtn}>
          <Paperclip size={18} color={colors.textSecondary} />
        </Pressable>
        <Pressable accessibilityLabel="Camera" onPress={onCamera} style={styles.iconBtn}>
          <Camera size={18} color={colors.textSecondary} />
        </Pressable>
        <Pressable accessibilityLabel="Emoji" onPress={onEmoji} style={styles.iconBtn}>
          <Smile size={18} color={colors.textSecondary} />
        </Pressable>
        <Pressable accessibilityLabel="Voice message" onPress={onVoice} style={styles.iconBtn}>
          <Mic size={18} color={colors.textSecondary} />
        </Pressable>
      </View>
      <View style={styles.inputRow}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Write a message..."
          placeholderTextColor={colors.textMuted}
          style={styles.input}
          multiline
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Send message"
          onPress={onSend}
          style={[styles.send, !value.trim() && styles.sendDisabled]}
          disabled={!value.trim()}>
          <Send size={18} color={colors.textInverse} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    gap: spacing.sm,
  },
  tools: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surfaceMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.text,
  },
  send: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendDisabled: {
    opacity: 0.5,
  },
});
