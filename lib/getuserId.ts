const BEARER_TOKEN = 'Bearer AAAAAAAAAAAAAAAAAAAAAN6d...' // ← Tumhara real bearer token yahan likho

export async function getUserId(username: string) {
  const url = `https://api.twitter.com/2/users/by/username/${username}`

  const res = await fetch(url, {
    headers: {
      Authorization: BEARER_TOKEN,
    },
  })

  if (!res.ok) {
    throw new Error(`Error getting user ID: ${res.statusText}`)
  }

  const data = await res.json()
  return data.data?.id
}
