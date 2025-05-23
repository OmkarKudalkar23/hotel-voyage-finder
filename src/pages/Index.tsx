
import { useState } from 'react';
import HotelSearchForm from '@/components/HotelSearchForm';
import HotelCard from '@/components/HotelCard';
import FlightCard from '@/components/FlightCard';
import TrainCard from '@/components/TrainCard';
import MapView from '@/components/MapView';
import { fetchHotels, Hotel } from '@/services/hotelData';
import { fetchFlights, Flight } from '@/services/flightData';
import { fetchTrains, Train } from '@/services/trainData';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [trains, setTrains] = useState<Train[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeTab, setActiveTab] = useState("hotels");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  
  const handleSearch = async (fromCity: string, toCity: string) => {
    if (fromCity === toCity) {
      toast({
        title: "Invalid Selection",
        description: "Source and destination cities cannot be the same",
        variant: "destructive",
      });
      return;
    }
    
    setFromCity(fromCity);
    setToCity(toCity);
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      // Fetch hotels for destination city
      const hotelsData = await fetchHotels(toCity);
      setHotels(hotelsData);
      
      // Fetch flights between cities
      const flightsData = await fetchFlights(fromCity, toCity);
      setFlights(flightsData);
      
      // Fetch trains between cities
      const trainsData = await fetchTrains(fromCity, toCity);
      setTrains(trainsData);
      
      // Show toast based on results
      let message = '';
      let resultsFound = false;
      
      if (hotelsData.length > 0) {
        message += `${hotelsData.length} hotels in ${toCity}`;
        resultsFound = true;
      }
      
      if (flightsData.length > 0) {
        if (message) message += ', ';
        message += `${flightsData.length} flights`;
        resultsFound = true;
      }
      
      if (trainsData.length > 0) {
        if (message) message += ' and ';
        message += `${trainsData.length} trains from ${fromCity} to ${toCity}`;
        resultsFound = true;
      }
      
      if (resultsFound) {
        toast({
          title: "Results found!",
          description: message,
        });
      } else {
        toast({
          title: "No results found",
          description: `We couldn't find any travel options for your selection.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "There was an error searching for travel options. Please try again.",
        variant: "destructive",
      });
      setHotels([]);
      setFlights([]);
      setTrains([]);
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
            Travel Voyage Finder
          </h1>
          <p className="text-center mt-2 text-purple-200 max-w-2xl mx-auto">
            Discover the perfect accommodation, flights and trains for your next adventure
          </p>
        </header>
        
        {/* Search Form Section */}
        <section className="px-4 py-6 max-w-4xl mx-auto">
          <HotelSearchForm onSearch={handleSearch} isLoading={isLoading} />
        </section>
        
        {/* Map Section - Show when search is performed */}
        {hasSearched && !isLoading && fromCity && toCity && (
          <section className="px-4 mb-8 max-w-6xl mx-auto">
            <MapView fromCity={fromCity} toCity={toCity} />
          </section>
        )}
        
        {/* Results Section */}
        <section className="px-4 py-6">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-light-purple"></div>
            </div>
          ) : hasSearched && (
            <div className="container mx-auto pb-20">
              <Tabs 
                defaultValue={activeTab} 
                onValueChange={setActiveTab}
                className="w-full"
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-purple-800/50 backdrop-blur-md">
                    <TabsTrigger 
                      value="hotels" 
                      className="data-[state=active]:bg-light-purple data-[state=active]:text-white"
                    >
                      Hotels ({hotels.length})
                    </TabsTrigger>
                    <TabsTrigger 
                      value="flights" 
                      className="data-[state=active]:bg-light-purple data-[state=active]:text-white"
                    >
                      Flights ({flights.length})
                    </TabsTrigger>
                    <TabsTrigger 
                      value="trains" 
                      className="data-[state=active]:bg-light-purple data-[state=active]:text-white"
                    >
                      Trains ({trains.length})
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="hotels" className="mt-0">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                    {hotels.length > 0 
                      ? `Found ${hotels.length} Hotels in ${toCity}` 
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
                </TabsContent>
                
                <TabsContent value="flights" className="mt-0">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                    {flights.length > 0 
                      ? `Found ${flights.length} Flights from ${fromCity} to ${toCity}` 
                      : "No Flights Found"}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {flights.map((flight, index) => (
                      <FlightCard
                        key={`${flight.airline}-${flight.flightNumber}-${index}`}
                        flight={flight}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="trains" className="mt-0">
                  <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                    {trains.length > 0 
                      ? `Found ${trains.length} Trains from ${fromCity} to ${toCity}` 
                      : "No Trains Found"}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {trains.map((train, index) => (
                      <TrainCard
                        key={`${train.name}-${index}`}
                        train={train}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </section>
        
        {/* Footer Section */}
        <footer className="py-8 mt-12 border-t border-purple-800/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-purple-300/70">
              © 2025 Travel Voyage Finder | Luxury Hotel, Flight & Train Search
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
