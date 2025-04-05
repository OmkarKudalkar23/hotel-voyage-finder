
import { Flight } from '@/services/flightData';
import { Plane } from 'lucide-react';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <div className="flight-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-light-purple/40 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{flight.airline.charAt(0)}</span>
          </div>
          <h3 className="font-semibold text-lg text-white">{flight.airline}</h3>
        </div>
        <div className="bg-light-purple/50 text-white text-sm px-3 py-1 rounded-full">
          {flight.flightNumber}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-center">
          <p className="text-light-purple font-semibold text-2xl">{flight.departureTime}</p>
          <p className="text-white/70 text-sm mt-1">{flight.source}</p>
        </div>
        
        <div className="flex-1 mx-4 relative">
          <div className="h-0.5 bg-white/40 w-full absolute top-1/2"></div>
          <div className="flex justify-between">
            <div className="h-3 w-3 rounded-full bg-white relative z-10"></div>
            <Plane className="text-light-purple mx-auto -mt-2 relative z-10" size={20} />
            <div className="h-3 w-3 rounded-full bg-white relative z-10"></div>
          </div>
          <p className="text-white/70 text-xs text-center mt-2">{flight.duration}</p>
        </div>
        
        <div className="text-center">
          <p className="text-light-purple font-semibold text-2xl">{flight.arrivalTime}</p>
          <p className="text-white/70 text-sm mt-1">{flight.destination}</p>
        </div>
      </div>
      
      <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center">
        <p className="text-3xl font-bold text-white">₹{flight.price}</p>
        <button 
          className="bg-light-purple text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 
                     hover:bg-soft-purple hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
