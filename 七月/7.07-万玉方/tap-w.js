

function tap(element, callback, span, offset) {
    span = span || 200;
    offset = offset || 50;
    // 定义一个变量,记录开始位置
    let startTime = 0;
    // 定义变量,记录开始为
    let startX = 0;
    let startY = 0;
    // 注册触摸开始事件
    element.addEventListener('touchstart', function (e) {
        if (e.touches.length !== 1) {
            console.log('不是单点操作');
            return;
        }
        // 记录开始的位置
        startTime =  Date.now();
        // 记录开始的位置
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;

    })
    // 注册结束事件

    element.addEventListener('touchend', function (e) {
        // 判断是否是单指操作
        if (e.changedTouches.length !== 1) {
            console.log('不是单点操作');
            return;
        }

        // 记录结束时
        let endTime = Date.now();
        // 算出开始和结束的间隔 用绝对值判断
        if (startTime - endTime > span) {
            console.log('按的时间太长了');
            return;
        }
        // 记录结束位置
        let endX = e.changedTouches[0].pageX;
        let endY = e.changedTouches[0].pageY;

        // 算出偏差
        if (Math.abs(startX - endX) > offset || Math.abs(startY - endY) > offset) {
            console.log('位置偏差太大');
            return;
        }
        console.log('这是一个单机操作');
        callback && callback();
    })
}