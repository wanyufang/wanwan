$(() => {
    let id = location.search.substring(4);
    console.log(location);

    let obj = phoneData.find(function (e, i) {
        return e.pID == id;
    });
    $('.sku-name').text(obj.name);
    $('.summary-price em').text('￥' + obj.price);
    $('.preview-img>img').text('src', obj.imgSrc);

    let cN = $('.choose-number');
    let aB = $('.add');
    let rB = $('.reduce ');

    aB.on('click', function () {
        let old = parseInt(cN.val());
        old++;
        if (old > 1) {
            rB.removeClass('disabled');
        }
        cN.val(old);
    });

    rB.on('click', function () {
        let old = parseInt(cN.val());
        if (old === 1) {
            return;
        }
        old--;
        if (old === 1) {
            rB.addClass('disabled')
        }
        cN.val(old);
    })
});