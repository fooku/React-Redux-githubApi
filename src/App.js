import React, { Component } from 'react'
import AppHeader from './components/appHeader'
import Routing from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Routing />
      </div>
    )
  }
}

export default App
