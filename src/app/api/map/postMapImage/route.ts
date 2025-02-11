
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
    return NextResponse.json({ error: 'Not implemented' }, { status: 501 });
}

// export async function POST(request: NextRequest) {
//   const { body } = await request.json();
  
//   try{
//     const mapImage = await prisma.image.create({ 
//       data: {
//         userId: userId,
//         fileName: fileName,
//         originalUrl: originalUrl,
//         generatedUrl: generatedUrl,
//         expiration: new Date(),
//         latitude: latitude,
//         longitude: longitude,
//         prompt: prompt,
//         tag: tag,

//       },
//     });
//     console.log("upload response", mapImage);

//     if (!mapImage) {
//       return NextResponse.json({ error: "Failed to create map image" }, { status: 500 });
//     }
    
//     return NextResponse.json(mapImage, { status: 200 });
//   }catch(error: unknown){
//     if (error instanceof Error){
//       console.error(error.message)
//       return NextResponse.json({ error: error.message }, { status: 500 });

//     }else{
//       return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
//     }
//   }

// }