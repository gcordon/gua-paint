window.config = {
    // 边框宽度
    lineWidth: 4,
    // 边框颜色
    strokeStyle: '#931515',
    // 填充颜色
    fillStyle: '#01f456',
    // 是否填充颜色
    isFill: false,
}

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
    return `rgb(${randomInt(256)}, ${randomInt(256)}, ${randomInt(256)})`
}
