/*
 * Javascript Document
 * Creat by Nelson on 2017/4/30
 * 
 * Website:https://segmentfault.com/u/nelson2016
 * 
 * QQ:616859570
 * Email:Nelson_Lee@outlook.com
 * */

class Tap {

    constructor(options) {
        if (!this.checkBrowserSupport()) {
            console.error("浏览器不支持");
            return;
        }
        this.defaultData = {
            coods:{},
            sensitivity:10
        }
        this.data = Object.assign({},options,this.defaultData);

        this.init();
    }

    init() {
        const _this = this;
        this.data.evt = this.createEvt();
        document.addEventListener('touchstart', function (e) {
            let touch = e.touches[0];
            _this.data.coods.start = {
                x:touch.pageX,
                y:touch.pageY
            }
        })
        document.addEventListener('touchend', function (e) {
            let touch = e.changedTouches[0];
            _this.data.coods.distance = {
                h:touch.pageX - _this.data.coods.start.x,
                v:touch.pageY - _this.data.coods.start.y
            }
            if(_this.data.coods.distance.h <= _this.data.sensitivity && _this.data.coods.distance.v <= _this.data.sensitivity){
                e.target.dispatchEvent(_this.data.evt);
            }
        })
    }

    createEvt() {
        let evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('tap', false, true);
        return evt;
    }

    checkBrowserSupport() {
        return ('addEventListener' in window) && ("ontouchend" in document);
    }

}

new Tap({
    sensitivity:11
});
