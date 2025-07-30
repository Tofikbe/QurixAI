import '../styles/globals.css'

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
      <body className="bg-gradient-to-br from-green-900 via-black to-green-900 text-white">
        {children}
      </body>
    </html>
  )
}
