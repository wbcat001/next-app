"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: "/sample-icon.png", // 適当な画像をpublicフォルダに配置してください
  iconSize: [48, 48], // アイコンのサイズ
  iconAnchor: [16, 32], // アイコンの基準点
  popupAnchor: [0, -32], // ポップアップの基準点
});

const MapWithCustomIcon = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]} icon={customIcon}>
        <Popup>Custom Icon Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithCustomIcon;
