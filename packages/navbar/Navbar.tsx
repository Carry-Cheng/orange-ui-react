import React, { Component } from 'react'
import './Navbar.scss'
import { withRouter, RouteComponentProps } from 'react-router-dom'
interface Props extends RouteComponentProps {
  
}
interface State {
  
}

 class Navbar extends Component<Props, State> {
  state = {}

  onClick = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="orange-navbar">
        <div className="orange-navbar-left" onClick={() => this.onClick()}>返回</div>
        <div className="orange-navbar-center">{this.props.children}</div>
        <div className="orange-navbar-right"></div>
      </div>
    )
  }
}

export default withRouter(Navbar)
