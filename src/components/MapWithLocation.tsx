"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

// Map center updater component
const CenterUpdater = ({ position }: { position: LatLng }) => {
  const map = useMap(); // useMap hook to get the map instance

  useEffect(() => {
    if (position) {
      map.setView(position, 13); // Dynamically update the map center
    }
  }, [position, map]);

  return null;
};

const MapWithLocation = () => {
  const [position, setPosition] = useState<LatLng | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition(new LatLng(pos.coords.latitude, pos.coords.longitude));
        },
        (err) => {
          console.error("Error getting location:", err.message);
        }
      );
    }
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center
      zoom={13}
      style={{ width: "100%", height: "1000px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <>
          <CenterUpdater position={position} /> {/* Dynamically update center */}
          <Marker position={position}>
            <Popup>Your Current Location</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};

export default MapWithLocation;
