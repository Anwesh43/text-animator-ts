const delay = 100
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
}
