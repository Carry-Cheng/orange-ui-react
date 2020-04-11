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
        <h1>Buutton</h1>
        <OrangeButton></OrangeButton>
      </div>
    )
  }
}
