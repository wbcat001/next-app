// lib/gcs.ts
import { Storage } from '@google-cloud/storage';

const storage = new Storage();
const bucketName = 'your-bucket-name';

export const uploadFileToGCS = async (filePath: string, destination: string) => {
  await storage.bucket(bucketName).upload(filePath, {
    destination: destination,
  });
  console.log(`${filePath} uploaded to ${bucketName}/${destination}`);
};
