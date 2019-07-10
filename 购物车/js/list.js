$(()=>{
  // 开始写逻辑代码
  // 把从服务器获取的数据，展示给用户看
  // 遍历数组
  // console.log(phoneData); 

  let html = '';
  // e 是数组里面的每个元素
  phoneData.forEach(e=>{
    // 生成多个商品，展示在页面中
    // 拼接处一个满足html格式的字符串
    html += `<li class="goods-list-item">
    <a href="detail.html?id=${e.pID}">
      <div class="item-img">
        <img src="${e.imgSrc}" alt="">
      </div>
      <div class="item-title">
        ${e.name}
      </div>
      <div class="item-price">
        <span class="now">¥${e.price}</span>
      </div>
      <div class="sold">
        <span> 已售 <em>${e.percent}% </em></span>
        <div class="scroll">
          <div class="per" style="width:${e.percent}%;"></div>
        </div>
        <span>剩余<i>${e.left}</i>件</span>
      </div>
    </a>
    <a href="#" class="buy">
      查看详情
    </a>
  </li>`;
  })

  // 把拼接好的字符串，放到ul里面
  $('.goods-list > ul').html(html);
});