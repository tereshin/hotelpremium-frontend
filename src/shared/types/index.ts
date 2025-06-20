// Общие типы для проекта

export interface Hotel {
  id: string;
  name: string;
  description: string;
  images: string[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: number;
  image: string;
  category: ServiceCategory;
}

export type ServiceCategory = 
  | 'restaurant' 
  | 'sauna' 
  | 'barbecue' 
  | 'rent-bike' 
  | 'breakfast' 
  | 'laundry' 
  | 'room-service';

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  validUntil?: Date;
  discount?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: Date;
  source: 'yandex' | 'google' | 'booking';
}

export interface BookingData {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
} 