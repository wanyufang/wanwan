$(()=>{
    // 先获取location.search里面的商品的id
    // console.log(location.search);
    // 把数组部分截取 - substring
    let id = parseInt(location.search.substring(2));
    // console.log(id);
    // 根据id到数据里面,获取对应的数据,展示在页面上
    // 根据id获取，就需要遍历整个数组获取
    let wan = phoneData.find((e) => {
        // find函数要求传入的参数是一个函数，函数的要求是返回一个条件，find方法返回的是满足条件的数组里面的某一个元素
        return e.pID === id;
    });
    // console.log(wan);
    // 把对应的位置的数据更替
    // 更改产品的名字
    $('.sku-name').text(wan.name);
    // 更改产品的价格
    $('.summary-price em').text('￥'+ wan.price);
    // 更改图片的路径
    $('.preview-img>img').attr('src',wan.imgSrc);

    
})