import connectDB from "../mongoose/connect";
import Places from "../mongoose/places";
import { NextResponse } from "next/server";

export async function GET(req: any) {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const likes = searchParams.get("likes");
  
    if (!likes)
      return NextResponse.json({ error: "Missing likes" }, { status: 400 });
  
    const userPlaces = await Places.findOne({ likes });
    return NextResponse.json(userPlaces);
}

export async function POST(req: any) {
    await connectDB();
    const { place, likes } = await req.json();
  
    if (!place || !likes) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
  
    const savedPlace = await Places.findOneAndUpdate(
      { place },
      { $set: { likes } },
      { new: true, upsert: true }
    );
  
    return NextResponse.json(savedPlace, { status: 201 });
  }