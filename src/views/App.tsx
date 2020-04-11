import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../assets/style/reset.scss'
import Index from './index/Index'
import Button from './button/Button'

interface Props {
  
}
interface State {
  
}

export default class App extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/button" component={Button}></Route>
            <Route path="/" component={Index}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
