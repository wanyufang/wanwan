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
  function numberTotal() {
    // 算出总计里面的总数量和总价
    // 根据选中的多选框，得到选中的商品的id
    // 先申明数量
    let totalCount = 0;
    // 在申明总价
    let totalMonye = 0;
    $(".item-list input[type=checkbox]:checked").each((i, e) => {
      let id = parseInt($(e).parents('.item').attr('data-id'));
      // console.log(id);
      arr.forEach(e => {
        if (id === e.pID) {
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
  $('.pick-all').on('click', function () {
    // 看看自己当前的状态
    let status = $(this).prop('checked');
    // 设置每个商品都和自己一样
    $('.item-ck').prop('checked', status);
    $('.pick-all').prop('checked', status);
    numberTotal();
  })

  // 使用委托来实现，因为所有的商品的信息都是动态生成的，如果是以后从服务器获取数据，会失败的，必须是用委托的
  $('.item-ck').on('click', function () {
    // 判断是否全选 - 如果选中的个数和所得个数是一致的,就是全选了
    let isAll = $('.item-ck').length === $('.item-ck:checked').length;
    $('.pick-all').prop('checked', isAll);
    numberTotal();
  })


  // 使用委托得方式实现加减
  $('.item-list').on('click', '.add', function () {
    // 点击加号,把对应得输入框得文字进行+1
    // 得到旧的数据
    let oldShuju = parseInt($(this).siblings('input').val());
    // console.log(this);
    oldShuju++;
    if (oldShuju > 1) {
      $(this).siblings('.reduce').removeClass('disabled');
    }
    // 设置回去
    $(this).siblings('input').val(oldShuju);
    // 把本地存储里面的数据更新
    // 判断依据是 点击得按钮对应得商品的id
    let id = parseInt($(this).parents('.item').attr('data-id'));
    let obj = arr.find(e => {
      return e.pID === id;
    });
    // console.log(obj)
    // 更新对应的数据
    obj.number = oldShuju;
    // 还要覆盖回本地数据
    let jsonStr = JSON.stringify(arr);
    localStorage.setItem('shopCarDate', jsonStr);
    // 重新计算总和和总价
    numberTotal();
    // 还要把对应商品的钱也要计算
    // jq对象.find()方法,是一个获取指定条件的后代元素的方法 - find在找子元素的时候,没有children效率高
    // jq对象.children() 只能获取子代元素
    // let res = $(this).parents('.item').find('.computed');
    // console.log(res);
    $(this).parents('.item').find('.computed').text(obj.price * obj.number);
  })

  // 减
  $('.item-list').on('click', '.reduce', function () {
    let oldShuju = parseInt($(this).siblings('input').val());
    // 如果当前值已经是1了,就不能再点击了
    if (oldShuju === 1) {
      return;
    }
    oldShuju--;
    if (oldShuju === 1) {
      // 给按钮添加一个样式,不能点击的样式
      $(this).addClass('disabled');
    }
    $(this).siblings('input').val(oldShuju);
    let id = parseInt($(this).parents('.item').attr('data-id'));
    let obj = arr.find(e => {
      return e.pID === id;
    })
    // 更新对应的数据
    obj.number = oldShuju;
    // 还要覆盖回本地数据
    let jsonStr = JSON.stringify(arr);
    localStorage.setItem('shopCarDate', jsonStr);
    // 重新计算总数和总价
    numberTotal();
    $(this).parents('.item').find('.computed').text(obj.price * obj.number);
  });

  // 实现删除
  $('.item-list').on('click', '.item-del', function () {
    // 因为我们的删除的动作是在点击确定之后进行,点击确定是另外一个函数了,该函数里面的this已经不是移除按钮,我们可以在这里先保存一个this
    let _this = this;
    // 弹出一个确认框
    $('#dialog-confirm').dialog({
      resizable: false,
      height: 140,
      modal: true,
      buttons: {
        "确认": function () {
          $(this).dialog('close');
          // 把对应的商品移除
          // 把对应的结构移除
          // console.log(_this);
          // console.log(dialog)
          $(_this).parents('.item').remove();
          // 把本地数据移除
          // 我们现在需要根据id获取本地存储里面的数据
          let id = parseInt($(_this).parents('.item').attr('data-id'));
          // console.log(id)
          // // 把对应的id的数据读取出来
          // let obj = arr.find(e=>{
          //   return e.pID = id;
          // });
          // // console.log(obj);
          // // 把对应的id的数据从本地存储里面移除

          // let index = arr.indexOf(obj);
          // // console.log(index);

          // 在h5里面的数组新增了一个方法,获取满足条件的元素的索引
          let index = arr.findIndex((e) => {
            return e.pID = id;
          });
          // console.log(index)
          arr.splice(index, 1);
          // 把数据覆盖回本地
          let jsonStr = JSON.stringify(arr);
          localStorage.setItem('shopCarDate', jsonStr);
        },
        "取消": function () {
          $(this).dialog('close');
        }
      }
    })
  })
  //   let res = confirm('你确认要删除吗？');
  // console.log(res);

  // 弹出一个jqueryUI的确认框
  // $('.item-list').on('click', '.item-del', function () {
  //   $("#dialog-confirm").dialog({
  //     resizable: false,
  //     height: 140,
  //     modal: true,
  //     buttons: {
  //       "确认": function () {
  //         $(this).dialog("close");
  //         // 把对应的商品删除
  //       },
  //       "取消": function () {
  //         $(this).dialog("close");
  //       }
  //     }
  //   });
  // });
})