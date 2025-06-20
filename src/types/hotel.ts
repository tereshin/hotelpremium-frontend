export interface HotelResource {
  id: string;
  name: string;
  description: string;
  images: string[];
  features: string[];
  address: string;
  phone: string;
  email: string;
}

export interface HotelResponse {
  data: {
    collection: HotelResource[];
    meta: import('./general').MetaResponse;
  };
}

export interface RoomResource {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  features: string[];
  capacity: number;
}

export interface RoomResponse {
  data: {
    collection: RoomResource[];
    meta: import('./general').MetaResponse;
  };
} 