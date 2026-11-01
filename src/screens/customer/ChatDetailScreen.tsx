import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatInput, Header, MessageBubble, TypingIndicator } from '../../components';
import { QUICK_REPLIES } from '../../constants';
import { RootStackParamList } from '../../navigation/types';
import * as chatService from '../../services/chatService';
import * as notificationService from '../../services/notificationService';
import { Conversation, Message } from '../../types';
import { colors, radius, spacing, typography } from '../../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'ChatDetail'>;

export function ChatDetailScreen({ navigation, route }: Props) {
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    void (async () => {
      const data = await chatService.getConversation(route.params.conversationId);
      if (data) {
        setConversation(data.conversation);
        setMessages(data.messages);
        await chatService.markConversationRead(route.params.conversationId);
      }
    })();
  }, [route.params.conversationId]);

  const send = async (value: string) => {
    const trimmed = value.trim();
    if (!trimmed || !conversation) return;
    setText('');
    const optimistic: Message = {
      id: `local-${Date.now()}`,
      conversationId: conversation.id,
      senderId: 'cus_01',
      senderName: 'Affan',
      text: trimmed,
      createdAt: new Date().toISOString(),
      read: true,
      type: 'text',
    };
    setMessages(prev => [...prev, optimistic]);
    setTyping(true);
    const { userMessage, reply } = await chatService.sendMessage(conversation.id, trimmed);
    setMessages(prev => [...prev.filter(m => m.id !== optimistic.id), userMessage, reply]);
    setTyping(false);
    await notificationService.pushNotification({
      title: `${conversation.participantName} replied`,
      body: reply.text,
      type: 'message',
    });
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header
        title={conversation?.participantName ?? 'Chat'}
        subtitle={conversation?.online ? 'Online' : 'Last seen recently'}
        onBack={() => navigation.goBack()}
      />
      <FlatList
        ref={listRef}
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
        ListHeaderComponent={
          <View style={styles.quickWrap}>
            {QUICK_REPLIES.map(item => (
              <Pressable key={item} onPress={() => void send(item)} style={styles.quick}>
                <Text style={styles.quickText}>{item}</Text>
              </Pressable>
            ))}
          </View>
        }
        renderItem={({ item }) => (
          <MessageBubble message={item} isMine={item.senderId === 'cus_01'} />
        )}
        ListFooterComponent={typing ? <TypingIndicator /> : undefined}
      />
      <ChatInput
        value={text}
        onChangeText={setText}
        onSend={() => void send(text)}
        onAttachment={() => void send('I attached my booking confirmation.')}
        onCamera={() => void send('Sending a photo of the location.')}
        onEmoji={() => setText(prev => `${prev} 🙂`)}
        onVoice={() => void send('🎤 Voice message (0:12)')}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  list: { padding: spacing.lg, paddingBottom: spacing.xl },
  quickWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  quick: {
    backgroundColor: colors.accentSoft, paddingHorizontal: spacing.md, paddingVertical: spacing.sm,
    borderRadius: radius.full,
  },
  quickText: { ...typography.captionMedium, color: colors.primary },
});
