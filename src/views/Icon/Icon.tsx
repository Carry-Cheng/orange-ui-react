import React, { Component } from 'react'
import Icon from '../../../packages/icon'
import Navbar from '../../../packages/navbar'
import './Icon.scss'
interface Props {
  
}
interface State {
  
}

export default class Index extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="example-icon">
        <Navbar backText="返回">Icon example</Navbar>
        <div className="example-icon-content">
          <Icon/>
          <Icon name="arrow-up" />
          <Icon name="arrow-right" />
          <Icon name="arrow-down" />
          <br/>
          <Icon  color="red" />
          <Icon name="arrow-up" color="red" />
          <Icon name="arrow-right"  color="red" />
          <Icon name="arrow-down"  color="red" />
        </div>
      </div>
    )
  }
}
