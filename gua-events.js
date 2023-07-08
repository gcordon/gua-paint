class GuaEvents {
    constructor() {
        this.mouseEnlabel = false
        this.game = gua()
        this.scene = null
        this.events()
    }

    static new(...args) {
        return new this(...args)
    }
    
    runWithScene(scene) {
        this.scene = scene
    }

    replaceScene(scene) {
        this.scene = scene
    }

    setup() {
        this.events()
    }

    onMouseDown(event) {
        this.scene.onMouseDown(event)
    }

    onMouseMove(event) {
        this.scene.onMouseMove(event)
    }

    onMouseUp(event) {
        this.scene.onMouseUp(event)
    }
    
    events() {
        let canvas = this.game.canvas
        canvas.addEventListener("mousedown",(event)=>{
            event.preventDefault()
            log('down', this)
            this.mouseEnlabel = true
            this.onMouseDown(event)
        })
        canvas.addEventListener("mousemove",(event)=>{
            event.preventDefault()

            let p = this.game.getCoordinates(event)
            this.game.drawPositionText(p)
            
            if (this.mouseEnlabel) {
                log('move')
                this.onMouseMove(event)
            }
        })
        canvas.addEventListener("mouseup",(event)=>{
            event.preventDefault()
            if (this.mouseEnlabel) {
                log('up')
                this.mouseEnlabel = false
                this.onMouseUp(event)
            }
        })
    }
}

