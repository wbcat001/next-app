// components/LocationFetcher.tsx
"use client";
import { useEffect, useState } from 'react';

const LocationFetcher = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(position),
        (error) => console.error(error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <h1>Current Location</h1>
      {location ? (
        <p>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LocationFetcher;
