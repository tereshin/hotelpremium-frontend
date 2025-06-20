import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { hotelAPI } from '../../../api/hotel';
import { useLoading } from '../../../shared/hooks/use-loading';
import { BookingData } from '../../../shared/types';

export const useBooking = () => {
  const { setLoading } = useLoading();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  // Мутация для создания бронирования
  const createBookingMutation = useMutation({
    mutationFn: (data: BookingData) => hotelAPI.createBooking(data),
    onMutate: () => setLoading(true),
    onSuccess: (response) => {
      setBookingData(response.data);
      setLoading(false);
    },
    onError: (error) => {
      console.error('Booking error:', error);
      setLoading(false);
    },
  });

  // Запрос для проверки доступности
  const checkAvailability = (checkIn: Date, checkOut: Date) => {
    return useQuery({
      queryKey: ['availability', checkIn, checkOut],
      queryFn: () => hotelAPI.checkAvailability(checkIn, checkOut),
      enabled: !!checkIn && !!checkOut,
    });
  };

  return {
    createBooking: createBookingMutation.mutate,
    bookingData,
    isCreatingBooking: createBookingMutation.isPending,
    checkAvailability,
  };
}; 