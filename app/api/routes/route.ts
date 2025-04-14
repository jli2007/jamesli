import connectDB from "../mongoose/connect";
import Places from "../mongoose/schema";
import { NextResponse } from "next/server";

export async function GET(req: any) {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const place = searchParams.get("place");
  
    if (!place)
      return NextResponse.json({ error: "Missing place" }, { status: 400 });

    let userPlace = await Places.findOne({ place });

    if (!userPlace) {
      userPlace = await Places.create({ place, likes: 0 });
    }

    return NextResponse.json(userPlace);
}

export async function POST(req: any) {
    await connectDB();
    const { place, action } = await req.json();

    if (!place || !action) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const updateOperation = action === "like" ? { $inc: { likes: 1 } } : { $inc: { likes: -1 } };

    const savedPlace = await Places.findOneAndUpdate(
      { place },
      updateOperation,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return NextResponse.json(savedPlace, { status: 201 });
}
