import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

/*** Button */
export declare interface ButtonProps {
    label: string
    onClick(): void
    style: React.CSSProperties | undefined
}
export declare interface ButtonState {}
export declare class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: {
        label: string
        onClick(): () => {}
        style: {}
    }
    render(): JSX.Element
}


/*** Navbar */
export declare interface NavbarProps extends RouteComponentProps {
    backText?: string
}
export declare interface NavbarState {}
export declare class Navbar extends React.Component<NavbarProps, NavbarState> {
    static defaultProps: {
        backText: string
    }
    render(): JSX.Element
}

/*** Icon  */
export declare type IconName = 'arrow-left' | 'arrow-up' | 'arrow-right' | 'arrow-down'
export declare interface IconProps {
  name: IconName
  color?: string
}
export declare interface IconState {}
export declare class Icon extends React.Component<IconProps, IconState> {
    static defaultProps: {
        name: IconName
        color: string
    }
    render(): JSX.Element
}

/*** Refresh */
export declare interface RefreshOption {
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
export declare interface RefreshProps extends RefreshOption {}
export declare interface RefreshState {
    dropDownStatus: 0 | 1 | 2 | 3
    pullUpStatus: 0 | 1 | 2 | 3
    dropDownMessage: string
    hasMore: boolean
}
export declare class Refresh extends React.Component<RefreshProps, RefreshState> {
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

/// exposure
export interface ExposureProps {
    className: string
    onExposure: Function
}
export interface ExposureState {}

export interface OriginObject {
    exposureid: number
    top: number
    height: number
}
export default class Exposure extends Component<ExposureProps, ExposureState> {
    static defaultProps: {
        className: string
        onExposure: Function
    }
    readonly state: Readonly<ExposureState>
    private min: number
    private max: number
    /// it's a data array of the target div's top
    private origin: Array<OriginObject>
    private uploadCache: Map<number, boolean>
    private _target: Array<number>
    constructor(props: Readonly<ExposureProps>)
    componentDidMount()
    private init(): void
    private reset(): void
    private initEvent(): void
    private baseComputed(): void
    private coreComputed(): void
    public clearCache(): void
    public clearCacheOnly(): void
    render() : JSX.Element
}