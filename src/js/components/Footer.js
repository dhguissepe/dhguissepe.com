import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

function Footer(props) {
  return (
    <footer className="footer">
      <Navbar buttonNames={props.navbarButtonNames} />
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