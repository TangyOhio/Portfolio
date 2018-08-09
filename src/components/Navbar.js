import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {

  render() {
    return (
      <div className='navs'>
        <ul>
          <li><NavLink exact to='/' >Home</NavLink></li>
          <li><NavLink to='/about' >About</NavLink></li>
          <li><NavLink to='/projects' >Projects</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
