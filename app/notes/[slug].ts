// handles fetch(`/api/notes/${slug}`) by joining the correct directory to the request
import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  const filePath = path.join(process.cwd(), "notes", "mdx", `${slug}.mdx`);

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    res.status(200).json({ content });
  } catch (error) {
    res.status(404).json({ error: "File not found" });
  }
}
