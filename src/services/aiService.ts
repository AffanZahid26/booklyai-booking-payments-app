import { providers, services, staffMembers } from '../mock/data';
import { AIMessage, AIRecommendation } from '../types';
import { delay, uid } from '../utils/helpers';
import * as bookingService from './bookingService';

function tomorrowIso(): string {
  return '2026-09-08';
}

function topProviders(count = 4): AIRecommendation[] {
  return [...providers]
    .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
    .slice(0, count)
    .map(p => {
      const service = services.find(s => s.providerId === p.id)!;
      return {
        providerId: p.id,
        providerName: p.name,
        serviceId: service.id,
        serviceName: service.name,
        time: p.nextAvailable,
        date: tomorrowIso(),
        price: service.price,
        rating: p.rating,
      };
    });
}

function buildMassageRecommendations(): AIRecommendation[] {
  const nova = providers.find(p => p.id === 'prv_01')!;
  const harmony = providers.find(p => p.name.includes('Harmony')) ?? providers[1];
  const novaService = services.find(s => s.id === 'svc_01')!;
  const harmonyService =
    services.find(s => s.providerId === harmony.id && s.name.includes('Massage')) ??
    services.find(s => s.providerId === harmony.id)!;
  return [
    {
      providerId: nova.id,
      providerName: nova.name,
      serviceId: novaService.id,
      serviceName: novaService.name,
      time: '3:30 PM',
      date: tomorrowIso(),
      price: novaService.price,
      rating: nova.rating,
      staffId: 'stf_01',
      staffName: 'Sarah Mitchell',
    },
    {
      providerId: harmony.id,
      providerName: harmony.name,
      serviceId: harmonyService.id,
      serviceName: harmonyService.name,
      time: '4:00 PM',
      date: tomorrowIso(),
      price: harmonyService.price,
      rating: harmony.rating,
    },
    {
      providerId: nova.id,
      providerName: nova.name,
      serviceId: 'svc_02',
      serviceName: 'Relaxation Massage',
      time: '2:00 PM',
      date: tomorrowIso(),
      price: 55,
      rating: nova.rating,
      staffId: 'stf_01',
      staffName: 'Sarah Mitchell',
    },
    {
      providerId: providers[4].id,
      providerName: providers[4].name,
      serviceId: services.find(s => s.providerId === providers[4].id)!.id,
      serviceName: services.find(s => s.providerId === providers[4].id)!.name,
      time: '5:00 PM',
      date: tomorrowIso(),
      price: services.find(s => s.providerId === providers[4].id)!.price,
      rating: providers[4].rating,
    },
  ];
}

export async function askAI(prompt: string): Promise<AIMessage> {
  await delay(900);
  const text = prompt.toLowerCase().trim();

  if (/^(hi|hello|hey|good morning|good afternoon)\b/.test(text) && text.length < 24) {
    return {
      id: uid('ai'),
      role: 'assistant',
      text: "Hi Alex — welcome back. Tell me what you need (massage, fitness, beauty, medical) and I'll show the best options near you.",
      createdAt: new Date().toISOString(),
    };
  }

  if (
    /best service|best services|recommend|top rated|what.*(should|can).*book|know.*best|looking for.*(service|provider)/i.test(
      text,
    ) ||
    /hi.*best|hello.*best|want to know/i.test(text)
  ) {
    const picks = topProviders(4);
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'Here are the highest-rated services near you right now. Tap Book Now on any option to continue.',
      createdAt: new Date().toISOString(),
      recommendations: picks,
    };
  }

  if (/booking|appointments?.*(tomorrow|have)|what appointments/i.test(text)) {
    const bookings = await bookingService.getBookings('upcoming');
    const lines = bookings
      .slice(0, 3)
      .map(b => `• ${b.serviceName} at ${b.providerName} — ${b.date} ${b.time}`)
      .join('\n');
    return {
      id: uid('ai'),
      role: 'assistant',
      text:
        bookings.length === 0
          ? "You don't have any upcoming appointments right now. Want me to find something for you?"
          : `Here are your upcoming appointments:\n${lines}`,
      createdAt: new Date().toISOString(),
    };
  }

  if (/cancel/i.test(text)) {
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'Sure — open Bookings, choose the appointment, then tap Cancel. I can also help you reschedule instead.',
      createdAt: new Date().toISOString(),
    };
  }

  if (/cheaper|budget|affordable|less expensive/i.test(text)) {
    const cheap = [...providers].sort((a, b) => a.startingPrice - b.startingPrice).slice(0, 3);
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'These options have the lowest starting prices near you.',
      createdAt: new Date().toISOString(),
      recommendations: cheap.map(p => {
        const service = services.find(s => s.providerId === p.id)!;
        return {
          providerId: p.id,
          providerName: p.name,
          serviceId: service.id,
          serviceName: service.name,
          time: p.nextAvailable,
          date: tomorrowIso(),
          price: service.price,
          rating: p.rating,
        };
      }),
    };
  }

  if (/nearby|near me|closest/i.test(text)) {
    const near = [...providers].sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 3);
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'These providers are closest to your location.',
      createdAt: new Date().toISOString(),
      recommendations: near.map(p => {
        const service = services.find(s => s.providerId === p.id)!;
        return {
          providerId: p.id,
          providerName: p.name,
          serviceId: service.id,
          serviceName: service.name,
          time: p.nextAvailable,
          date: tomorrowIso(),
          price: service.price,
          rating: p.rating,
        };
      }),
    };
  }

  if (/sarah/i.test(text)) {
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'Sarah Mitchell has openings tomorrow afternoon at Nova Wellness Studio.',
      createdAt: new Date().toISOString(),
      recommendations: buildMassageRecommendations().slice(0, 2),
    };
  }

  if (/dentist|dental|medical/i.test(text)) {
    const medical = providers.filter(p => p.category === 'Medical').slice(0, 3);
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'Here are strong medical options with upcoming availability.',
      createdAt: new Date().toISOString(),
      recommendations: medical.map(p => {
        const service = services.find(s => s.providerId === p.id)!;
        return {
          providerId: p.id,
          providerName: p.name,
          serviceId: service.id,
          serviceName: service.name,
          time: p.nextAvailable,
          date: tomorrowIso(),
          price: service.price,
          rating: p.rating,
        };
      }),
    };
  }

  if (/consultation|consult/i.test(text)) {
    const consult = services.filter(s => /consult/i.test(s.name)).slice(0, 4);
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'Consultation slots available this week:',
      createdAt: new Date().toISOString(),
      recommendations: consult.map(s => {
        const p = providers.find(pr => pr.id === s.providerId)!;
        return {
          providerId: p.id,
          providerName: p.name,
          serviceId: s.id,
          serviceName: s.name,
          time: '2:00 PM',
          date: '2026-09-10',
          price: s.price,
          rating: p.rating,
        };
      }),
    };
  }

  if (/evening/i.test(text)) {
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'Evening openings still available:',
      createdAt: new Date().toISOString(),
      recommendations: buildMassageRecommendations().map(r => ({
        ...r,
        time: r.time.includes('5') ? '5:00 PM' : '6:00 PM',
      })),
    };
  }

  if (/massage|spa|wellness|tomorrow afternoon/i.test(text)) {
    return {
      id: uid('ai'),
      role: 'assistant',
      text: 'I found 4 solid massage options tomorrow afternoon near you.',
      createdAt: new Date().toISOString(),
      recommendations: buildMassageRecommendations(),
    };
  }

  return {
    id: uid('ai'),
    role: 'assistant',
    text: 'Got it. Here are top-rated services that match what most people book first — pick one or tell me a category.',
    createdAt: new Date().toISOString(),
    recommendations: topProviders(3),
  };
}

export function getInitialAIMessage(): AIMessage {
  return {
    id: 'ai-welcome',
    role: 'assistant',
    text: "Hi Alex,\n\nWhat service are you looking for? I can help you find available times nearby.",
    createdAt: new Date().toISOString(),
  };
}
