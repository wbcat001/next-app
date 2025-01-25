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
        {/* <li>
          <Link href="/test/gcs">Test GCS Access</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default TestPage;
