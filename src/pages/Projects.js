import React from 'react'
import EventsPic from '../assets/projects/eventpic.png'
import DicPic from '../assets/projects/dictionarypic.png'
import BurgerPic from '../assets/projects/burgers.png'
import PortPic from '../assets/projects/porfolio.png'
import ReactLogo from '../assets/logos/react.png'
import RailsLogo from '../assets/logos/rails.png'
import SassLogo from '../assets/logos/sass.png'
import SemanticLogo from '../assets/logos/semanticui.png'
import Card from '../components/Card'

const Projects = () => {
  return (
    <div className='project-container'>
      <h1 className='project-header'>Projects</h1>
      <div className='project-cards'>
        <Card 
          eventPic={DicPic} 
          logo1={ReactLogo} 
          logo2={RailsLogo} 
          title='Dictionary App' 
          description='Search for a word with the help of the Oxford Dictionary API' 
          link='https://github.com/TangyOhio/Dictionary-App'
        />

        <Card
          eventPic={EventsPic}
          logo1={ReactLogo}
          logo2={RailsLogo}
          logo3={SemanticLogo}
          title='Event Page'
          description='A website for organizing Events for DevPoint Labs'
          link='https://github.com/TangyOhio/Event-Planner-App'
        />

        <Card
          eventPic={PortPic}
          logo1={ReactLogo}
          logo2={SassLogo}
          title='My Portfolio'
          description='The beautiful site you are currently looking at'
          link='https://github.com/TangyOhio/TangyOhio.github.io/tree/dev'
        />

        <Card
          eventPic={BurgerPic}
          logo1={ReactLogo}
          logo2={RailsLogo}
          logo3={SemanticLogo}
          title='B&D Burgers'
          description='A website made in 8 hours at a DevPoint sponsored "hackathon"'
          link='https://github.com/MichaelTamietti/B-DBurgers'
        />
      </div>
    </div>
  )
}

export default Projects
