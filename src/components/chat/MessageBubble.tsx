import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Message } from '../../types';
import { colors, radius, spacing, typography } from '../../theme';

interface MessageBubbleProps {
  message: Message;
  isMine: boolean;
}

export function MessageBubble({ message, isMine }: MessageBubbleProps) {
  return (
    <View style={[styles.wrap, isMine ? styles.mine : styles.theirs]}>
      <View style={[styles.bubble, isMine ? styles.mineBubble : styles.theirsBubble]}>
        <Text style={[styles.text, isMine && styles.mineText]}>{message.text}</Text>
      </View>
      <Text style={styles.meta}>
        {new Date(message.createdAt).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        })}
        {isMine ? (message.read ? ' · Read' : ' · Sent') : ''}
      </Text>
    </View>
  );
}

export function TypingIndicator() {
  return (
    <View style={[styles.wrap, styles.theirs]}>
      <View style={[styles.bubble, styles.theirsBubble, styles.typing]}>
        <View style={styles.dot} />
        <View style={[styles.dot, { opacity: 0.7 }]} />
        <View style={[styles.dot, { opacity: 0.4 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.md,
    maxWidth: '82%',
  },
  mine: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  theirs: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  bubble: {
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  mineBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 6,
  },
  theirsBubble: {
    backgroundColor: colors.surface,
    borderBottomLeftRadius: 6,
  },
  text: {
    ...typography.body,
    color: colors.text,
  },
  mineText: {
    color: colors.textInverse,
  },
  meta: {
    ...typography.small,
    color: colors.textMuted,
    marginTop: 4,
  },
  typing: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    minWidth: 64,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textMuted,
  },
});
