import React from 'react'
import Email from '../assets/social/email.png'
import GitHub from '../assets/social/github.png'
import LinkedIn from '../assets/social/linkedin.png'
import Twitter from '../assets/social/twitter.png'

const Social = () => {

  return (
    <div className='social-container'>
    <a href='mailto:jacemcgough1@gmail.com' target='_blank' rel='noopener noreferrer'>
      <img src={Email} alt='Email' height='50px' />
    </a>
    <a href='https://github.com/TangyOhio' target='_blank' rel='noopener noreferrer'>
      <img src={GitHub} alt='GitHub' height='50px' />
    </a>
    <a href='https://www.linkedin.com/in/jacemcgough/' target='_blank' rel='noopener noreferrer'>
      <img src={LinkedIn} alt='LinkedIn' height='50px' />
    </a>
    <a href='https://twitter.com/TangyOhio' target='_blank' rel='noopener noreferrer'>
      <img src={Twitter} alt='Twitter' height='50px' />
    </a>
    </div>
  )
}

export default Social
