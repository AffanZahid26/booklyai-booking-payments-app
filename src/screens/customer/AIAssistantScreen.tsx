import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Button, Header } from '../../components';
import { AI_SUGGESTED_PROMPTS } from '../../constants';
import { useApp } from '../../context/AppContext';
import { RootStackParamList } from '../../navigation/types';
import * as aiService from '../../services/aiService';
import { AIMessage, AIRecommendation } from '../../types';
import { colors, radius, shadows, spacing, typography } from '../../theme';
import { ChatInput } from '../../components';

type Props = NativeStackScreenProps<RootStackParamList, 'AIAssistant'>;

function Thinking() {
  const opacity = useSharedValue(0.4);
  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 600 }), -1, true);
  }, [opacity]);
  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));
  return (
    <Animated.View style={[styles.thinking, style]}>
      <Text style={styles.thinkingText}>Finding options...</Text>
    </Animated.View>
  );
}

export function AIAssistantScreen({ navigation }: Props) {
  const { updateBookingDraft, clearBookingDraft } = useApp();
  const [messages, setMessages] = useState<AIMessage[]>([aiService.getInitialAIMessage()]);
  const [text, setText] = useState('');
  const [thinking, setThinking] = useState(false);
  const listRef = useRef<FlatList>(null);

  const send = async (value: string) => {
    const trimmed = value.trim();
    if (!trimmed || thinking) return;
    setText('');
    const userMsg: AIMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: trimmed,
      createdAt: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setThinking(true);
    const reply = await aiService.askAI(trimmed);
    setMessages(prev => [...prev, reply]);
    setThinking(false);
  };

  const bookRecommendation = (rec: AIRecommendation) => {
    clearBookingDraft();
    updateBookingDraft({
      providerId: rec.providerId,
      providerName: rec.providerName,
      serviceId: rec.serviceId,
      serviceName: rec.serviceName,
      date: rec.date,
      time: rec.time,
      price: rec.price,
      staffId: rec.staffId ?? 'stf_01',
      staffName: rec.staffName ?? 'Sarah Mitchell',
      durationMin: 60,
      address: '24 King Street, London',
    });
    navigation.navigate('BookingFlow', {
      draft: {
        providerId: rec.providerId,
        providerName: rec.providerName,
        serviceId: rec.serviceId,
        serviceName: rec.serviceName,
        date: rec.date,
        time: rec.time,
        price: rec.price,
        staffId: rec.staffId,
        staffName: rec.staffName,
        durationMin: 60,
      },
    });
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header title="Booking Assistant" subtitle="Get matched with available providers" onBack={() => navigation.goBack()} />
      <FlatList
        ref={listRef}
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
        ListHeaderComponent={
          <View style={styles.prompts}>
            {AI_SUGGESTED_PROMPTS.map(p => (
              <Pressable key={p} onPress={() => void send(p)} style={styles.prompt}>
                <Text style={styles.promptText}>{p}</Text>
              </Pressable>
            ))}
          </View>
        }
        renderItem={({ item }) => (
          <View style={[styles.bubbleWrap, item.role === 'user' ? styles.mine : styles.theirs]}>
            {item.role === 'assistant' ? (
              <LinearGradient colors={[colors.aiGradientStart, colors.aiGradientEnd]} style={styles.aiBubble}>
                <Text style={styles.aiText}>{item.text}</Text>
              </LinearGradient>
            ) : (
              <View style={styles.userBubble}><Text style={styles.userText}>{item.text}</Text></View>
            )}
            {item.recommendations?.map((rec: AIRecommendation) => (
              <View key={`${rec.providerId}-${rec.time}`} style={styles.recCard}>
                <Text style={styles.recTitle}>{rec.providerName}</Text>
                <Text style={styles.recMeta}>{rec.serviceName}</Text>
                <Text style={styles.recMeta}>{rec.time} · ${rec.price} · {rec.rating} ★</Text>
                <Button title="Book Now" onPress={() => bookRecommendation(rec)} style={{ marginTop: spacing.sm, minHeight: 44 }} />
              </View>
            ))}
          </View>
        )}
        ListFooterComponent={thinking ? <Thinking /> : undefined}
      />
      <ChatInput value={text} onChangeText={setText} onSend={() => void send(text)} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  list: { padding: spacing.lg, paddingBottom: spacing.xl },
  prompts: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  prompt: { backgroundColor: colors.surface, borderRadius: radius.full, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderWidth: 1, borderColor: colors.border },
  promptText: { ...typography.captionMedium, color: colors.primary },
  bubbleWrap: { marginBottom: spacing.lg, maxWidth: '92%' },
  mine: { alignSelf: 'flex-end' },
  theirs: { alignSelf: 'flex-start' },
  aiBubble: { borderRadius: radius.xl, padding: spacing.lg, borderBottomLeftRadius: 6 },
  aiText: { ...typography.body, color: colors.textInverse },
  userBubble: { backgroundColor: colors.surface, borderRadius: radius.xl, padding: spacing.lg, borderBottomRightRadius: 6, ...shadows.sm },
  userText: { ...typography.body, color: colors.text },
  recCard: { marginTop: spacing.sm, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.md, ...shadows.sm },
  recTitle: { ...typography.bodySemibold, color: colors.text },
  recMeta: { ...typography.caption, color: colors.textSecondary, marginTop: 2 },
  thinking: { backgroundColor: colors.accentSoft, alignSelf: 'flex-start', paddingHorizontal: spacing.lg, paddingVertical: spacing.md, borderRadius: radius.full },
  thinkingText: { ...typography.captionMedium, color: colors.primary },
});
