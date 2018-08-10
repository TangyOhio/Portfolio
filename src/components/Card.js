import React from 'react'

class Card extends React.Component {
  
  render() {
    let { eventPic, reactLogo, railsLogo, title, description, link } = this.props
    return (
      <a href={link} target='_blank'>
        <div className='card'>
          <div className='images-container'>
            <img className='project-image' src={eventPic} alt='Dictionary App' />
            <img className='logo-image react' src={reactLogo} alt='React' height='20px' width='20px' />
            <img className='logo-image rails' src={railsLogo} alt='Rails' height='20px' width='20px' />
          </div>
          <div className='container'>
              <h2>{title}</h2>
            <br />
            <p>{description}</p>
          </div>
        </div>
      </a>
    )
  }
}

export default Card