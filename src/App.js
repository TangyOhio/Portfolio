import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './styles/style.css'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Home from './components/pages/Home'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
      </div>
    )
  }
}

export default App
