$(() => {
    // 先获取location.search里面的商品的id
    // console.log(location.search);
    // 把数字部分获取 - substring
    let id = parseInt(location.search.substring(4));
    // console.log(id);
    // 根据id到数据里面,获取对应的数据,展示在页面上
    // 根据id获取,就需要遍历整个数组获取
    let obj = phoneData.find(e => {
        // find函数要求传入的参数是一个函数,函数的要求是返回一个条件,find方法返回的是满足条件的数组里面的某一个元素
        return e.pID === id;
    });
    // 把对应的位置的数据更替
    // 更改产品的名字
    $('.sku-name').text(obj.name);
    // 更改图片路径
    $('.preview-img>img').attr('src', obj.imgSrc);
    // 更改价格
    $('.summary-price em').text('￥' + obj.price);

    // 实现数量的增减
    // 获取按钮,注册点击事件
    // 如果点击的是+ 让数字变大
    // 如果点击的是- 让数字变小,最小是1

    // 获取按钮以及数字的输入框
    let add = $('.add');
    let subtract = $('.reduce');
    let srNumber = $('.choose-number');
    let choose = $('.choose-amount');

    // +
    add.on('click',function(){
        // 让件数+1
        // 获取原来是多少件
        let old = parseInt(srNumber.val());
        old++;
        // 如果点击+号，当前的数量大于1，就让-号可以被点击
        if(old>1) {
            subtract.removeClass('disabled');
        }
        // 把新的数据设置回输入框
        srNumber.val(old);
    })

    // -
    subtract.on('click',function(){
        let old = parseInt(srNumber.val());
        if(old === 1){
            return;
        }
        old--;
        if(old === 1) {
            subtract.addClass('disabled')
        }
        // 把新的数据设置回输入框
        srNumber.val(old);
    })


    // 点击加入购物车功能
    $('.addshopcar').on('click', function () {
        // 把当前对应的商品的信息加入购物车
        // 把那些信息存到本地存储里面
        // 图片 名字 单价 数量 pID
        // 只有数量是未知,需要获取
        let number = parseInt($('.choose-number').val());

        //需要把每个数据存储到localStorage里面,又因为可能有多个商品,所以我们要以数组的形式存储
        let jsonStr = localStorage.getItem('shopCarDate');
        let arr;
        // 需要判断到底是否有数据
        if (jsonStr === null) {
            arr = [];
        } else {
            arr = JSON.parse(jsonStr);
        }
        // 但是又发现如果点击同一个商品两次,就会一个商品出现两个在购物车里面,如果点击的是两个商品,最好是把数量叠加
        // 判断当前产品呢的id,是否出现在localStrage里面的数组里面,如果出现,就是曾经添加过了, 只要叠加数量

        // find方法,如果找到了元素,就会返回该元素,大师如果没找到,会返回undefined
        let ddd = arr.find(e => {
            return e.pID === id;
        });
        if (ddd !== undefined) {
            ddd.number += number;
        } else {
            let fff = {
                pID: obj.pID,
                name: obj.name,
                price: obj.price,
                imgSrc: obj.imgSrc,
                number: number
            }
            arr.push(fff);
        }
        // 把数组变成json格式的字符串,存储到localStorage里面   
        jsonStr = JSON.stringify(arr);
        localStorage.setItem('shopCarDate', jsonStr);
        // 我们可以直接点击之后,跳转到购物车页面,进行结算
        location.href = 'cart.html';
    });
})