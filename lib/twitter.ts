const BEARER_TOKEN = 're_e2rZdAHG_9TE18SNPaiD8HfwccBNieBx4'

export async function fetchTweetsFromX(userId: string) {
  const response = await fetch(
    `https://api.twitter.com/2/users/${userId}/tweets?max_results=50&tweet.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch tweets')
  }

  const data = await response.json()
  return data.data || []
}
