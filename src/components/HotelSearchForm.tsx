
import { useState } from 'react';

interface HotelSearchFormProps {
  onSearch: (fromCity: string, toCity: string) => void;
  isLoading: boolean;
}

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
        Hotel Voyage Finder
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fromCity" className="hotel-label">From City:</label>
          <input
            id="fromCity"
            type="text"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            placeholder="Enter your departure city"
            className="hotel-input"
            required
          />
        </div>
        
        <div>
          <label htmlFor="toCity" className="hotel-label">Destination City:</label>
          <input
            id="toCity"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            placeholder="Enter your destination (try 'Mumbai' or 'Delhi')"
            className="hotel-input"
            required
          />
        </div>
        
        <div className="pt-4">
          <button 
            type="submit" 
            className="hotel-button w-full flex items-center justify-center"
            disabled={isLoading}
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
              <>Search Hotels</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelSearchForm;
