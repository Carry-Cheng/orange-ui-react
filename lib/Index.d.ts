import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
declare export { default as Button } from './button'
declare export { default as Navbar } from './navbar'
declare export { default as Icon } from './icon'

interface ButtonProps {
    label: string
    onClick(): void
    style: React.CSSProperties | undefined
}
interface ButtonState {}
export class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: { 
        label: string
        onClick(): void
        style: React.CSSProperties | undefined
    }
    onClick(): void
    render(): JSX.Element
}

interface NavbarProps extends RouteComponentProps {
    backText?: string
}
interface NavbarState {}
export class Navbar extends React.Component<NavbarProps, NavbarState> {
    static defaultProps: {
      backText: string
    }
    readonly state: Readonly<NavbarState>
    onClick(): void
    render(): JSX.Element
}

type IconName = 'arrow-left' | 'arrow-up' | 'arrow-right' | 'arrow-down'
interface IconProps {
  name: IconName
  color?: string
}
interface IconState {}

export class Icon extends React.Component<IconProps, IconState> {
  static defaultProps: {
    name: IconName
  }
  render(): JSX.Element
}