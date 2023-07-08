class Tool {
    static current
    static watch = GuaEvents.new()
    static rect = GuaRect.new()
    static pen = GuaPen.new()
    static clear = GuaClear.new()
    static absorb = GuaAbsorb.new() 

    static startInit(item) {
        this.watch.runWithScene(item)
    }

    static watchEvents(item){
        this.watch.replaceScene(item)
    }

    static watchKeydown(){
        bindEvent(window, "keydown",(event)=>{
            let k = event.key
            log('按下 keydown', k)
            if (k === 'c') {
                // 不知道为什么我的c键没事自动会触发，可能是因为用了什么傻逼软件了
                return
            }

            if (k === 'q') {
                this.watchEvents(this.pen)
            } else if (k === 'w') {
                this.watchEvents(this.rect)
            } else if (k === 'e') {
                this.watchEvents(this.absorb)
            } else if (k === 'f') {
                this.watchEvents(this.clear)
            } else if (k === 't') {
                let f = !ConfigModel.getConfig('isFill')
                ConfigModel.setConfig('isFill', f)
            } else if ('12345'.includes(k)) {
                let f = Number(k) * 3
                ConfigModel.setConfig('lineWidth', f)
            }
        })
    }
}
