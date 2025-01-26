import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json("ハロー")
}

export async function POST(request: Request) {
    const reqBody = await request.json()
    console.log(reqBody)        // リクエストbodyの中身が表示
    return NextResponse.json({message:"ハロー"})
}