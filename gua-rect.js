// 拽拖生成的矩形
class GuaRect extends GauBase {
    constructor() {
        super()
        this.setup()
    }
    setup() {
        this.positionStart = {x: 0, y: 0}
        this.positionEnd = {x: 0, y: 0}
        this.width = 0
        this.height = 0
        /**
         需要三个事件  开始拖拽 拖拽中 拖拽结束
            开始拖拽 
                记录 开始点xy
            拖拽中
                [x] 先清除整个画布   可以不用清除，而是用  down 是 调用 context.getImageData  move 调用 context.putImageData
                记录 结束点xy
                画矩形
            拖拽结束
                画矩形
        */
    }

    onMouseDown(event) {
        this.positionStart.x = this.g.getCoordinates(event).x
        this.positionStart.y = this.g.getCoordinates(event).y
        super.getImageData()
    }

    onMouseMove(event) {
        super.putImageData()

        this.positionEnd.x = this.g.getCoordinates(event).x
        this.positionEnd.y = this.g.getCoordinates(event).y

        log('this.positionEnd ', this.positionEnd)
        
        let w = this.positionEnd.x - this.positionStart.x
        let h = this.positionEnd.y - this.positionStart.y

        this.width = w
        this.height = h

        let context = this.g.context
        context.save()
        context.beginPath()
        context.lineWidth = config.lineWidth
        context.strokeStyle = config.strokeStyle
        context.fillStyle = config.fillStyle
        context.rect(this.positionStart.x, this.positionStart.y, this.width, this.height)
        context.stroke()
        if (config.isFill) {
            context.fill()
        }
        context.restore()
    }
    
    onMouseUp(event) {
        log('up ', this.position)
        this.onMouseMove(event)
        super.clearCacheImageData()
    }
}
