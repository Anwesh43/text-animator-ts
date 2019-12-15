class TextContainer {

    button : HTMLButtonElement = document.createElement('button')
    text : HTMLTextAreaElement = document.createElement('textarea')

    initTextStyle() {
        this.text.style.display = "block"
        this.text.rows = 5
        this.text.cols = 80
    }

    initButtonStyle() {
        this.button.innerHTML = "submit"
        this.button.style.display = "block"
        this.button.style.marginTop = "5px"
    }

    initContainer() {
        this.initTextStyle()
        this.initButtonStyle()
        document.body.appendChild(this.text)
        document.body.appendChild(this.button)
    }

    handleClick(cb : Function) {
        this.button.onclick = () => {
            cb(this.text.value)
            this.text.value = ""
        }
    }

    static init() : TextContainer {
        const ta : TextContainer = new TextContainer()
        ta.initContainer()
        return ta
    }
}
