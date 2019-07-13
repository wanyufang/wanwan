$(() => {
  // 把购物车的数据从本地存储里面读取出来
  let jsonStr = localStorage.getItem('shopCarDate');
  // console.log(jsonStr);
  // 判断jsonStr是否为null 如果是null就没有数据,如果不是null,就是有数据,需要生成购物车的商品列表
  let arr;
  if (jsonStr !== null) {
    arr = JSON.parse(jsonStr);
    // 遍历数组,生成结构
    let html = '';
    arr.forEach(e => {
      html += `<div class="item" data-id="${e.pID}">
            <div class="row">
              <div class="cell col-1 row">
                <div class="cell col-1">
                  <input type="checkbox" class="item-ck" checked="">
                </div>
                <div class="cell col-4">
                  <img src="${e.imgSrc}" alt="">
                </div>
              </div>
              <div class="cell col-4 row">
                <div class="item-name">${e.name}</div>
              </div>
              <div class="cell col-1 tc lh70">
                <span>￥</span>
                <em class="price">${e.price}</em>
              </div>
              <div class="cell col-1 tc lh70">
                <div class="item-count">
                  <a href="javascript:void(0);" class="reduce fl">-</a>
                  <input autocomplete="off" type="text" class="number fl" value="${e.number}">
                  <a href="javascript:void(0);" class="add fl">+</a>
                </div>
              </div>
              <div class="cell col-1 tc lh70">
                <span>￥</span>
                <em class="computed">${e.price * e.number}</em>
              </div>
              <div class="cell col-1">
                <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
              </div>
            </div>
          </div>`
    });
    // 把html格式的字符串放在div里面
    $('.item-list').html(html);
    // 把空空如也隐藏
    $('empty-tip').hide();
    // 把表头+总计显示出来
    $('.cart-header').removeClass('hidden');
    $('.total-of').removeClass('hidden');
  }

  // 计算总和和总价
  function numberTotal (){
    // 算出总计里面的总数量和总价
    // 根据选中的多选框，得到选中的商品的id
    // 先申明数量
    let totalCount = 0;
    // 在申明总价
    let totalMonye = 0;
    $(".item-list input[type=checkbox]:checked").each((i,e)=>{     
      let id = parseInt($(e).parents('.item').attr('data-id'));
      // console.log(id);
      arr.forEach(e=>{
        if(id === e.pID) {
          // 勾选在本地存储中的数据
          totalCount += e.number;
          totalMonye += e.number * e.price;
        }
      })
    });
    // 修改数量和总价
    $('.selected').text(totalCount);
    $('.total-money').text(totalMonye);
  }
  numberTotal();


  // 实现全选和全不选
  $('.pick-all').on('click',function(){
    // 看看自己当前的状态
    let status = $(this).prop('checked');
    // 设置每个商品都和自己一样
    $('.item-ck').prop('checked',status);
    $('.pick-all').prop('checked',status);
    // numberTotal();
  })

  // 使用委托来实现，因为所有的商品的信息都是动态生成的，如果是以后从服务器获取数据，会失败的，必须是用委托的
  
    
})