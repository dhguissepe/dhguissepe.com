import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

function Footer() {
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
    <footer className="footer">
      <Navbar buttonNames={navbarButtonNames} />
      <div className="footer-wrapper">
        <div className="footer-brand">
          <p className="owner">D.H.G</p>
          <div className="footer-logo">
            <Logo/>
          </div>
          <p>2019</p>
        </div>
        <p className="slogan">Dream on, but always keep marching on</p>
        <div className="designer"><p>Designed and Built by: <a href="https://twitter.com/dhguissepe" target="blank">@dhguissepe</a></p></div>
      </div>
    </footer>
  )
}

export default Footer