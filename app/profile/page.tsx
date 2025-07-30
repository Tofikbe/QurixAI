'use client'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const [pfp, setPfp] = useState('')
  const [bio, setBio] = useState('')
  const [social, setSocial] = useState('')

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('profile') || '{}')
    setPfp(saved.pfp || '')
    setBio(saved.bio || '')
    setSocial(saved.social || '')
  }, [])

  const saveProfile = () => {
    localStorage.setItem('profile', JSON.stringify({ pfp, bio, social }))
    alert('Saved!')
  }

  return (
    <div className="p-4 blur-glass">
      <h2 className="text-xl font-bold">Profile Setup</h2>
      <input type="text" placeholder="PFP URL" value={pfp} onChange={(e) => setPfp(e.target.value)} />
      <input type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
      <input type="text" placeholder="Social Handle" value={social} onChange={(e) => setSocial(e.target.value)} />
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  )
}
