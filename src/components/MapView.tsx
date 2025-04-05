
import { useEffect, useRef } from 'react';
import L from 'leaflet';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  fromCity: string;
  toCity: string;
}

// City coordinates mapping
const cityCoordinates: Record<string, [number, number]> = {
  'Mumbai': [19.0760, 72.8777],
  'Delhi': [28.7041, 77.1025],
  'Bangalore': [12.9716, 77.5946],
  'Chennai': [13.0827, 80.2707]
};

const MapView = ({ fromCity, toCity }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Initialize map only if both cities are selected
    if (!fromCity || !toCity || !mapRef.current) return;

    // Clean up any existing map
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Get coordinates for the cities
    const fromCoords = cityCoordinates[fromCity];
    const toCoords = cityCoordinates[toCity];

    if (!fromCoords || !toCoords) return;

    // Create map instance
    const map = L.map(mapRef.current).setView([
      (fromCoords[0] + toCoords[0]) / 2, // Center between the two points
      (fromCoords[1] + toCoords[1]) / 2
    ], 5); // Zoom level

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create custom icon for markers
    const customIcon = L.icon({
      iconUrl: '/placeholder.svg', // Using the existing placeholder SVG
      iconSize: [25, 25],
      iconAnchor: [12, 25],
      popupAnchor: [0, -25]
    });

    // Add markers for each city
    L.marker(fromCoords, { icon: customIcon })
      .bindPopup(`<b>${fromCity}</b><br>Departure City`)
      .addTo(map);

    L.marker(toCoords, { icon: customIcon })
      .bindPopup(`<b>${toCity}</b><br>Arrival City`)
      .addTo(map);

    // Draw a line between the two cities
    const polyline = L.polyline([fromCoords, toCoords], {
      color: '#D6BCFA', // Light Purple color
      weight: 3,
      opacity: 0.7,
      dashArray: '10, 10',
      animate: {
        duration: 2000,
        iterations: Infinity
      }
    }).addTo(map);

    // Fit the map to the polyline bounds
    map.fitBounds(polyline.getBounds().pad(0.2));

    // Save the map instance for cleanup
    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [fromCity, toCity]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl mt-6">
      <div ref={mapRef} className="h-[400px] md:h-[500px] w-full bg-white/5"></div>
    </div>
  );
};

export default MapView;
