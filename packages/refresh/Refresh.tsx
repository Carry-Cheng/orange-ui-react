import React, { Component } from 'react'
import './Refresh.scss'
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
interface Props extends RefreshOption {}
interface State {
  dropDownStatus: 0 | 1 | 2 | 3
  pullUpStatus: 0 | 1 | 2 | 3
  dropDownMessage: string
  hasMore: boolean
}
export default class Refresh extends Component<Props, State> {
  readonly refRefreshMessage: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefresh: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshUp: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshCenter: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  readonly refRefreshDown: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
  static defaultProps = {
    onDropDown: () => {},
    onPullUp:  () => {},
    dropDown: false,
    pullUp: false,
    delay: 300,
    delayMessage: 3000,
    dropDownLimit: 90,
    pullUpLimit: 90,
    height: window.innerHeight,
    backgroundColor: 'white',
    backgroundColorContent: 'white',
    nullText: '~~~没有更多数据~~~'
  }
  readonly state: Readonly<State>
  private refreshMessageDOM: HTMLDivElement | undefined
  private refreshUpDOM: HTMLDivElement | undefined
  private refreshCenterDOM: HTMLDivElement | undefined
  private refreshDownDOM: HTMLDivElement | undefined
  private animationFrameID: number = -1
  private start: number = 0
  private move: number = 0
  private currentTime: number = 0
  private sourceMove: number = 0
  private timestamp: number = 0
  private timeout: number | undefined = undefined
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      dropDownStatus: 0,
      pullUpStatus: 0,
      dropDownMessage: '',
      hasMore: true
    }
  }
  componentDidMount() {
    if (this.refRefreshMessage.current) {
      this.refreshMessageDOM = this.refRefreshMessage.current
    }
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
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      if (this.refreshMessageDOM) {
        this.refreshMessageDOM.style.height = `0px`
      }
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
    // This synthetic event is reused for performance reasons.
    // If you're seeing this, you're accessing the method `timeStamp` on a released/nullified synthetic event.
    // This is a no-op function. If you must keep the original synthetic event around, use event.persist().
    // See https://fb.me/react-event-pooling for more information.
    event.persist() 
    this.start = 0
    this.handleTouchEnd(event)
  }
  private onTouchCancel = (event: React.TouchEvent<HTMLDivElement>) => {
    this.start = 0
    this.handleTouchEnd(event)
  }
  private isDropDown(): boolean {
    if (!this.refreshCenterDOM || !this.props.dropDown) {
      return false
    }
    if (this.move > 0 && this.refreshCenterDOM.scrollTop === 0) {
      return true
    }
    return false
  }
  private isPullUp(): boolean {
    if (!this.refreshCenterDOM || !this.props.pullUp || !this.state.hasMore) {
      return false
    }
    if (this.move < 0 && (this.refreshCenterDOM.scrollTop + this.refreshCenterDOM.clientHeight) >= (this.refreshCenterDOM.scrollHeight - 1)) {
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
  private handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) : boolean {
    this.currentTime = 0
    this.sourceMove = this.move
    if (this.refreshUpDOM && this.refreshUpDOM.clientHeight > 0 && this.refreshUpDOM.clientHeight !== this.move) {
      this.move = this.refreshUpDOM.clientHeight
      this.animateDropDown(event)
      return false
    }
    if (this.refreshDownDOM && this.refreshDownDOM.clientHeight > 0 && this.refreshDownDOM.clientHeight !== this.move && this.state.hasMore) {
      this.move = this.refreshDownDOM.clientHeight
      this.animatePullUp(event)
      return false
    }
    if (this.isDropDown()) {
      this.animateDropDown(event)
    }
    if (this.isPullUp()) {
      this.animatePullUp(event)
    }
    return true
  }
  private animateDropDown(event: React.TouchEvent<HTMLDivElement>) {
    this.animationFrameID = window.requestAnimationFrame(() => {
      if (this.refreshUpDOM) {
        let value = this.linear(this.currentTime, this.sourceMove, -this.sourceMove, this.props.delay)
        if (value <= 0) {
          value = 0
          this.refreshUpDOM.style.height = `${value}px`
          if (event.timeStamp - this.timestamp > this.props.delay && this.sourceMove > this.props.dropDownLimit) {
            this.timestamp = event.timeStamp
            this.setState({hasMore: true})
            this.props.onDropDown()
          }
        } else {
          this.refreshUpDOM.style.height = `${value}px`
          this.currentTime += 17
          this.animateDropDown(event)
        }
      }
    })
  }
  private animatePullUp(event: React.TouchEvent<HTMLDivElement>) {
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
          if (event.timeStamp - this.timestamp > 1000 && Math.abs(this.sourceMove) > this.props.pullUpLimit) {
            this.timestamp = event.timeStamp
            this.props.onPullUp()
          }
        } else {
          this.refreshCenterDOM.style.transform = `translateY(${value}px)`
          this.refreshDownDOM.style.height = `${Math.abs(value)}px`
          this.refreshDownDOM.style.transform = `translateY(${value}px)`
          this.currentTime += 17
          this.animatePullUp(event)
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
  private linear(t: number, b: number, c: number, d: number): number {
    return c*t/d + b
  }

  public setMessage(text: string = 'hi, welcome to Orange UI') {
    this.setState({dropDownStatus: 3, dropDownMessage: text}, () => {
        if (this.refreshMessageDOM) {
          this.refreshMessageDOM.style.height = `40px`
        }
        console.info(this.timeout)
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = window.setTimeout(() => {
          if (this.timeout) {
            clearTimeout(this.timeout)
          }
          this.currentTime = 0
          this.animateMessage()
        }, this.props.delayMessage)
    })
  }

  private animateMessage() {
    this.animationFrameID = window.requestAnimationFrame(() => {
      if (this.refreshMessageDOM) {
        let value = this.linear(this.currentTime, 40, -40, this.props.delay)
        if (value <= 0) {
          value = 0
          this.refreshMessageDOM.style.height = `${value}px`
          this.setState({dropDownStatus: 3})
        } else {
          this.refreshMessageDOM.style.height = `${value}px`
          this.currentTime += 17
          this.animateMessage()
        }
      }
    })
  }

  public setNull() {
    this.setState({pullUpStatus: 3, hasMore: false})
  }

  render() {
    return (
      <div ref={this.refRefresh} className="orange-refresh" style={{
          height: this.props.height + 'px',
          backgroundColor: this.props.backgroundColor
        }}
      >
        <div ref={this.refRefreshMessage} className="orange-refresh-message">
          {
            this.state.dropDownStatus === 3 ? (
              <div className="orange-refresh-message-box">
                <span className="orange-refresh-message-box-text">{this.state.dropDownMessage}</span>
              </div>
            ) : ''
          }
        </div>
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
          style={{
            height: this.props.height + 'px',
            backgroundColor: this.props.backgroundColorContent
          }}
          onTouchStart={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchStart(event)}
          onTouchMove={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchMove(event)}
          onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchEnd(event)}
          onTouchCancel={(event: React.TouchEvent<HTMLDivElement>) => this.onTouchCancel(event)}
        >
          {this.props.children}
          {
            this.state.hasMore === false ? (<div className="orange-refresh-null">{this.props.nullText}</div>) : '' 
          }
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
