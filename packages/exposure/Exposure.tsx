import React, { Component } from 'react'

interface Props {
    className: string
    onExposure: Function
    immediate?: boolean
    delay?: number
}
interface State {
    
}

interface OriginObject {
    exposureid: number
    top: number
    left: number
    width: number
    height: number
}

export default class Exposure extends Component<Props, State> {
    static defaultProps = {
        immediate: false,
        delay: 1000
    }
    readonly state: Readonly<State>
    private min: number = 0
    private max: number = window.innerHeight
    private minLeft: number = 0
    private maxLeft: number = window.innerWidth
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
        if (!this.props.className) {
            return false
        }
        this.initEvent()
    }
    public reset = () => {
        this.baseComputed()
        this.coreComputed()
    }
    private initEvent = () => {
        document.addEventListener('touchend', (event: TouchEvent) => {
            this.reset()
        }, {passive: true})
        if (this.props.immediate) {
            let timeout: number = window.setTimeout(() => {
                window.clearTimeout(timeout)
                this.reset()
            }, this.props.delay)
        }
    }
    private parentNodeHasScorll(child: HTMLElement | null): null | HTMLElement | undefined {
        if (!child) {
            return null
        } else {
            if (child.parentNode) {
                let parentNode = child.parentNode as HTMLElement
                if (parentNode.scrollHeight > parentNode.clientHeight || parentNode.offsetHeight > parentNode.clientHeight) {
                    return parentNode
                } else {
                    return this.parentNodeHasScorll(parentNode)
                }
            } else {
                return null
            }
        }
    }
    private baseComputed = () => {
        this.origin = []
        let dom = window.document.querySelectorAll<HTMLDivElement>(`.${this.props.className}`)
        dom.forEach(element => {
          let attr: Attr | null = element.attributes.getNamedItem('data-exposureid')
          this.origin.push({
              exposureid: attr ? parseInt(attr.value) : 0,
              top: element.getBoundingClientRect().top,
              left: element.getBoundingClientRect().left,
              width: element.offsetWidth,
              height: element.offsetHeight
          })  
        })
    }
    private coreComputed = () => {
        let target: Array<number> = []
        let child = window.document.querySelector<HTMLDivElement>(`.${this.props.className}`)
        if (!child) {
            return false
        }
        let father = this.parentNodeHasScorll(child)
        this.min = 0
        this.minLeft = 0
        if (father) {
            this.min = father.scrollTop
            this.minLeft = father.scrollLeft
        }
        this.max = this.min + window.innerHeight
        this.maxLeft = this.minLeft + window.innerWidth
        this.origin.forEach((element, index) => {
            /// strict mode, the box in visual area
            /// vertical and horizontal
            if ((element.top > this.min && (element.top + element.height) < this.max) && (element.left > this.minLeft && (element.left + element.width) < this.maxLeft)) {
                if (!this.uploadCache.get(index)) {
                    target.push(element.exposureid)
                }
                this.uploadCache.set(index, true)
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
