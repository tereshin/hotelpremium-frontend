export interface PromotionResource {
  id: string;
  title: string;
  description: string;
  image: string;
  validUntil?: Date;
  discount?: number;
  isActive: boolean;
  category?: string;
}

export interface PromotionResponse {
  data: {
    collection: PromotionResource[];
    meta: import('./general').MetaResponse;
  };
}

export interface PromotionRequest {
  title: string;
  description: string;
  image: string;
  validUntil?: Date;
  discount?: number;
  isActive: boolean;
  category?: string;
} 