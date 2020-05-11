import React, { Component } from 'react'

interface Props {
    class: string
    onExposure: Function
}
interface State {
    
}

interface OriginObject {
    exposureid: number
    top: number
    height: number
}

export default class Exposure extends Component<Props, State> {
    readonly state: Readonly<State>
    private min: number = 0
    private max: number = window.innerHeight
    /// it's a data array of the target div's top
    private origin: Array<OriginObject> = []
    private uploadCache: Map<number, boolean> = new Map<number, boolean>()
    private _target: Array<number> = []
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.init()
    }
    private init = () => {
        if (!this.props.class) {
            return false
        }
        this.initEvent()
    }
    private reset = () => {
        this.baseComputed()
        this.coreComputed()
    }
    private initEvent = () => {
        document.addEventListener('touchend', () => {
            this.reset()
        }, {passive: true})
        let timeout: number = window.setTimeout(() => {
            window.clearTimeout(timeout)
            this.reset()
        }, 20)
    }
    private baseComputed = () => {
        this.origin = []
        let dom = window.document.querySelectorAll<HTMLDivElement>(`.${this.props.class}`)
        dom.forEach(element => {
          let attr: Attr | null = element.attributes.getNamedItem('data-exposureid')
          this.origin.push({
              exposureid: attr ? parseInt(attr.value) : 0,
              top: element.offsetTop,
              height: element.offsetHeight
          })  
        })
    }
    private coreComputed = () => {
        let target: Array<number> = []
        this.min = window.scrollY
        this.max = this.min + window.innerHeight
        this.origin.forEach(element => {
            // strict mode, the box in visual area
            if (element.top > this.min && (element.top + element.height) < this.max) {
                if (!this.uploadCache.get(element.exposureid)) {
                    target.push(element.exposureid)
                }
                this.uploadCache.set(element.exposureid, true)
            }
        })
        if (JSON.stringify(target) !== JSON.stringify(this._target)) {
            this._target = target
            this.props.onExposure(target)
        }
    }
    public clearCache = () => {
        this.uploadCache.clear()
        this.reset()
    }
    public clearCacheOnly = () => {
        this.uploadCache.clear()
    }
    render() {
        return (
            <div style={{width: 0, height: 0}}></div>
        )
    }
}
