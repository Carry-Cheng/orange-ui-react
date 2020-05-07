import React, { Component } from 'react'
import './Refresh.scss'
declare interface RefreshOption {
    limit: {
      dropDown: boolean
      pullUp: boolean
    }
    delay: number
    dropDownLimit: number
    pullUpLimit: number
    height: number
    backgroundColor: string
    dropDownTextBefore: React.ReactNode
    dropDownTextAfter: React.ReactNode
    pullUpTextBefore: React.ReactNode
    pullUpTextAfter: React.ReactNode
    noMoreDataText: React.ReactNode
    findAgainText: React.ReactNode
}
interface Props extends RefreshOption {}
interface State {}
export default class Refresh extends Component<Props, State> {
  readonly refRefresh: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshUp: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshCenter: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshDown: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  static defaultProps = {
    limit: {
      dropDown: false,
      pullUp: false
    },
    delay: 600,
    dropDownLimit: 70,
    pullUpLimit: 100,
    height: window.innerHeight,
    backgroundColor: 'white',
    dropDownTextBefore: ``, // <span class="hh-scroll-box-label">↓</span><span class="hh-scroll-box-text">下拉刷新</span>
    dropDownTextAfter: `<span class="hh-scroll-box-label">↑</span><span class="hh-scroll-box-text">松开加载</span>`,
    pullUpTextBefore: ``, // <span class="hh-scroll-box-label">↑</span><span class="hh-scroll-box-text">上拉加载更多</span>
    pullUpTextAfter: `<span class="hh-scroll-box-label"></span><span class="hh-scroll-box-text">加载更多</span>`,
    noMoreDataText: `<span class="hh-scroll-box-label"></span><span class="hh-scroll-box-text">没有更多数据~~~</span>`,
    findAgainText: `<span class="hh-scroll-box-label"></span><span class="hh-scroll-box-text" style="color:#E21A1A">又发现了10条新内容</span>`
  }
  readonly state: Readonly<State>
  private refreshUpDOM: HTMLDivElement | undefined
  private refreshCenterDOM: HTMLDivElement | undefined
  private refreshDownDOM: HTMLDivElement | undefined
  private animationFrameID: number = -1
  private start: number = 0
  private move: number = 0
  private currentTime: number = 0
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    if (this.refRefreshUp.current) {
      this.refreshUpDOM = this.refRefreshUp.current
    }
    if (this.refRefreshCenter.current) {
      this.refreshCenterDOM = this.refRefreshCenter.current
    }
    if (this.refRefreshDown.current) {
      this.refreshDownDOM = this.refRefreshDown.current
    }
  }

  private onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 0) {
      this.start = event.touches[0].clientY
      this.move = 0
    }
  }

  // scrollHeight, scrollTop

  private onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 0) {
      this.move = event.touches[0].clientY - this.start
      this.handleTouchMove()
    }
  }

  private onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    this.start = 0
    this.handleTouchEnd()
  }

  private isDropDown() {
    if (!this.refreshCenterDOM) {
      return false
    }
    if (this.move > 0 && this.refreshCenterDOM.scrollTop === 0) {
      return true
    }
    return false
  }

  private isPullUp() {
    if (!this.refreshCenterDOM) {
      return false
    }
    if (this.move < 0 && (this.refreshCenterDOM.scrollTop + this.refreshCenterDOM.clientHeight) === this.refreshCenterDOM.scrollHeight) {
      return true
    }
    return false
  }

  private handleTouchMove() {
    if (this.isDropDown() && this.refreshUpDOM) {
      this.refreshUpDOM.style.height = `${this.move}px`
    }
    if (this.isPullUp() && this.refreshDownDOM && this.refreshCenterDOM) {
      this.refreshCenterDOM.style.transform = `translateY(${this.move}px)`
      this.refreshDownDOM.style.height = `${Math.abs(this.move)}px`
      this.refreshDownDOM.style.transform = `translateY(${this.move}px)`
    }
  }

  private handleTouchEnd() {
    this.currentTime = 0
    this.animate()
  }

  private animate() {
    this.animationFrameID = window.requestAnimationFrame(() => {
      if (this.isDropDown() && this.refreshUpDOM) {
        let value = this.linear(this.currentTime, this.move, -this.move, this.props.delay)
        if (value <= 0) {
          value = 0
          this.refreshUpDOM.style.height = `${value}px`
        } else {
          this.refreshUpDOM.style.height = `${value}px`
          this.currentTime += 17
          this.animate()
        }
      }
      if (this.isPullUp() && this.refreshDownDOM && this.refreshCenterDOM) {
        let value = this.linear(this.currentTime, this.move, Math.abs(this.move), this.props.delay)
        if (value >= 0) {
          value = 0
          this.refreshCenterDOM.style.transform = `translateY(${value}px)`
          this.refreshDownDOM.style.height = `${Math.abs(value)}px`
          this.refreshDownDOM.style.transform = `translateY(${value}px)`
        } else {
          this.refreshCenterDOM.style.transform = `translateY(${value}px)`
          this.refreshDownDOM.style.height = `${Math.abs(value)}px`
          this.refreshDownDOM.style.transform = `translateY(${value}px)`
          this.currentTime += 17
          this.animate()
        }
      }
    })
  }

  /**
   * 线性运动
   * @param t 当前时间
   * @param b 初始值
   * @param c 变量值
   * @param d 持续时间
   */
  private linear(t: number, b: number, c: number, d: number) {
    return c*t/d + b
  }

  render() {
    return (
      <div ref={this.refRefresh} className="orange-refresh" style={{
          height: this.props.height + 'px',
          backgroundColor: this.props.backgroundColor
        }}
      >
        <div ref={this.refRefreshUp} className="orange-refresh-up"></div>
        <div
          ref={this.refRefreshCenter}
          className="orange-refresh-center"
          style={{height: this.props.height + 'px'}}
          onTouchStart={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchStart(event)}
          onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchMove(event)}
          onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchEnd(event)}
        >{this.props.children}</div>
        <div ref={this.refRefreshDown} className="orange-refresh-down"></div>
      </div>
    )
  }
}
