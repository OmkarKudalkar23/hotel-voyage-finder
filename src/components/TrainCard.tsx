
import { Train } from '@/services/trainData';
import { Train as TrainIcon } from 'lucide-react';

interface TrainCardProps {
  train: Train;
}

const TrainCard = ({ train }: TrainCardProps) => {
  return (
    <div className="train-card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-soft-purple/40 flex items-center justify-center">
            <TrainIcon className="text-white" size={20} />
          </div>
          <h3 className="font-semibold text-lg text-white">{train.name}</h3>
        </div>
        <div className="bg-soft-purple/50 text-white text-sm px-3 py-1 rounded-full">
          {train.type}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="text-center">
          <p className="text-soft-purple font-semibold text-2xl">{train.departureTime}</p>
          <p className="text-white/70 text-sm mt-1">{train.source}</p>
        </div>
        
        <div className="flex-1 mx-4 relative">
          <div className="h-0.5 bg-white/40 w-full absolute top-1/2"></div>
          <div className="flex justify-between">
            <div className="h-3 w-3 rounded-full bg-white relative z-10"></div>
            <div className="h-3 w-3 rounded-full bg-white relative z-10"></div>
          </div>
          <p className="text-white/70 text-xs text-center mt-2">{train.duration}</p>
        </div>
        
        <div className="text-center">
          <p className="text-soft-purple font-semibold text-2xl">{train.arrivalTime}</p>
          <p className="text-white/70 text-sm mt-1">{train.destination}</p>
        </div>
      </div>
      
      <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center">
        <p className="text-3xl font-bold text-white">₹{train.price}</p>
        <button 
          className="bg-soft-purple text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 
                   hover:bg-light-purple hover:shadow-lg transform hover:scale-105 active:scale-95"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TrainCard;
