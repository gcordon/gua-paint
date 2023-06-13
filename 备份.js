// const guaevent = GuaEvents.new()
// const rect = GuaRect.new()
// const pen = GuaPen.new()
// const clear = GuaClear.new()
// const absorb = GuaAbsorb.new()

// const typeToggle = () => {
//     bindEvent(window, "keydown",(event)=>{
//         let k = event.key
//         log('按下 keydown', k)
//         if (k === 'c') {
//             // 不知道为什么我的c键没事自动会触发，可能是因为用了什么傻逼软件了
//             return
//         }

//         if (k === 'q') {
//             paintEvents(pen)
//         } else if (k === 'w') {
//             paintEvents(rect)
//         } else if (k === 'e') {
//             paintEvents(absorb)
//         } else if (k === 'f') {
//             paintEvents(clear)
//         } else if (k === 't') {
//             config.isFill = !config.isFill
//         } else if ('1234'.includes(k)) {
//             config.lineWidth = Number(k) * 3
//         }
//     })
// }

// const paintEvents = (item) => {
//     log('paintEvents change', item)
//     guaevent.onMouseDown = (event) => {
//         item.onMouseDown(event)
//     }
//     guaevent.onMouseMove = (event) => {
//         item.onMouseMove(event)
//     }
//     guaevent.onMouseUp = (event) => {
//         item.onMouseUp(event)
//     }
// }