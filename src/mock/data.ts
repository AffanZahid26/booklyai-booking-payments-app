import { Image } from 'react-native';
import {
  AnalyticsData,
  AppNotification,
  Booking,
  Conversation,
  Customer,
  Message,
  PaymentMethod,
  PaymentTransaction,
  Provider,
  Review,
  ServiceItem,
  StaffMember,
  User,
} from '../types';

const affanAvatar =
  Image.resolveAssetSource(require('../../assets/affan-avatar.jpg')).uri;

export const currentUser: User = {
  id: "cus_01",
  name: "Affan",
  email: "demo@booklyai.app",
  phone: "+44 7700 900123",
  avatar: affanAvatar,
  role: "customer",
  memberSince: "2024-03-12"
} as User;

export const providers: Provider[] = [
  {
    id: "prv_01",
    name: "Nova Wellness Studio",
    category: "Wellness",
    description: "Nova Wellness Studio blends restorative therapies with modern wellness science. Expect calm spaces, skilled therapists, and sessions designed around how you want to feel.",
    rating: 4.9,
    reviewCount: 324,
    distanceKm: 1.2,
    startingPrice: 55,
    image: "https://picsum.photos/seed/bookly-hero-1/1200/800",
    avatar: "https://i.pravatar.cc/150?img=2",
    verified: true,
    address: "24 King Street",
    city: "London",
    latitude: 51.5,
    longitude: -0.12,
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "3:30 PM",
    staffIds: [
      "stf_01",
      "stf_02",
      "stf_03"
    ],
    serviceIds: [
      "svc_01",
      "svc_02",
      "svc_03"
    ]
  },
  {
    id: "prv_02",
    name: "Harmony Wellness",
    category: "Wellness",
    description: "Harmony Spa delivers thoughtfully designed beauty experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.8,
    reviewCount: 216,
    distanceKm: 2.4,
    startingPrice: 45,
    image: "https://picsum.photos/seed/bookly-hero-2/1200/800",
    avatar: "https://i.pravatar.cc/150?img=3",
    verified: true,
    address: "21 Queen Avenue",
    city: "Manchester",
    latitude: 51.51,
    longitude: -0.105,
    amenities: [
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "10:30 AM",
    staffIds: [
      "stf_04",
      "stf_05",
      "stf_06"
    ],
    serviceIds: [
      "svc_05",
      "svc_06",
      "svc_07",
      "svc_08",
      "svc_09"
    ]
  },
  {
    id: "prv_03",
    name: "Elite Fitness",
    category: "Fitness",
    description: "Elite Fitness delivers thoughtfully designed fitness experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.9,
    reviewCount: 187,
    distanceKm: 0.9,
    startingPrice: 30,
    image: "https://picsum.photos/seed/bookly-hero-3/1200/800",
    avatar: "https://i.pravatar.cc/150?img=4",
    verified: true,
    address: "22 High Street",
    city: "Bristol",
    latitude: 51.52,
    longitude: -0.09,
    amenities: [
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms",
      "Private Suites"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "11:00 AM",
    staffIds: [
      "stf_07",
      "stf_08",
      "stf_09"
    ],
    serviceIds: [
      "svc_10",
      "svc_11",
      "svc_12",
      "svc_13",
      "svc_14",
      "svc_15"
    ]
  },
  {
    id: "prv_04",
    name: "Luxe Clinic",
    category: "Medical",
    description: "Luxe Clinic delivers thoughtfully designed medical experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.8,
    reviewCount: 131,
    distanceKm: 2,
    startingPrice: 75,
    image: "https://picsum.photos/seed/bookly-hero-4/1200/800",
    avatar: "https://i.pravatar.cc/150?img=5",
    verified: false,
    address: "23 Park Lane",
    city: "Edinburgh",
    latitude: 51.53,
    longitude: -0.075,
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "12:30 PM",
    staffIds: [
      "stf_10",
      "stf_11",
      "stf_12"
    ],
    serviceIds: [
      "svc_16",
      "svc_17",
      "svc_18",
      "svc_19"
    ]
  },
  {
    id: "prv_05",
    name: "Aura Consulting",
    category: "Consulting",
    description: "Aura Consulting delivers thoughtfully designed consulting experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.9,
    reviewCount: 148,
    distanceKm: 2.4,
    startingPrice: 95,
    image: "https://picsum.photos/seed/bookly-hero-5/1200/800",
    avatar: "https://i.pravatar.cc/150?img=6",
    verified: true,
    address: "24 Oxford Road",
    city: "Leeds",
    latitude: 51.54,
    longitude: -0.06,
    amenities: [
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "1:00 PM",
    staffIds: [
      "stf_13",
      "stf_14",
      "stf_15"
    ],
    serviceIds: [
      "svc_20",
      "svc_21",
      "svc_22",
      "svc_23",
      "svc_24"
    ]
  },
  {
    id: "prv_06",
    name: "Zen Care",
    category: "Home Services",
    description: "Zen Care delivers thoughtfully designed home services experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.5,
    reviewCount: 165,
    distanceKm: 2.8,
    startingPrice: 70,
    image: "https://picsum.photos/seed/bookly-hero-6/1200/800",
    avatar: "https://i.pravatar.cc/150?img=7",
    verified: true,
    address: "25 Chapel Street",
    city: "Birmingham",
    latitude: 51.55,
    longitude: -0.045,
    amenities: [
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms",
      "Private Suites"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "2:30 PM",
    staffIds: [
      "stf_16",
      "stf_17",
      "stf_18"
    ],
    serviceIds: [
      "svc_25",
      "svc_26",
      "svc_27",
      "svc_28",
      "svc_29",
      "svc_30"
    ]
  },
  {
    id: "prv_07",
    name: "Prime Collective",
    category: "Wellness",
    description: "Prime Collective delivers thoughtfully designed wellness experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.6,
    reviewCount: 182,
    distanceKm: 3.1,
    startingPrice: 55,
    image: "https://picsum.photos/seed/bookly-hero-7/1200/800",
    avatar: "https://i.pravatar.cc/150?img=8",
    verified: true,
    address: "26 Victoria Road",
    city: "London",
    latitude: 51.56,
    longitude: -0.03,
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "9:00 AM",
    staffIds: [
      "stf_19",
      "stf_20",
      "stf_21"
    ],
    serviceIds: [
      "svc_31",
      "svc_32",
      "svc_33",
      "svc_34"
    ]
  },
  {
    id: "prv_08",
    name: "Cedar Studio",
    category: "Beauty",
    description: "Cedar Studio delivers thoughtfully designed beauty experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.7,
    reviewCount: 199,
    distanceKm: 3.4,
    startingPrice: 25,
    image: "https://picsum.photos/seed/bookly-hero-8/1200/800",
    avatar: "https://i.pravatar.cc/150?img=9",
    verified: false,
    address: "27 Baker Street",
    city: "Manchester",
    latitude: 51.57,
    longitude: -0.015,
    amenities: [
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "10:30 AM",
    staffIds: [
      "stf_22",
      "stf_23",
      "stf_24"
    ],
    serviceIds: [
      "svc_35",
      "svc_36",
      "svc_37",
      "svc_38",
      "svc_39"
    ]
  },
  {
    id: "prv_09",
    name: "Willow Hub",
    category: "Fitness",
    description: "Willow Hub delivers thoughtfully designed fitness experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.8,
    reviewCount: 216,
    distanceKm: 3.8,
    startingPrice: 25,
    image: "https://picsum.photos/seed/bookly-hero-9/1200/800",
    avatar: "https://i.pravatar.cc/150?img=10",
    verified: true,
    address: "28 Bond Street",
    city: "Bristol",
    latitude: 51.58,
    longitude: 0,
    amenities: [
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms",
      "Private Suites"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "11:00 AM",
    staffIds: [
      "stf_25",
      "stf_26",
      "stf_27"
    ],
    serviceIds: [
      "svc_40",
      "svc_41",
      "svc_42",
      "svc_43",
      "svc_44",
      "svc_45"
    ]
  },
  {
    id: "prv_10",
    name: "Summit Centre",
    category: "Medical",
    description: "Summit Centre delivers thoughtfully designed medical experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.9,
    reviewCount: 233,
    distanceKm: 4.2,
    startingPrice: 75,
    image: "https://picsum.photos/seed/bookly-hero-10/1200/800",
    avatar: "https://i.pravatar.cc/150?img=11",
    verified: true,
    address: "29 Church Lane",
    city: "Edinburgh",
    latitude: 51.59,
    longitude: 0.015000000000000013,
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "12:30 PM",
    staffIds: [
      "stf_28",
      "stf_29",
      "stf_30"
    ],
    serviceIds: [
      "svc_46",
      "svc_47",
      "svc_48",
      "svc_49"
    ]
  },
  {
    id: "prv_11",
    name: "Bloom Atelier",
    category: "Consulting",
    description: "Bloom Atelier delivers thoughtfully designed consulting experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.5,
    reviewCount: 250,
    distanceKm: 4.5,
    startingPrice: 95,
    image: "https://picsum.photos/seed/bookly-hero-11/1200/800",
    avatar: "https://i.pravatar.cc/150?img=12",
    verified: true,
    address: "30 King Street",
    city: "Leeds",
    latitude: 51.5,
    longitude: -0.12,
    amenities: [
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "1:00 PM",
    staffIds: [
      "stf_31",
      "stf_32",
      "stf_33"
    ],
    serviceIds: [
      "svc_50",
      "svc_51",
      "svc_52",
      "svc_53",
      "svc_54"
    ]
  },
  {
    id: "prv_12",
    name: "Pulse Lab",
    category: "Home Services",
    description: "Pulse Lab delivers thoughtfully designed home services experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.6,
    reviewCount: 267,
    distanceKm: 4.8,
    startingPrice: 70,
    image: "https://picsum.photos/seed/bookly-hero-12/1200/800",
    avatar: "https://i.pravatar.cc/150?img=13",
    verified: false,
    address: "31 Queen Avenue",
    city: "Birmingham",
    latitude: 51.51,
    longitude: -0.105,
    amenities: [
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms",
      "Private Suites"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "2:30 PM",
    staffIds: [
      "stf_34",
      "stf_35",
      "stf_36"
    ],
    serviceIds: [
      "svc_55",
      "svc_56",
      "svc_57",
      "svc_58",
      "svc_59",
      "svc_60"
    ]
  },
  {
    id: "prv_13",
    name: "Clarity Practice",
    category: "Wellness",
    description: "Clarity Practice delivers thoughtfully designed wellness experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.7,
    reviewCount: 284,
    distanceKm: 5.2,
    startingPrice: 55,
    image: "https://picsum.photos/seed/bookly-hero-13/1200/800",
    avatar: "https://i.pravatar.cc/150?img=14",
    verified: true,
    address: "32 High Street",
    city: "London",
    latitude: 51.52,
    longitude: -0.09,
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "9:00 AM",
    staffIds: [
      "stf_37",
      "stf_38",
      "stf_39"
    ],
    serviceIds: [
      "svc_61",
      "svc_62",
      "svc_63",
      "svc_64"
    ]
  },
  {
    id: "prv_14",
    name: "Forge Lounge",
    category: "Beauty",
    description: "Forge Lounge delivers thoughtfully designed beauty experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.8,
    reviewCount: 301,
    distanceKm: 5.5,
    startingPrice: 25,
    image: "https://picsum.photos/seed/bookly-hero-14/1200/800",
    avatar: "https://i.pravatar.cc/150?img=15",
    verified: true,
    address: "33 Park Lane",
    city: "Manchester",
    latitude: 51.53,
    longitude: -0.075,
    amenities: [
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "10:30 AM",
    staffIds: [
      "stf_40",
      "stf_41",
      "stf_42"
    ],
    serviceIds: [
      "svc_65",
      "svc_66",
      "svc_67",
      "svc_68",
      "svc_69"
    ]
  },
  {
    id: "prv_15",
    name: "Harbor House",
    category: "Fitness",
    description: "Harbor House delivers thoughtfully designed fitness experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.9,
    reviewCount: 318,
    distanceKm: 5.9,
    startingPrice: 25,
    image: "https://picsum.photos/seed/bookly-hero-15/1200/800",
    avatar: "https://i.pravatar.cc/150?img=16",
    verified: true,
    address: "34 Oxford Road",
    city: "Bristol",
    latitude: 51.54,
    longitude: -0.06,
    amenities: [
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms",
      "Private Suites"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "11:00 AM",
    staffIds: [
      "stf_43",
      "stf_44",
      "stf_45"
    ],
    serviceIds: [
      "svc_70",
      "svc_71",
      "svc_72",
      "svc_73",
      "svc_74",
      "svc_75"
    ]
  },
  {
    id: "prv_16",
    name: "Ridge Wellness Studio",
    category: "Medical",
    description: "Ridge Wellness Studio delivers thoughtfully designed medical experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.5,
    reviewCount: 335,
    distanceKm: 0.7,
    startingPrice: 75,
    image: "https://picsum.photos/seed/bookly-hero-16/1200/800",
    avatar: "https://i.pravatar.cc/150?img=17",
    verified: false,
    address: "35 Chapel Street",
    city: "Edinburgh",
    latitude: 51.55,
    longitude: -0.045,
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "12:30 PM",
    staffIds: [
      "stf_46",
      "stf_47",
      "stf_48"
    ],
    serviceIds: [
      "svc_76",
      "svc_77",
      "svc_78",
      "svc_79"
    ]
  },
  {
    id: "prv_17",
    name: "Vivid Spa",
    category: "Consulting",
    description: "Vivid Spa delivers thoughtfully designed consulting experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.6,
    reviewCount: 352,
    distanceKm: 1.1,
    startingPrice: 95,
    image: "https://picsum.photos/seed/bookly-hero-17/1200/800",
    avatar: "https://i.pravatar.cc/150?img=18",
    verified: true,
    address: "36 Victoria Road",
    city: "Leeds",
    latitude: 51.56,
    longitude: -0.03,
    amenities: [
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "1:00 PM",
    staffIds: [
      "stf_49",
      "stf_50",
      "stf_51"
    ],
    serviceIds: [
      "svc_80",
      "svc_81",
      "svc_82",
      "svc_83",
      "svc_84"
    ]
  },
  {
    id: "prv_18",
    name: "Solace Fitness",
    category: "Home Services",
    description: "Solace Fitness delivers thoughtfully designed home services experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.7,
    reviewCount: 369,
    distanceKm: 1.4,
    startingPrice: 70,
    image: "https://picsum.photos/seed/bookly-hero-18/1200/800",
    avatar: "https://i.pravatar.cc/150?img=19",
    verified: true,
    address: "37 Baker Street",
    city: "Birmingham",
    latitude: 51.57,
    longitude: -0.015,
    amenities: [
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms",
      "Private Suites"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "2:30 PM",
    staffIds: [
      "stf_52",
      "stf_53",
      "stf_54"
    ],
    serviceIds: [
      "svc_85",
      "svc_86",
      "svc_87",
      "svc_88",
      "svc_89",
      "svc_90"
    ]
  },
  {
    id: "prv_19",
    name: "Aether Clinic",
    category: "Wellness",
    description: "Aether Clinic delivers thoughtfully designed wellness experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.8,
    reviewCount: 386,
    distanceKm: 1.8,
    startingPrice: 55,
    image: "https://picsum.photos/seed/bookly-hero-19/1200/800",
    avatar: "https://i.pravatar.cc/150?img=20",
    verified: true,
    address: "38 Bond Street",
    city: "London",
    latitude: 51.58,
    longitude: 0,
    amenities: [
      "Free Wi-Fi",
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "9:00 AM",
    staffIds: [
      "stf_55",
      "stf_56",
      "stf_57"
    ],
    serviceIds: [
      "svc_91",
      "svc_92",
      "svc_93",
      "svc_94"
    ]
  },
  {
    id: "prv_20",
    name: "Nimbus Consulting",
    category: "Beauty",
    description: "Nimbus Consulting delivers thoughtfully designed beauty experiences with a focus on quality, comfort, and lasting results.",
    rating: 4.9,
    reviewCount: 403,
    distanceKm: 2.1,
    startingPrice: 25,
    image: "https://picsum.photos/seed/bookly-hero-20/1200/800",
    avatar: "https://i.pravatar.cc/150?img=21",
    verified: false,
    address: "39 Church Lane",
    city: "Manchester",
    latitude: 51.59,
    longitude: 0.015000000000000013,
    amenities: [
      "Parking",
      "Wheelchair Access",
      "Air Conditioning",
      "Refreshments",
      "Changing Rooms"
    ],
    openingHours: [
      {
        day: "Mon",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Tue",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Wed",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Thu",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Fri",
        open: "09:00",
        close: "19:00",
        closed: false
      },
      {
        day: "Sat",
        open: "09:00",
        close: "16:00",
        closed: false
      },
      {
        day: "Sun",
        open: "Closed",
        close: "Closed",
        closed: true
      }
    ],
    nextAvailable: "10:30 AM",
    staffIds: [
      "stf_58",
      "stf_59",
      "stf_60"
    ],
    serviceIds: [
      "svc_95",
      "svc_96",
      "svc_97",
      "svc_98",
      "svc_99"
    ]
  }
] as Provider[];

export const services: ServiceItem[] = [
  {
    id: "svc_01",
    providerId: "prv_01",
    name: "Deep Tissue Massage",
    description: "Targeted pressure to release deep muscle tension and improve mobility.",
    durationMin: 60,
    price: 75,
    category: "Wellness",
    staffIds: [
      "stf_01",
      "stf_02"
    ]
  },
  {
    id: "svc_02",
    providerId: "prv_01",
    name: "Relaxation Massage",
    description: "Gentle flowing techniques to calm the mind and ease everyday stress.",
    durationMin: 45,
    price: 55,
    category: "Wellness",
    staffIds: [
      "stf_01",
      "stf_03"
    ]
  },
  {
    id: "svc_03",
    providerId: "prv_01",
    name: "Consultation",
    description: "A focused wellness consultation to map goals and recommended care.",
    durationMin: 30,
    price: 40,
    category: "Wellness",
    staffIds: [
      "stf_03"
    ]
  },
  {
    id: "svc_05",
    providerId: "prv_02",
    name: "Signature Facial",
    description: "Professional signature facial tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 85,
    category: "Beauty",
    staffIds: [
      "stf_04",
      "stf_05"
    ]
  },
  {
    id: "svc_06",
    providerId: "prv_02",
    name: "Gel Manicure",
    description: "Professional gel manicure tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 40,
    category: "Beauty",
    staffIds: [
      "stf_04",
      "stf_05",
      "stf_06"
    ]
  },
  {
    id: "svc_07",
    providerId: "prv_02",
    name: "Haircut & Style",
    description: "Professional haircut & style tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 55,
    category: "Beauty",
    staffIds: [
      "stf_04",
      "stf_05"
    ]
  },
  {
    id: "svc_08",
    providerId: "prv_02",
    name: "Brow Shaping",
    description: "Professional brow shaping tailored to your goals with experienced specialists.",
    durationMin: 20,
    price: 25,
    category: "Beauty",
    staffIds: [
      "stf_04",
      "stf_05",
      "stf_06"
    ]
  },
  {
    id: "svc_09",
    providerId: "prv_02",
    name: "Hydrating Facial",
    description: "Professional hydrating facial tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 70,
    category: "Beauty",
    staffIds: [
      "stf_04",
      "stf_05"
    ]
  },
  {
    id: "svc_10",
    providerId: "prv_03",
    name: "Personal Training",
    description: "Professional personal training tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 55,
    category: "Fitness",
    staffIds: [
      "stf_07",
      "stf_08"
    ]
  },
  {
    id: "svc_11",
    providerId: "prv_03",
    name: "HIIT Session",
    description: "Professional hiit session tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 35,
    category: "Fitness",
    staffIds: [
      "stf_07",
      "stf_08",
      "stf_09"
    ]
  },
  {
    id: "svc_12",
    providerId: "prv_03",
    name: "Yoga Class",
    description: "Professional yoga class tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 25,
    category: "Fitness",
    staffIds: [
      "stf_07",
      "stf_08"
    ]
  },
  {
    id: "svc_13",
    providerId: "prv_03",
    name: "Strength Coaching",
    description: "Professional strength coaching tailored to your goals with experienced specialists.",
    durationMin: 55,
    price: 60,
    category: "Fitness",
    staffIds: [
      "stf_07",
      "stf_08",
      "stf_09"
    ]
  },
  {
    id: "svc_14",
    providerId: "prv_03",
    name: "Mobility Session",
    description: "Professional mobility session tailored to your goals with experienced specialists.",
    durationMin: 40,
    price: 40,
    category: "Fitness",
    staffIds: [
      "stf_07",
      "stf_08"
    ]
  },
  {
    id: "svc_15",
    providerId: "prv_03",
    name: "Nutrition Consult",
    description: "Professional nutrition consult tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 50,
    category: "Fitness",
    staffIds: [
      "stf_07",
      "stf_08",
      "stf_09"
    ]
  },
  {
    id: "svc_16",
    providerId: "prv_04",
    name: "General Checkup",
    description: "Professional general checkup tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 90,
    category: "Medical",
    staffIds: [
      "stf_10",
      "stf_11"
    ]
  },
  {
    id: "svc_17",
    providerId: "prv_04",
    name: "Dental Cleaning",
    description: "Professional dental cleaning tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 110,
    category: "Medical",
    staffIds: [
      "stf_10",
      "stf_11",
      "stf_12"
    ]
  },
  {
    id: "svc_18",
    providerId: "prv_04",
    name: "Physiotherapy",
    description: "Professional physiotherapy tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 75,
    category: "Medical",
    staffIds: [
      "stf_10",
      "stf_11"
    ]
  },
  {
    id: "svc_19",
    providerId: "prv_04",
    name: "Dermatology Consult",
    description: "Professional dermatology consult tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 120,
    category: "Medical",
    staffIds: [
      "stf_10",
      "stf_11",
      "stf_12"
    ]
  },
  {
    id: "svc_20",
    providerId: "prv_05",
    name: "Strategy Session",
    description: "Professional strategy session tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 150,
    category: "Consulting",
    staffIds: [
      "stf_13",
      "stf_14"
    ]
  },
  {
    id: "svc_21",
    providerId: "prv_05",
    name: "Career Coaching",
    description: "Professional career coaching tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 95,
    category: "Consulting",
    staffIds: [
      "stf_13",
      "stf_14",
      "stf_15"
    ]
  },
  {
    id: "svc_22",
    providerId: "prv_05",
    name: "Financial Review",
    description: "Professional financial review tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 120,
    category: "Consulting",
    staffIds: [
      "stf_13",
      "stf_14"
    ]
  },
  {
    id: "svc_23",
    providerId: "prv_05",
    name: "Brand Workshop",
    description: "Professional brand workshop tailored to your goals with experienced specialists.",
    durationMin: 90,
    price: 180,
    category: "Consulting",
    staffIds: [
      "stf_13",
      "stf_14",
      "stf_15"
    ]
  },
  {
    id: "svc_24",
    providerId: "prv_05",
    name: "1:1 Mentoring",
    description: "Professional 1:1 mentoring tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 110,
    category: "Consulting",
    staffIds: [
      "stf_13",
      "stf_14"
    ]
  },
  {
    id: "svc_25",
    providerId: "prv_06",
    name: "Home Cleaning",
    description: "Professional home cleaning tailored to your goals with experienced specialists.",
    durationMin: 120,
    price: 80,
    category: "Home Services",
    staffIds: [
      "stf_16",
      "stf_17"
    ]
  },
  {
    id: "svc_26",
    providerId: "prv_06",
    name: "Appliance Repair",
    description: "Professional appliance repair tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 95,
    category: "Home Services",
    staffIds: [
      "stf_16",
      "stf_17",
      "stf_18"
    ]
  },
  {
    id: "svc_27",
    providerId: "prv_06",
    name: "Garden Maintenance",
    description: "Professional garden maintenance tailored to your goals with experienced specialists.",
    durationMin: 90,
    price: 70,
    category: "Home Services",
    staffIds: [
      "stf_16",
      "stf_17"
    ]
  },
  {
    id: "svc_28",
    providerId: "prv_06",
    name: "Handyman Visit",
    description: "Professional handyman visit tailored to your goals with experienced specialists.",
    durationMin: 75,
    price: 85,
    category: "Home Services",
    staffIds: [
      "stf_16",
      "stf_17",
      "stf_18"
    ]
  },
  {
    id: "svc_29",
    providerId: "prv_06",
    name: "Deep Clean",
    description: "Professional deep clean tailored to your goals with experienced specialists.",
    durationMin: 180,
    price: 140,
    category: "Home Services",
    staffIds: [
      "stf_16",
      "stf_17"
    ]
  },
  {
    id: "svc_30",
    providerId: "prv_06",
    name: "Plumbing Check",
    description: "Professional plumbing check tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 100,
    category: "Home Services",
    staffIds: [
      "stf_16",
      "stf_17",
      "stf_18"
    ]
  },
  {
    id: "svc_31",
    providerId: "prv_07",
    name: "Deep Tissue Massage",
    description: "Professional deep tissue massage tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 75,
    category: "Wellness",
    staffIds: [
      "stf_19",
      "stf_20"
    ]
  },
  {
    id: "svc_32",
    providerId: "prv_07",
    name: "Relaxation Massage",
    description: "Professional relaxation massage tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 55,
    category: "Wellness",
    staffIds: [
      "stf_19",
      "stf_20",
      "stf_21"
    ]
  },
  {
    id: "svc_33",
    providerId: "prv_07",
    name: "Hot Stone Therapy",
    description: "Professional hot stone therapy tailored to your goals with experienced specialists.",
    durationMin: 75,
    price: 90,
    category: "Wellness",
    staffIds: [
      "stf_19",
      "stf_20"
    ]
  },
  {
    id: "svc_34",
    providerId: "prv_07",
    name: "Aromatherapy Session",
    description: "Professional aromatherapy session tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 65,
    category: "Wellness",
    staffIds: [
      "stf_19",
      "stf_20",
      "stf_21"
    ]
  },
  {
    id: "svc_35",
    providerId: "prv_08",
    name: "Signature Facial",
    description: "Professional signature facial tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 85,
    category: "Beauty",
    staffIds: [
      "stf_22",
      "stf_23"
    ]
  },
  {
    id: "svc_36",
    providerId: "prv_08",
    name: "Gel Manicure",
    description: "Professional gel manicure tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 40,
    category: "Beauty",
    staffIds: [
      "stf_22",
      "stf_23",
      "stf_24"
    ]
  },
  {
    id: "svc_37",
    providerId: "prv_08",
    name: "Haircut & Style",
    description: "Professional haircut & style tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 55,
    category: "Beauty",
    staffIds: [
      "stf_22",
      "stf_23"
    ]
  },
  {
    id: "svc_38",
    providerId: "prv_08",
    name: "Brow Shaping",
    description: "Professional brow shaping tailored to your goals with experienced specialists.",
    durationMin: 20,
    price: 25,
    category: "Beauty",
    staffIds: [
      "stf_22",
      "stf_23",
      "stf_24"
    ]
  },
  {
    id: "svc_39",
    providerId: "prv_08",
    name: "Hydrating Facial",
    description: "Professional hydrating facial tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 70,
    category: "Beauty",
    staffIds: [
      "stf_22",
      "stf_23"
    ]
  },
  {
    id: "svc_40",
    providerId: "prv_09",
    name: "Personal Training",
    description: "Professional personal training tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 55,
    category: "Fitness",
    staffIds: [
      "stf_25",
      "stf_26"
    ]
  },
  {
    id: "svc_41",
    providerId: "prv_09",
    name: "HIIT Session",
    description: "Professional hiit session tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 35,
    category: "Fitness",
    staffIds: [
      "stf_25",
      "stf_26",
      "stf_27"
    ]
  },
  {
    id: "svc_42",
    providerId: "prv_09",
    name: "Yoga Class",
    description: "Professional yoga class tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 25,
    category: "Fitness",
    staffIds: [
      "stf_25",
      "stf_26"
    ]
  },
  {
    id: "svc_43",
    providerId: "prv_09",
    name: "Strength Coaching",
    description: "Professional strength coaching tailored to your goals with experienced specialists.",
    durationMin: 55,
    price: 60,
    category: "Fitness",
    staffIds: [
      "stf_25",
      "stf_26",
      "stf_27"
    ]
  },
  {
    id: "svc_44",
    providerId: "prv_09",
    name: "Mobility Session",
    description: "Professional mobility session tailored to your goals with experienced specialists.",
    durationMin: 40,
    price: 40,
    category: "Fitness",
    staffIds: [
      "stf_25",
      "stf_26"
    ]
  },
  {
    id: "svc_45",
    providerId: "prv_09",
    name: "Nutrition Consult",
    description: "Professional nutrition consult tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 50,
    category: "Fitness",
    staffIds: [
      "stf_25",
      "stf_26",
      "stf_27"
    ]
  },
  {
    id: "svc_46",
    providerId: "prv_10",
    name: "General Checkup",
    description: "Professional general checkup tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 90,
    category: "Medical",
    staffIds: [
      "stf_28",
      "stf_29"
    ]
  },
  {
    id: "svc_47",
    providerId: "prv_10",
    name: "Dental Cleaning",
    description: "Professional dental cleaning tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 110,
    category: "Medical",
    staffIds: [
      "stf_28",
      "stf_29",
      "stf_30"
    ]
  },
  {
    id: "svc_48",
    providerId: "prv_10",
    name: "Physiotherapy",
    description: "Professional physiotherapy tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 75,
    category: "Medical",
    staffIds: [
      "stf_28",
      "stf_29"
    ]
  },
  {
    id: "svc_49",
    providerId: "prv_10",
    name: "Dermatology Consult",
    description: "Professional dermatology consult tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 120,
    category: "Medical",
    staffIds: [
      "stf_28",
      "stf_29",
      "stf_30"
    ]
  },
  {
    id: "svc_50",
    providerId: "prv_11",
    name: "Strategy Session",
    description: "Professional strategy session tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 150,
    category: "Consulting",
    staffIds: [
      "stf_31",
      "stf_32"
    ]
  },
  {
    id: "svc_51",
    providerId: "prv_11",
    name: "Career Coaching",
    description: "Professional career coaching tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 95,
    category: "Consulting",
    staffIds: [
      "stf_31",
      "stf_32",
      "stf_33"
    ]
  },
  {
    id: "svc_52",
    providerId: "prv_11",
    name: "Financial Review",
    description: "Professional financial review tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 120,
    category: "Consulting",
    staffIds: [
      "stf_31",
      "stf_32"
    ]
  },
  {
    id: "svc_53",
    providerId: "prv_11",
    name: "Brand Workshop",
    description: "Professional brand workshop tailored to your goals with experienced specialists.",
    durationMin: 90,
    price: 180,
    category: "Consulting",
    staffIds: [
      "stf_31",
      "stf_32",
      "stf_33"
    ]
  },
  {
    id: "svc_54",
    providerId: "prv_11",
    name: "1:1 Mentoring",
    description: "Professional 1:1 mentoring tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 110,
    category: "Consulting",
    staffIds: [
      "stf_31",
      "stf_32"
    ]
  },
  {
    id: "svc_55",
    providerId: "prv_12",
    name: "Home Cleaning",
    description: "Professional home cleaning tailored to your goals with experienced specialists.",
    durationMin: 120,
    price: 80,
    category: "Home Services",
    staffIds: [
      "stf_34",
      "stf_35"
    ]
  },
  {
    id: "svc_56",
    providerId: "prv_12",
    name: "Appliance Repair",
    description: "Professional appliance repair tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 95,
    category: "Home Services",
    staffIds: [
      "stf_34",
      "stf_35",
      "stf_36"
    ]
  },
  {
    id: "svc_57",
    providerId: "prv_12",
    name: "Garden Maintenance",
    description: "Professional garden maintenance tailored to your goals with experienced specialists.",
    durationMin: 90,
    price: 70,
    category: "Home Services",
    staffIds: [
      "stf_34",
      "stf_35"
    ]
  },
  {
    id: "svc_58",
    providerId: "prv_12",
    name: "Handyman Visit",
    description: "Professional handyman visit tailored to your goals with experienced specialists.",
    durationMin: 75,
    price: 85,
    category: "Home Services",
    staffIds: [
      "stf_34",
      "stf_35",
      "stf_36"
    ]
  },
  {
    id: "svc_59",
    providerId: "prv_12",
    name: "Deep Clean",
    description: "Professional deep clean tailored to your goals with experienced specialists.",
    durationMin: 180,
    price: 140,
    category: "Home Services",
    staffIds: [
      "stf_34",
      "stf_35"
    ]
  },
  {
    id: "svc_60",
    providerId: "prv_12",
    name: "Plumbing Check",
    description: "Professional plumbing check tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 100,
    category: "Home Services",
    staffIds: [
      "stf_34",
      "stf_35",
      "stf_36"
    ]
  },
  {
    id: "svc_61",
    providerId: "prv_13",
    name: "Deep Tissue Massage",
    description: "Professional deep tissue massage tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 75,
    category: "Wellness",
    staffIds: [
      "stf_37",
      "stf_38"
    ]
  },
  {
    id: "svc_62",
    providerId: "prv_13",
    name: "Relaxation Massage",
    description: "Professional relaxation massage tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 55,
    category: "Wellness",
    staffIds: [
      "stf_37",
      "stf_38",
      "stf_39"
    ]
  },
  {
    id: "svc_63",
    providerId: "prv_13",
    name: "Hot Stone Therapy",
    description: "Professional hot stone therapy tailored to your goals with experienced specialists.",
    durationMin: 75,
    price: 90,
    category: "Wellness",
    staffIds: [
      "stf_37",
      "stf_38"
    ]
  },
  {
    id: "svc_64",
    providerId: "prv_13",
    name: "Aromatherapy Session",
    description: "Professional aromatherapy session tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 65,
    category: "Wellness",
    staffIds: [
      "stf_37",
      "stf_38",
      "stf_39"
    ]
  },
  {
    id: "svc_65",
    providerId: "prv_14",
    name: "Signature Facial",
    description: "Professional signature facial tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 85,
    category: "Beauty",
    staffIds: [
      "stf_40",
      "stf_41"
    ]
  },
  {
    id: "svc_66",
    providerId: "prv_14",
    name: "Gel Manicure",
    description: "Professional gel manicure tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 40,
    category: "Beauty",
    staffIds: [
      "stf_40",
      "stf_41",
      "stf_42"
    ]
  },
  {
    id: "svc_67",
    providerId: "prv_14",
    name: "Haircut & Style",
    description: "Professional haircut & style tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 55,
    category: "Beauty",
    staffIds: [
      "stf_40",
      "stf_41"
    ]
  },
  {
    id: "svc_68",
    providerId: "prv_14",
    name: "Brow Shaping",
    description: "Professional brow shaping tailored to your goals with experienced specialists.",
    durationMin: 20,
    price: 25,
    category: "Beauty",
    staffIds: [
      "stf_40",
      "stf_41",
      "stf_42"
    ]
  },
  {
    id: "svc_69",
    providerId: "prv_14",
    name: "Hydrating Facial",
    description: "Professional hydrating facial tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 70,
    category: "Beauty",
    staffIds: [
      "stf_40",
      "stf_41"
    ]
  },
  {
    id: "svc_70",
    providerId: "prv_15",
    name: "Personal Training",
    description: "Professional personal training tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 55,
    category: "Fitness",
    staffIds: [
      "stf_43",
      "stf_44"
    ]
  },
  {
    id: "svc_71",
    providerId: "prv_15",
    name: "HIIT Session",
    description: "Professional hiit session tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 35,
    category: "Fitness",
    staffIds: [
      "stf_43",
      "stf_44",
      "stf_45"
    ]
  },
  {
    id: "svc_72",
    providerId: "prv_15",
    name: "Yoga Class",
    description: "Professional yoga class tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 25,
    category: "Fitness",
    staffIds: [
      "stf_43",
      "stf_44"
    ]
  },
  {
    id: "svc_73",
    providerId: "prv_15",
    name: "Strength Coaching",
    description: "Professional strength coaching tailored to your goals with experienced specialists.",
    durationMin: 55,
    price: 60,
    category: "Fitness",
    staffIds: [
      "stf_43",
      "stf_44",
      "stf_45"
    ]
  },
  {
    id: "svc_74",
    providerId: "prv_15",
    name: "Mobility Session",
    description: "Professional mobility session tailored to your goals with experienced specialists.",
    durationMin: 40,
    price: 40,
    category: "Fitness",
    staffIds: [
      "stf_43",
      "stf_44"
    ]
  },
  {
    id: "svc_75",
    providerId: "prv_15",
    name: "Nutrition Consult",
    description: "Professional nutrition consult tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 50,
    category: "Fitness",
    staffIds: [
      "stf_43",
      "stf_44",
      "stf_45"
    ]
  },
  {
    id: "svc_76",
    providerId: "prv_16",
    name: "General Checkup",
    description: "Professional general checkup tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 90,
    category: "Medical",
    staffIds: [
      "stf_46",
      "stf_47"
    ]
  },
  {
    id: "svc_77",
    providerId: "prv_16",
    name: "Dental Cleaning",
    description: "Professional dental cleaning tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 110,
    category: "Medical",
    staffIds: [
      "stf_46",
      "stf_47",
      "stf_48"
    ]
  },
  {
    id: "svc_78",
    providerId: "prv_16",
    name: "Physiotherapy",
    description: "Professional physiotherapy tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 75,
    category: "Medical",
    staffIds: [
      "stf_46",
      "stf_47"
    ]
  },
  {
    id: "svc_79",
    providerId: "prv_16",
    name: "Dermatology Consult",
    description: "Professional dermatology consult tailored to your goals with experienced specialists.",
    durationMin: 30,
    price: 120,
    category: "Medical",
    staffIds: [
      "stf_46",
      "stf_47",
      "stf_48"
    ]
  },
  {
    id: "svc_80",
    providerId: "prv_17",
    name: "Strategy Session",
    description: "Professional strategy session tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 150,
    category: "Consulting",
    staffIds: [
      "stf_49",
      "stf_50"
    ]
  },
  {
    id: "svc_81",
    providerId: "prv_17",
    name: "Career Coaching",
    description: "Professional career coaching tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 95,
    category: "Consulting",
    staffIds: [
      "stf_49",
      "stf_50",
      "stf_51"
    ]
  },
  {
    id: "svc_82",
    providerId: "prv_17",
    name: "Financial Review",
    description: "Professional financial review tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 120,
    category: "Consulting",
    staffIds: [
      "stf_49",
      "stf_50"
    ]
  },
  {
    id: "svc_83",
    providerId: "prv_17",
    name: "Brand Workshop",
    description: "Professional brand workshop tailored to your goals with experienced specialists.",
    durationMin: 90,
    price: 180,
    category: "Consulting",
    staffIds: [
      "stf_49",
      "stf_50",
      "stf_51"
    ]
  },
  {
    id: "svc_84",
    providerId: "prv_17",
    name: "1:1 Mentoring",
    description: "Professional 1:1 mentoring tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 110,
    category: "Consulting",
    staffIds: [
      "stf_49",
      "stf_50"
    ]
  },
  {
    id: "svc_85",
    providerId: "prv_18",
    name: "Home Cleaning",
    description: "Professional home cleaning tailored to your goals with experienced specialists.",
    durationMin: 120,
    price: 80,
    category: "Home Services",
    staffIds: [
      "stf_52",
      "stf_53"
    ]
  },
  {
    id: "svc_86",
    providerId: "prv_18",
    name: "Appliance Repair",
    description: "Professional appliance repair tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 95,
    category: "Home Services",
    staffIds: [
      "stf_52",
      "stf_53",
      "stf_54"
    ]
  },
  {
    id: "svc_87",
    providerId: "prv_18",
    name: "Garden Maintenance",
    description: "Professional garden maintenance tailored to your goals with experienced specialists.",
    durationMin: 90,
    price: 70,
    category: "Home Services",
    staffIds: [
      "stf_52",
      "stf_53"
    ]
  },
  {
    id: "svc_88",
    providerId: "prv_18",
    name: "Handyman Visit",
    description: "Professional handyman visit tailored to your goals with experienced specialists.",
    durationMin: 75,
    price: 85,
    category: "Home Services",
    staffIds: [
      "stf_52",
      "stf_53",
      "stf_54"
    ]
  },
  {
    id: "svc_89",
    providerId: "prv_18",
    name: "Deep Clean",
    description: "Professional deep clean tailored to your goals with experienced specialists.",
    durationMin: 180,
    price: 140,
    category: "Home Services",
    staffIds: [
      "stf_52",
      "stf_53"
    ]
  },
  {
    id: "svc_90",
    providerId: "prv_18",
    name: "Plumbing Check",
    description: "Professional plumbing check tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 100,
    category: "Home Services",
    staffIds: [
      "stf_52",
      "stf_53",
      "stf_54"
    ]
  },
  {
    id: "svc_91",
    providerId: "prv_19",
    name: "Deep Tissue Massage",
    description: "Professional deep tissue massage tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 75,
    category: "Wellness",
    staffIds: [
      "stf_55",
      "stf_56"
    ]
  },
  {
    id: "svc_92",
    providerId: "prv_19",
    name: "Relaxation Massage",
    description: "Professional relaxation massage tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 55,
    category: "Wellness",
    staffIds: [
      "stf_55",
      "stf_56",
      "stf_57"
    ]
  },
  {
    id: "svc_93",
    providerId: "prv_19",
    name: "Hot Stone Therapy",
    description: "Professional hot stone therapy tailored to your goals with experienced specialists.",
    durationMin: 75,
    price: 90,
    category: "Wellness",
    staffIds: [
      "stf_55",
      "stf_56"
    ]
  },
  {
    id: "svc_94",
    providerId: "prv_19",
    name: "Aromatherapy Session",
    description: "Professional aromatherapy session tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 65,
    category: "Wellness",
    staffIds: [
      "stf_55",
      "stf_56",
      "stf_57"
    ]
  },
  {
    id: "svc_95",
    providerId: "prv_20",
    name: "Signature Facial",
    description: "Professional signature facial tailored to your goals with experienced specialists.",
    durationMin: 60,
    price: 85,
    category: "Beauty",
    staffIds: [
      "stf_58",
      "stf_59"
    ]
  },
  {
    id: "svc_96",
    providerId: "prv_20",
    name: "Gel Manicure",
    description: "Professional gel manicure tailored to your goals with experienced specialists.",
    durationMin: 45,
    price: 40,
    category: "Beauty",
    staffIds: [
      "stf_58",
      "stf_59",
      "stf_60"
    ]
  },
  {
    id: "svc_97",
    providerId: "prv_20",
    name: "Haircut & Style",
    description: "Professional haircut & style tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 55,
    category: "Beauty",
    staffIds: [
      "stf_58",
      "stf_59"
    ]
  },
  {
    id: "svc_98",
    providerId: "prv_20",
    name: "Brow Shaping",
    description: "Professional brow shaping tailored to your goals with experienced specialists.",
    durationMin: 20,
    price: 25,
    category: "Beauty",
    staffIds: [
      "stf_58",
      "stf_59",
      "stf_60"
    ]
  },
  {
    id: "svc_99",
    providerId: "prv_20",
    name: "Hydrating Facial",
    description: "Professional hydrating facial tailored to your goals with experienced specialists.",
    durationMin: 50,
    price: 70,
    category: "Beauty",
    staffIds: [
      "stf_58",
      "stf_59"
    ]
  }
] as ServiceItem[];

export const staffMembers: StaffMember[] = [
  {
    id: "stf_01",
    providerId: "prv_01",
    name: "Sarah Mitchell",
    role: "Lead Therapist",
    specialty: "Massage Therapist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=22",
    appointmentsToday: 3,
    available: false
  },
  {
    id: "stf_02",
    providerId: "prv_01",
    name: "James Wilson",
    role: "Senior Therapist",
    specialty: "Physiotherapist",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=23",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_03",
    providerId: "prv_01",
    name: "Emma Davis",
    role: "Consultant",
    specialty: "Wellness Consultant",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=24",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_04",
    providerId: "prv_02",
    name: "Emma Clark",
    role: "Lead Specialist",
    specialty: "Physiotherapist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=25",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_05",
    providerId: "prv_02",
    name: "Oliver Lewis",
    role: "Senior Specialist",
    specialty: "Wellness Consultant",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=26",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_06",
    providerId: "prv_02",
    name: "Sophia Walker",
    role: "Specialist",
    specialty: "Personal Trainer",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=27",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_07",
    providerId: "prv_03",
    name: "Liam Hall",
    role: "Lead Specialist",
    specialty: "Wellness Consultant",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=28",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_08",
    providerId: "prv_03",
    name: "Olivia Allen",
    role: "Senior Specialist",
    specialty: "Personal Trainer",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=29",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_09",
    providerId: "prv_03",
    name: "Noah Young",
    role: "Specialist",
    specialty: "Dermatologist",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=30",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_10",
    providerId: "prv_04",
    name: "Ava King",
    role: "Lead Specialist",
    specialty: "Personal Trainer",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=31",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_11",
    providerId: "prv_04",
    name: "Ethan Wright",
    role: "Senior Specialist",
    specialty: "Dermatologist",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=32",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_12",
    providerId: "prv_04",
    name: "Mia Scott",
    role: "Specialist",
    specialty: "Stylist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=33",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_13",
    providerId: "prv_05",
    name: "Lucas Green",
    role: "Lead Specialist",
    specialty: "Dermatologist",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=34",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_14",
    providerId: "prv_05",
    name: "Isla Baker",
    role: "Senior Specialist",
    specialty: "Stylist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=35",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_15",
    providerId: "prv_05",
    name: "Mason Adams",
    role: "Specialist",
    specialty: "Career Coach",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=36",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_16",
    providerId: "prv_06",
    name: "Amelia Nelson",
    role: "Lead Specialist",
    specialty: "Stylist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=37",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_17",
    providerId: "prv_06",
    name: "Logan Carter",
    role: "Senior Specialist",
    specialty: "Career Coach",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=38",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_18",
    providerId: "prv_06",
    name: "Harper Mitchell",
    role: "Specialist",
    specialty: "Dental Hygienist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=39",
    appointmentsToday: 4,
    available: false
  },
  {
    id: "stf_19",
    providerId: "prv_07",
    name: "Jack Perez",
    role: "Lead Specialist",
    specialty: "Career Coach",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=40",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_20",
    providerId: "prv_07",
    name: "Chloe Roberts",
    role: "Senior Specialist",
    specialty: "Dental Hygienist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=41",
    appointmentsToday: 4,
    available: false
  },
  {
    id: "stf_21",
    providerId: "prv_07",
    name: "Harry Turner",
    role: "Specialist",
    specialty: "Yoga Instructor",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=42",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_22",
    providerId: "prv_08",
    name: "Grace Phillips",
    role: "Lead Specialist",
    specialty: "Dental Hygienist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=43",
    appointmentsToday: 4,
    available: false
  },
  {
    id: "stf_23",
    providerId: "prv_08",
    name: "Leo Campbell",
    role: "Senior Specialist",
    specialty: "Yoga Instructor",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=44",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_24",
    providerId: "prv_08",
    name: "Ella Parker",
    role: "Specialist",
    specialty: "Esthetician",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=45",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_25",
    providerId: "prv_09",
    name: "Charlie Evans",
    role: "Lead Specialist",
    specialty: "Yoga Instructor",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=46",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_26",
    providerId: "prv_09",
    name: "Lily Johnson",
    role: "Senior Specialist",
    specialty: "Esthetician",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=47",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_27",
    providerId: "prv_09",
    name: "Oscar Mitchell",
    role: "Specialist",
    specialty: "Massage Therapist",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=48",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_28",
    providerId: "prv_10",
    name: "Freya Wilson",
    role: "Lead Specialist",
    specialty: "Esthetician",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=49",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_29",
    providerId: "prv_10",
    name: "George Davis",
    role: "Senior Specialist",
    specialty: "Massage Therapist",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=50",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_30",
    providerId: "prv_10",
    name: "Poppy Thompson",
    role: "Specialist",
    specialty: "Physiotherapist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=51",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_31",
    providerId: "prv_11",
    name: "Alex Anderson",
    role: "Lead Specialist",
    specialty: "Massage Therapist",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=52",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_32",
    providerId: "prv_11",
    name: "Sarah Brown",
    role: "Senior Specialist",
    specialty: "Physiotherapist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=53",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_33",
    providerId: "prv_11",
    name: "James Taylor",
    role: "Specialist",
    specialty: "Wellness Consultant",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=54",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_34",
    providerId: "prv_12",
    name: "Emma Clark",
    role: "Lead Specialist",
    specialty: "Physiotherapist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=55",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_35",
    providerId: "prv_12",
    name: "Oliver Lewis",
    role: "Senior Specialist",
    specialty: "Wellness Consultant",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=56",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_36",
    providerId: "prv_12",
    name: "Sophia Walker",
    role: "Specialist",
    specialty: "Personal Trainer",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=57",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_37",
    providerId: "prv_13",
    name: "Liam Hall",
    role: "Lead Specialist",
    specialty: "Wellness Consultant",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=58",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_38",
    providerId: "prv_13",
    name: "Olivia Allen",
    role: "Senior Specialist",
    specialty: "Personal Trainer",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=59",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_39",
    providerId: "prv_13",
    name: "Noah Young",
    role: "Specialist",
    specialty: "Dermatologist",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=60",
    appointmentsToday: 5,
    available: false
  },
  {
    id: "stf_40",
    providerId: "prv_14",
    name: "Ava King",
    role: "Lead Specialist",
    specialty: "Personal Trainer",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=61",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_41",
    providerId: "prv_14",
    name: "Ethan Wright",
    role: "Senior Specialist",
    specialty: "Dermatologist",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=62",
    appointmentsToday: 5,
    available: false
  },
  {
    id: "stf_42",
    providerId: "prv_14",
    name: "Mia Scott",
    role: "Specialist",
    specialty: "Stylist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=63",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_43",
    providerId: "prv_15",
    name: "Lucas Green",
    role: "Lead Specialist",
    specialty: "Dermatologist",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=64",
    appointmentsToday: 5,
    available: false
  },
  {
    id: "stf_44",
    providerId: "prv_15",
    name: "Isla Baker",
    role: "Senior Specialist",
    specialty: "Stylist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=65",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_45",
    providerId: "prv_15",
    name: "Mason Adams",
    role: "Specialist",
    specialty: "Career Coach",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=66",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_46",
    providerId: "prv_16",
    name: "Amelia Nelson",
    role: "Lead Specialist",
    specialty: "Stylist",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=67",
    appointmentsToday: 6,
    available: true
  },
  {
    id: "stf_47",
    providerId: "prv_16",
    name: "Logan Carter",
    role: "Senior Specialist",
    specialty: "Career Coach",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=68",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_48",
    providerId: "prv_16",
    name: "Harper Mitchell",
    role: "Specialist",
    specialty: "Dental Hygienist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=69",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_49",
    providerId: "prv_17",
    name: "Jack Perez",
    role: "Lead Specialist",
    specialty: "Career Coach",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=70",
    appointmentsToday: 7,
    available: true
  },
  {
    id: "stf_50",
    providerId: "prv_17",
    name: "Chloe Roberts",
    role: "Senior Specialist",
    specialty: "Dental Hygienist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=1",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_51",
    providerId: "prv_17",
    name: "Harry Turner",
    role: "Specialist",
    specialty: "Yoga Instructor",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=2",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_52",
    providerId: "prv_18",
    name: "Grace Phillips",
    role: "Lead Specialist",
    specialty: "Dental Hygienist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=3",
    appointmentsToday: 8,
    available: true
  },
  {
    id: "stf_53",
    providerId: "prv_18",
    name: "Leo Campbell",
    role: "Senior Specialist",
    specialty: "Yoga Instructor",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=4",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_54",
    providerId: "prv_18",
    name: "Ella Parker",
    role: "Specialist",
    specialty: "Esthetician",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=5",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_55",
    providerId: "prv_19",
    name: "Charlie Evans",
    role: "Lead Specialist",
    specialty: "Yoga Instructor",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/150?img=6",
    appointmentsToday: 3,
    available: true
  },
  {
    id: "stf_56",
    providerId: "prv_19",
    name: "Lily Johnson",
    role: "Senior Specialist",
    specialty: "Esthetician",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=7",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_57",
    providerId: "prv_19",
    name: "Oscar Mitchell",
    role: "Specialist",
    specialty: "Massage Therapist",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=8",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_58",
    providerId: "prv_20",
    name: "Freya Wilson",
    role: "Lead Specialist",
    specialty: "Esthetician",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/150?img=9",
    appointmentsToday: 4,
    available: true
  },
  {
    id: "stf_59",
    providerId: "prv_20",
    name: "George Davis",
    role: "Senior Specialist",
    specialty: "Massage Therapist",
    rating: 4.6,
    avatar: "https://i.pravatar.cc/150?img=10",
    appointmentsToday: 5,
    available: true
  },
  {
    id: "stf_60",
    providerId: "prv_20",
    name: "Poppy Thompson",
    role: "Specialist",
    specialty: "Physiotherapist",
    rating: 4.7,
    avatar: "https://i.pravatar.cc/150?img=11",
    appointmentsToday: 6,
    available: false
  }
] as StaffMember[];

export const customers: Customer[] = [
  {
    id: "cus_01",
    name: "Affan",
    email: "demo@booklyai.app",
    phone: "+44 7700 900123",
    avatar: affanAvatar,
    totalBookings: 2,
    totalSpent: 120,
    lastAppointment: "2026-09-07",
    notes: "Prefers afternoon appointments."
  },
  {
    id: "cus_02",
    name: "Sarah Clark",
    email: "sarah.clark@email.com",
    phone: "+44 7700 900001",
    avatar: "https://i.pravatar.cc/150?img=13",
    totalBookings: 3,
    totalSpent: 157,
    lastAppointment: "2026-09-06",
    notes: "Allergic to strong fragrances."
  },
  {
    id: "cus_03",
    name: "James Lewis",
    email: "james.lewis@email.com",
    phone: "+44 7700 900002",
    avatar: "https://i.pravatar.cc/150?img=14",
    totalBookings: 4,
    totalSpent: 194,
    lastAppointment: "2026-09-05",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_04",
    name: "Emma Walker",
    email: "emma.walker@email.com",
    phone: "+44 7700 900003",
    avatar: "https://i.pravatar.cc/150?img=15",
    totalBookings: 5,
    totalSpent: 231,
    lastAppointment: "2026-09-04",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_05",
    name: "Oliver Hall",
    email: "oliver.hall@email.com",
    phone: "+44 7700 900004",
    avatar: "https://i.pravatar.cc/150?img=16",
    totalBookings: 6,
    totalSpent: 268,
    lastAppointment: "2026-09-03",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_06",
    name: "Sophia Allen",
    email: "sophia.allen@email.com",
    phone: "+44 7700 900005",
    avatar: "https://i.pravatar.cc/150?img=17",
    totalBookings: 7,
    totalSpent: 305,
    lastAppointment: "2026-09-02",
    notes: "Prefers afternoon appointments."
  },
  {
    id: "cus_07",
    name: "Liam Young",
    email: "liam.young@email.com",
    phone: "+44 7700 900006",
    avatar: "https://i.pravatar.cc/150?img=18",
    totalBookings: 8,
    totalSpent: 342,
    lastAppointment: "2026-09-01",
    notes: "Allergic to strong fragrances."
  },
  {
    id: "cus_08",
    name: "Olivia King",
    email: "olivia.king@email.com",
    phone: "+44 7700 900007",
    avatar: "https://i.pravatar.cc/150?img=19",
    totalBookings: 9,
    totalSpent: 379,
    lastAppointment: "2026-08-31",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_09",
    name: "Noah Wright",
    email: "noah.wright@email.com",
    phone: "+44 7700 900008",
    avatar: "https://i.pravatar.cc/150?img=20",
    totalBookings: 10,
    totalSpent: 416,
    lastAppointment: "2026-08-30",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_10",
    name: "Ava Scott",
    email: "ava.scott@email.com",
    phone: "+44 7700 900009",
    avatar: "https://i.pravatar.cc/150?img=21",
    totalBookings: 11,
    totalSpent: 453,
    lastAppointment: "2026-08-29",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_11",
    name: "Ethan Green",
    email: "ethan.green@email.com",
    phone: "+44 7700 900010",
    avatar: "https://i.pravatar.cc/150?img=22",
    totalBookings: 12,
    totalSpent: 490,
    lastAppointment: "2026-08-28",
    notes: "Prefers afternoon appointments."
  },
  {
    id: "cus_12",
    name: "Mia Baker",
    email: "mia.baker@email.com",
    phone: "+44 7700 900011",
    avatar: "https://i.pravatar.cc/150?img=23",
    totalBookings: 13,
    totalSpent: 527,
    lastAppointment: "2026-08-27",
    notes: "Allergic to strong fragrances."
  },
  {
    id: "cus_13",
    name: "Lucas Adams",
    email: "lucas.adams@email.com",
    phone: "+44 7700 900012",
    avatar: "https://i.pravatar.cc/150?img=24",
    totalBookings: 2,
    totalSpent: 564,
    lastAppointment: "2026-08-26",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_14",
    name: "Isla Nelson",
    email: "isla.nelson@email.com",
    phone: "+44 7700 900013",
    avatar: "https://i.pravatar.cc/150?img=25",
    totalBookings: 3,
    totalSpent: 601,
    lastAppointment: "2026-08-25",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_15",
    name: "Mason Carter",
    email: "mason.carter@email.com",
    phone: "+44 7700 900014",
    avatar: "https://i.pravatar.cc/150?img=26",
    totalBookings: 4,
    totalSpent: 638,
    lastAppointment: "2026-09-07",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_16",
    name: "Amelia Mitchell",
    email: "amelia.mitchell@email.com",
    phone: "+44 7700 900015",
    avatar: "https://i.pravatar.cc/150?img=27",
    totalBookings: 5,
    totalSpent: 675,
    lastAppointment: "2026-09-06",
    notes: "Prefers afternoon appointments."
  },
  {
    id: "cus_17",
    name: "Logan Perez",
    email: "logan.perez@email.com",
    phone: "+44 7700 900016",
    avatar: "https://i.pravatar.cc/150?img=28",
    totalBookings: 6,
    totalSpent: 712,
    lastAppointment: "2026-09-05",
    notes: "Allergic to strong fragrances."
  },
  {
    id: "cus_18",
    name: "Harper Roberts",
    email: "harper.roberts@email.com",
    phone: "+44 7700 900017",
    avatar: "https://i.pravatar.cc/150?img=29",
    totalBookings: 7,
    totalSpent: 749,
    lastAppointment: "2026-09-04",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_19",
    name: "Jack Turner",
    email: "jack.turner@email.com",
    phone: "+44 7700 900018",
    avatar: "https://i.pravatar.cc/150?img=30",
    totalBookings: 8,
    totalSpent: 786,
    lastAppointment: "2026-09-03",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_20",
    name: "Chloe Phillips",
    email: "chloe.phillips@email.com",
    phone: "+44 7700 900019",
    avatar: "https://i.pravatar.cc/150?img=31",
    totalBookings: 9,
    totalSpent: 823,
    lastAppointment: "2026-09-02",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_21",
    name: "Harry Campbell",
    email: "harry.campbell@email.com",
    phone: "+44 7700 900020",
    avatar: "https://i.pravatar.cc/150?img=32",
    totalBookings: 10,
    totalSpent: 860,
    lastAppointment: "2026-09-01",
    notes: "Prefers afternoon appointments."
  },
  {
    id: "cus_22",
    name: "Grace Parker",
    email: "grace.parker@email.com",
    phone: "+44 7700 900021",
    avatar: "https://i.pravatar.cc/150?img=33",
    totalBookings: 11,
    totalSpent: 897,
    lastAppointment: "2026-08-31",
    notes: "Allergic to strong fragrances."
  },
  {
    id: "cus_23",
    name: "Leo Evans",
    email: "leo.evans@email.com",
    phone: "+44 7700 900022",
    avatar: "https://i.pravatar.cc/150?img=34",
    totalBookings: 12,
    totalSpent: 934,
    lastAppointment: "2026-08-30",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_24",
    name: "Ella Johnson",
    email: "ella.johnson@email.com",
    phone: "+44 7700 900023",
    avatar: "https://i.pravatar.cc/150?img=35",
    totalBookings: 13,
    totalSpent: 971,
    lastAppointment: "2026-08-29",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_25",
    name: "Charlie Mitchell",
    email: "charlie.mitchell@email.com",
    phone: "+44 7700 900024",
    avatar: "https://i.pravatar.cc/150?img=36",
    totalBookings: 2,
    totalSpent: 1008,
    lastAppointment: "2026-08-28",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_26",
    name: "Lily Wilson",
    email: "lily.wilson@email.com",
    phone: "+44 7700 900025",
    avatar: "https://i.pravatar.cc/150?img=37",
    totalBookings: 3,
    totalSpent: 1045,
    lastAppointment: "2026-08-27",
    notes: "Prefers afternoon appointments."
  },
  {
    id: "cus_27",
    name: "Oscar Davis",
    email: "oscar.davis@email.com",
    phone: "+44 7700 900026",
    avatar: "https://i.pravatar.cc/150?img=38",
    totalBookings: 4,
    totalSpent: 1082,
    lastAppointment: "2026-08-26",
    notes: "Allergic to strong fragrances."
  },
  {
    id: "cus_28",
    name: "Freya Thompson",
    email: "freya.thompson@email.com",
    phone: "+44 7700 900027",
    avatar: "https://i.pravatar.cc/150?img=39",
    totalBookings: 5,
    totalSpent: 1119,
    lastAppointment: "2026-08-25",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_29",
    name: "George Anderson",
    email: "george.anderson@email.com",
    phone: "+44 7700 900028",
    avatar: "https://i.pravatar.cc/150?img=40",
    totalBookings: 6,
    totalSpent: 1156,
    lastAppointment: "2026-09-07",
    notes: "Regular guest. Friendly and punctual."
  },
  {
    id: "cus_30",
    name: "Poppy Brown",
    email: "poppy.brown@email.com",
    phone: "+44 7700 900029",
    avatar: "https://i.pravatar.cc/150?img=41",
    totalBookings: 7,
    totalSpent: 1193,
    lastAppointment: "2026-09-06",
    notes: "Regular guest. Friendly and punctual."
  }
] as Customer[];

export const initialBookings: Booking[] = [
  {
    id: "BK-2026-10482",
    providerId: "prv_01",
    providerName: "Nova Wellness Studio",
    serviceId: "svc_01",
    serviceName: "Deep Tissue Massage",
    staffId: "stf_01",
    staffName: "Sarah Mitchell",
    customerId: "cus_01",
    customerName: "Affan",
    date: "2026-09-08",
    time: "3:30 PM",
    durationMin: 60,
    price: 75,
    status: "confirmed",
    address: "24 King Street, London",
    createdAt: "2026-09-06T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-07T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10001",
    providerId: "prv_02",
    providerName: "Harmony Wellness",
    serviceId: "svc_06",
    serviceName: "Gel Manicure",
    staffId: "stf_04",
    staffName: "Emma Clark",
    customerId: "cus_02",
    customerName: "Sarah Clark",
    date: "2026-09-08",
    time: "10:30 AM",
    durationMin: 45,
    price: 40,
    status: "upcoming",
    address: "21 Queen Avenue, Manchester",
    createdAt: "2026-09-05T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10002",
    providerId: "prv_03",
    providerName: "Elite Fitness",
    serviceId: "svc_12",
    serviceName: "Yoga Class",
    staffId: "stf_07",
    staffName: "Liam Hall",
    customerId: "cus_03",
    customerName: "James Lewis",
    date: "2026-09-09",
    time: "12:00 PM",
    durationMin: 60,
    price: 25,
    status: "upcoming",
    address: "22 High Street, Bristol",
    createdAt: "2026-09-04T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10003",
    providerId: "prv_04",
    providerName: "Luxe Clinic",
    serviceId: "svc_19",
    serviceName: "Dermatology Consult",
    staffId: "stf_10",
    staffName: "Ava King",
    customerId: "cus_04",
    customerName: "Emma Walker",
    date: "2026-09-10",
    time: "2:00 PM",
    durationMin: 30,
    price: 120,
    status: "upcoming",
    address: "23 Park Lane, Edinburgh",
    createdAt: "2026-09-03T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-03T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10004",
    providerId: "prv_05",
    providerName: "Aura Consulting",
    serviceId: "svc_24",
    serviceName: "1:1 Mentoring",
    staffId: "stf_13",
    staffName: "Lucas Green",
    customerId: "cus_05",
    customerName: "Oliver Hall",
    date: "2026-09-11",
    time: "3:30 PM",
    durationMin: 45,
    price: 110,
    status: "upcoming",
    address: "24 Oxford Road, Leeds",
    createdAt: "2026-09-02T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-02T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-03T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10005",
    providerId: "prv_06",
    providerName: "Zen Care",
    serviceId: "svc_30",
    serviceName: "Plumbing Check",
    staffId: "stf_16",
    staffName: "Amelia Nelson",
    customerId: "cus_06",
    customerName: "Sophia Allen",
    date: "2026-09-07",
    time: "5:00 PM",
    durationMin: 60,
    price: 100,
    status: "upcoming",
    address: "25 Chapel Street, Birmingham",
    createdAt: "2026-09-01T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-01T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-02T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10006",
    providerId: "prv_07",
    providerName: "Prime Collective",
    serviceId: "svc_33",
    serviceName: "Hot Stone Therapy",
    staffId: "stf_19",
    staffName: "Jack Perez",
    customerId: "cus_07",
    customerName: "Liam Young",
    date: "2026-09-08",
    time: "9:00 AM",
    durationMin: 75,
    price: 90,
    status: "confirmed",
    address: "26 Victoria Road, London",
    createdAt: "2026-08-31T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-31T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-01T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10007",
    providerId: "prv_08",
    providerName: "Cedar Studio",
    serviceId: "svc_37",
    serviceName: "Haircut & Style",
    staffId: "stf_22",
    staffName: "Grace Phillips",
    customerId: "cus_08",
    customerName: "Olivia King",
    date: "2026-09-09",
    time: "10:30 AM",
    durationMin: 50,
    price: 55,
    status: "confirmed",
    address: "27 Baker Street, Manchester",
    createdAt: "2026-08-30T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-30T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-08-31T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10008",
    providerId: "prv_09",
    providerName: "Willow Hub",
    serviceId: "svc_42",
    serviceName: "Yoga Class",
    staffId: "stf_25",
    staffName: "Charlie Evans",
    customerId: "cus_09",
    customerName: "Noah Wright",
    date: "2026-08-29",
    time: "12:00 PM",
    durationMin: 60,
    price: 25,
    status: "confirmed",
    address: "28 Bond Street, Bristol",
    createdAt: "2026-08-29T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-29T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-08-30T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10009",
    providerId: "prv_10",
    providerName: "Summit Centre",
    serviceId: "svc_47",
    serviceName: "Dental Cleaning",
    staffId: "stf_28",
    staffName: "Freya Wilson",
    customerId: "cus_10",
    customerName: "Ava Scott",
    date: "2026-08-28",
    time: "2:00 PM",
    durationMin: 45,
    price: 110,
    status: "confirmed",
    address: "29 Church Lane, Edinburgh",
    createdAt: "2026-08-28T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-28T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-08-29T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: true
      }
    ]
  },
  {
    id: "BK-2026-10010",
    providerId: "prv_11",
    providerName: "Bloom Atelier",
    serviceId: "svc_50",
    serviceName: "Strategy Session",
    staffId: "stf_31",
    staffName: "Alex Anderson",
    customerId: "cus_11",
    customerName: "Ethan Green",
    date: "2026-08-27",
    time: "3:30 PM",
    durationMin: 60,
    price: 150,
    status: "completed",
    address: "30 King Street, Leeds",
    createdAt: "2026-09-06T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-07T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10011",
    providerId: "prv_12",
    providerName: "Pulse Lab",
    serviceId: "svc_60",
    serviceName: "Plumbing Check",
    staffId: "stf_34",
    staffName: "Emma Clark",
    customerId: "cus_12",
    customerName: "Mia Baker",
    date: "2026-08-26",
    time: "5:00 PM",
    durationMin: 60,
    price: 100,
    status: "completed",
    address: "31 Queen Avenue, Birmingham",
    createdAt: "2026-09-05T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10012",
    providerId: "prv_13",
    providerName: "Clarity Practice",
    serviceId: "svc_61",
    serviceName: "Deep Tissue Massage",
    staffId: "stf_37",
    staffName: "Liam Hall",
    customerId: "cus_13",
    customerName: "Lucas Adams",
    date: "2026-08-25",
    time: "9:00 AM",
    durationMin: 60,
    price: 75,
    status: "completed",
    address: "32 High Street, London",
    createdAt: "2026-09-04T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10013",
    providerId: "prv_14",
    providerName: "Forge Lounge",
    serviceId: "svc_68",
    serviceName: "Brow Shaping",
    staffId: "stf_40",
    staffName: "Ava King",
    customerId: "cus_14",
    customerName: "Isla Nelson",
    date: "2026-08-24",
    time: "10:30 AM",
    durationMin: 20,
    price: 25,
    status: "completed",
    address: "33 Park Lane, Manchester",
    createdAt: "2026-09-03T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-03T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10014",
    providerId: "prv_15",
    providerName: "Harbor House",
    serviceId: "svc_72",
    serviceName: "Yoga Class",
    staffId: "stf_43",
    staffName: "Lucas Green",
    customerId: "cus_15",
    customerName: "Mason Carter",
    date: "2026-08-23",
    time: "12:00 PM",
    durationMin: 60,
    price: 25,
    status: "completed",
    address: "34 Oxford Road, Bristol",
    createdAt: "2026-09-02T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-02T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-03T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10015",
    providerId: "prv_16",
    providerName: "Ridge Wellness Studio",
    serviceId: "svc_79",
    serviceName: "Dermatology Consult",
    staffId: "stf_46",
    staffName: "Amelia Nelson",
    customerId: "cus_16",
    customerName: "Amelia Mitchell",
    date: "2026-08-22",
    time: "2:00 PM",
    durationMin: 30,
    price: 120,
    status: "completed",
    address: "35 Chapel Street, Edinburgh",
    createdAt: "2026-09-01T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-01T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-02T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10016",
    providerId: "prv_17",
    providerName: "Vivid Spa",
    serviceId: "svc_81",
    serviceName: "Career Coaching",
    staffId: "stf_49",
    staffName: "Jack Perez",
    customerId: "cus_17",
    customerName: "Logan Perez",
    date: "2026-08-21",
    time: "3:30 PM",
    durationMin: 45,
    price: 95,
    status: "completed",
    address: "36 Victoria Road, Leeds",
    createdAt: "2026-08-31T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-31T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-01T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10017",
    providerId: "prv_18",
    providerName: "Solace Fitness",
    serviceId: "svc_90",
    serviceName: "Plumbing Check",
    staffId: "stf_52",
    staffName: "Grace Phillips",
    customerId: "cus_18",
    customerName: "Harper Roberts",
    date: "2026-08-20",
    time: "5:00 PM",
    durationMin: 60,
    price: 100,
    status: "completed",
    address: "37 Baker Street, Birmingham",
    createdAt: "2026-08-30T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-30T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-08-31T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10018",
    providerId: "prv_19",
    providerName: "Aether Clinic",
    serviceId: "svc_93",
    serviceName: "Hot Stone Therapy",
    staffId: "stf_55",
    staffName: "Charlie Evans",
    customerId: "cus_19",
    customerName: "Jack Turner",
    date: "2026-08-19",
    time: "9:00 AM",
    durationMin: 75,
    price: 90,
    status: "completed",
    address: "38 Bond Street, London",
    createdAt: "2026-08-29T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-29T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-08-30T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10019",
    providerId: "prv_20",
    providerName: "Nimbus Consulting",
    serviceId: "svc_99",
    serviceName: "Hydrating Facial",
    staffId: "stf_58",
    staffName: "Freya Wilson",
    customerId: "cus_20",
    customerName: "Chloe Phillips",
    date: "2026-08-18",
    time: "10:30 AM",
    durationMin: 50,
    price: 70,
    status: "completed",
    address: "39 Church Lane, Manchester",
    createdAt: "2026-08-28T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-28T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-08-29T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10020",
    providerId: "prv_01",
    providerName: "Nova Wellness Studio",
    serviceId: "svc_03",
    serviceName: "Consultation",
    staffId: "stf_01",
    staffName: "Sarah Mitchell",
    customerId: "cus_21",
    customerName: "Harry Campbell",
    date: "2026-09-06",
    time: "12:00 PM",
    durationMin: 30,
    price: 40,
    status: "completed",
    address: "24 King Street, London",
    createdAt: "2026-09-06T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-07T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10021",
    providerId: "prv_02",
    providerName: "Harmony Wellness",
    serviceId: "svc_06",
    serviceName: "Gel Manicure",
    staffId: "stf_04",
    staffName: "Emma Clark",
    customerId: "cus_22",
    customerName: "Grace Parker",
    date: "2026-09-05",
    time: "2:00 PM",
    durationMin: 45,
    price: 40,
    status: "completed",
    address: "21 Queen Avenue, Manchester",
    createdAt: "2026-09-05T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10022",
    providerId: "prv_03",
    providerName: "Elite Fitness",
    serviceId: "svc_14",
    serviceName: "Mobility Session",
    staffId: "stf_07",
    staffName: "Liam Hall",
    customerId: "cus_23",
    customerName: "Leo Evans",
    date: "2026-09-04",
    time: "3:30 PM",
    durationMin: 40,
    price: 40,
    status: "completed",
    address: "22 High Street, Bristol",
    createdAt: "2026-09-04T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10023",
    providerId: "prv_04",
    providerName: "Luxe Clinic",
    serviceId: "svc_19",
    serviceName: "Dermatology Consult",
    staffId: "stf_10",
    staffName: "Ava King",
    customerId: "cus_24",
    customerName: "Ella Johnson",
    date: "2026-09-03",
    time: "5:00 PM",
    durationMin: 30,
    price: 120,
    status: "completed",
    address: "23 Park Lane, Edinburgh",
    createdAt: "2026-09-03T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-03T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10024",
    providerId: "prv_05",
    providerName: "Aura Consulting",
    serviceId: "svc_24",
    serviceName: "1:1 Mentoring",
    staffId: "stf_13",
    staffName: "Lucas Green",
    customerId: "cus_25",
    customerName: "Charlie Mitchell",
    date: "2026-09-02",
    time: "9:00 AM",
    durationMin: 45,
    price: 110,
    status: "completed",
    address: "24 Oxford Road, Leeds",
    createdAt: "2026-09-02T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-02T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-03T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10025",
    providerId: "prv_06",
    providerName: "Zen Care",
    serviceId: "svc_26",
    serviceName: "Appliance Repair",
    staffId: "stf_16",
    staffName: "Amelia Nelson",
    customerId: "cus_26",
    customerName: "Lily Wilson",
    date: "2026-09-09",
    time: "10:30 AM",
    durationMin: 60,
    price: 95,
    status: "completed",
    address: "25 Chapel Street, Birmingham",
    createdAt: "2026-09-01T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-01T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-02T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10026",
    providerId: "prv_07",
    providerName: "Prime Collective",
    serviceId: "svc_33",
    serviceName: "Hot Stone Therapy",
    staffId: "stf_19",
    staffName: "Jack Perez",
    customerId: "cus_27",
    customerName: "Oscar Davis",
    date: "2026-09-10",
    time: "12:00 PM",
    durationMin: 75,
    price: 90,
    status: "completed",
    address: "26 Victoria Road, London",
    createdAt: "2026-08-31T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-31T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-09-01T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10027",
    providerId: "prv_08",
    providerName: "Cedar Studio",
    serviceId: "svc_37",
    serviceName: "Haircut & Style",
    staffId: "stf_22",
    staffName: "Grace Phillips",
    customerId: "cus_28",
    customerName: "Freya Thompson",
    date: "2026-09-11",
    time: "2:00 PM",
    durationMin: 50,
    price: 55,
    status: "completed",
    address: "27 Baker Street, Manchester",
    createdAt: "2026-08-30T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-30T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: true,
        at: "2026-08-31T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: true,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10028",
    providerId: "prv_09",
    providerName: "Willow Hub",
    serviceId: "svc_44",
    serviceName: "Mobility Session",
    staffId: "stf_25",
    staffName: "Charlie Evans",
    customerId: "cus_29",
    customerName: "George Anderson",
    date: "2026-09-08",
    time: "3:30 PM",
    durationMin: 40,
    price: 40,
    status: "cancelled",
    address: "28 Bond Street, Bristol",
    createdAt: "2026-08-29T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-29T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false,
        at: "2026-08-30T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10029",
    providerId: "prv_10",
    providerName: "Summit Centre",
    serviceId: "svc_47",
    serviceName: "Dental Cleaning",
    staffId: "stf_28",
    staffName: "Freya Wilson",
    customerId: "cus_30",
    customerName: "Poppy Brown",
    date: "2026-09-09",
    time: "5:00 PM",
    durationMin: 45,
    price: 110,
    status: "cancelled",
    address: "29 Church Lane, Edinburgh",
    createdAt: "2026-08-28T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-28T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false,
        at: "2026-08-29T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10030",
    providerId: "prv_11",
    providerName: "Bloom Atelier",
    serviceId: "svc_50",
    serviceName: "Strategy Session",
    staffId: "stf_31",
    staffName: "Alex Anderson",
    customerId: "cus_01",
    customerName: "Affan",
    date: "2026-09-10",
    time: "9:00 AM",
    durationMin: 60,
    price: 150,
    status: "cancelled",
    address: "30 King Street, Leeds",
    createdAt: "2026-09-06T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false,
        at: "2026-09-07T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10031",
    providerId: "prv_12",
    providerName: "Pulse Lab",
    serviceId: "svc_56",
    serviceName: "Appliance Repair",
    staffId: "stf_34",
    staffName: "Emma Clark",
    customerId: "cus_02",
    customerName: "Sarah Clark",
    date: "2026-09-11",
    time: "10:30 AM",
    durationMin: 60,
    price: 95,
    status: "cancelled",
    address: "31 Queen Avenue, Birmingham",
    createdAt: "2026-09-05T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false,
        at: "2026-09-06T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10032",
    providerId: "prv_13",
    providerName: "Clarity Practice",
    serviceId: "svc_61",
    serviceName: "Deep Tissue Massage",
    staffId: "stf_37",
    staffName: "Liam Hall",
    customerId: "cus_03",
    customerName: "James Lewis",
    date: "2026-09-08",
    time: "12:00 PM",
    durationMin: 60,
    price: 75,
    status: "cancelled",
    address: "32 High Street, London",
    createdAt: "2026-09-04T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false,
        at: "2026-09-05T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10033",
    providerId: "prv_14",
    providerName: "Forge Lounge",
    serviceId: "svc_68",
    serviceName: "Brow Shaping",
    staffId: "stf_40",
    staffName: "Ava King",
    customerId: "cus_04",
    customerName: "Emma Walker",
    date: "2026-09-09",
    time: "2:00 PM",
    durationMin: 20,
    price: 25,
    status: "cancelled",
    address: "33 Park Lane, Manchester",
    createdAt: "2026-09-03T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-03T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false,
        at: "2026-09-04T05:00:00.000Z"
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10034",
    providerId: "prv_15",
    providerName: "Harbor House",
    serviceId: "svc_74",
    serviceName: "Mobility Session",
    staffId: "stf_43",
    staffName: "Lucas Green",
    customerId: "cus_05",
    customerName: "Oliver Hall",
    date: "2026-09-10",
    time: "3:30 PM",
    durationMin: 40,
    price: 40,
    status: "pending",
    address: "34 Oxford Road, Bristol",
    createdAt: "2026-09-02T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-02T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10035",
    providerId: "prv_16",
    providerName: "Ridge Wellness Studio",
    serviceId: "svc_79",
    serviceName: "Dermatology Consult",
    staffId: "stf_46",
    staffName: "Amelia Nelson",
    customerId: "cus_06",
    customerName: "Sophia Allen",
    date: "2026-09-11",
    time: "5:00 PM",
    durationMin: 30,
    price: 120,
    status: "pending",
    address: "35 Chapel Street, Edinburgh",
    createdAt: "2026-09-01T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-09-01T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10036",
    providerId: "prv_17",
    providerName: "Vivid Spa",
    serviceId: "svc_81",
    serviceName: "Career Coaching",
    staffId: "stf_49",
    staffName: "Jack Perez",
    customerId: "cus_07",
    customerName: "Liam Young",
    date: "2026-09-08",
    time: "9:00 AM",
    durationMin: 45,
    price: 95,
    status: "pending",
    address: "36 Victoria Road, Leeds",
    createdAt: "2026-08-31T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-31T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10037",
    providerId: "prv_18",
    providerName: "Solace Fitness",
    serviceId: "svc_86",
    serviceName: "Appliance Repair",
    staffId: "stf_52",
    staffName: "Grace Phillips",
    customerId: "cus_08",
    customerName: "Olivia King",
    date: "2026-09-09",
    time: "10:30 AM",
    durationMin: 60,
    price: 95,
    status: "pending",
    address: "37 Baker Street, Birmingham",
    createdAt: "2026-08-30T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-30T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10038",
    providerId: "prv_19",
    providerName: "Aether Clinic",
    serviceId: "svc_93",
    serviceName: "Hot Stone Therapy",
    staffId: "stf_55",
    staffName: "Charlie Evans",
    customerId: "cus_09",
    customerName: "Noah Wright",
    date: "2026-09-10",
    time: "12:00 PM",
    durationMin: 75,
    price: 90,
    status: "pending",
    address: "38 Bond Street, London",
    createdAt: "2026-08-29T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-29T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  },
  {
    id: "BK-2026-10039",
    providerId: "prv_20",
    providerName: "Nimbus Consulting",
    serviceId: "svc_99",
    serviceName: "Hydrating Facial",
    staffId: "stf_58",
    staffName: "Freya Wilson",
    customerId: "cus_10",
    customerName: "Ava Scott",
    date: "2026-09-11",
    time: "2:00 PM",
    durationMin: 50,
    price: 70,
    status: "pending",
    address: "39 Church Lane, Manchester",
    createdAt: "2026-08-28T05:00:00.000Z",
    timeline: [
      {
        id: "t1",
        label: "Booked",
        completed: true,
        at: "2026-08-28T05:00:00.000Z"
      },
      {
        id: "t2",
        label: "Confirmed",
        completed: false
      },
      {
        id: "t3",
        label: "Reminder Sent",
        completed: false,
        at: "2026-09-07T03:00:00.000Z"
      },
      {
        id: "t4",
        label: "Upcoming",
        completed: false
      }
    ]
  }
] as Booking[];

export const initialConversations: Conversation[] = [
  {
    id: "cnv_01",
    participantId: "prv_01",
    participantName: "Nova Wellness Studio",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_01",
    lastMessage: "Your appointment is confirmed.",
    lastMessageAt: "2026-09-07T05:15:00.000Z",
    unreadCount: 2,
    online: true,
    providerId: "prv_01"
  },
  {
    id: "cnv_02",
    participantId: "stf_01",
    participantName: "Sarah Mitchell",
    participantAvatar: "https://i.pravatar.cc/150?u=stf_01",
    lastMessage: "Can we move your appointment to 4 PM?",
    lastMessageAt: "2026-09-06T06:15:00.000Z",
    unreadCount: 1,
    online: true,
    providerId: "prv_01"
  },
  {
    id: "cnv_03",
    participantId: "prv_03",
    participantName: "Elite Fitness",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_03",
    lastMessage: "Your trainer is available tomorrow.",
    lastMessageAt: "2026-09-05T07:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_03"
  },
  {
    id: "cnv_04",
    participantId: "prv_02",
    participantName: "Harmony Wellness",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_02",
    lastMessage: "Looking forward to seeing you.",
    lastMessageAt: "2026-09-04T08:15:00.000Z",
    unreadCount: 0,
    online: true,
    providerId: "prv_02"
  },
  {
    id: "cnv_05",
    participantId: "prv_04",
    participantName: "Clarity Clinic",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_04",
    lastMessage: "Your records have been updated.",
    lastMessageAt: "2026-09-07T09:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_04"
  },
  {
    id: "cnv_06",
    participantId: "prv_05",
    participantName: "Bloom Atelier",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_05",
    lastMessage: "New openings this weekend.",
    lastMessageAt: "2026-09-06T10:15:00.000Z",
    unreadCount: 3,
    online: false,
    providerId: "prv_05"
  },
  {
    id: "cnv_07",
    participantId: "prv_06",
    participantName: "Pulse Fitness",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_06",
    lastMessage: "Great session today!",
    lastMessageAt: "2026-09-05T11:15:00.000Z",
    unreadCount: 0,
    online: true,
    providerId: "prv_06"
  },
  {
    id: "cnv_08",
    participantId: "prv_07",
    participantName: "Summit Care",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_07",
    lastMessage: "Please arrive 10 minutes early.",
    lastMessageAt: "2026-09-04T12:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_07"
  },
  {
    id: "cnv_09",
    participantId: "prv_08",
    participantName: "Willow Spa",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_08",
    lastMessage: "Thank you for booking with us.",
    lastMessageAt: "2026-09-07T05:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_08"
  },
  {
    id: "cnv_10",
    participantId: "prv_09",
    participantName: "Forge Lab",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_09",
    lastMessage: "Does Thursday still work?",
    lastMessageAt: "2026-09-06T06:15:00.000Z",
    unreadCount: 1,
    online: true,
    providerId: "prv_09"
  },
  {
    id: "cnv_11",
    participantId: "prv_10",
    participantName: "Aura Lounge",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_10",
    lastMessage: "We held your preferred room.",
    lastMessageAt: "2026-09-05T07:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_10"
  },
  {
    id: "cnv_12",
    participantId: "prv_11",
    participantName: "Cedar House",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_11",
    lastMessage: "Invoice has been sent.",
    lastMessageAt: "2026-09-04T08:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_11"
  },
  {
    id: "cnv_13",
    participantId: "prv_12",
    participantName: "Vivid Studio",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_12",
    lastMessage: "Package renewal reminder.",
    lastMessageAt: "2026-09-07T09:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_12"
  },
  {
    id: "cnv_14",
    participantId: "prv_13",
    participantName: "Harbor Practice",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_13",
    lastMessage: "Welcome aboard!",
    lastMessageAt: "2026-09-06T10:15:00.000Z",
    unreadCount: 0,
    online: true,
    providerId: "prv_13"
  },
  {
    id: "cnv_15",
    participantId: "prv_14",
    participantName: "Nimbus Hub",
    participantAvatar: "https://i.pravatar.cc/150?u=prv_14",
    lastMessage: "Your feedback means a lot.",
    lastMessageAt: "2026-09-05T11:15:00.000Z",
    unreadCount: 0,
    online: false,
    providerId: "prv_14"
  }
] as Conversation[];

export const initialMessages: Message[] = [
  {
    id: "msg_01_01",
    conversationId: "cnv_01",
    senderId: "prv_01",
    senderName: "Nova Wellness Studio",
    text: "Your appointment is confirmed.",
    createdAt: "2026-09-07T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_01_02",
    conversationId: "cnv_01",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-07T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_01_03",
    conversationId: "cnv_01",
    senderId: "prv_01",
    senderName: "Nova Wellness Studio",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-07T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_01_04",
    conversationId: "cnv_01",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-07T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_01_05",
    conversationId: "cnv_01",
    senderId: "prv_01",
    senderName: "Nova Wellness Studio",
    text: "You are all set for your visit.",
    createdAt: "2026-09-07T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_01_06",
    conversationId: "cnv_01",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-07T09:25:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_01_07",
    conversationId: "cnv_01",
    senderId: "prv_01",
    senderName: "Nova Wellness Studio",
    text: "Your appointment is confirmed.",
    createdAt: "2026-09-07T10:28:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_02_01",
    conversationId: "cnv_02",
    senderId: "stf_01",
    senderName: "Sarah Mitchell",
    text: "Can we move your appointment to 4 PM?",
    createdAt: "2026-09-06T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_02_02",
    conversationId: "cnv_02",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-06T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_02_03",
    conversationId: "cnv_02",
    senderId: "stf_01",
    senderName: "Sarah Mitchell",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-06T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_02_04",
    conversationId: "cnv_02",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-06T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_02_05",
    conversationId: "cnv_02",
    senderId: "stf_01",
    senderName: "Sarah Mitchell",
    text: "You are all set for your visit.",
    createdAt: "2026-09-06T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_02_06",
    conversationId: "cnv_02",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-06T09:25:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_02_07",
    conversationId: "cnv_02",
    senderId: "stf_01",
    senderName: "Sarah Mitchell",
    text: "Can we move your appointment to 4 PM?",
    createdAt: "2026-09-06T10:28:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_03_01",
    conversationId: "cnv_03",
    senderId: "prv_03",
    senderName: "Elite Fitness",
    text: "Your trainer is available tomorrow.",
    createdAt: "2026-09-05T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_03_02",
    conversationId: "cnv_03",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-05T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_03_03",
    conversationId: "cnv_03",
    senderId: "prv_03",
    senderName: "Elite Fitness",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-05T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_03_04",
    conversationId: "cnv_03",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-05T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_03_05",
    conversationId: "cnv_03",
    senderId: "prv_03",
    senderName: "Elite Fitness",
    text: "You are all set for your visit.",
    createdAt: "2026-09-05T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_03_06",
    conversationId: "cnv_03",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-05T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_03_07",
    conversationId: "cnv_03",
    senderId: "prv_03",
    senderName: "Elite Fitness",
    text: "Your trainer is available tomorrow.",
    createdAt: "2026-09-05T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_04_01",
    conversationId: "cnv_04",
    senderId: "prv_02",
    senderName: "Harmony Wellness",
    text: "Looking forward to seeing you.",
    createdAt: "2026-09-04T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_04_02",
    conversationId: "cnv_04",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-04T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_04_03",
    conversationId: "cnv_04",
    senderId: "prv_02",
    senderName: "Harmony Wellness",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-04T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_04_04",
    conversationId: "cnv_04",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-04T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_04_05",
    conversationId: "cnv_04",
    senderId: "prv_02",
    senderName: "Harmony Wellness",
    text: "You are all set for your visit.",
    createdAt: "2026-09-04T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_04_06",
    conversationId: "cnv_04",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-04T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_04_07",
    conversationId: "cnv_04",
    senderId: "prv_02",
    senderName: "Harmony Wellness",
    text: "Looking forward to seeing you.",
    createdAt: "2026-09-04T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_05_01",
    conversationId: "cnv_05",
    senderId: "prv_04",
    senderName: "Clarity Clinic",
    text: "Your records have been updated.",
    createdAt: "2026-09-07T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_05_02",
    conversationId: "cnv_05",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-07T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_05_03",
    conversationId: "cnv_05",
    senderId: "prv_04",
    senderName: "Clarity Clinic",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-07T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_05_04",
    conversationId: "cnv_05",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-07T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_05_05",
    conversationId: "cnv_05",
    senderId: "prv_04",
    senderName: "Clarity Clinic",
    text: "You are all set for your visit.",
    createdAt: "2026-09-07T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_05_06",
    conversationId: "cnv_05",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-07T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_05_07",
    conversationId: "cnv_05",
    senderId: "prv_04",
    senderName: "Clarity Clinic",
    text: "Your records have been updated.",
    createdAt: "2026-09-07T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_06_01",
    conversationId: "cnv_06",
    senderId: "prv_05",
    senderName: "Bloom Atelier",
    text: "New openings this weekend.",
    createdAt: "2026-09-06T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_06_02",
    conversationId: "cnv_06",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-06T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_06_03",
    conversationId: "cnv_06",
    senderId: "prv_05",
    senderName: "Bloom Atelier",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-06T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_06_04",
    conversationId: "cnv_06",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-06T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_06_05",
    conversationId: "cnv_06",
    senderId: "prv_05",
    senderName: "Bloom Atelier",
    text: "You are all set for your visit.",
    createdAt: "2026-09-06T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_06_06",
    conversationId: "cnv_06",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-06T09:25:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_06_07",
    conversationId: "cnv_06",
    senderId: "prv_05",
    senderName: "Bloom Atelier",
    text: "New openings this weekend.",
    createdAt: "2026-09-06T10:28:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_07_01",
    conversationId: "cnv_07",
    senderId: "prv_06",
    senderName: "Pulse Fitness",
    text: "Great session today!",
    createdAt: "2026-09-05T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_07_02",
    conversationId: "cnv_07",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-05T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_07_03",
    conversationId: "cnv_07",
    senderId: "prv_06",
    senderName: "Pulse Fitness",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-05T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_07_04",
    conversationId: "cnv_07",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-05T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_07_05",
    conversationId: "cnv_07",
    senderId: "prv_06",
    senderName: "Pulse Fitness",
    text: "You are all set for your visit.",
    createdAt: "2026-09-05T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_07_06",
    conversationId: "cnv_07",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-05T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_07_07",
    conversationId: "cnv_07",
    senderId: "prv_06",
    senderName: "Pulse Fitness",
    text: "Great session today!",
    createdAt: "2026-09-05T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_08_01",
    conversationId: "cnv_08",
    senderId: "prv_07",
    senderName: "Summit Care",
    text: "Please arrive 10 minutes early.",
    createdAt: "2026-09-04T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_08_02",
    conversationId: "cnv_08",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-04T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_08_03",
    conversationId: "cnv_08",
    senderId: "prv_07",
    senderName: "Summit Care",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-04T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_08_04",
    conversationId: "cnv_08",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-04T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_08_05",
    conversationId: "cnv_08",
    senderId: "prv_07",
    senderName: "Summit Care",
    text: "You are all set for your visit.",
    createdAt: "2026-09-04T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_08_06",
    conversationId: "cnv_08",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-04T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_08_07",
    conversationId: "cnv_08",
    senderId: "prv_07",
    senderName: "Summit Care",
    text: "Please arrive 10 minutes early.",
    createdAt: "2026-09-04T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_09_01",
    conversationId: "cnv_09",
    senderId: "prv_08",
    senderName: "Willow Spa",
    text: "Thank you for booking with us.",
    createdAt: "2026-09-07T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_09_02",
    conversationId: "cnv_09",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-07T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_09_03",
    conversationId: "cnv_09",
    senderId: "prv_08",
    senderName: "Willow Spa",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-07T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_09_04",
    conversationId: "cnv_09",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-07T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_09_05",
    conversationId: "cnv_09",
    senderId: "prv_08",
    senderName: "Willow Spa",
    text: "You are all set for your visit.",
    createdAt: "2026-09-07T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_09_06",
    conversationId: "cnv_09",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-07T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_09_07",
    conversationId: "cnv_09",
    senderId: "prv_08",
    senderName: "Willow Spa",
    text: "Thank you for booking with us.",
    createdAt: "2026-09-07T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_10_01",
    conversationId: "cnv_10",
    senderId: "prv_09",
    senderName: "Forge Lab",
    text: "Does Thursday still work?",
    createdAt: "2026-09-06T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_10_02",
    conversationId: "cnv_10",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-06T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_10_03",
    conversationId: "cnv_10",
    senderId: "prv_09",
    senderName: "Forge Lab",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-06T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_10_04",
    conversationId: "cnv_10",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-06T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_10_05",
    conversationId: "cnv_10",
    senderId: "prv_09",
    senderName: "Forge Lab",
    text: "You are all set for your visit.",
    createdAt: "2026-09-06T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_10_06",
    conversationId: "cnv_10",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-06T09:25:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_10_07",
    conversationId: "cnv_10",
    senderId: "prv_09",
    senderName: "Forge Lab",
    text: "Does Thursday still work?",
    createdAt: "2026-09-06T10:28:00.000Z",
    read: false,
    type: "text"
  },
  {
    id: "msg_11_01",
    conversationId: "cnv_11",
    senderId: "prv_10",
    senderName: "Aura Lounge",
    text: "We held your preferred room.",
    createdAt: "2026-09-05T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_11_02",
    conversationId: "cnv_11",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-05T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_11_03",
    conversationId: "cnv_11",
    senderId: "prv_10",
    senderName: "Aura Lounge",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-05T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_11_04",
    conversationId: "cnv_11",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-05T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_11_05",
    conversationId: "cnv_11",
    senderId: "prv_10",
    senderName: "Aura Lounge",
    text: "You are all set for your visit.",
    createdAt: "2026-09-05T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_11_06",
    conversationId: "cnv_11",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-05T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_11_07",
    conversationId: "cnv_11",
    senderId: "prv_10",
    senderName: "Aura Lounge",
    text: "We held your preferred room.",
    createdAt: "2026-09-05T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_12_01",
    conversationId: "cnv_12",
    senderId: "prv_11",
    senderName: "Cedar House",
    text: "Invoice has been sent.",
    createdAt: "2026-09-04T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_12_02",
    conversationId: "cnv_12",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-04T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_12_03",
    conversationId: "cnv_12",
    senderId: "prv_11",
    senderName: "Cedar House",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-04T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_12_04",
    conversationId: "cnv_12",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-04T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_12_05",
    conversationId: "cnv_12",
    senderId: "prv_11",
    senderName: "Cedar House",
    text: "You are all set for your visit.",
    createdAt: "2026-09-04T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_12_06",
    conversationId: "cnv_12",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-04T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_12_07",
    conversationId: "cnv_12",
    senderId: "prv_11",
    senderName: "Cedar House",
    text: "Invoice has been sent.",
    createdAt: "2026-09-04T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_13_01",
    conversationId: "cnv_13",
    senderId: "prv_12",
    senderName: "Vivid Studio",
    text: "Package renewal reminder.",
    createdAt: "2026-09-07T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_13_02",
    conversationId: "cnv_13",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-07T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_13_03",
    conversationId: "cnv_13",
    senderId: "prv_12",
    senderName: "Vivid Studio",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-07T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_13_04",
    conversationId: "cnv_13",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-07T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_13_05",
    conversationId: "cnv_13",
    senderId: "prv_12",
    senderName: "Vivid Studio",
    text: "You are all set for your visit.",
    createdAt: "2026-09-07T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_13_06",
    conversationId: "cnv_13",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-07T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_13_07",
    conversationId: "cnv_13",
    senderId: "prv_12",
    senderName: "Vivid Studio",
    text: "Package renewal reminder.",
    createdAt: "2026-09-07T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_14_01",
    conversationId: "cnv_14",
    senderId: "prv_13",
    senderName: "Harbor Practice",
    text: "Welcome aboard!",
    createdAt: "2026-09-06T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_14_02",
    conversationId: "cnv_14",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-06T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_14_03",
    conversationId: "cnv_14",
    senderId: "prv_13",
    senderName: "Harbor Practice",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-06T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_14_04",
    conversationId: "cnv_14",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-06T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_14_05",
    conversationId: "cnv_14",
    senderId: "prv_13",
    senderName: "Harbor Practice",
    text: "You are all set for your visit.",
    createdAt: "2026-09-06T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_14_06",
    conversationId: "cnv_14",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-06T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_14_07",
    conversationId: "cnv_14",
    senderId: "prv_13",
    senderName: "Harbor Practice",
    text: "Welcome aboard!",
    createdAt: "2026-09-06T10:28:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_15_01",
    conversationId: "cnv_15",
    senderId: "prv_14",
    senderName: "Nimbus Hub",
    text: "Your feedback means a lot.",
    createdAt: "2026-09-05T04:10:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_15_02",
    conversationId: "cnv_15",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Thanks for the update!",
    createdAt: "2026-09-05T05:13:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_15_03",
    conversationId: "cnv_15",
    senderId: "prv_14",
    senderName: "Nimbus Hub",
    text: "Happy to help. Let me know if you need anything else.",
    createdAt: "2026-09-05T06:16:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_15_04",
    conversationId: "cnv_15",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Will do — appreciate it.",
    createdAt: "2026-09-05T07:19:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_15_05",
    conversationId: "cnv_15",
    senderId: "prv_14",
    senderName: "Nimbus Hub",
    text: "You are all set for your visit.",
    createdAt: "2026-09-05T08:22:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_15_06",
    conversationId: "cnv_15",
    senderId: "cus_01",
    senderName: "Affan",
    text: "Perfect, see you soon.",
    createdAt: "2026-09-05T09:25:00.000Z",
    read: true,
    type: "text"
  },
  {
    id: "msg_15_07",
    conversationId: "cnv_15",
    senderId: "prv_14",
    senderName: "Nimbus Hub",
    text: "Your feedback means a lot.",
    createdAt: "2026-09-05T10:28:00.000Z",
    read: true,
    type: "text"
  }
] as Message[];

export const initialNotifications: AppNotification[] = [
  {
    id: "ntf_01",
    title: "Booking confirmed",
    body: "Your Deep Tissue Massage at Nova Wellness Studio is confirmed for tomorrow at 3:30 PM.",
    type: "booking",
    createdAt: "2026-09-07T03:20:00.000Z",
    read: false
  },
  {
    id: "ntf_02",
    title: "Reminder",
    body: "Your appointment starts in 2 hours.",
    type: "reminder",
    createdAt: "2026-09-07T04:20:00.000Z",
    read: false
  },
  {
    id: "ntf_03",
    title: "New message",
    body: "Nova Wellness Studio replied to your conversation.",
    type: "message",
    createdAt: "2026-09-07T05:20:00.000Z",
    read: false
  },
  {
    id: "ntf_04",
    title: "Payment successful",
    body: "Payment of $71.00 was completed successfully.",
    type: "payment",
    createdAt: "2026-09-07T06:20:00.000Z",
    read: false
  },
  {
    id: "ntf_05",
    title: "New recommendation",
    body: "We found Elite Fitness near you with evening openings.",
    type: "recommendation",
    createdAt: "2026-09-07T07:20:00.000Z",
    read: false
  },
  {
    id: "ntf_06",
    title: "Booking update",
    body: "Harmony Wellness confirmed your request.",
    type: "booking",
    createdAt: "2026-09-06T08:20:00.000Z",
    read: false
  },
  {
    id: "ntf_07",
    title: "Message",
    body: "Sarah Mitchell sent you a message.",
    type: "message",
    createdAt: "2026-09-06T09:20:00.000Z",
    read: false
  },
  {
    id: "ntf_08",
    title: "Payment receipt",
    body: "Your receipt for BK-2026-10410 is ready.",
    type: "payment",
    createdAt: "2026-09-06T10:20:00.000Z",
    read: true
  },
  {
    id: "ntf_09",
    title: "Reminder",
    body: "Arrive 10 minutes early for your session.",
    type: "reminder",
    createdAt: "2026-09-06T11:20:00.000Z",
    read: true
  },
  {
    id: "ntf_10",
    title: "Recommendation",
    body: "Popular this week: Relaxation Massage near you.",
    type: "recommendation",
    createdAt: "2026-09-06T12:20:00.000Z",
    read: true
  },
  {
    id: "ntf_11",
    title: "Booking confirmed",
    body: "Personal Training with Elite Fitness is locked in.",
    type: "booking",
    createdAt: "2026-09-01T03:20:00.000Z",
    read: true
  },
  {
    id: "ntf_12",
    title: "New message",
    body: "Elite Fitness replied.",
    type: "message",
    createdAt: "2026-08-31T04:20:00.000Z",
    read: true
  },
  {
    id: "ntf_13",
    title: "Payment successful",
    body: "$55.00 charged to Visa •••• 4242.",
    type: "payment",
    createdAt: "2026-09-05T05:20:00.000Z",
    read: true
  },
  {
    id: "ntf_14",
    title: "Cancelled",
    body: "Your Thursday consultation was cancelled.",
    type: "booking",
    createdAt: "2026-09-04T06:20:00.000Z",
    read: true
  },
  {
    id: "ntf_15",
    title: "Reminder",
    body: "Tomorrow: Deep Tissue Massage at 3:30 PM.",
    type: "reminder",
    createdAt: "2026-09-03T07:20:00.000Z",
    read: true
  },
  {
    id: "ntf_16",
    title: "Recommendation",
    body: "Try Clarity Clinic for medical consultations.",
    type: "recommendation",
    createdAt: "2026-09-02T08:20:00.000Z",
    read: true
  },
  {
    id: "ntf_17",
    title: "Message",
    body: "Bloom Atelier shared available slots.",
    type: "message",
    createdAt: "2026-09-01T09:20:00.000Z",
    read: true
  },
  {
    id: "ntf_18",
    title: "Payment pending",
    body: "A payment is awaiting confirmation.",
    type: "payment",
    createdAt: "2026-08-31T10:20:00.000Z",
    read: true
  },
  {
    id: "ntf_19",
    title: "Booking confirmed",
    body: "Yoga Class booked successfully.",
    type: "booking",
    createdAt: "2026-09-05T11:20:00.000Z",
    read: true
  },
  {
    id: "ntf_20",
    title: "New message",
    body: "Forge Lab asked about Thursday.",
    type: "message",
    createdAt: "2026-09-04T12:20:00.000Z",
    read: true
  }
] as AppNotification[];

export const initialPayments: PaymentTransaction[] = [
  {
    id: "TXN-849231",
    bookingId: "BK-2026-10482",
    customerId: "cus_01",
    customerName: "Affan",
    providerId: "prv_01",
    providerName: "Nova Wellness Studio",
    serviceName: "Deep Tissue Massage",
    amount: 75,
    status: "Refunded",
    method: "Visa •••• 4242",
    date: "2026-09-08"
  },
  {
    id: "TXN-840001",
    bookingId: "BK-2026-10001",
    customerId: "cus_02",
    customerName: "Sarah Clark",
    providerId: "prv_02",
    providerName: "Harmony Wellness",
    serviceName: "Gel Manicure",
    amount: 40,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-08"
  },
  {
    id: "TXN-840002",
    bookingId: "BK-2026-10002",
    customerId: "cus_03",
    customerName: "James Lewis",
    providerId: "prv_03",
    providerName: "Elite Fitness",
    serviceName: "Yoga Class",
    amount: 25,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-09-09"
  },
  {
    id: "TXN-840003",
    bookingId: "BK-2026-10003",
    customerId: "cus_04",
    customerName: "Emma Walker",
    providerId: "prv_04",
    providerName: "Luxe Clinic",
    serviceName: "Dermatology Consult",
    amount: 120,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-10"
  },
  {
    id: "TXN-840004",
    bookingId: "BK-2026-10004",
    customerId: "cus_05",
    customerName: "Oliver Hall",
    providerId: "prv_05",
    providerName: "Aura Consulting",
    serviceName: "1:1 Mentoring",
    amount: 110,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-09-11"
  },
  {
    id: "TXN-840005",
    bookingId: "BK-2026-10005",
    customerId: "cus_06",
    customerName: "Sophia Allen",
    providerId: "prv_06",
    providerName: "Zen Care",
    serviceName: "Plumbing Check",
    amount: 100,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-07"
  },
  {
    id: "TXN-840006",
    bookingId: "BK-2026-10006",
    customerId: "cus_07",
    customerName: "Liam Young",
    providerId: "prv_07",
    providerName: "Prime Collective",
    serviceName: "Hot Stone Therapy",
    amount: 90,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-09-08"
  },
  {
    id: "TXN-840007",
    bookingId: "BK-2026-10007",
    customerId: "cus_08",
    customerName: "Olivia King",
    providerId: "prv_08",
    providerName: "Cedar Studio",
    serviceName: "Haircut & Style",
    amount: 55,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-09"
  },
  {
    id: "TXN-840008",
    bookingId: "BK-2026-10008",
    customerId: "cus_09",
    customerName: "Noah Wright",
    providerId: "prv_09",
    providerName: "Willow Hub",
    serviceName: "Yoga Class",
    amount: 25,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-08-29"
  },
  {
    id: "TXN-840009",
    bookingId: "BK-2026-10009",
    customerId: "cus_10",
    customerName: "Ava Scott",
    providerId: "prv_10",
    providerName: "Summit Centre",
    serviceName: "Dental Cleaning",
    amount: 110,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-08-28"
  },
  {
    id: "TXN-840010",
    bookingId: "BK-2026-10010",
    customerId: "cus_11",
    customerName: "Ethan Green",
    providerId: "prv_11",
    providerName: "Bloom Atelier",
    serviceName: "Strategy Session",
    amount: 150,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-08-27"
  },
  {
    id: "TXN-840011",
    bookingId: "BK-2026-10011",
    customerId: "cus_12",
    customerName: "Mia Baker",
    providerId: "prv_12",
    providerName: "Pulse Lab",
    serviceName: "Plumbing Check",
    amount: 100,
    status: "Refunded",
    method: "Google Pay",
    date: "2026-08-26"
  },
  {
    id: "TXN-840012",
    bookingId: "BK-2026-10012",
    customerId: "cus_13",
    customerName: "Lucas Adams",
    providerId: "prv_13",
    providerName: "Clarity Practice",
    serviceName: "Deep Tissue Massage",
    amount: 75,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-08-25"
  },
  {
    id: "TXN-840013",
    bookingId: "BK-2026-10013",
    customerId: "cus_14",
    customerName: "Isla Nelson",
    providerId: "prv_14",
    providerName: "Forge Lounge",
    serviceName: "Brow Shaping",
    amount: 25,
    status: "Failed",
    method: "Mastercard •••• 8891",
    date: "2026-08-24"
  },
  {
    id: "TXN-840014",
    bookingId: "BK-2026-10014",
    customerId: "cus_15",
    customerName: "Mason Carter",
    providerId: "prv_15",
    providerName: "Harbor House",
    serviceName: "Yoga Class",
    amount: 25,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-08-23"
  },
  {
    id: "TXN-840015",
    bookingId: "BK-2026-10015",
    customerId: "cus_16",
    customerName: "Amelia Mitchell",
    providerId: "prv_16",
    providerName: "Ridge Wellness Studio",
    serviceName: "Dermatology Consult",
    amount: 120,
    status: "Paid",
    method: "Google Pay",
    date: "2026-08-22"
  },
  {
    id: "TXN-840016",
    bookingId: "BK-2026-10016",
    customerId: "cus_17",
    customerName: "Logan Perez",
    providerId: "prv_17",
    providerName: "Vivid Spa",
    serviceName: "Career Coaching",
    amount: 95,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-08-21"
  },
  {
    id: "TXN-840017",
    bookingId: "BK-2026-10017",
    customerId: "cus_18",
    customerName: "Harper Roberts",
    providerId: "prv_18",
    providerName: "Solace Fitness",
    serviceName: "Plumbing Check",
    amount: 100,
    status: "Pending",
    method: "Mastercard •••• 8891",
    date: "2026-08-20"
  },
  {
    id: "TXN-840018",
    bookingId: "BK-2026-10018",
    customerId: "cus_19",
    customerName: "Jack Turner",
    providerId: "prv_19",
    providerName: "Aether Clinic",
    serviceName: "Hot Stone Therapy",
    amount: 90,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-08-19"
  },
  {
    id: "TXN-840019",
    bookingId: "BK-2026-10019",
    customerId: "cus_20",
    customerName: "Chloe Phillips",
    providerId: "prv_20",
    providerName: "Nimbus Consulting",
    serviceName: "Hydrating Facial",
    amount: 70,
    status: "Paid",
    method: "Google Pay",
    date: "2026-08-18"
  },
  {
    id: "TXN-840020",
    bookingId: "BK-2026-10020",
    customerId: "cus_21",
    customerName: "Harry Campbell",
    providerId: "prv_01",
    providerName: "Nova Wellness Studio",
    serviceName: "Consultation",
    amount: 40,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-09-06"
  },
  {
    id: "TXN-840021",
    bookingId: "BK-2026-10021",
    customerId: "cus_22",
    customerName: "Grace Parker",
    providerId: "prv_02",
    providerName: "Harmony Wellness",
    serviceName: "Gel Manicure",
    amount: 40,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-05"
  },
  {
    id: "TXN-840022",
    bookingId: "BK-2026-10022",
    customerId: "cus_23",
    customerName: "Leo Evans",
    providerId: "prv_03",
    providerName: "Elite Fitness",
    serviceName: "Mobility Session",
    amount: 40,
    status: "Refunded",
    method: "Apple Pay",
    date: "2026-09-04"
  },
  {
    id: "TXN-840023",
    bookingId: "BK-2026-10023",
    customerId: "cus_24",
    customerName: "Ella Johnson",
    providerId: "prv_04",
    providerName: "Luxe Clinic",
    serviceName: "Dermatology Consult",
    amount: 120,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-03"
  },
  {
    id: "TXN-840024",
    bookingId: "BK-2026-10024",
    customerId: "cus_25",
    customerName: "Charlie Mitchell",
    providerId: "prv_05",
    providerName: "Aura Consulting",
    serviceName: "1:1 Mentoring",
    amount: 110,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-09-02"
  },
  {
    id: "TXN-840025",
    bookingId: "BK-2026-10025",
    customerId: "cus_26",
    customerName: "Lily Wilson",
    providerId: "prv_06",
    providerName: "Zen Care",
    serviceName: "Appliance Repair",
    amount: 95,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-09"
  },
  {
    id: "TXN-840026",
    bookingId: "BK-2026-10026",
    customerId: "cus_27",
    customerName: "Oscar Davis",
    providerId: "prv_07",
    providerName: "Prime Collective",
    serviceName: "Hot Stone Therapy",
    amount: 90,
    status: "Failed",
    method: "Apple Pay",
    date: "2026-09-10"
  },
  {
    id: "TXN-840027",
    bookingId: "BK-2026-10027",
    customerId: "cus_28",
    customerName: "Freya Thompson",
    providerId: "prv_08",
    providerName: "Cedar Studio",
    serviceName: "Haircut & Style",
    amount: 55,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-11"
  },
  {
    id: "TXN-840028",
    bookingId: "BK-2026-10028",
    customerId: "cus_29",
    customerName: "George Anderson",
    providerId: "prv_09",
    providerName: "Willow Hub",
    serviceName: "Mobility Session",
    amount: 40,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-09-08"
  },
  {
    id: "TXN-840029",
    bookingId: "BK-2026-10029",
    customerId: "cus_30",
    customerName: "Poppy Brown",
    providerId: "prv_10",
    providerName: "Summit Centre",
    serviceName: "Dental Cleaning",
    amount: 110,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-09"
  },
  {
    id: "TXN-840030",
    bookingId: "BK-2026-10030",
    customerId: "cus_01",
    customerName: "Affan",
    providerId: "prv_11",
    providerName: "Bloom Atelier",
    serviceName: "Strategy Session",
    amount: 150,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-09-10"
  },
  {
    id: "TXN-840031",
    bookingId: "BK-2026-10031",
    customerId: "cus_02",
    customerName: "Sarah Clark",
    providerId: "prv_12",
    providerName: "Pulse Lab",
    serviceName: "Appliance Repair",
    amount: 95,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-11"
  },
  {
    id: "TXN-840032",
    bookingId: "BK-2026-10032",
    customerId: "cus_03",
    customerName: "James Lewis",
    providerId: "prv_13",
    providerName: "Clarity Practice",
    serviceName: "Deep Tissue Massage",
    amount: 75,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-09-08"
  },
  {
    id: "TXN-840033",
    bookingId: "BK-2026-10033",
    customerId: "cus_04",
    customerName: "Emma Walker",
    providerId: "prv_14",
    providerName: "Forge Lounge",
    serviceName: "Brow Shaping",
    amount: 25,
    status: "Refunded",
    method: "Mastercard •••• 8891",
    date: "2026-09-09"
  },
  {
    id: "TXN-840034",
    bookingId: "BK-2026-10034",
    customerId: "cus_05",
    customerName: "Oliver Hall",
    providerId: "prv_15",
    providerName: "Harbor House",
    serviceName: "Mobility Session",
    amount: 40,
    status: "Pending",
    method: "Apple Pay",
    date: "2026-09-10"
  },
  {
    id: "TXN-840035",
    bookingId: "BK-2026-10035",
    customerId: "cus_06",
    customerName: "Sophia Allen",
    providerId: "prv_16",
    providerName: "Ridge Wellness Studio",
    serviceName: "Dermatology Consult",
    amount: 120,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-11"
  },
  {
    id: "TXN-840036",
    bookingId: "BK-2026-10036",
    customerId: "cus_07",
    customerName: "Liam Young",
    providerId: "prv_17",
    providerName: "Vivid Spa",
    serviceName: "Career Coaching",
    amount: 95,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-09-08"
  },
  {
    id: "TXN-840037",
    bookingId: "BK-2026-10037",
    customerId: "cus_08",
    customerName: "Olivia King",
    providerId: "prv_18",
    providerName: "Solace Fitness",
    serviceName: "Appliance Repair",
    amount: 95,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-09"
  },
  {
    id: "TXN-840038",
    bookingId: "BK-2026-10038",
    customerId: "cus_09",
    customerName: "Noah Wright",
    providerId: "prv_19",
    providerName: "Aether Clinic",
    serviceName: "Hot Stone Therapy",
    amount: 90,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-09-10"
  },
  {
    id: "TXN-840039",
    bookingId: "BK-2026-10039",
    customerId: "cus_10",
    customerName: "Ava Scott",
    providerId: "prv_20",
    providerName: "Nimbus Consulting",
    serviceName: "Hydrating Facial",
    amount: 70,
    status: "Failed",
    method: "Google Pay",
    date: "2026-09-11"
  },
  {
    id: "TXN-840040",
    bookingId: "BK-2026-10482",
    customerId: "cus_01",
    customerName: "Affan",
    providerId: "prv_01",
    providerName: "Nova Wellness Studio",
    serviceName: "Deep Tissue Massage",
    amount: 75,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-09-08"
  },
  {
    id: "TXN-840041",
    bookingId: "BK-2026-10001",
    customerId: "cus_02",
    customerName: "Sarah Clark",
    providerId: "prv_02",
    providerName: "Harmony Wellness",
    serviceName: "Gel Manicure",
    amount: 40,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-08"
  },
  {
    id: "TXN-840042",
    bookingId: "BK-2026-10002",
    customerId: "cus_03",
    customerName: "James Lewis",
    providerId: "prv_03",
    providerName: "Elite Fitness",
    serviceName: "Yoga Class",
    amount: 25,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-09-09"
  },
  {
    id: "TXN-840043",
    bookingId: "BK-2026-10003",
    customerId: "cus_04",
    customerName: "Emma Walker",
    providerId: "prv_04",
    providerName: "Luxe Clinic",
    serviceName: "Dermatology Consult",
    amount: 120,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-10"
  },
  {
    id: "TXN-840044",
    bookingId: "BK-2026-10004",
    customerId: "cus_05",
    customerName: "Oliver Hall",
    providerId: "prv_05",
    providerName: "Aura Consulting",
    serviceName: "1:1 Mentoring",
    amount: 110,
    status: "Refunded",
    method: "Visa •••• 4242",
    date: "2026-09-11"
  },
  {
    id: "TXN-840045",
    bookingId: "BK-2026-10005",
    customerId: "cus_06",
    customerName: "Sophia Allen",
    providerId: "prv_06",
    providerName: "Zen Care",
    serviceName: "Plumbing Check",
    amount: 100,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-09-07"
  },
  {
    id: "TXN-840046",
    bookingId: "BK-2026-10006",
    customerId: "cus_07",
    customerName: "Liam Young",
    providerId: "prv_07",
    providerName: "Prime Collective",
    serviceName: "Hot Stone Therapy",
    amount: 90,
    status: "Paid",
    method: "Apple Pay",
    date: "2026-09-08"
  },
  {
    id: "TXN-840047",
    bookingId: "BK-2026-10007",
    customerId: "cus_08",
    customerName: "Olivia King",
    providerId: "prv_08",
    providerName: "Cedar Studio",
    serviceName: "Haircut & Style",
    amount: 55,
    status: "Paid",
    method: "Google Pay",
    date: "2026-09-09"
  },
  {
    id: "TXN-840048",
    bookingId: "BK-2026-10008",
    customerId: "cus_09",
    customerName: "Noah Wright",
    providerId: "prv_09",
    providerName: "Willow Hub",
    serviceName: "Yoga Class",
    amount: 25,
    status: "Paid",
    method: "Visa •••• 4242",
    date: "2026-08-29"
  },
  {
    id: "TXN-840049",
    bookingId: "BK-2026-10009",
    customerId: "cus_10",
    customerName: "Ava Scott",
    providerId: "prv_10",
    providerName: "Summit Centre",
    serviceName: "Dental Cleaning",
    amount: 110,
    status: "Paid",
    method: "Mastercard •••• 8891",
    date: "2026-08-28"
  }
] as PaymentTransaction[];

export const reviews: Review[] = [
  {
    id: "rev_prv_01_0",
    providerId: "prv_01",
    author: "Affan",
    avatar: "https://i.pravatar.cc/150?img=42",
    rating: 4,
    comment: "Exceptional experience from check-in to finish. Will definitely return.",
    date: "2026-09-07"
  },
  {
    id: "rev_prv_01_1",
    providerId: "prv_01",
    author: "Sarah Wilson",
    avatar: "https://i.pravatar.cc/150?img=43",
    rating: 5,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_01_2",
    providerId: "prv_01",
    author: "James Thompson",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 4,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_02_0",
    providerId: "prv_02",
    author: "Sarah Mitchell",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 4,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-09-06"
  },
  {
    id: "rev_prv_02_1",
    providerId: "prv_02",
    author: "James Davis",
    avatar: "https://i.pravatar.cc/150?img=46",
    rating: 5,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_02_2",
    providerId: "prv_02",
    author: "Emma Anderson",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 4,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_03_0",
    providerId: "prv_03",
    author: "James Wilson",
    avatar: "https://i.pravatar.cc/150?img=48",
    rating: 4,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-09-05"
  },
  {
    id: "rev_prv_03_1",
    providerId: "prv_03",
    author: "Emma Thompson",
    avatar: "https://i.pravatar.cc/150?img=49",
    rating: 5,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-09-02"
  },
  {
    id: "rev_prv_03_2",
    providerId: "prv_03",
    author: "Oliver Brown",
    avatar: "https://i.pravatar.cc/150?img=50",
    rating: 4,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-08-30"
  },
  {
    id: "rev_prv_04_0",
    providerId: "prv_04",
    author: "Emma Davis",
    avatar: "https://i.pravatar.cc/150?img=51",
    rating: 4,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_04_1",
    providerId: "prv_04",
    author: "Oliver Anderson",
    avatar: "https://i.pravatar.cc/150?img=52",
    rating: 5,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_04_2",
    providerId: "prv_04",
    author: "Sophia Taylor",
    avatar: "https://i.pravatar.cc/150?img=53",
    rating: 4,
    comment: "Beautiful studio and thoughtfully paced treatment.",
    date: "2026-08-29"
  },
  {
    id: "rev_prv_05_0",
    providerId: "prv_05",
    author: "Oliver Thompson",
    avatar: "https://i.pravatar.cc/150?img=54",
    rating: 4,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_05_1",
    providerId: "prv_05",
    author: "Sophia Brown",
    avatar: "https://i.pravatar.cc/150?img=55",
    rating: 5,
    comment: "Beautiful studio and thoughtfully paced treatment.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_05_2",
    providerId: "prv_05",
    author: "Liam Clark",
    avatar: "https://i.pravatar.cc/150?img=56",
    rating: 4,
    comment: "I felt better immediately after the appointment.",
    date: "2026-08-28"
  },
  {
    id: "rev_prv_06_0",
    providerId: "prv_06",
    author: "Sophia Anderson",
    avatar: "https://i.pravatar.cc/150?img=57",
    rating: 4,
    comment: "Beautiful studio and thoughtfully paced treatment.",
    date: "2026-09-07"
  },
  {
    id: "rev_prv_06_1",
    providerId: "prv_06",
    author: "Liam Taylor",
    avatar: "https://i.pravatar.cc/150?img=58",
    rating: 5,
    comment: "I felt better immediately after the appointment.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_06_2",
    providerId: "prv_06",
    author: "Olivia Lewis",
    avatar: "https://i.pravatar.cc/150?img=59",
    rating: 4,
    comment: "Clear communication and a premium feel throughout.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_07_0",
    providerId: "prv_07",
    author: "Liam Brown",
    avatar: "https://i.pravatar.cc/150?img=60",
    rating: 4,
    comment: "I felt better immediately after the appointment.",
    date: "2026-09-06"
  },
  {
    id: "rev_prv_07_1",
    providerId: "prv_07",
    author: "Olivia Clark",
    avatar: "https://i.pravatar.cc/150?img=61",
    rating: 5,
    comment: "Clear communication and a premium feel throughout.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_07_2",
    providerId: "prv_07",
    author: "Noah Walker",
    avatar: "https://i.pravatar.cc/150?img=62",
    rating: 4,
    comment: "Exceptional experience from check-in to finish. Will definitely return.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_08_0",
    providerId: "prv_08",
    author: "Olivia Taylor",
    avatar: "https://i.pravatar.cc/150?img=63",
    rating: 4,
    comment: "Clear communication and a premium feel throughout.",
    date: "2026-09-05"
  },
  {
    id: "rev_prv_08_1",
    providerId: "prv_08",
    author: "Noah Lewis",
    avatar: "https://i.pravatar.cc/150?img=64",
    rating: 5,
    comment: "Exceptional experience from check-in to finish. Will definitely return.",
    date: "2026-09-02"
  },
  {
    id: "rev_prv_08_2",
    providerId: "prv_08",
    author: "Ava Hall",
    avatar: "https://i.pravatar.cc/150?img=65",
    rating: 4,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-08-30"
  },
  {
    id: "rev_prv_09_0",
    providerId: "prv_09",
    author: "Noah Clark",
    avatar: "https://i.pravatar.cc/150?img=66",
    rating: 4,
    comment: "Exceptional experience from check-in to finish. Will definitely return.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_09_1",
    providerId: "prv_09",
    author: "Ava Walker",
    avatar: "https://i.pravatar.cc/150?img=67",
    rating: 5,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_09_2",
    providerId: "prv_09",
    author: "Ethan Allen",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 4,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-08-29"
  },
  {
    id: "rev_prv_10_0",
    providerId: "prv_10",
    author: "Ava Lewis",
    avatar: "https://i.pravatar.cc/150?img=69",
    rating: 4,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_10_1",
    providerId: "prv_10",
    author: "Ethan Hall",
    avatar: "https://i.pravatar.cc/150?img=70",
    rating: 5,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_10_2",
    providerId: "prv_10",
    author: "Mia Young",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-08-28"
  },
  {
    id: "rev_prv_11_0",
    providerId: "prv_11",
    author: "Ethan Walker",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-09-07"
  },
  {
    id: "rev_prv_11_1",
    providerId: "prv_11",
    author: "Mia Allen",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_11_2",
    providerId: "prv_11",
    author: "Lucas King",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 4,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_12_0",
    providerId: "prv_12",
    author: "Mia Hall",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-09-06"
  },
  {
    id: "rev_prv_12_1",
    providerId: "prv_12",
    author: "Lucas Young",
    avatar: "https://i.pravatar.cc/150?img=6",
    rating: 5,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_12_2",
    providerId: "prv_12",
    author: "Isla Wright",
    avatar: "https://i.pravatar.cc/150?img=7",
    rating: 4,
    comment: "Beautiful studio and thoughtfully paced treatment.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_13_0",
    providerId: "prv_13",
    author: "Lucas Allen",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 4,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-09-05"
  },
  {
    id: "rev_prv_13_1",
    providerId: "prv_13",
    author: "Isla King",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    comment: "Beautiful studio and thoughtfully paced treatment.",
    date: "2026-09-02"
  },
  {
    id: "rev_prv_13_2",
    providerId: "prv_13",
    author: "Mason Scott",
    avatar: "https://i.pravatar.cc/150?img=10",
    rating: 4,
    comment: "I felt better immediately after the appointment.",
    date: "2026-08-30"
  },
  {
    id: "rev_prv_14_0",
    providerId: "prv_14",
    author: "Isla Young",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 4,
    comment: "Beautiful studio and thoughtfully paced treatment.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_14_1",
    providerId: "prv_14",
    author: "Mason Wright",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    comment: "I felt better immediately after the appointment.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_14_2",
    providerId: "prv_14",
    author: "Amelia Green",
    avatar: "https://i.pravatar.cc/150?img=13",
    rating: 4,
    comment: "Clear communication and a premium feel throughout.",
    date: "2026-08-29"
  },
  {
    id: "rev_prv_15_0",
    providerId: "prv_15",
    author: "Mason King",
    avatar: "https://i.pravatar.cc/150?img=14",
    rating: 4,
    comment: "I felt better immediately after the appointment.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_15_1",
    providerId: "prv_15",
    author: "Amelia Scott",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    comment: "Clear communication and a premium feel throughout.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_15_2",
    providerId: "prv_15",
    author: "Logan Baker",
    avatar: "https://i.pravatar.cc/150?img=16",
    rating: 4,
    comment: "Exceptional experience from check-in to finish. Will definitely return.",
    date: "2026-08-28"
  },
  {
    id: "rev_prv_16_0",
    providerId: "prv_16",
    author: "Amelia Wright",
    avatar: "https://i.pravatar.cc/150?img=17",
    rating: 4,
    comment: "Clear communication and a premium feel throughout.",
    date: "2026-09-07"
  },
  {
    id: "rev_prv_16_1",
    providerId: "prv_16",
    author: "Logan Green",
    avatar: "https://i.pravatar.cc/150?img=18",
    rating: 5,
    comment: "Exceptional experience from check-in to finish. Will definitely return.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_16_2",
    providerId: "prv_16",
    author: "Harper Adams",
    avatar: "https://i.pravatar.cc/150?img=19",
    rating: 4,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_17_0",
    providerId: "prv_17",
    author: "Logan Scott",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating: 4,
    comment: "Exceptional experience from check-in to finish. Will definitely return.",
    date: "2026-09-06"
  },
  {
    id: "rev_prv_17_1",
    providerId: "prv_17",
    author: "Harper Baker",
    avatar: "https://i.pravatar.cc/150?img=21",
    rating: 5,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_17_2",
    providerId: "prv_17",
    author: "Jack Nelson",
    avatar: "https://i.pravatar.cc/150?img=22",
    rating: 4,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_18_0",
    providerId: "prv_18",
    author: "Harper Green",
    avatar: "https://i.pravatar.cc/150?img=23",
    rating: 4,
    comment: "The therapist understood exactly what I needed. Highly recommend.",
    date: "2026-09-05"
  },
  {
    id: "rev_prv_18_1",
    providerId: "prv_18",
    author: "Jack Adams",
    avatar: "https://i.pravatar.cc/150?img=24",
    rating: 5,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-09-02"
  },
  {
    id: "rev_prv_18_2",
    providerId: "prv_18",
    author: "Chloe Carter",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 4,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-08-30"
  },
  {
    id: "rev_prv_19_0",
    providerId: "prv_19",
    author: "Jack Baker",
    avatar: "https://i.pravatar.cc/150?img=26",
    rating: 4,
    comment: "Clean space, warm staff, and outstanding results.",
    date: "2026-09-04"
  },
  {
    id: "rev_prv_19_1",
    providerId: "prv_19",
    author: "Chloe Nelson",
    avatar: "https://i.pravatar.cc/150?img=27",
    rating: 5,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-09-01"
  },
  {
    id: "rev_prv_19_2",
    providerId: "prv_19",
    author: "Harry Mitchell",
    avatar: "https://i.pravatar.cc/150?img=28",
    rating: 4,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-08-29"
  },
  {
    id: "rev_prv_20_0",
    providerId: "prv_20",
    author: "Chloe Adams",
    avatar: "https://i.pravatar.cc/150?img=29",
    rating: 4,
    comment: "Booking was seamless and the session exceeded expectations.",
    date: "2026-09-03"
  },
  {
    id: "rev_prv_20_1",
    providerId: "prv_20",
    author: "Harry Carter",
    avatar: "https://i.pravatar.cc/150?img=30",
    rating: 5,
    comment: "Professional, punctual, and genuinely caring team.",
    date: "2026-08-31"
  },
  {
    id: "rev_prv_20_2",
    providerId: "prv_20",
    author: "Grace Perez",
    avatar: "https://i.pravatar.cc/150?img=31",
    rating: 4,
    comment: "Beautiful studio and thoughtfully paced treatment.",
    date: "2026-08-28"
  }
] as Review[];

export const analyticsData: AnalyticsData = {
  revenueToday: 2840,
  revenueWeek: 16420,
  revenueMonth: 68250,
  appointmentsToday: 42,
  newCustomers: 18,
  completionRate: 94,
  cancellationRate: 6,
  weeklyRevenue: [
    {
      day: "Mon",
      value: 2100
    },
    {
      day: "Tue",
      value: 2450
    },
    {
      day: "Wed",
      value: 2680
    },
    {
      day: "Thu",
      value: 2390
    },
    {
      day: "Fri",
      value: 2840
    },
    {
      day: "Sat",
      value: 1960
    },
    {
      day: "Sun",
      value: 1000
    }
  ],
  weeklyBookings: [
    {
      day: "Mon",
      value: 38
    },
    {
      day: "Tue",
      value: 41
    },
    {
      day: "Wed",
      value: 45
    },
    {
      day: "Thu",
      value: 40
    },
    {
      day: "Fri",
      value: 42
    },
    {
      day: "Sat",
      value: 33
    },
    {
      day: "Sun",
      value: 18
    }
  ],
  monthlyGrowth: [
    {
      month: "Apr",
      value: 48
    },
    {
      month: "May",
      value: 52
    },
    {
      month: "Jun",
      value: 57
    },
    {
      month: "Jul",
      value: 61
    },
    {
      month: "Aug",
      value: 66
    },
    {
      month: "Sep",
      value: 72
    }
  ],
  popularServices: [
    {
      name: "Deep Tissue Massage",
      bookings: 128,
      revenue: 9600
    },
    {
      name: "Relaxation Massage",
      bookings: 96,
      revenue: 5280
    },
    {
      name: "Personal Training",
      bookings: 84,
      revenue: 4620
    },
    {
      name: "Signature Facial",
      bookings: 71,
      revenue: 6035
    },
    {
      name: "Consultation",
      bookings: 64,
      revenue: 2560
    }
  ]
} as AnalyticsData;

export const paymentMethods: PaymentMethod[] = [
  {
    id: "pm_1",
    brand: "Visa",
    last4: "4242",
    isDefault: true
  },
  {
    id: "pm_2",
    brand: "Mastercard",
    last4: "8891",
    isDefault: false
  },
  {
    id: "pm_3",
    brand: "Apple Pay",
    isDefault: false
  },
  {
    id: "pm_4",
    brand: "Google Pay",
    isDefault: false
  }
] as PaymentMethod[];

export const availableTimes = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM', '6:30 PM'] as const;

export const unavailableTimes = ['12:00 PM', '6:30 PM'] as const;
