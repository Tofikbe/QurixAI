import { calculateBP } from '../../lib/calculateBP'

const BEARER_TOKEN = 'Bearer AAAAAAAAAAAAAAAAAAAAAN6d...' // ← Apna actual X Bearer Token yahan lagao

// Get Twitter User ID from username
const getUserId = async (username: string) => {
  const res = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, {
    headers: {
      Authorization: BEARER_TOKEN,
    },
  })

  if (!res.ok) {
    throw new Error('❌ Failed to fetch user ID')
  }

  const data = await res.json()
  return data.data?.id
}

// Fetch recent tweets by user ID
const fetchTweetsFromX = async (userId: string) => {
  const res = await fetch(`https://api.twitter.com/2/users/${userId}/tweets?max_results=100`, {
    headers: {
      Authorization: BEARER_TOKEN,
    },
  })

  if (!res.ok) {
    throw new Error('❌ Failed to fetch tweets')
  }

  const data = await res.json()
  return data.data || []
}

export default async function handler(req, res) {
  try {
    const username = req.query.username || 'Crypto_King877' // ← Later frontend se dynamic bhejna
    const userId = await getUserId(username)
    const tweets = await fetchTweetsFromX(userId)

    let totalBP = 0

    for (const tweet of tweets) {
      totalBP += calculateBP(tweet)
    }

    res.status(200).json({ totalBP })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message || 'Unknown error' })
  }
}
