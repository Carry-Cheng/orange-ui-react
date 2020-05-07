import React, { Component, Fragment } from 'react'
import './Refresh.scss'
declare interface RefreshOption {
  hasMore: boolean
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
interface State {
  dropDownStatus: 0 | 1 | 2,
  pullUpStatus: 0 | 1 | 2
}
export default class Refresh extends Component<Props, State> {
  readonly refRefresh: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshUp: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshCenter: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshDown: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  static defaultProps = {
    hasMore: true,
    limit: {
      dropDown: false,
      pullUp: false
    },
    delay: 300,
    dropDownLimit: 90,
    pullUpLimit: 90,
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
  private sourceMove: number = 0
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      dropDownStatus: 0,
      pullUpStatus: 0
    }
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
      this.setState({dropDownStatus: 0})
      this.setState({pullUpStatus: 0})
      this.start = event.touches[0].clientY
      this.move = 0
    }
  }
  private onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 0) {
      this.move = event.touches[0].clientY - this.start
      if (this.move > 150) {
        this.move = 150
      }
      if (this.move < -120) {
        this.move = -120
      }
      this.handleTouchMove()
    }
  }
  private onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    this.start = 0
    this.handleTouchEnd()
  }
  private onTouchCancel = (event: React.TouchEvent<HTMLDivElement>) => {
    console.info('event: React.TouchEvent<HTMLDivElement>')
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
      if (this.move < 25) {
        this.setState({dropDownStatus: 0})
      } else if (this.move < this.props.dropDownLimit) {
        this.setState({dropDownStatus: 1})
      } else {
        this.setState({dropDownStatus: 2})
      }
      this.refreshUpDOM.style.height = `${this.move}px`
    }
    if (this.isPullUp() && this.refreshDownDOM && this.refreshCenterDOM) {
      if (Math.abs(this.move) < 25) {
        this.setState({pullUpStatus: 0})
      } else if (Math.abs(this.move) < this.props.pullUpLimit) {
        this.setState({pullUpStatus: 1})
      } else {
        this.setState({pullUpStatus: 2})
      }
      this.refreshCenterDOM.style.transform = `translateY(${this.move}px)`
      this.refreshDownDOM.style.height = `${Math.abs(this.move)}px`
      this.refreshDownDOM.style.transform = `translateY(${this.move}px)`
    }
  }
  private handleTouchEnd() {
    this.currentTime = 0
    this.sourceMove = this.move
    if (this.refreshUpDOM && this.refreshUpDOM.clientHeight > 0 && this.refreshUpDOM.clientHeight !== this.move) {
      this.move = this.refreshUpDOM.clientHeight
      this.animateDropDown()
      return false
    }
    if (this.refreshDownDOM && this.refreshDownDOM.clientHeight > 0 && this.refreshDownDOM.clientHeight !== this.move) {
      this.move = this.refreshDownDOM.clientHeight
      this.animatePullUp()
      return false
    }
    if (this.isDropDown()) {
      this.animateDropDown()
    }
    if (this.isPullUp()) {
      this.animatePullUp()
    }
  }
  private animateDropDown() {
    this.animationFrameID = window.requestAnimationFrame(() => {
      if (this.refreshUpDOM) {
        let value = this.linear(this.currentTime, this.sourceMove, -this.sourceMove, this.props.delay)
        if (value <= 0) {
          value = 0
          this.refreshUpDOM.style.height = `${value}px`
        } else {
          this.refreshUpDOM.style.height = `${value}px`
          this.currentTime += 17
          this.animateDropDown()
        }
      }
    })
  }
  private animatePullUp() {
    this.animationFrameID = window.requestAnimationFrame(() => {
      if (this.refreshDownDOM && this.refreshCenterDOM) {
        let value = this.linear(this.currentTime, this.sourceMove, Math.abs(this.sourceMove), this.props.delay)
        if (Math.abs(value) < 25) {
          this.setState({pullUpStatus: 0})
        }
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
          this.animatePullUp()
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
        <div ref={this.refRefreshUp} className="orange-refresh-up">
          {
            this.state.dropDownStatus === 1 ? (
              <div className="orange-refresh-up-box">
                <span className="orange-refresh-up-box-label">↓</span><span className="orange-refresh-up-box-text">下拉刷新</span>
              </div>
            )
            :
            this.state.dropDownStatus === 2 ? (
              <div className="orange-refresh-up-box">
                <span className="orange-refresh-up-box-label rotateY">↓</span><span className="orange-refresh-up-box-text">松开加载</span>
              </div>
            ) : ''
          }
        </div>
        <div
          ref={this.refRefreshCenter}
          className="orange-refresh-center"
          style={{height: this.props.height + 'px'}}
          onTouchStart={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchStart(event)}
          onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchMove(event)}
          onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchEnd(event)}
          onTouchCancel={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchCancel(event)}
        >
          {this.props.children}

        </div>
        <div ref={this.refRefreshDown} className="orange-refresh-down">
          {
            this.state.pullUpStatus === 1 ? (
              <div className="orange-refresh-down-box">
                <span className="orange-refresh-down-box-label">↑</span><span className="orange-refresh-down-box-text">加载更多</span>
              </div>
            )
            :
            this.state.pullUpStatus === 2 ? (
              <div className="orange-refresh-down-box">
                <span className="orange-refresh-down-box-label rotateY">↑</span><span className="orange-refresh-down-box-text">松开加载</span>
              </div>
            ) : ''
          }
        </div>
      </div>
    )
  }
}
