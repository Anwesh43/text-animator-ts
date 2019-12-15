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
