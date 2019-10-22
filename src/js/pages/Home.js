import React, { Component, Fragment } from 'react'
import Hero from '../components/Hero.js'
import CTA from '../components/CTA.js'
import HoverSection from '../components/HoverSection.js'
import BrandBio from '../components/BrandBio.js'
class Home extends Component {

  render() {
    return (
      <Fragment>
        <Hero />
        <CTA />
        <BrandBio />
        <HoverSection />
      </Fragment>
    )
  }
}

export default Home