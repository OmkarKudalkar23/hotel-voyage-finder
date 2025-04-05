
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface HotelSearchFormProps {
  onSearch: (fromCity: string, toCity: string) => void;
  isLoading: boolean;
}

const CITIES = ["Mumbai", "Delhi", "Bangalore", "Chennai"];

const HotelSearchForm = ({ onSearch, isLoading }: HotelSearchFormProps) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(fromCity, toCity);
  };

  return (
    <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        Travel Voyage Finder
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fromCity" className="hotel-label">From City:</label>
          <Select value={fromCity} onValueChange={setFromCity}>
            <SelectTrigger className="hotel-input">
              <SelectValue placeholder="Select departure city" />
            </SelectTrigger>
            <SelectContent className="bg-dark-purple border border-purple-700">
              {CITIES.map((city) => (
                <SelectItem key={city} value={city} className="text-white hover:bg-purple-800">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label htmlFor="toCity" className="hotel-label">Destination City:</label>
          <Select value={toCity} onValueChange={setToCity}>
            <SelectTrigger className="hotel-input">
              <SelectValue placeholder="Select destination city" />
            </SelectTrigger>
            <SelectContent className="bg-dark-purple border border-purple-700">
              {CITIES.map((city) => (
                <SelectItem key={city} value={city} className="text-white hover:bg-purple-800">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="pt-4">
          <button 
            type="submit" 
            className="hotel-button w-full flex items-center justify-center"
            disabled={isLoading || !fromCity || !toCity || fromCity === toCity}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </>
            ) : (
              <>Search Hotels & Flights</>
            )}
          </button>
          {fromCity === toCity && fromCity !== "" && (
            <p className="text-red-400 text-sm mt-2 text-center">
              Source and destination cannot be the same
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default HotelSearchForm;
