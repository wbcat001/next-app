// pages/test/map.tsx
"use client";
import dynamic from 'next/dynamic';

// React-LeafletのコンポーネントはSSRを無効化する必要があるため、dynamic importを使用
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const MapTestPage = () => {
  return (
    <div>
      <h1>Map Test</h1>
      <Map />
    </div>
  );
};

export default MapTestPage;
