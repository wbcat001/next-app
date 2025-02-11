// pages/test/index.tsx
import Link from 'next/link';

const TestPage = () => {
  return (
    <div>
      <h1>Test Pages</h1>
      <ul>
        <li>
          <Link href="/test/location">Test Location Fetcher</Link>
        </li>
        <li>
          <Link href="/test/map">Test Map Display</Link>
        </li>
        <li>
          <Link href="/test/location-map">Test Location Fetcher and Map</Link>
        </li>
        <li>
          <Link href="/test/icon-map">Test Icon-map</Link>
        </li>
        <li>
          <Link href="/test/upload-image">Test Image Uploader</Link>
        </li>
        <li>
          <Link href="/test/user">Test Post User data</Link>
        </li>
        <li>
          <Link href="/test/getImage">Test Get Image</Link>
        </li>
        <li>
          <Link href="/test/userdata">Test Get User data</Link>
        </li>
       
        <li>
          <Link href="/test/session">Test Session</Link>
        </li>
        {/* <li>
          <Link href="/test/gcs">Test GCS Access</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default TestPage;
