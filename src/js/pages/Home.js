import React, { Component, Fragment } from 'react'
import Hero from '../components/Hero.js'
// import MainSection from '../components/MainSection.js'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <section className="CTA">
          <p>This is the CTA</p>
        </section>
        {/* <MainSection /> */}
      </Fragment>
    )
  }
}

export default Home