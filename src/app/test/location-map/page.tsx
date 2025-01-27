

import dynamic from "next/dynamic";

const MapWithLocation = dynamic(() => import("@/components/MapWithLocation"), {
  ssr: false, // サーバーサイドレンダリングを無効化
});
export default function LocationMapPage() {
  return (
    <main>
      <h1>Location Map</h1>
      <p>This map shows your current location.</p>
      <MapWithLocation />
    </main>
  );
}
