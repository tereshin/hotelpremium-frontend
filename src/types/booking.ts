export interface BookingResource {
  id: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
}

export interface BookingRequest {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface BookingResponse {
  data: {
    collection: BookingResource[];
    meta: import('./general').MetaResponse;
  };
}

export interface AvailabilityRequest {
  checkIn: Date;
  checkOut: Date;
}

export interface AvailabilityResponse {
  data: {
    available: boolean;
    rooms: import('./hotel').RoomResource[];
  };
} 