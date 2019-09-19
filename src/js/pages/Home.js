import React, { Component, Fragment } from 'react'
import Hero from '../components/Hero.js'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <section className="CTA">
          <div className="CTA-wrapper">
            <h2 className="CTA-title">This is the CTA</h2>
            <p className="CTA-text">Honolulu u Honolulú​ es la capital y localidad más grande del estado de Hawái,
                  en los Estados Unidos. Honolulu es la más sureña de entre las principales
                  ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área urbana</p>
            <div className="CTA-buttons-wrapper">
              <button className="btn-primary">Let's start a conversation</button>
              <span className="CTA-or-between-btn">Or</span>
              <button className="btn-outline">Let's see my  portfolio first</button>
            </div>
          </div>
        </section>
        <section className="brand-bio">
          <p>This is the brand bio</p>
        </section>
        <section className="hover-section">
          <p>This is the hover section</p>
        </section>
      </Fragment>
    )
  }
}

export default Home