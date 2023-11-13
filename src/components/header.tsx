import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className='bg-white flex justify-between items-center h-12 p-2'>
        <div className='header_name'>Welcome, Refiola Julieta</div>
            <div className="header_profil">
                <Image src="/profil_photo.jpg" width={80} height={80} alt="profile" className="header_profil-img"/>
                <div className="header_profil-name">Refiola Julieta</div>
        </div>

    </nav>
  )
}
