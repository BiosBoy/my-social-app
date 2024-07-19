'use client'
import Link from 'next/link'
import { useAuth } from '@/auth/AuthContext'
import { useState } from 'react'
import Image from 'next/image'

const NavBar = () => {
  const { currentUser } = useAuth()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="navMenu">
      <div className="logoWrap">
        <Image
          alt="logo"
          src={require('../static/images/logo.svg')}
          width={75}
          height={20}
        />
      </div>
      <button
        className="burgerMenu"
        aria-label={`mobile menu ${isMenuOpen}`}
        onClick={handleToggleMenu}
      >
        Menu
      </button>
      <nav className={(isMenuOpen && ' open') || ''}>
        {currentUser?.name ? (
          <>
            <Link href="/">Home</Link>
            <Link href="/feed">My feed</Link>
            <Link href="/friends">My friends</Link>
            <Link href={`/${currentUser?.name}`}>My profile</Link>
            <Link href="/signout">Sign out</Link>
          </>
        ) : (
          <>
            <Link href="/">Home</Link>
            <Link href="/signin">Sign in</Link>
            <Link href="/signup">Sign up</Link>
          </>
        )}
      </nav>
    </div>
  )
}

export default NavBar
