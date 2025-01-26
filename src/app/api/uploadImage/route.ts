import { GetSignedUrlConfig, Storage } from "@google-cloud/storage";


import { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server";

import { version } from "os";





// 多分古いバージョンの書き方
// export default async function handler(req: any, res: any) {
//   const storage = new Storage({
//     projectId: process.env.PROJECT_ID,
//     keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
//   });
//   const bucketName = process.env.BUCKET_NAME ?? ''
//   const bucket = storage.bucket(bucketName)
//   const file = bucket.file(req.query.file)
//   const options = {
//     expires: Date.now() + 1 * 60 * 1000,
//     fields: { "x-goog-meta-test": "data" }
//   }
//   const [response] = await file.generateSignedPostPolicyV4(options)
//   res.status(200).json(response)
// }


// これが新しい書き方

export async function POST(request: NextRequest) {

  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON,
  })
  console.log()
  const bucketName = process.env.BUCKET_NAME ?? '';
  const bucket = storage.bucket(bucketName);  
  
  const body = await request.json()
  const fileName = body.fileName  
  console.log(fileName)
  const file = bucket.file(fileName);
  
  try{
    const options = {
      expires: Date.now() + 1 * 60 * 1000,
      field: { "x-goog-meta-test": "data" } 
    }

    const [res] = await file.generateSignedPostPolicyV4(options);
    return NextResponse.json(res, { status: 200 });
  }catch(error: unknown){
    if (error instanceof Error){
      console.error(error.message)
      return NextResponse.json({ error: error.message }, { status: 500 });

    }else{
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }

}
