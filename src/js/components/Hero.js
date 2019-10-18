import React from 'react'
import Logo from './Logo'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay-1">
        <div className="hero-overlay-2">
          <div className="hero-container">
            <div className="hero-logo">
              <Logo />
            </div>
            <div className="hero-description">
              <h2>Full Stack Developer | React Development Expert</h2>
            </div>
            <div className="hero-title">
              <h1>D.H. Guissepe</h1>
            </div>
            <div className="hero-bar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero