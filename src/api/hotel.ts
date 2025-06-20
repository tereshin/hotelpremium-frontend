import api from './index';
import { BookingData } from '../shared/types';

export const hotelAPI = {
  // Получение информации об отеле
  getHotelInfo: () => api.get('/hotel/info'),
  
  // Получение номеров
  getRooms: () => api.get('/hotel/rooms'),
  
  // Создание бронирования
  createBooking: (bookingData: BookingData) => 
    api.post('/hotel/booking', bookingData),
  
  // Получение доступности номеров
  checkAvailability: (checkIn: Date, checkOut: Date) => 
    api.get('/hotel/availability', {
      params: { checkIn, checkOut }
    }),
}; 