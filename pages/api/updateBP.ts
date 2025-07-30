import { fetchTweetsFromX } from '../../lib/twitter'
import { calculateBP } from '../../lib/calculateBP'

const BEARER_TOKEN = 're_e2rZdAHG_9TE18SNPaiD8HfwccBNieBx4' // ✅ your actual Bearer Token

const getUserId = async (username: string) => {
  const response = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch user ID')
  }

  const data = await response.json()
  return data.data.id
}

export default async function handler(req, res) {
  try {
    const username = 'Tofikbe' // ✅ your Twitter username
    const userId = await getUserId(username)

    const tweets = await fetchTweetsFromX(userId)

    let totalBP = 0

    for (const tweet of tweets) {
      const bp = calculateBP(tweet)
      totalBP += bp
    }

    res.status(200).json({ totalBP })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Something went wrong' })
  }
}
