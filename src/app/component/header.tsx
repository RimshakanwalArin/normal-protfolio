import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="img1 sm:flex-row">
          
        <Image 
      src="/haameem-logo.jpeg" 
      alt="Description of image" 
      width={700} 
      height={700} 
      className="rounded-full mx-auto shadow-blue-500 shadow-2xl"
    />
        </div>
        <div className="link">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contect">Contect</Link>
        </div>
       </header> 
  )
}

export default Header