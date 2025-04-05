
export interface Hotel {
  name: string;
  description: string;
  image: string;
  price: string;
  oldPrice?: number;
  rating: number;
}

export interface HotelData {
  [city: string]: Hotel[];
}

export const hotelData: HotelData = {
  Mumbai: [
    { name: "Hotel Taj", description: "Luxury hotel in Mumbai with stunning sea views and world-class amenities", image: "/placeholders/hotel1.jpg", price: "₹5000", rating: 5 },
    { name: "Hotel Sea View", description: "Beachside hotel with a panoramic view of the Arabian Sea", image: "/placeholders/hotel2.jpg", price: "₹3000", rating: 4.5 },
    { name: "Hotel Gateway", description: "Budget-friendly stay in the heart of Mumbai with easy access to tourist attractions", image: "/placeholders/hotel3.jpg", price: "₹2000", rating: 3.5 },
    { name: "Hotel Marina", description: "Modern hotel with all amenities including pool and fitness center", image: "/placeholders/hotel4.jpg", price: "₹4000", rating: 4 },
    { name: "Hotel Pearl", description: "Quiet and peaceful hotel located in suburban Mumbai", image: "/placeholders/hotel5.jpg", price: "₹2500", rating: 4 },
    { name: "Hotel Orchid", description: "Great for business travelers with conference facilities", image: "/placeholders/hotel6.jpg", price: "₹3500", rating: 4.5 },
    { name: "Hotel Plaza", description: "Convenient location for tourists, close to major attractions", image: "/placeholders/hotel7.jpg", price: "₹4500", rating: 4 },
    { name: "Hotel Marina Bay", description: "Riverside hotel with beautiful sunset views", image: "/placeholders/hotel8.jpg", price: "₹5500", rating: 4.5 },
    { name: "Hotel Zenith", description: "Stylish and contemporary design with rooftop restaurant", image: "/placeholders/hotel9.jpg", price: "₹6000", rating: 5 },
    { name: "Hotel Riverside", description: "On the banks of the river with boat tours available", image: "/placeholders/hotel10.jpg", price: "₹7000", rating: 4.5 },
  ],
  Delhi: [
    { name: "Hotel New Delhi", description: "Business hotel in the commercial district of Delhi", image: "/placeholders/hotel11.jpg", price: "₹3500", oldPrice: 3400, rating: 4 },
    { name: "Hotel Red Fort", description: "Located near the historic Red Fort with traditional décor", image: "/placeholders/hotel12.jpg", price: "₹4000", oldPrice: 3800, rating: 4.5 },
    { name: "Hotel Taj Palace", description: "Luxury hotel in Delhi with royal treatment and ambiance", image: "/placeholders/hotel13.jpg", price: "₹6000", oldPrice: 6200, rating: 5 },
    { name: "Hotel Ashok", description: "Perfect for tourists in Delhi with guided tour services", image: "/placeholders/hotel14.jpg", price: "₹4500", oldPrice: 4600, rating: 4 },
    { name: "Hotel Grand", description: "Spacious rooms with top amenities and 24/7 room service", image: "/placeholders/hotel15.jpg", price: "₹7000", oldPrice: 7000, rating: 5 },
    { name: "Hotel Connaught", description: "In the heart of Delhi, near shopping areas and restaurants", image: "/placeholders/hotel16.jpg", price: "₹5000", oldPrice: 5100, rating: 4.5 },
    { name: "Hotel Regency", description: "Modern hotel with full services including spa and wellness center", image: "/placeholders/hotel17.jpg", price: "₹4000", oldPrice: 3900, rating: 4 },
    { name: "Hotel Delhi Inn", description: "Cozy and comfortable, budget-friendly accommodation", image: "/placeholders/hotel18.jpg", price: "₹2500", oldPrice: 2400, rating: 3.5 },
    { name: "Hotel Park", description: "Set in a peaceful park area with outdoor activities", image: "/placeholders/hotel19.jpg", price: "₹3000", oldPrice: 3100, rating: 4 },
    { name: "Hotel Maharaja", description: "Royal experience with regal amenities and traditional Indian architecture", image: "/placeholders/hotel20.jpg", price: "₹8000", oldPrice: 8100, rating: 5 },
  ],
  Bangalore: [
    { name: "Hotel Tech Park", description: "Modern hotel near IT parks with high-speed internet", image: "/placeholders/hotel21.jpg", price: "₹4000", oldPrice: 3900, rating: 4.2 },
    { name: "Hotel Garden City", description: "Surrounded by lush gardens and greenery", image: "/placeholders/hotel22.jpg", price: "₹3500", oldPrice: 3600, rating: 4 },
    { name: "Hotel Silicon Valley", description: "Perfect for business travelers in the tech hub", image: "/placeholders/hotel23.jpg", price: "₹5000", oldPrice: 4800, rating: 4.5 },
    { name: "Hotel Cubbon", description: "Near Cubbon Park with historic charm", image: "/placeholders/hotel24.jpg", price: "₹4500", oldPrice: 4500, rating: 4.3 },
  ],
  Chennai: [
    { name: "Hotel Marina Beach", description: "Beachfront hotel with sea view rooms", image: "/placeholders/hotel25.jpg", price: "₹3800", oldPrice: 3700, rating: 4.1 },
    { name: "Hotel Heritage", description: "Colonial-style architecture with modern amenities", image: "/placeholders/hotel26.jpg", price: "₹4200", oldPrice: 4300, rating: 4.4 },
    { name: "Hotel Madras", description: "Traditional South Indian hospitality and cuisine", image: "/placeholders/hotel27.jpg", price: "₹3500", oldPrice: 3500, rating: 4 },
    { name: "Hotel Coromandel", description: "Luxury hotel with private beach access", image: "/placeholders/hotel28.jpg", price: "₹6000", oldPrice: 5800, rating: 4.8 },
  ],
};

// Function to simulate API call
export const fetchHotels = (city: string): Promise<Hotel[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const hotels = hotelData[city] || [];
      resolve(hotels);
    }, 800);
  });
};
