import { fetchUserTweets } from '@/lib/twitter'
import { calculateBP } from '@/lib/calculateBP'

export default async function handler(req, res) {
  const userId = 'YOUR_USER_ID' // Replace with actual user ID
  const tweets = await fetchUserTweets(userId)

  let totalBP = 0

  for (const tweet of tweets) {
    const bp = calculateBP(tweet)
    totalBP += bp
  }

  res.status(200).json({ totalBP })
}
