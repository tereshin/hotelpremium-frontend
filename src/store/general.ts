import { create } from 'zustand';

interface GeneralState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useGeneralStore = create<GeneralState>((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
})); 