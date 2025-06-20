export interface ReviewResource {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: Date;
  source: 'yandex' | 'google' | 'booking';
  isVerified: boolean;
}

export interface ReviewResponse {
  data: {
    collection: ReviewResource[];
    meta: import('./general').MetaResponse;
  };
}

export interface ReviewRequest {
  author: string;
  rating: number;
  text: string;
  source: 'yandex' | 'google' | 'booking';
}

export interface ReviewsStatsResponse {
  data: {
    averageRating: number;
    totalReviews: number;
    ratingDistribution: Record<number, number>;
  };
} 