import React from 'react'

function NavbarButtons(props) {
  return (
    <ul className="navbar">
      {props.buttonNames.map( (item, index) => {
        return (
          <li className="navbar-button" key={index} >
            <a href="#">{item}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarButtons