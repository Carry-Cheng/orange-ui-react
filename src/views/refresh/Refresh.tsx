import React, { Component, useRef } from 'react'
import Refresh from '../../../packages/refresh'
import Navbar from '../../../packages/navbar'
import './Refresh.scss'

interface Props {
  
}
interface State {
  array: Array<number>
}

export default class RefreshIndex extends Component<Props, State> {
  state = {
    array: [1,2,3,4,5,6,7,8,9,10]
  }
  componentDidMount() {
    // console.info(this.refs)
  }
  render() {

    return (
      <div className="example-refresh">
        <Navbar backText="返回">Refresh example</Navbar>
        <div className="example-refresh-content">
          <Refresh options={{
            height: window.innerHeight - 45
          }}>
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
