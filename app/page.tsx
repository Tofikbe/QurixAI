import Header from './components/Header'
import React from 'react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-900 text-white">
      {/* Top Banner */}
      <div className="w-full h-[100px] flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md text-3xl font-bold">
        QurixAI
      </div>

      {/* Tabs for Blockchain Selection */}
      <div className="flex justify-center mt-6 space-x-4 text-lg font-semibold">
        <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-lg">Aptos</button>
        <button className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-lg">Polygon</button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg" disabled>Coming Soon</button>
      </div>

      {/* Leaderboard Section */}
      <section className="mt-8 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-4">Top 100 Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="bg-black bg-opacity-40 rounded-xl p-4 flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <div className="font-semibold">@username{i + 1}</div>
                <div className="text-sm text-gray-400">BP: {Math.floor(Math.random() * 5000)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-lg">View More</button>
        </div>
      </section>

      {/* Community Campaigns */}
      <section className="mt-12 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-2">Community Campaigns</h2>
        <p className="text-gray-400">Coming Soon...</p>
      </section>

      {/* Floating Right Menu */}
      <div className="fixed top-6 right-6 space-y-4">
        {/* Wallet and Email */}
        <div className="bg-black bg-opacity-40 p-4 rounded-xl space-y-2 w-64">
          <input
            type="text"
            placeholder="Enter wallet address"
            className="w-full bg-gray-800 px-3 py-2 rounded-md text-white"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="w-full bg-gray-800 px-3 py-2 rounded-md text-white"
          />
        </div>

        {/* Profile Section */}
        <div className="bg-black bg-opacity-40 p-4 rounded-xl space-y-2 w-64">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-gray-800 px-3 py-2 rounded-md text-white"
          />
          <input
            type="text"
            placeholder="Bio"
            className="w-full bg-gray-800 px-3 py-2 rounded-md text-white"
          />
          <input
            type="text"
            placeholder="Twitter/Discord/Telegram"
            className="w-full bg-gray-800 px-3 py-2 rounded-md text-white"
          />
          <input type="file" className="text-sm text-gray-300" />
        </div>

        {/* Settings */}
        <div className="relative group">
          <button className="bg-green-800 px-4 py-2 rounded-md">⋮</button>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-black bg-opacity-90 rounded-lg text-sm w-48 p-2">
            <div className="hover:bg-green-900 px-3 py-2 rounded">About QurixAI</div>
          </div>
        </div>
      </div>

      {/* Events Side Display */}
      <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-60 py-2 overflow-hidden">
  <div className="whitespace-nowrap animate-marquee text-sm text-center">
    🚀 New Event: Earn double BP this weekend! 💥 | 💡 Tip: Tweet about Aptos daily for higher rank! | 🎯 Polygon campaign starts Aug 5th!
  </div>
</div>
