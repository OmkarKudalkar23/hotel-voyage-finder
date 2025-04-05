
export interface Train {
  name: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  type: string; // AC, Sleeper, etc.
  source: string;
  destination: string;
}

// Mock train data between cities
const trainRoutes = {
  "Mumbai": {
    "Delhi": [
      { name: "Rajdhani Express", price: 1500, departureTime: "16:25", arrivalTime: "08:15", duration: "15h 50m", type: "AC First Class", source: "Mumbai", destination: "Delhi" },
      { name: "August Kranti Express", price: 1200, departureTime: "17:40", arrivalTime: "10:55", duration: "17h 15m", type: "AC 2 Tier", source: "Mumbai", destination: "Delhi" },
      { name: "Garib Rath Express", price: 800, departureTime: "18:15", arrivalTime: "12:35", duration: "18h 20m", type: "AC 3 Tier", source: "Mumbai", destination: "Delhi" }
    ],
    "Bangalore": [
      { name: "Udyan Express", price: 1300, departureTime: "08:10", arrivalTime: "06:00", duration: "21h 50m", type: "AC 2 Tier", source: "Mumbai", destination: "Bangalore" },
      { name: "Chalukya Express", price: 950, departureTime: "21:10", arrivalTime: "18:30", duration: "21h 20m", type: "Sleeper", source: "Mumbai", destination: "Bangalore" }
    ],
    "Chennai": [
      { name: "Chennai Express", price: 1400, departureTime: "13:05", arrivalTime: "15:45", duration: "26h 40m", type: "AC First Class", source: "Mumbai", destination: "Chennai" },
      { name: "Chennai Mail", price: 1100, departureTime: "23:40", arrivalTime: "03:55", duration: "28h 15m", type: "AC 3 Tier", source: "Mumbai", destination: "Chennai" }
    ]
  },
  "Delhi": {
    "Mumbai": [
      { name: "Rajdhani Express", price: 1500, departureTime: "16:55", arrivalTime: "08:35", duration: "15h 40m", type: "AC First Class", source: "Delhi", destination: "Mumbai" },
      { name: "Gujarat Queen", price: 1100, departureTime: "11:25", arrivalTime: "04:10", duration: "16h 45m", type: "AC 2 Tier", source: "Delhi", destination: "Mumbai" }
    ],
    "Bangalore": [
      { name: "Karnataka Express", price: 1600, departureTime: "20:50", arrivalTime: "06:40", duration: "33h 50m", type: "AC 2 Tier", source: "Delhi", destination: "Bangalore" },
      { name: "Rajdhani Express", price: 1800, departureTime: "20:15", arrivalTime: "05:30", duration: "33h 15m", type: "AC First Class", source: "Delhi", destination: "Bangalore" }
    ],
    "Chennai": [
      { name: "Grand Trunk Express", price: 1700, departureTime: "18:40", arrivalTime: "06:45", duration: "36h 05m", type: "AC First Class", source: "Delhi", destination: "Chennai" },
      { name: "Tamil Nadu Express", price: 1400, departureTime: "22:30", arrivalTime: "07:15", duration: "32h 45m", type: "AC 2 Tier", source: "Delhi", destination: "Chennai" }
    ]
  },
  "Bangalore": {
    "Mumbai": [
      { name: "Udyan Express", price: 1300, departureTime: "20:00", arrivalTime: "18:05", duration: "22h 05m", type: "AC 2 Tier", source: "Bangalore", destination: "Mumbai" },
      { name: "Chalukya Express", price: 950, departureTime: "18:10", arrivalTime: "16:00", duration: "21h 50m", type: "Sleeper", source: "Bangalore", destination: "Mumbai" }
    ],
    "Delhi": [
      { name: "Karnataka Express", price: 1600, departureTime: "18:30", arrivalTime: "05:30", duration: "35h 00m", type: "AC 2 Tier", source: "Bangalore", destination: "Delhi" },
      { name: "Rajdhani Express", price: 1800, departureTime: "20:00", arrivalTime: "06:35", duration: "34h 35m", type: "AC First Class", source: "Bangalore", destination: "Delhi" }
    ],
    "Chennai": [
      { name: "Shatabdi Express", price: 900, departureTime: "06:00", arrivalTime: "11:00", duration: "5h 00m", type: "Chair Car", source: "Bangalore", destination: "Chennai" },
      { name: "Brindavan Express", price: 750, departureTime: "08:10", arrivalTime: "13:40", duration: "5h 30m", type: "Chair Car", source: "Bangalore", destination: "Chennai" }
    ]
  },
  "Chennai": {
    "Mumbai": [
      { name: "Chennai Express", price: 1400, departureTime: "18:10", arrivalTime: "21:35", duration: "27h 25m", type: "AC First Class", source: "Chennai", destination: "Mumbai" },
      { name: "Chennai Mail", price: 1100, departureTime: "06:25", arrivalTime: "10:15", duration: "27h 50m", type: "AC 3 Tier", source: "Chennai", destination: "Mumbai" }
    ],
    "Delhi": [
      { name: "Grand Trunk Express", price: 1700, departureTime: "19:15", arrivalTime: "07:55", duration: "36h 40m", type: "AC First Class", source: "Chennai", destination: "Delhi" },
      { name: "Tamil Nadu Express", price: 1400, departureTime: "22:15", arrivalTime: "07:05", duration: "32h 50m", type: "AC 2 Tier", source: "Chennai", destination: "Delhi" }
    ],
    "Bangalore": [
      { name: "Shatabdi Express", price: 900, departureTime: "15:50", arrivalTime: "20:50", duration: "5h 00m", type: "Chair Car", source: "Chennai", destination: "Bangalore" },
      { name: "Brindavan Express", price: 750, departureTime: "07:50", arrivalTime: "13:25", duration: "5h 35m", type: "Chair Car", source: "Chennai", destination: "Bangalore" }
    ]
  }
};

export const fetchTrains = async (fromCity: string, toCity: string): Promise<Train[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return trains from the mock data if available
  if (trainRoutes[fromCity] && trainRoutes[fromCity][toCity]) {
    return trainRoutes[fromCity][toCity];
  }
  
  // Return empty array if no trains found for this route
  return [];
};
