import React, { Component } from 'react'

import OrangeButton from '../../../packages/button/Index'

interface Props {
  
}
interface State {
  
}

export default class Button extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <h1>Button</h1>
        <OrangeButton/>
      </div>
    )
  }
}
