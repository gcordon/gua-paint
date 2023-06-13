// 笔
class GuaPen {
    static new(...args) {
        return new this(...args)
    }
    constructor() {
        this.position = { x: 0, y: 0 }
        this.game = gua()
        this.color = config.strokeStyle
        this.type = 'pen'
    }

    setDrawPosition(event) {
        let p = this.game.getCoordinates(event)
        this.position.x = p.x
        this.position.y = p.y
    }
    
    onMouseDown(event) {
        this.setDrawPosition(event)
    }

    onMouseMove(event) {
        let color = config.strokeStyle
        if (this.type == 'clear') {
            color = '#fff'
        }

        let context = this.game.context
        //开始绘制路径
        context.beginPath()
        //线宽
        context.lineWidth = config.lineWidth
        context.lineCap = 'round'
        context.strokeStyle = color
        //起始位置
        context.moveTo(this.position.x, this.position.y)
        this.setDrawPosition(event)
        //停止位置
        context.lineTo(this.position.x, this.position.y)
        //描绘线路
        context.stroke()
        //结束绘制
        context.closePath()
    }

    onMouseUp(event) {
        this.onMouseMove(event)
    }
}
