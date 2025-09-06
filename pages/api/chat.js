export const config = {
  api: {
    bodyParser: false, // Handle FormData manually
  },
};

import formidable from "formidable";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Error parsing form" });

    const userMessage = fields.message || "";
    const imageFile = files.image;

    // Example AI API Call (replace with your backend / OpenAI / etc.)
    let reply = `You said: ${userMessage}`;
    if (imageFile) reply += " (Image received and scanned ✅)";

    return res.status(200).json({ reply });
  });
}
