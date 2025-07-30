export function calculateBP(tweetText: string): number {
  const lower = tweetText.toLowerCase()
  let points = 0

  if (lower.includes('aptos')) points += 10
  if (lower.includes('polygon')) points += 10
  if (lower.includes('web3')) points += 5
  if (lower.includes('airdrop')) points += 3
  if (lower.includes('build')) points += 5

  return points
}
