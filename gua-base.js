class GauBase {
    static new(...args) {
        return new this(...args)
    }
    constructor() {
        this.cacheImageData = null
        this.g = gua()
    }

    getImageData() {
        let g = this.g
        this.cacheImageData = g.context.getImageData(0, 0, g.canvas.clientWidth, g.canvas.clientHeight)
    }

    putImageData() {
        this.g.context.putImageData(this.cacheImageData, 0, 0)
    }

    clearCacheImageData() {
        this.cacheImageData = null
    }
}
