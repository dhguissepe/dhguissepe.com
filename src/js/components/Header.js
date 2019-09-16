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
    <header className="header">
      <div className="header-wrapper">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>
        <Navbar buttonNames={navbarButtonNames} />
      </div>
    </header>
  )
}

export default Header