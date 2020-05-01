import React, { Component } from 'react'
import './Icon.scss'
import './iconfont/iconfont'
type IconName = 'arrow-left' | 'arrow-up' | 'arrow-right' | 'arrow-down'

interface Props {
  name: IconName
  color?: string
}
interface State {
  
}

export default class Icon extends Component<Props, State> {
  static defaultProps = {
    name: 'arrow-left'
  }

  state = {}

  render() {
    return (
      <svg className="icon" style={this.props.color ? {color: this.props.color} : {}} aria-hidden={true}>
        <use xlinkHref={`#icon-${this.props.name}`}></use>
      </svg>
    )
  }
}
