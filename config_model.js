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

class ConfigModel {
    static new(...args) {
        return new this(...args)
    }

    //  config 相关的也应该抽成 类
    static setConfig(key, value) {
        window.config[key] = value
    }

    static getConfig(key) {
        return window.config[key]
    }
}