import React, { Component } from 'react'
import './Navbar.scss'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Icon from '../icon'
interface Props extends RouteComponentProps {
  backText?: string
}
interface State {
  
}

 class Navbar extends Component<Props, State> {
  static defaultProps = {
    backText: ''
  }

  readonly state: Readonly<State>
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {}
  }

  onClick = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="orange-navbar">
        <div className="orange-navbar-left" onClick={() => this.onClick()}>
          <Icon /> <span>{this.props.backText}</span>
        </div>
        <div className="orange-navbar-center">{this.props.children}</div>
        <div className="orange-navbar-right"></div>
      </div>
    )
  }
}

export default withRouter(Navbar)
