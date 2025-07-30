export function calculateBP(tweet: any): number {
  const { like_count, retweet_count, reply_count } = tweet.public_metrics

  // You can change weights if needed
  const likeBP = like_count * 1
  const retweetBP = retweet_count * 2
  const replyBP = reply_count * 1.5

  return likeBP + retweetBP + replyBP
}
