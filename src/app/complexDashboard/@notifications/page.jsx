import React from 'react'
import Link from 'next/link'

const Notification = () => {
  return (
    <div className=' bg-blue-400'>
        <div>Notification</div>
        <Link href="/complexDashboard/archived">Archived</Link>
    </div>
  )
}

export default Notification