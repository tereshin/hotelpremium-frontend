export interface MetaResponse {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface ApiResponse<T> {
  data: T;
  meta?: MetaResponse;
  message?: string;
}

export interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

export interface LoadingState {
  loading: boolean;
  error: string | null;
} 