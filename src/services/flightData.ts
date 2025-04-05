
export interface Flight {
  airline: string;
  flightNumber: string;
  source: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
}

export interface FlightData {
  [route: string]: Flight[];
}

export const flightData: FlightData = {
  "Mumbai-Delhi": [
    { airline: "IndiGo", flightNumber: "6E-2345", source: "Mumbai", destination: "Delhi", departureTime: "07:30", arrivalTime: "09:45", duration: "2h 15m", price: 4500 },
    { airline: "Air India", flightNumber: "AI-267", source: "Mumbai", destination: "Delhi", departureTime: "10:15", arrivalTime: "12:30", duration: "2h 15m", price: 5200 },
    { airline: "Vistara", flightNumber: "UK-975", source: "Mumbai", destination: "Delhi", departureTime: "14:00", arrivalTime: "16:10", duration: "2h 10m", price: 5800 },
    { airline: "SpiceJet", flightNumber: "SG-123", source: "Mumbai", destination: "Delhi", departureTime: "17:45", arrivalTime: "20:00", duration: "2h 15m", price: 4200 }
  ],
  "Delhi-Mumbai": [
    { airline: "IndiGo", flightNumber: "6E-123", source: "Delhi", destination: "Mumbai", departureTime: "06:15", arrivalTime: "08:30", duration: "2h 15m", price: 4300 },
    { airline: "Air India", flightNumber: "AI-864", source: "Delhi", destination: "Mumbai", departureTime: "09:00", arrivalTime: "11:15", duration: "2h 15m", price: 5100 },
    { airline: "Vistara", flightNumber: "UK-945", source: "Delhi", destination: "Mumbai", departureTime: "12:30", arrivalTime: "14:40", duration: "2h 10m", price: 5600 },
    { airline: "SpiceJet", flightNumber: "SG-456", source: "Delhi", destination: "Mumbai", departureTime: "16:00", arrivalTime: "18:15", duration: "2h 15m", price: 4100 }
  ],
  "Mumbai-Bangalore": [
    { airline: "IndiGo", flightNumber: "6E-567", source: "Mumbai", destination: "Bangalore", departureTime: "05:45", arrivalTime: "07:45", duration: "2h 00m", price: 3800 },
    { airline: "Air India", flightNumber: "AI-607", source: "Mumbai", destination: "Bangalore", departureTime: "10:30", arrivalTime: "12:30", duration: "2h 00m", price: 4600 },
    { airline: "Emirates", flightNumber: "EK-507", source: "Mumbai", destination: "Bangalore", departureTime: "14:15", arrivalTime: "16:15", duration: "2h 00m", price: 7200 }
  ],
  "Bangalore-Mumbai": [
    { airline: "IndiGo", flightNumber: "6E-789", source: "Bangalore", destination: "Mumbai", departureTime: "08:30", arrivalTime: "10:30", duration: "2h 00m", price: 3900 },
    { airline: "Vistara", flightNumber: "UK-865", source: "Bangalore", destination: "Mumbai", departureTime: "12:00", arrivalTime: "14:00", duration: "2h 00m", price: 4900 },
    { airline: "Qatar Airways", flightNumber: "QR-399", source: "Bangalore", destination: "Mumbai", departureTime: "17:30", arrivalTime: "19:30", duration: "2h 00m", price: 8100 }
  ],
  "Delhi-Bangalore": [
    { airline: "IndiGo", flightNumber: "6E-246", source: "Delhi", destination: "Bangalore", departureTime: "06:00", arrivalTime: "08:40", duration: "2h 40m", price: 5100 },
    { airline: "Air India", flightNumber: "AI-505", source: "Delhi", destination: "Bangalore", departureTime: "09:30", arrivalTime: "12:10", duration: "2h 40m", price: 5600 },
    { airline: "Vistara", flightNumber: "UK-815", source: "Delhi", destination: "Bangalore", departureTime: "15:45", arrivalTime: "18:25", duration: "2h 40m", price: 6200 }
  ],
  "Bangalore-Delhi": [
    { airline: "SpiceJet", flightNumber: "SG-222", source: "Bangalore", destination: "Delhi", departureTime: "07:15", arrivalTime: "09:55", duration: "2h 40m", price: 5000 },
    { airline: "IndiGo", flightNumber: "6E-333", source: "Bangalore", destination: "Delhi", departureTime: "11:30", arrivalTime: "14:10", duration: "2h 40m", price: 5200 },
    { airline: "Emirates", flightNumber: "EK-413", source: "Bangalore", destination: "Delhi", departureTime: "16:20", arrivalTime: "19:00", duration: "2h 40m", price: 8500 }
  ],
  "Chennai-Mumbai": [
    { airline: "IndiGo", flightNumber: "6E-777", source: "Chennai", destination: "Mumbai", departureTime: "08:00", arrivalTime: "10:15", duration: "2h 15m", price: 4200 },
    { airline: "Air India", flightNumber: "AI-429", source: "Chennai", destination: "Mumbai", departureTime: "13:30", arrivalTime: "15:45", duration: "2h 15m", price: 4900 }
  ],
  "Mumbai-Chennai": [
    { airline: "SpiceJet", flightNumber: "SG-555", source: "Mumbai", destination: "Chennai", departureTime: "07:45", arrivalTime: "10:00", duration: "2h 15m", price: 4100 },
    { airline: "Vistara", flightNumber: "UK-673", source: "Mumbai", destination: "Chennai", departureTime: "14:30", arrivalTime: "16:45", duration: "2h 15m", price: 5200 }
  ]
};

// Function to simulate API call
export const fetchFlights = (fromCity: string, toCity: string): Promise<Flight[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const route = `${fromCity}-${toCity}`;
      const flights = flightData[route] || [];
      resolve(flights);
    }, 600);
  });
};
