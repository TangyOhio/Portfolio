import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './stylesheets/main.css'
import StarBackground from './components/StarBackground'
import Navbar from './components/Navbar'
import Social from './components/Social'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

class App extends React.Component {

  render() {
    return (
      <StarBackground>
        <div className='app-container'>
            <Navbar />
            <div className='pages-container'>
              <Social />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route component={NoMatch} />
              </Switch>
            </div>
        </div>
      </StarBackground>
    )
  }
}

export default App
