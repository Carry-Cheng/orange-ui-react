import React, { Component } from 'react'
import OrangeNavBar from '../../../packages/navbar/index'
import OrangeButton from '../../../packages/button/index'

// import { Button } from '../../../lib/index'
// import  '../../../lib/index'

// console.info(Button)
import './Button.scss'
interface Props {
  
}
interface State {
  
}

export default class ButtonIndex extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="example-button">
        <OrangeNavBar>Button example</OrangeNavBar>
        <div className="example-button-content">
          <OrangeButton/>
          <br/>
          {/* <Button/> */}
        </div>
      </div>
    )
  }
}
