// pages/index.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>
        <Link href="/test">Go to Test Pages</Link>
      </p>
    </div>
  );
};

export default HomePage;
