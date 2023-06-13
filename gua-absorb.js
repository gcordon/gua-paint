// 吸取颜色
class GuaAbsorb extends GauBase {
    constructor() {
        super()
        this.setup()
    }

    setup() {

    }

    // 吸取颜色
    colorExtraction(event)  {
        let g = this.game
        let p = g.getCoordinates(event)
        let x = p.x
        let y = p.y
        let c = g.context.getImageData(x, y, 1, 1).data
        var hex = "#" + ("000000" + rgbToHex(c[0], c[1], c[2])).slice(-6)

        // hex 得到的如 # 开头的颜色
        // log('吸取颜色 ', hex)
        e('color-select').setAttribute('stroke-change-color', hex)
    }

    onMouseDown(event) {
        this.colorExtraction(event)
    }

    onMouseMove(event) {
        this.colorExtraction(event)
    }

    onMouseUp(event) {
        this.colorExtraction(event)
    }
}
