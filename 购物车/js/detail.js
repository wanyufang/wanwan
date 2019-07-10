$(() => {
  // console.log(location.search.substring(4));
  let id = location.search.substring(4);
  console.log(id);
  // 得到id之后，去数组里面查找出对应的数据
  // 遍历数组，找出和我的id一样的一个对象把数据写到页面里面
  // 数组.filter 用于对数组里面的数据进行筛选，返回一个新的数组
  // let arr = phoneData.filter(function(e,i){
  //   return e.pID == id;
  // })
  // console.log(arr);

  // 数组里面查找满足条件的元素
  let obj = phoneData.find(function (e, i) {
    return e.pID == id;
  })
  // console.log(obj);
  // 接着就只需要根据数据，把对应的文字替换
  // 修改产品的名字
  $('.sku-name').text(obj.name);
  // 修改价格
  $('.summary-price em').text('￥'+obj.price);
  // 修改图片
  $('.preview-img>img').attr('src',obj.imgSrc);


  // 实现数量的加减
  /**
   *  获取按钮，注册点击事件
   *    如果点击的是+，让数字变大
   *    如果点击的是-，让数字变小，但是最小是1
   * 
   */
  // 获取元素 (+-按钮,数字的输入框)
  let chooseNumber = $('.choose-number');
  let addBtn = $('.add');
  let reduceBtn = $('.reduce');

  //先做+
  addBtn.on('click',function(){
    // 让件数+1
    // 获取原来是多少件
    let old = parseInt(chooseNumber.val());
    old++;
    //如果点击+号，当前的数量大于1，就让-号可以被点击
    if(old > 1){
      reduceBtn.removeClass('disabled');
    }
    // 把新的数据设置回输入框
    chooseNumber.val(old);
  })

  // 点-号
  reduceBtn.on('click',function(){
    // 让数量减少
    let old = parseInt(chooseNumber.val());
    if(old === 1){ // 如果当前是1，就不能继续点击减少      
      return;
    }
    old--;
    if(old === 1){
      reduceBtn.addClass('disabled');
    }
    // 把新的数据设置回输入框
    chooseNumber.val(old);
  })
});