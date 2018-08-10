import React from 'react'
import EventsPic from '../assets/eventpic.png'
import DicPic from '../assets/dictionarypic.png'
import ReactLogo from '../assets/logos/react.png'
import RailsLogo from '../assets/logos/rails.png'

const Projects = () => {
  return (
    <div className='project-container'>
      <h1 className='project-header'>Projects</h1>
      <div className='project-cards'>
        <div className='card'>
          <div className='images-container'>
            <img className='project-image' src={DicPic} alt='Dictionary App' />
            <img className='logo-image react' src={ReactLogo} alt='React' height='20px' width='20px' />
            <img className='logo-image rails' src={RailsLogo} alt='Rails' height='20px' width='20px' />
          </div>
          <div className='container'>
            <h2>Dictionary App</h2>
            <br />
            <p>Search for a word with the help of the Oxford Dictionary API</p>
          </div>
        </div>

        <div className='card'>
          <div className='images-container'>
            <img className='project-image' src={EventsPic} alt='Events Page' />
            <img className='logo-image react' src={ReactLogo} alt='React' height='20px' width='20px' />
            <img className='logo-image rails' src={RailsLogo} alt='Rails' height='20px' width='20px' />
          </div>
          <div className='container'>
            <h2>Event Page</h2>
            <br />
            <p>An Event Planner Website</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
