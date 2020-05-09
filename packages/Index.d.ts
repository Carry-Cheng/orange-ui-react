import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
declare export { default as Button } from './button'
declare export { default as Navbar } from './navbar'
declare export { default as Icon } from './icon'
declare export { default as Refresh } from './refresh'

/*** Button */
declare interface ButtonProps {
    label: string
    onClick(): void
    style: React.CSSProperties | undefined
}
declare interface ButtonState {}
declare class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: {
        label: string
        onClick(): () => {}
        style: {}
    }
    render(): JSX.Element
}


/*** Navbar */
declare interface NavbarProps extends RouteComponentProps {
    backText?: string
}
declare interface NavbarState {}
declare class Navbar extends React.Component<NavbarProps, NavbarState> {
    static defaultProps: {
        backText: string
    }
    render(): JSX.Element
}

/*** Icon  */
declare type IconName = 'arrow-left' | 'arrow-up' | 'arrow-right' | 'arrow-down'
declare interface IconProps {
  name: IconName
  color?: string
}
declare interface IconState {}
declare class Icon extends React.Component<IconProps, IconState> {
    static defaultProps: {
        name: IconName
        color: string
    }
    render(): JSX.Element
}

/*** Refresh */
declare interface RefreshOption {
    onDropDown: Function
    onPullUp: Function
    dropDown: boolean
    pullUp: boolean
    delay: number
    delayMessage: number
    dropDownLimit: number
    pullUpLimit: number
    height: number
    backgroundColor: string
    backgroundColorContent: string
    nullText: string
}
declare interface RefreshProps extends RefreshOption {}
declare interface RefreshState {
    dropDownStatus: 0 | 1 | 2 | 3
    pullUpStatus: 0 | 1 | 2 | 3
    dropDownMessage: string
    hasMore: boolean
}
declare class Refresh extends React.Component<RefreshProps, RefreshState> {
    static defaultProps: {
        onDropDown: Function
        onPullUp: Function
        dropDown: boolean
        pullUp: boolean
        delay: number
        delayMessage: number
        dropDownLimit: number
        pullUpLimit: number
        height: number
        backgroundColor: string
        backgroundColorContent: string
        nullText: string
    }
    readonly state: Readonly<RefreshState>
    constructor(props: Readonly<RefreshProps>)
    readonly refRefreshMessage: React.RefObject<HTMLDivElement>
    readonly refRefresh: React.RefObject<HTMLDivElement>
    readonly refRefreshUp: React.RefObject<HTMLDivElement>
    readonly refRefreshCenter: React.RefObject<HTMLDivElement>
    readonly refRefreshDown: React.RefObject<HTMLDivElement>
    private refreshMessageDOM: HTMLDivElement | undefined
    private refreshUpDOM: HTMLDivElement | undefined
    private refreshCenterDOM: HTMLDivElement | undefined
    private refreshDownDOM: HTMLDivElement | undefined
    private animationFrameID: number
    private start: number
    private move: number
    private currentTime: number
    private sourceMove: number
    private timestamp: number
    private timeout: number | undefined
    private onTouchStart(event: React.TouchEvent<HTMLDivElement>): void
    private onTouchMove(event: React.TouchEvent<HTMLDivElement>): void
    private onTouchEnd(event: React.TouchEvent<HTMLDivElement>): void
    private onTouchCancel(event: React.TouchEvent<HTMLDivElement>): void
    private isDropDown(): boolean
    private isPullUp(): boolean
    private handleTouchMove(): void
    private handleTouchEnd(event: React.TouchEvent<HTMLDivElement>): boolean
    private animateDropDown(event: React.TouchEvent<HTMLDivElement>): void
    private animatePullUp(event: React.TouchEvent<HTMLDivElement>): void
    private linear(t: number, b: number, c: number, d: number): number
    public setMessage(text: string): void
    private animateMessage(): void
    public setNull(): void
    render(): JSX.Element
}