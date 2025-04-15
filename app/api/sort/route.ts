import connectDB from "../mongoose/connect";
import Places from "../mongoose/schema";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const sortType = searchParams.get("type");

  let sortOptions: any = {};

  if (sortType === "Most Liked First") {
    sortOptions = { likes: -1 };
  } else if (sortType === "Least Liked First") {
    sortOptions = { likes: 1 };
  } else if (sortType === "Most Recent First") {
    sortOptions = { createdAt: -1 };
  } else if (sortType === "Least Recent First") {
    sortOptions = { createdAt: 1 };
  } else {
    sortOptions = { createdAt: -1 }; //default to latest at the bottom, oldest at the top
  }

  const places = await Places.find({}).sort(sortOptions);

  return NextResponse.json(places, { status: 200 });
}
