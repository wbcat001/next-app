// components/Map.tsx
"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {useMapEvents} from 'react-leaflet/hooks';
import { useEffect, useState } from 'react';
import { LatLng } from 'leaflet';

const MapCompoent = () => {
  const map  = useMapEvents({
    click: () => {
      map.locate()
      console.log(map.getCenter());
      // get lat and long of square
      const latlangBounds = map.getBounds();
      console.log(latlangBounds.getNorthWest());
      console.log(latlangBounds.getNorthEast());

    },
    dragend: () => {
      console.log("dragend");
      console.log(map.getCenter());
    },
    zoomend: () => {
      console.log("zoomend");
      console.log(map.getCenter());
    }

    
    
  })
  return null;
}
const Map = () => {
  const [position, setPosition] = useState<LatLng | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition(new LatLng(position.coords.latitude, position.coords.longitude));
      });
    }
  }, []);

  return (
    <MapContainer center={position ?? [51.505, -0.09]} zoom={13} style={{ width: '100%', height: '1000px' }}>
      <MapCompoent />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {position && (
        <Marker position={position}>
          <Popup>Current Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
