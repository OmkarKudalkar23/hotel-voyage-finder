
import { useState } from 'react';

interface HotelCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  oldPrice?: number;
  rating: number;
}

const HotelCard = ({ name, description, image, price, oldPrice, rating }: HotelCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    return (
      <div className="flex justify-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {halfStar ? <span className="text-yellow-400">☆</span> : null}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-yellow-400/30">☆</span>
        ))}
      </div>
    );
  };
  
  // Calculate price change indicator
  const renderPriceChange = () => {
    if (!oldPrice) return null;
    
    const numericPrice = parseFloat(price.replace('₹', ''));
    const priceDiff = numericPrice - oldPrice;
    
    if (priceDiff > 0) {
      return (
        <div className="flex items-center justify-center text-green-500 font-medium text-sm mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          ₹{Math.abs(priceDiff)} (Increase)
        </div>
      );
    } else if (priceDiff < 0) {
      return (
        <div className="flex items-center justify-center text-red-500 font-medium text-sm mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          ₹{Math.abs(priceDiff)} (Decrease)
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center text-gray-500 font-medium text-sm mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
          No Change
        </div>
      );
    }
  };

  return (
    <div 
      className="hotel-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image section with overlay on hover */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-500"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.8 : 0.5,
          }}
        ></div>
        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-2 py-1 rounded-full text-xs">
          {rating}
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 text-gray-800">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        {renderStars(rating)}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
        <p className="font-bold text-light-purple text-lg mt-2">{price}</p>
        {renderPriceChange()}
        
        {/* Booking button */}
        <button 
          className="w-full mt-4 bg-light-purple hover:bg-soft-purple text-white font-medium py-2 px-4 rounded-lg
                    transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
