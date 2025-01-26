"use client";

import { fetchSignedUrlGCS } from "@/lib/image";
import { useEffect, useState } from "react";

const sampleFileName = "sample.png"
export default function GetImagePage() {

    const [src, setSrc] = useState<string | null>(null)

    useEffect(() => {
        const fetchImage = async () => {
            const fetchedUrl = await fetchSignedUrlGCS(sampleFileName)
            if (!fetchedUrl) {
                console.error('Failed to fetch image')
                return
            }
            console.log("fetchedUrl", fetchedUrl)
            setSrc(fetchedUrl);
        }
        fetchImage();
    }, [])
  return (
    <>
    {src ? (
        <div>
            <h1>Get Image</h1>
            <p>This page shows the image.</p>
            <img src={src} alt="Image" />
      </div>
    ):(
        <div>
            <h1>Get Image</h1>
            <p>Waiting for fetch image</p>

        </div>
    )}
        </>
   
  );
}