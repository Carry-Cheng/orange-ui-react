import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import '../assets/style/reset.scss'
import Index from './index/Index'
import ViewButton from './button/Button'

import { Button } from '../../lib/index'
console.info(Button)


interface Props {
  
}
interface State {
  
}

export default class App extends Component<Props, State> {

  render() {
    return (
      <div className="app">
        <Router keyLength={10}>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/button" component={ViewButton}></Route>
          </Switch>
        </Router>
        <Button></Button>
      </div>
    )
  }
}
