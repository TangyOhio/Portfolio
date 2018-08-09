import React from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  state = { activeTab: 'Home' }

  handleClick = (e, page) => {
    this.setState({ activeTab: page })
    this.props.callback(page)
  }

  render() {
    return (
      <div className='navs'>
        <ul>
          <li><NavLink to='/' >Home</NavLink></li>
          <li><NavLink to='/about' >About</NavLink></li>
          <li><NavLink to='/projects' >Projects</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
