import React from 'react'

class StarBackground extends React.Component {
  
  render() {
    const { children } = this.props
    return (
      <div className='star-bg'>
        <div id='stars1' />
        <div id='stars2' />
        <div id='stars3' />
        {children}
      </div>
    )
  }
}

export default StarBackground
