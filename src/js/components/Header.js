import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>
        <Navbar links={ props.navbarLinks } onClick={ props.onClick } />
      </div>
    </header>
  )
}

export default Header