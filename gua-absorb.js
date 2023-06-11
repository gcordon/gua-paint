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
        let g = this.g
        let p = g.getCoordinates(event)
        let x = p.x
        let y = p.y
        let c = g.context.getImageData(x, y, 1, 1).data
        var hex = "#" + ("000000" + rgbToHex(c[0], c[1], c[2])).slice(-6)

        // hex 得到的如 # 开头的颜色
        // new ColorSelect().setStorkeValue(hex)
        config.strokeStyle = hex
        // log('吸取颜色 ', hex)
    }

    onMouseDown(event) {
        this.colorExtraction(event)
    }

    onMouseMove() {
        this.colorExtraction(event)
    }

    onMouseUp() {
        this.colorExtraction(event)
    }
}
