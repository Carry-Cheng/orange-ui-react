import React, { Component } from 'react'
import Refresh from '../../../packages/refresh'
import Navbar from '../../../packages/navbar'
import Button from '../../../packages/button'
import './Refresh.scss'

interface Props {
  
}
interface State {
  array: Array<number>
  dropDown: boolean
  pullUp: boolean
}

export default class RefreshIndex extends Component<Props, State> {
  readonly refresh: React.RefObject<Refresh> = React.createRef()
  page: number = 1
  state = {
    array: [1,2,3,4,5,6,7,8,9,10],
    dropDown: true,
    pullUp: true
  }
  componentDidMount() {
  }

  onDropDown = () => {
    console.info('onDropDown')
    setTimeout(() => {
      if (this.refresh.current) {
        let text = '发现了10条新内容'
        this.refresh.current.setMessage(text)
      }
    }, 200)
  }

  onPullUp = () => {
    console.info('onPullUp')
    setTimeout(() => {
      let array = this.state.array
      array = array.concat([11,12,13,14])
      this.setState({array}, () => {
        if (this.refresh.current) {
          this.refresh.current.setNull()
        }
      })
    }, 200)
  }

  reset = () => {
    if (this.refresh.current) {
      this.refresh.current.reset()
    }
  }

  render() {
    return (
      <div className="example-refresh">
        <Navbar backText="返回">Refresh example</Navbar>
        <div className="example-refresh-content">
          {/* <div style={{height: '10px', padding: '10px'}}></div> */}
          <div className="operate-group">
            <Button label="下拉开" onClick={() => this.setState({dropDown: true})}></Button>
            <Button label="下拉关" onClick={() => this.setState({dropDown: false})}></Button>
            <Button label="上拉开" onClick={() => this.setState({pullUp: true})}></Button>
            <Button label="上拉关" onClick={() => this.setState({pullUp: false})}></Button>
            <Button label="重置" onClick={() => this.reset()}></Button>
          </div>
          <Refresh
            ref={this.refresh}
            onDropDown={() => this.onDropDown()}
            onPullUp={() => this.onPullUp()}
            dropDown={this.state.dropDown}
            pullUp={this.state.pullUp}
            height={window.innerHeight - 45 - 60}
            backgroundColor="#f9f9f9"
          >
            {
              this.state.array.map((val, index) => (
                <div className="item-sssss" key={index}>{val}</div>
              ))
            }
          </Refresh>
        </div>
      </div>
    )
  }
}
