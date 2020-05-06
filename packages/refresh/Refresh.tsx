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
interface Props {
  options: Partial<RefreshOption>
}
interface State {}
export default class Refresh extends Component<Props, State> {
  static defaultProps = {
        options: {
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
  }
  readonly state: Readonly<State>
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="orange-refresh" style={{height: this.props.options.height + 'px'}}>
            <div className="orange-refresh-up"></div>
            <div className="orange-refresh-center" style={{height: this.props.options.height + 'px'}}>{this.props.children}</div>
            <div className="orange-refresh-down"></div>
      </div>
    )
  }
}
