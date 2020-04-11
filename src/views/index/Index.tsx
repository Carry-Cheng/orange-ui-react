import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Index.scss'

interface Routes {
  path: string,
  name: string
}

interface Props {
  
}
interface State {
  routes: Array<Routes>
}

export default class Index extends Component<Props, State> {

  state = {
    routes: [
      { path: '/button', name: 'Button' }
    ]
  }

  render() {
    return (
      <div className="index-container">
        <h1 className="title">Orange UI for React</h1>
        <ul className="function-list">
          {
            this.state.routes.map((route, index) => {
              return (
                <li key={index}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
