import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        {props.buttonNames.map( (item, index) => {
          return (
            <li className="navbar-button" key={index} >
              <Link to="/" href="#">{item}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar