export default async function handler(req, res) {
  const { message } = req.body;

  // Sirf crypto related queries allow
  if (!/crypto|bitcoin|ethereum|blockchain|token|web3|defi|nft/i.test(message)) {
    return res.status(200).json({
      reply: "⚠️ Ye agent sirf cryptocurrency se related sawaalon ka jawab deta hai.",
    });
  }

  try {
    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer xai-jnYr1BURv1AoGyIfKcVAR4ua2owY1lfJmTDZtLsGjlb8W6pXbFoWJU7Fm4w5cgFojSHkUK8n6CvpwQb6", // 👈 tumhari API key yaha
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "grok-2-latest", // ya "grok-4" agar plan allow karta hai
        messages: [
          { role: "system", content: "Tum ek crypto expert ho. Sirf crypto ke bare me hi jawab do." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
