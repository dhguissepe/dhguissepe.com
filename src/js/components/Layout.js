import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

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

function Layout(props) {
  return (
    <Fragment>
      <Header navbarButtonNames={ navbarButtonNames }/>
        {props.children}
      <Footer navbarButtonNames={ navbarButtonNames }/>
    </Fragment>
  )
}

export default Layout