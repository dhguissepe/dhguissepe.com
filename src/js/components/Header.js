import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function Header() {
  const navbarButtonNames = [
    'Home',
    'About me',
    'Blog',
    'Portfolio',
    'Contact me'
  ]

  return (
    <div className="header-wrapper">
      <header className="header">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>
        <Navbar buttonNames={navbarButtonNames} />
      </header>
    </div>
  )
}

export default Header