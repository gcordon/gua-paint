class GauBase {
    static new(...args) {
        return new this(...args)
    }
    constructor() {
        this.cacheImageData = null
        this.game = gua()
    }

    getImageData() {
        let g = this.game
        this.cacheImageData = g.context.getImageData(0, 0, g.canvas.clientWidth, g.canvas.clientHeight)
    }

    putImageData() {
        this.game.context.putImageData(this.cacheImageData, 0, 0)
    }

    clearCacheImageData() {
        this.cacheImageData = null
    }
}
