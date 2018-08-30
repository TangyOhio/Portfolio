import React from 'react'
import Particles from 'react-particles-js'

const StarBackground = () => (
  <Particles
    className={'particles'}
    params={{
      'particles': {
        'number': {
          'value': 80,
          'density': {
            'enable': true,
            'value_area': 1500
          }
        },
        'line_linked': {
          'enable': false,
        },
        'move': {
          'random': true,
          'speed': 0.4,
          'direction': '',
          'out_mode': 'out'
        },
        'size': {
          'value': 2,
          'random': 'true',
        },
        'opacity': {
          'anim': {
            'enable': true,
            'speed': 2,
            'opacity_min': 0.05
          }
        }
      },
      'retina_detect': true
    }} 
  />
)

export default StarBackground
