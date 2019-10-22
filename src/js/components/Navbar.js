import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        {props.links.map( (item, index) => {
          return (
            <li className="navbar-links" key={ index } >
              <Link
                className={ `navbar-link ${ item.state }` }
                to={ item.path }
                id={ index }
                onClick= { props.onClick }
              >
                { item.text }
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar