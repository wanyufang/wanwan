$(function() {
    // 给所有的删除的a标签注册点击事件
    $('#tbody').on('click','a:last-child',function(){
        // 点击后弹出确认删除框
        if(confirm('确认删除吗?')===false) {
            return;
        }
        // 获取对应的id
        let id = $(this).attr('data-id');
        let _this = this;
        // 发送ajax请求到服务器把对应的数据删除
        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:8080/deleteHeroById',
            data: {id},
            success: function(res){
                if(res.code === 200) {
                    // 提示用户 并把对应的行删除
                    alert(res.msg);
                    $(_this).parents('tr').remove();
                }
            }
        })
    })
})