import React from 'react';
import { Hotel } from '../../../shared/types';

interface HotelCardProps {
  hotel: Hotel;
  onClick?: (hotelId: string) => void;
}

const HotelCard: React.FC<HotelCardProps> = React.memo(({ hotel, onClick }) => {
  const handleClick = React.useCallback(() => {
    onClick?.(hotel.id);
  }, [onClick, hotel.id]);

  return (
    <div 
      className="hotel-card cursor-pointer p-4 border rounded-lg hover:shadow-md transition-shadow"
      onClick={handleClick}
    >
      <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
      <p className="text-gray-600 mb-3">{hotel.description}</p>
      
      {hotel.images.length > 0 && (
        <img 
          src={hotel.images[0]} 
          alt={hotel.name}
          className="w-full h-48 object-cover rounded-md mb-3"
          loading="lazy"
        />
      )}
      
      <div className="features">
        <h4 className="font-medium mb-2">Особенности:</h4>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {hotel.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

HotelCard.displayName = 'HotelCard';

export default HotelCard;
