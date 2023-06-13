class ColorSelect extends HTMLElement {
    constructor() {
        super()

        this.strokeStyleName = 'id-stroke-style'
        this.filleStyleName = 'id-fill-style'
        this.isFillName = 'id-is-fill'
        this.clearCanvasName = 'id-clear-canvas'

        this.penPaintName = 'id-pen-paint'
        this.rectPaintName = 'id-react-paint'
        this.clearPaintName = 'id-clear-paint'
        this.absorbPaintName = 'id-absorb-paint'

        this.game = gua()
        this.render()
    }

    render() {
        let shadowRoot = this.attachShadow({mode: 'open'})
        let colorTemplate = document.createElement('template')
        colorTemplate.innerHTML = `
            边框颜色<input id="${this.strokeStyleName}" type="color" value=${config.strokeStyle} />
            填充颜色<input id="${this.filleStyleName}" type="color" value=${config.fillStyle} />
            <button id="${this.clearCanvasName}">清空画布</button>
            是否填充颜色<input type="checkbox" id="${this.isFillName}" ${config.isFill ? 'checked' : ''}>
            <br /> 
            <button id="${this.penPaintName}">笔</button>
            <button id="${this.rectPaintName}">矩形</button>
            <button id="${this.clearPaintName}">橡皮擦</button>
            <button id="${this.absorbPaintName}">吸取颜色</button>
        `
        shadowRoot.appendChild(colorTemplate.content.cloneNode(true))
    }

    e(elementName) {
        let el = this.shadowRoot.querySelector(elementName)
        return el
    }
    
    // 监听的 attr 属性 如果改变会触发 attributeChangedCallback 生命周期
    static get observedAttributes() {
        return ['stroke-change-color']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`Value changed from ${name} ${oldValue} to ${newValue}`);
        this.setStorkeValue(newValue)
    }

    setConfigStrokeStyle(value) {
        config.strokeStyle = value
    }

    setStorkeValue(value) {
        this.e(`#${this.strokeStyleName}`).value = value
        this.setConfigStrokeStyle(value)
    }

    rootElBindEvents(elementName, eventName, callback) {
        this.e(elementName).addEventListener(eventName, event=>{
            callback(event)
        })
    }

    connectedCallback() {
        this.rootElBindEvents(`#${this.strokeStyleName}`, 'change', event=>{
            let target = event.target
            this.setConfigStrokeStyle(target.value)
        })

        this.rootElBindEvents(`#${this.isFillName}`, 'change', event=>{
            let target = event.target
            config.isFill = target.checked
        })

        this.rootElBindEvents(`#${this.clearCanvasName}`, 'click', event=>{
            this.game.clearCanvas()
        })

        let paintChange = {
            [this.penPaintName]: pen,
            [this.rectPaintName]: rect,
            [this.clearPaintName]: clear,
            [this.absorbPaintName]: absorb,
        }
        for (const elementName in paintChange) {
            let type = paintChange[elementName]
            this.rootElBindEvents(`#${elementName}`, 'click', event=>{
                paintEvents(type)
            })
        }

        // this.rootElBindEvents(`#${this.penPaintName}`, 'click', event=>{
        //     paintEvents(pen)
        // })
        // this.rootElBindEvents(`#${this.rectPaintName}`, 'click', event=>{
        //     paintEvents(rect)
        // })
        // this.rootElBindEvents(`#${this.clearPaintName}`, 'click', event=>{
        //     paintEvents(clear)
        // })
        // this.rootElBindEvents(`#${this.absorbPaintName}`, 'click', event=>{
        //     paintEvents(absorb)
        // })
    }
}
customElements.define('color-select', ColorSelect)