import dynamic from "next/dynamic";

const MapWithCustomIcon = dynamic(() => import("@/components/MapWithCustomIcon"), {
  ssr: false, // サーバーサイドレンダリングを無効化
});
export default function CustomIconMapPage() {
  return (
    <main>
      <h1>Custom Icon Map</h1>
      <p>This map displays a custom icon at a specific location.</p>
      <MapWithCustomIcon />
    </main>
  );
}
