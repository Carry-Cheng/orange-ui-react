import React, { Component } from 'react'
import './Index.scss'
import Navbar from '../../../packages/navbar'
import Exposure from '../../../packages/exposure'
interface Props {
    
}
interface State {
    
}

export default class Index extends Component<Props, State> {
    state = {
        items: new Array(100).fill(1)
    }

    onExposure = (target: Array<number>) => {
        console.info(target)
    }

    render() {
        return (
            <div className="example-exposure">
                <Exposure className="exposure" onExposure={(target: Array<number>) => this.onExposure(target)}/>
                <Navbar backText="返回">exposure example</Navbar>
                {/* horizontal */}
                <div className="example-exposure-content-horizontal">
                    {
                        this.state.items.map((val, index) => (
                            <div data-exposureid={index+10000} key={index} className="exposure exposure-item">
                                {`Item ID:${index+10000}`}
                            </div>
                        ))
                    }
                </div>
                {/* vertical */}
                <div className="example-exposure-content-vertical">
                    {
                        this.state.items.map((val, index) => (
                            <div data-exposureid={index+20000} key={index} className="exposure exposure-item">
                                {`Item ID:${index+20000}`}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
