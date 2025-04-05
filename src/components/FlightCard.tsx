
import { Flight } from '@/services/flightData';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <div className="flight-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{flight.airline.charAt(0)}</span>
          </div>
          <h3 className="font-semibold text-lg text-white">{flight.airline}</h3>
        </div>
        <div className="bg-light-purple/30 text-white text-sm px-3 py-1 rounded-full">
          {flight.flightNumber}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <p className="text-light-purple font-semibold text-xl">{flight.departureTime}</p>
          <p className="text-white/70 text-sm">{flight.source}</p>
        </div>
        
        <div className="flex-1 mx-4 relative">
          <div className="h-0.5 bg-white/30 w-full absolute top-1/2"></div>
          <div className="flex justify-between">
            <div className="h-2 w-2 rounded-full bg-white relative z-10"></div>
            <div className="h-2 w-2 rounded-full bg-white relative z-10"></div>
          </div>
          <p className="text-white/60 text-xs text-center mt-1">{flight.duration}</p>
        </div>
        
        <div className="text-center">
          <p className="text-light-purple font-semibold text-xl">{flight.arrivalTime}</p>
          <p className="text-white/70 text-sm">{flight.destination}</p>
        </div>
      </div>
      
      <div className="mt-3 flex justify-between items-center">
        <p className="text-2xl font-bold text-white">₹{flight.price}</p>
        <button 
          className="hotel-button bg-light-purple text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 
                     hover:bg-soft-purple hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
