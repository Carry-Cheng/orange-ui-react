import React, { Component } from 'react'
// import { Button, Navbar } from 'orange-ui-react'

import Button from '../../../packages/button'
import Navbar from '../../../packages/navbar'


import './Button.scss'
interface Props {
  
}
interface State {
  
}

export default class ButtonIndex extends Component<Props, State> {
  state = {}

  onClick = () => {
    console.info('ssssssssss')
  }

  render() {
    return (
      <div className="example-button">
        <Navbar backText="返回">Button example</Navbar>
        <div className="example-button-content">
          <Button onClick={() => this.onClick()}/>
          <br/>
          <Button style={{backgroundColor: '#333333'}} label="sssss" />
        </div>
      </div>
    )
  }
}
