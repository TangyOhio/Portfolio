import React from 'react'

class StarBackground extends React.Component {
  
  render() {
    const { children } = this.props
    return (
      <div className='star-bg'>
        {/* <span id='stars' /> */}
        {children}
      </div>
    )
  }
}

export default StarBackground
