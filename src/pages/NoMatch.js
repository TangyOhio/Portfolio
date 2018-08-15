import React from 'react';
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div className='error-text'>
      <h1 className='error-header'>Error 404</h1>
      <div className='error-description'>
        <h2>This Page Doesn't Exist</h2>
        <br />
        <p>Use the navbar to navigate</p>
        <br />
        <p>or</p>
        <br />
        <Link to='/'> Go Home </Link>
      </div>
    </div>
  )
}

export default NoMatch
