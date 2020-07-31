

// 移动端适配方案

;
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var _t = ''
    // console.log(doc); //返回document对象
    // console.log(docEl); //返回的是整个页面

    function refreshRemFn() {
        // 获得指定对象的宽度
        var _width = docEl.getBoundingClientRect().width;
        // console.log(_width);

        if (_width > 640) {
            _width = 640;
        }

        // 我们设定  1rem = 100px
        var _rem = _width / 6.4;
        docEl.style.fontSize = _rem + 'px'


    }


    // 事件临时，当页面缩放的时候
    win.addEventListener('resize', function () {
        // console.log('xxx');
        // 定时器 要清空
        clearTimeout(_t)
        // 300毫秒后显示
        _t = setTimeout(refreshRemFn, 300)
    }, false)


    // 页面一打开就运行
    refreshRemFn()

})(window)