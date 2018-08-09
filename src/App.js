import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './stylesheets/main.css'
import Navbar from './components/Navbar'
import StarBackground from './components/StarBackground'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'

class App extends React.Component {

  render() {
    return (
      <div className='app-container'>
        {/* <StarBackground> */}
          <Navbar />
          <div className='pages-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
            </Switch>
          </div>
        {/* </StarBackground> */}
      </div>
    )
  }
}

export default App
