import React, { Component } from 'react'
import './Button.scss'

interface Props {
    label?: string
}
interface State {
    
}

export default class Button extends Component<Props, State> {

    static defaultProps = { 
        label: 'Button' 
    }

    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <button className="orange-button">
                { this.props.label }
            </button>
        )
    }
}
