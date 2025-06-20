export type ServiceCategory = 
  | 'restaurant' 
  | 'sauna' 
  | 'barbecue' 
  | 'rent-bike' 
  | 'breakfast' 
  | 'laundry' 
  | 'room-service';

export interface ServiceResource {
  id: string;
  title: string;
  description: string;
  price?: number;
  image: string;
  category: ServiceCategory;
  features?: string[];
  workingHours?: string;
}

export interface ServiceResponse {
  data: {
    collection: ServiceResource[];
    meta: import('./general').MetaResponse;
  };
}

export interface ServiceRequest {
  title: string;
  description: string;
  price?: number;
  category: ServiceCategory;
  features?: string[];
  workingHours?: string;
} 