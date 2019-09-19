import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function Header() {
  const navbarButtonNames = [
    {
      text: 'Home',
      state: 'active'
    },
    {
      text: 'About me',
      state: false
    },
    {
      text: 'Blog',
      state: false
    },
    {
      text: 'Portfolio',
      state: false
    },
    {
      text: 'Contact me',
      state: false
    }
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