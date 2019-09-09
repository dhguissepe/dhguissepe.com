import React from 'react'

function Navbar(props) {
  return (
    <nav>
      <ul className="navbar">
        {props.buttonNames.map( (item, index) => {
          return (
            <li className="navbar-button" key={index} >
              <a href="#">{item}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar