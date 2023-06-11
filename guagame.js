class GuaGame {
    // 单例
    static _instance
    static interface(...args) {
        if (this._instance) {
            return this._instance
        } else {
            return this._instance = new this(...args)
        }
    }

    constructor() {
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.setup()
    }

    setup() {
        this.drawPositionText()
    }

    // 画坐标
    drawPositionText(position) {
        let p = position || {}
        let x = p.x || 0
        let y = p.y || 0

        let text = `x: ${x} y:${y}`
        e('#id-position').innerText = text
    }

    // 给 canvas 添加事件
    addCanvasEvents(eventName, callback) {
        this.canvas.addEventListener(eventName,(event)=>{
            event.preventDefault()
            callback(this, event)
        })
    }

    drawBackground() {
        let context = this.context
        let canvas = this.canvas
        // 填充 canvas 背景色 debug 用
        context.fillStyle = randomColor()
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.stroke()
        context.closePath()
    }

    drawRect() {
        let context = this.context
        context.fillStyle = randomColor()
        context.rect(180, 200, -100, -100)
        context.fill()
        context.closePath()
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    // 获取坐标
    getCoordinates(event) {
        // https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mousemove
        // x y 要减去 canvas 原本的偏移值 例如 canvas 样式加了 marigin: 20px
        var rect = this.canvas.getBoundingClientRect()
        let x = event.clientX - rect.left
        let y = event.clientY - rect.top
        return {x, y}
    }

}
const gua = () => {
    return GuaGame.interface()
}
