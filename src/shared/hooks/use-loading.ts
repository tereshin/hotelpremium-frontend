import { useGeneralStore } from '../../store/general';

export const useLoading = () => {
  const { isLoading, setLoading } = useGeneralStore();
  
  return {
    isLoading,
    setLoading,
  };
}; 