"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet/hooks";
import { useState } from "react";


type MapComponetProps = {
  setImages: (images: {generatedUrl: string, id: string, latitude: number, longitude: number}[]) => void;
}
const MapCompoent: React.FC<MapComponetProps> = ({setImages}) => {
  const map  = useMapEvents({
    click: () => {
      map.locate()
      console.log(map.getCenter());
      // get lat and long of square
      const latlangBounds = map.getBounds();
      

    },
    dragend: () => {
      console.log("dragend");
      console.log(map.getCenter());
    },
    zoomend: async () => {
      console.log("zoomend");
      console.log(map.getCenter());

      const latlangBounds = map.getBounds();
      console.log(latlangBounds.getNorthWest());
      console.log(latlangBounds.getNorthEast());
      const response = await fetch("/api/map/getMapImage",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          minLatitude: latlangBounds.getSouthEast().lat,
          maxLatitude: latlangBounds.getNorthWest().lat,
          minLongitude: latlangBounds.getNorthWest().lng,
          maxLongitude: latlangBounds.getSouthEast().lng,
          zoom: map.getZoom()
        }),
      })
      if (response.ok){
        console.log(response.body);
        const data = await response.json();
        console.log(data);
        setImages(data);
   
      }
    }

    
    
  })
  return <></>;
}


const customIcon = (url: string)  => new Icon({
  iconUrl: url, 
  iconSize: [48, 48], // アイコンのサイズ
  iconAnchor: [16, 32], // アイコンの基準点
  popupAnchor: [0, -32], // ポップアップの基準点
});

const MapWithCustomIcon = () => {
  const [images, setImages] = useState<{generatedUrl: string, id: String, latitude: number, longitude: number}[]>([]);

  return (
    <MapContainer
      center={[45.505, 128.09]}
      zoom={13}
      style={{ width: "100%", height: "500px" }}
    >
      <MapCompoent setImages={setImages}/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]} icon={customIcon("/sample-icon.png")}>
        <Popup>Custom Icon Location</Popup>
      </Marker>
      
      {images.map((image, index) => (
        <Marker key={index} position={[image.latitude, image.longitude]} icon={customIcon(image.generatedUrl)}>
          
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithCustomIcon;
