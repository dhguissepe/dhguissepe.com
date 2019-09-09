import React from 'react'
import Navbar from './Navbar'

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
        <h1>D.H. Guissepe</h1>
          <Navbar buttonNames={navbarButtonNames} />
      </header>
    </div>
  )
}

export default Header