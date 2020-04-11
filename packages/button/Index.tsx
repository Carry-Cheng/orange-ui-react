import React, { Component } from 'react'
import './Index.scss'

interface Props {
    label?: string
}
interface State {
    
}

export default class Index extends Component<Props, State> {

    static defaultProps: { label: string }

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

Index.defaultProps = {
    label: 'Button'
}
