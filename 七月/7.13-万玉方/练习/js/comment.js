$(()=>{
    // 根据键从本地数据中读取出字符串
    let arr = kits.loadArray('shopCarDate');
    // 直接计算出总的数量，设置给红色的泡泡
    let total = 0;
    arr.forEach(e => {
        total += e.number
    });

    // 修改到头部的购物车里面
    $('.count').text(total);
})