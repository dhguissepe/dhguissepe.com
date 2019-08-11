import React from 'react'
import NavbarButtons from './NavbarButtons'

function Header() {
  const navbarButtonNames = [
    'Home',
    'About me',
    'Portfolio',
    'Contact me'
  ]

  return (
    <div className="header-wrapper">
      <div className="header">
        <h1>D.H. Guissepe</h1>
        <nav>
          <NavbarButtons buttonNames={navbarButtonNames} />
        </nav>
      </div>
    </div>
  )
}

export default Header