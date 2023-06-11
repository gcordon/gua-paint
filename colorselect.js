class ColorSelect extends HTMLElement {
    constructor() {
        super()

        this.strokeStyleName = 'id-stroke-style'
        this.filleStyleName = 'id-fill-style'
        this.isFillName = 'id-is-fill'
        this.clearCanvasName = 'id-clear-canvas'

        let shadowRoot = this.attachShadow({mode: 'open'})
        let colorTemplate = document.createElement('template')
        colorTemplate.innerHTML = `
            边框颜色<input id="${this.strokeStyleName}" type="color" value=${config.strokeStyle} />
            填充颜色<input id="${this.filleStyleName}" type="color" value=${config.fillStyle} />
            <button id="${this.clearCanvasName}">清空画布</button>
            是否填充颜色<input type="checkbox" id="${this.isFillName}" ${config.isFill ? 'checked' : ''}>
        `
        shadowRoot.appendChild(colorTemplate.content.cloneNode(true))
    }

    setStorkeValue(value) {
        let e = this.shadowRoot.querySelector(`#${this.strokeStyleName}`)
        log('value', value)
        e.value = value
    }

    rootElBindEvents(elementName, eventName, callback) {
        let e = this.shadowRoot.querySelector(elementName)
        e.addEventListener(eventName, event=>{
            callback(event)
        })
    }

    connectedCallback() {
        this.rootElBindEvents(`#${this.strokeStyleName}`, 'change', event=>{
            let target = event.target
            config.strokeStyle = target.value
        })

        this.rootElBindEvents(`#${this.isFillName}`, 'change', event=>{
            let target = event.target
            config.isFill = target.checked
        })

        this.rootElBindEvents(`#${this.clearCanvasName}`, 'click', event=>{
            gua().clearCanvas()
        })

    }
}
customElements.define('color-select', ColorSelect)