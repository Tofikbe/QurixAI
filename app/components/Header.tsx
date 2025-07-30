'use client'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      {menuOpen && (
        <div className="blur-glass mt-2 space-y-2">
          <input type="text" placeholder="Wallet Address" onBlur={(e) => localStorage.setItem('wallet', e.target.value)} />
          <input type="email" placeholder="Email Address" onBlur={(e) => localStorage.setItem('email', e.target.value)} />
          <button onClick={() => window.location.href='/profile'}>Profile</button>
          <button onClick={() => window.location.href='/settings'}>Settings</button>
        </div>
      )}
    </div>
  )
}
