const delay = 100

const w : number = window.innerWidth
const h : number = window.innerHeight
const fontSizeFactor : number = 12

class Animator {

    animated : boolean
    interval : number

    start(cb : Function) {
        if (!this.animated) {
            this.animated = true
            this.interval = setInterval(cb, delay)
        }
    }

    stop() {
        if (this.animated) {
            this.animated = false
            clearInterval(this.interval)
        }
    }
}

class TextState {

    l : number = 0

    constructor(private text : string) {

    }

    update(cb : Function, endCb : Function) {

        if (this.l < this.text.length) {
            this.l++
        } else {
            endCb()
        }
        cb(this.text.substring(0, this.l))
    }
}

class TextAnimator {

    block : HTMLDivElement = document.createElement('div')
    animator : Animator = new Animator()
    state : TextState

    initBlock() {
        document.body.appendChild(this.block)
        this.block.style.fontSize = `${Math.min(w, h) / fontSizeFactor}px`
        this.block.style.fontFamily = `"Comic Sans MS", cursive, sans-serif`
        this.block.style.color = '#1976D2'
        this.block.style.display = "block"
    }

    start(text) {
        this.state = new TextState(text)
        this.animator.start(() => {
            this.state.update((text) => {
                this.block.innerHTML = text
            }, () => {
                this.animator.stop()
            })
        })
    }

    static init() : TextAnimator {
        const ta : TextAnimator = new TextAnimator()
        ta.initBlock()
        return ta 
    }
}
