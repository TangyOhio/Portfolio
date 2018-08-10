import React from 'react'
import EventsPic from '../assets/eventpic.png'
import DicPic from '../assets/dictionarypic.png'
import ReactLogo from '../assets/logos/react.png'
import RailsLogo from '../assets/logos/rails.png'
import Card from '../components/Card'

const Projects = () => {
  return (
    <div className='project-container'>
      <h1 className='project-header'>Projects</h1>
      <div className='project-cards'>
        <Card 
          eventPic={DicPic} 
          reactLogo={ReactLogo} 
          railsLogo={RailsLogo} 
          title='Dictionary App' 
          description='Search for a word with the help of the Oxford Dictionary API' 
          link='https://github.com/TangyOhio/Dictionary-App'
        />

        <Card
          eventPic={EventsPic}
          reactLogo={ReactLogo}
          railsLogo={RailsLogo}
          title='Event Page'
          description='A website for organizing Events'
          link='https://github.com/TangyOhio/Event-Planner-App'
        />
      </div>
    </div>
  )
}

export default Projects
