import { providers, reviews, services, staffMembers } from '../mock/data';
import { Provider, Review, ServiceCategory, ServiceItem, StaffMember } from '../types';
import { delay } from '../utils/helpers';
import { loadJSON, saveJSON, STORAGE_KEYS } from '../utils/storage';

export type SortOption =
  | 'recommended'
  | 'highest_rated'
  | 'nearest'
  | 'lowest_price';

export interface ProviderFilters {
  category?: ServiceCategory | 'All';
  minRating?: number;
  maxDistance?: number;
  maxPrice?: number;
  query?: string;
  sort?: SortOption;
  favoritesOnly?: boolean;
  favoriteIds?: string[];
}

export async function getProviders(
  filters: ProviderFilters = {},
): Promise<Provider[]> {
  await delay(450);
  let list = [...providers];
  const query = filters.query?.trim().toLowerCase();
  if (query) {
    list = list.filter(
      p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query),
    );
  }
  if (filters.category && filters.category !== 'All') {
    list = list.filter(p => p.category === filters.category);
  }
  if (filters.minRating) {
    list = list.filter(p => p.rating >= filters.minRating!);
  }
  if (filters.maxDistance) {
    list = list.filter(p => p.distanceKm <= filters.maxDistance!);
  }
  if (filters.maxPrice) {
    list = list.filter(p => p.startingPrice <= filters.maxPrice!);
  }
  if (filters.favoritesOnly && filters.favoriteIds) {
    list = list.filter(p => filters.favoriteIds!.includes(p.id));
  }
  switch (filters.sort) {
    case 'highest_rated':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'nearest':
      list.sort((a, b) => a.distanceKm - b.distanceKm);
      break;
    case 'lowest_price':
      list.sort((a, b) => a.startingPrice - b.startingPrice);
      break;
    default:
      list.sort((a, b) => b.reviewCount - a.reviewCount);
  }
  return list;
}

export async function getProviderById(id: string): Promise<Provider | null> {
  await delay(300);
  return providers.find(p => p.id === id) ?? null;
}

export async function getServicesByProvider(
  providerId: string,
): Promise<ServiceItem[]> {
  await delay(250);
  const local = await loadJSON<ServiceItem[] | null>(STORAGE_KEYS.SERVICES, null);
  const source = local ?? services;
  return source.filter(s => s.providerId === providerId);
}

export async function getServiceById(id: string): Promise<ServiceItem | null> {
  await delay(200);
  const local = await loadJSON<ServiceItem[] | null>(STORAGE_KEYS.SERVICES, null);
  const source = local ?? services;
  return source.find(s => s.id === id) ?? null;
}

export async function getStaffByProvider(
  providerId: string,
): Promise<StaffMember[]> {
  await delay(250);
  return staffMembers.filter(s => s.providerId === providerId);
}

export async function getReviewsByProvider(
  providerId: string,
): Promise<Review[]> {
  await delay(250);
  return reviews.filter(r => r.providerId === providerId);
}

export async function getRecommendedProviders(): Promise<Provider[]> {
  await delay(350);
  return providers.slice(0, 6);
}

export async function searchAll(query: string): Promise<{
  providers: Provider[];
  services: ServiceItem[];
}> {
  await delay(400);
  const q = query.trim().toLowerCase();
  return {
    providers: providers.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q),
    ),
    services: services.filter(
      s =>
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q),
    ),
  };
}
