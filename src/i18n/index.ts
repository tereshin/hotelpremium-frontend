import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      // Hotel
      'hotel.name': 'Гостиничный комплекс «Premium»',
      'hotel.description': 'Расположен в тихом и уютном месте самого сердца г. Щелково',
      
      // Navigation
      'nav.home': 'Главная',
      'nav.services': 'Услуги',
      'nav.promotions': 'Акции',
      'nav.contacts': 'Контакты',
      'nav.faq': 'FAQ',
      
      // Services
      'services.restaurant': 'Ресторан',
      'services.sauna': 'Сауна',
      'services.barbecue': 'Барбекю',
      'services.rentBike': 'Прокат велосипедов',
      'services.breakfast': 'Завтрак',
      'services.laundry': 'Прачечная',
      'services.roomService': 'Room Service',
      
      // Booking
      'booking.title': 'Забронировать номер',
      'booking.checkIn': 'Дата заезда',
      'booking.checkOut': 'Дата выезда',
      'booking.guests': 'Количество гостей',
      'booking.rooms': 'Количество номеров',
      'booking.name': 'Имя',
      'booking.email': 'Email',
      'booking.phone': 'Телефон',
      'booking.specialRequests': 'Особые пожелания',
      'booking.submit': 'Забронировать',
      
      // Common
      'common.loading': 'Загрузка...',
      'common.error': 'Произошла ошибка',
      'common.success': 'Успешно',
      'common.cancel': 'Отмена',
      'common.save': 'Сохранить',
      'common.delete': 'Удалить',
      'common.edit': 'Редактировать',
      'common.view': 'Просмотр',
    },
  },
  en: {
    translation: {
      // Hotel
      'hotel.name': 'Hotel Complex «Premium»',
      'hotel.description': 'Located in a quiet and cozy place in the heart of Shelkovo',
      
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.promotions': 'Promotions',
      'nav.contacts': 'Contacts',
      'nav.faq': 'FAQ',
      
      // Services
      'services.restaurant': 'Restaurant',
      'services.sauna': 'Sauna',
      'services.barbecue': 'Barbecue',
      'services.rentBike': 'Bike Rental',
      'services.breakfast': 'Breakfast',
      'services.laundry': 'Laundry',
      'services.roomService': 'Room Service',
      
      // Booking
      'booking.title': 'Book a Room',
      'booking.checkIn': 'Check-in Date',
      'booking.checkOut': 'Check-out Date',
      'booking.guests': 'Number of Guests',
      'booking.rooms': 'Number of Rooms',
      'booking.name': 'Name',
      'booking.email': 'Email',
      'booking.phone': 'Phone',
      'booking.specialRequests': 'Special Requests',
      'booking.submit': 'Book Now',
      
      // Common
      'common.loading': 'Loading...',
      'common.error': 'An error occurred',
      'common.success': 'Success',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.delete': 'Delete',
      'common.edit': 'Edit',
      'common.view': 'View',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    debug: import.meta.env.DEV,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n; 