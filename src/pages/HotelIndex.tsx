import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseHeader } from '@/components/base/BaseHeader';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/utils/useDebounce';

const HotelIndex: React.FC = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 300);
  
  const items = [{ label: t('nav.home'), href: '/' }, { label: t('nav.hotels') }];
  
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  
  const handleHotelClick = (hotelId: string) => {
    // Navigate to hotel detail page
    console.log('Navigate to hotel:', hotelId);
  };
  
  const headerActions = (
    <div className="flex items-center gap-2">
      <Input
        placeholder={t('hotel.searchPlaceholder')}
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-64"
      />
    </div>
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <BaseHeader 
        title={t('hotel.pageTitle')}
        items={items} 
        headerActions={headerActions}
        className="mb-8"
      />

      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          
        </div>
      </div>
    </div>
  );
};

export default HotelIndex; 