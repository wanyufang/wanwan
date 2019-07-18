$(()=>{
    let jsonStr = localStorage.getItem('shopCartData');
    let arr;
    if(jsonStr !== null) {
        arr = JSON.parse(jsonStr);
        console.log(arr);
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
          </div>`;
        });
        $(".item-list").html(html)
        $('.empty-tip').hide();
        $('.total-of').removeClass('hidden');
        $('.cart-header').removeClass('hidden');
    }

    function wanyufang() {
        let totalCount = 0;
        let totalMoney = 0;
        $(".item-list input[type=checkbox]:checked").each((i,e)=>{
            let id = parseInt($(e).parents('.item').attr('.data-id'));
            arr.forEach(e=>{
                if(id === e.pID) {
                    totalCount += e.number;
                    totalMoney += e.number * e.price;
                }
            })
        });
        $('.selected').text(totalCount);
        $('.total-money').text(totalMoney);
    }
    wanyufang();
})