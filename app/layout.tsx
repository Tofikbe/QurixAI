export const metadata = {
  title: 'QurixAI',
  description: 'Track Web3 engagement on Aptos & Polygon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
