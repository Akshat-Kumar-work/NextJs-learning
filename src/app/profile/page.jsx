'use client'

import React from 'react'
import { useRouter } from "next/navigation"


const Profile = () => {
  const router = useRouter();
  const handleAboutRoute = ()=>{
      router.push("/about")
  }

  return (
    <div>Profile page
    <button onClick={handleAboutRoute}>Navigate to about route</button>
    </div>
  )
}

export default Profile