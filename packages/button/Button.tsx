import React, { Component } from 'react'
import './Button.scss'

interface Props {
    label: string
    onClick(): void
    style: React.CSSProperties | undefined
}
interface State {
    
}

export default class Button extends Component<Props, State> {

    static defaultProps = { 
        label: 'Button',
        onClick: () => {},
        style: {}
    }

    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    onClick = () => {
        try {
            this.props.onClick()
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <button style={this.props.style} onClick={() => this.onClick()} className="orange-button">
                { this.props.label }
            </button>
        )
    }
}
