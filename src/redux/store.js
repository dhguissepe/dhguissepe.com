import { createStore } from 'redux'
import reducer from './reducer.js'

const initialState = {
  navigation: {
    pageIndex: 0,
    navbarLinks: [
      {
        text: 'Home',
        state: 'active',
        path: "/"
      },
      {
        text: 'About me',
        state: false,
        path: "/aboutme"
      },
      {
        text: 'Blog',
        state: false,
        path: "/blog"
      },
      {
        text: 'Portfolio',
        state: false,
        path: "/portfolio"
      },
      {
        text: 'Contact me',
        state: false,
        path: "/contact"
      }
    ]
  }
}

const store = createStore(reducer, initialState)

export default store