// should've used next but too lazy to switch over
const express = require("express");
import Place from "./models/places";
import { connectDB, closeDB } from "./connect";
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Like a place
app.post("/api/like/:slug", async (req: any, res: any) => {
  connectDB();
  const { slug } = req.params;
  const place = await Place.findOneAndUpdate(
    { slug },
    { $inc: { likes: 1 } },
    { upsert: true, new: true }
  );
  res.json({ likes: place.likes });
  closeDB();
});

//  Unlike a place
app.post("/api/unlike/:slug", async (req: any, res: any) => {
  connectDB();
  const { slug } = req.params;
  const place = await Place.findOneAndUpdate(
    { slug },
    { $inc: { likes: -1 } },
    { upsert: true, new: true }
  );
  res.json({ likes: place.likes });
  closeDB();
});

app.get("/api/like/:slug", async (req: any, res: any) => {
  connectDB();
  const { slug } = req.params;
  const place = await Place.findOne({ slug });
  res.json({ likes: place?.likes || 0 });
  closeDB();
});
