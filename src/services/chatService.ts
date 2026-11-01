import { initialConversations, initialMessages } from '../mock/data';
import { Conversation, Message } from '../types';
import { delay, uid } from '../utils/helpers';
import { loadJSON, saveJSON, STORAGE_KEYS } from '../utils/storage';

async function getConversationsStore(): Promise<Conversation[]> {
  return loadJSON(STORAGE_KEYS.CONVERSATIONS, initialConversations);
}

async function getMessagesStore(): Promise<Message[]> {
  return loadJSON(STORAGE_KEYS.MESSAGES, initialMessages);
}

const cannedResponses: Array<{ match: RegExp; reply: string }> = [
  {
    match: /reschedule|move|another time|change/i,
    reply:
      'Absolutely. I have 4:00 PM and 5:30 PM available tomorrow. Which one works better for you?',
  },
  {
    match: /where|located|address|location/i,
    reply:
      "We're located at 24 King Street. Your appointment confirmation also includes the full location details.",
  },
  {
    match: /confirm|confirmed|booking/i,
    reply:
      'Yes — your appointment is confirmed. We look forward to seeing you.',
  },
  {
    match: /arrive|early|time should/i,
    reply:
      'Please arrive about 10 minutes early so we can get you settled comfortably.',
  },
  {
    match: /cancel/i,
    reply:
      'Of course. I can help cancel or reschedule — which would you prefer?',
  },
  {
    match: /price|cost|how much/i,
    reply:
      'Happy to help. Pricing depends on the service — Deep Tissue Massage starts at $75.',
  },
];

function buildReply(text: string): string {
  const hit = cannedResponses.find(item => item.match.test(text));
  if (hit) {
    return hit.reply;
  }
  return "Thanks for your message! I'll check with the team and get back to you shortly.";
}

export async function getConversations(): Promise<Conversation[]> {
  await delay(350);
  return getConversationsStore();
}

export async function getConversation(
  id: string,
): Promise<{ conversation: Conversation; messages: Message[] } | null> {
  await delay(300);
  const conversations = await getConversationsStore();
  const conversation = conversations.find(c => c.id === id);
  if (!conversation) {
    return null;
  }
  const messages = (await getMessagesStore())
    .filter(m => m.conversationId === id)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );
  return { conversation, messages };
}

export async function sendMessage(
  conversationId: string,
  text: string,
): Promise<{ userMessage: Message; reply: Message }> {
  const conversations = await getConversationsStore();
  const messages = await getMessagesStore();
  const conversation = conversations.find(c => c.id === conversationId);
  if (!conversation) {
    throw new Error('Conversation not found.');
  }

  const userMessage: Message = {
    id: uid('msg'),
    conversationId,
    senderId: 'cus_01',
    senderName: 'Affan',
    text,
    createdAt: new Date().toISOString(),
    read: true,
    type: 'text',
  };
  messages.push(userMessage);

  const updatedConversations = conversations.map(c =>
    c.id === conversationId
      ? {
          ...c,
          lastMessage: text,
          lastMessageAt: userMessage.createdAt,
          unreadCount: 0,
        }
      : c,
  );
  await saveJSON(STORAGE_KEYS.MESSAGES, messages);
  await saveJSON(STORAGE_KEYS.CONVERSATIONS, updatedConversations);

  await delay(1000);

  const reply: Message = {
    id: uid('msg'),
    conversationId,
    senderId: conversation.participantId,
    senderName: conversation.participantName,
    text: buildReply(text),
    createdAt: new Date().toISOString(),
    read: false,
    type: 'text',
  };
  messages.push(reply);
  const finalConversations = updatedConversations.map(c =>
    c.id === conversationId
      ? {
          ...c,
          lastMessage: reply.text,
          lastMessageAt: reply.createdAt,
        }
      : c,
  );
  await saveJSON(STORAGE_KEYS.MESSAGES, messages);
  await saveJSON(STORAGE_KEYS.CONVERSATIONS, finalConversations);
  return { userMessage, reply };
}

export async function markConversationRead(id: string): Promise<void> {
  const conversations = await getConversationsStore();
  await saveJSON(
    STORAGE_KEYS.CONVERSATIONS,
    conversations.map(c => (c.id === id ? { ...c, unreadCount: 0 } : c)),
  );
}
