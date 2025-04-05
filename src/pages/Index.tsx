
import { useState } from 'react';
import HotelSearchForm from '@/components/HotelSearchForm';
import HotelCard from '@/components/HotelCard';
import { fetchHotels, Hotel } from '@/services/hotelData';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const handleSearch = async (fromCity: string, toCity: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const hotelsData = await fetchHotels(toCity);
      setHotels(hotelsData);
      
      if (hotelsData.length === 0) {
        toast({
          title: "No hotels found",
          description: `We couldn't find any hotels in ${toCity}. Try another destination.`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Hotels found!",
          description: `Found ${hotelsData.length} hotels in ${toCity}.`,
        });
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      toast({
        title: "Error",
        description: "There was an error searching for hotels. Please try again.",
        variant: "destructive",
      });
      setHotels([]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-dark-purple overflow-hidden">
      {/* Purple gradient background effect */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-900/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <header className="pt-10 pb-6 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-light-purple to-white">
            Hotel Voyage Finder
          </h1>
          <p className="text-center mt-2 text-purple-200 max-w-2xl mx-auto">
            Discover the perfect accommodation for your next adventure with our premium hotel search
          </p>
        </header>
        
        {/* Search Form Section */}
        <section className="px-4 py-8 max-w-4xl mx-auto">
          <HotelSearchForm onSearch={handleSearch} isLoading={isLoading} />
        </section>
        
        {/* Results Section */}
        <section className="px-4 py-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-light-purple"></div>
            </div>
          ) : hasSearched && (
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                {hotels.length > 0 
                  ? `Found ${hotels.length} Hotels for You` 
                  : "No Hotels Found"}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hotels.map((hotel, index) => (
                  <HotelCard
                    key={`${hotel.name}-${index}`}
                    name={hotel.name}
                    description={hotel.description}
                    image={hotel.image}
                    price={hotel.price}
                    oldPrice={hotel.oldPrice}
                    rating={hotel.rating}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        
        {/* Footer Section */}
        <footer className="py-8 mt-12 border-t border-purple-800/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-purple-300/70">
              © 2025 Hotel Voyage Finder | Luxury Hotel Search
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
