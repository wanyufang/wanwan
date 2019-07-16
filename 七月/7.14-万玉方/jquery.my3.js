; (function () {
    function wan(selector) {
        return new Init(selector);
    }
    function Init(selector) {
        let nodeList = document.querySelectorAll(selector);
        for (let i = 0; i < nodeList.length; i++) {
            this[i] = nodeList[i];
        }
        this.length = nodeList.length
    }
    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(i, this[i]);
        }
    }

    Init.prototype.css = function (wanWan, value) {
        if (value == undefined) {
            return window.getComputedStyle(this[0])[wanWan];
        } else {
            let wanArr = ['width', 'height', 'left', 'top', 'right'];
            for (let i = 0; i < this.length; i++) {
                if (wanArr.indexOf(wanWan) !== -1) {
                    if (value.toString().indexOf('px') === -1) {
                        this[i].style[wanWan] = value + 'px';
                        // console.log(this[i]);                       
                    } else {
                        this[i].style[wanWan] = value;
                    }
                } else {
                    this[i].style[wanWan] = value;
                }
            }
            return this;
        }
    }
    Init.prototype.addClass = function (className) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.add(className);
        }
        return this;
    }
    Init.prototype.removeClass = function (className) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.remove(className);
        }
        return this;
    }
    Init.prototype.toggleClass = function (className) {
        for (let i = 0; i < this.length; i++) {
            this[i].classList.toggle(className);
        }
        return this;
    }


    window.$ = wan;
})()


let box = $('.box');
box.each(function (i, e) {
    console.log(e);
});
box.css('width', 200);
box.css('height', 200);
box.css('backgroundColor', 'red');

box.addClass('aaa');
box.removeClass('aaa');
box.toggleClass('aaa')