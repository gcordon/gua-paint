const log = console.log.bind(console)

const e = sel => document.querySelector(sel)

const bindEvent = (el, eventName, callback) => {
    el.addEventListener(eventName,(event)=>{
        callback(event)
    })
}

const rgbToHex = (r, g, b) => {
    if (r > 255 || g > 255 || b > 255) {
        throw "Invalid color component"
    }
    return ((r << 16) | (g << 8) | b).toString(16)
}

const randomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const randomColor = () => {
    // https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mousemove
    return `rgb(${randomInt(256)}, ${randomInt(256)}, ${randomInt(256)})`
}
