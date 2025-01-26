// app/test/gcs/page.tsx
import { useState } from 'react';
import { uploadFileToGCS } from '@/lib/gcs';

const GCSTestPage = () => {
  const [filePath, setFilePath] = useState('');
  const [destination, setDestination] = useState('');
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    try {
      await uploadFileToGCS(filePath, destination);
      setStatus('Upload successful!');
    } catch (error) {
      console.error(error);
      setStatus('Upload failed.');
    }
  };

  return (
    <div>
      <h1>GCS Test</h1>
      <input
        type="text"
        placeholder="File Path"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination Path"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
};

export default GCSTestPage;
