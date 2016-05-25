/*
管理员消息模块
*/
require(['layer','common','loadueditor'],function(layer){

    //加载layer样式表  
    layer.config({
        path: jsUrl+'/libs/layer/'

    });
    
    
    
    $('#submitAdd').removeClass('am-disabled').on('click',function(event){
            event.preventDefault();
            var $btn = $(this);
            var formData = $('#form').serializeArray();
            var pushobj = $('#pushobj').val();
            $btn.button('loading');
          
            //1.添加消息请求
            //2.推送请求
            $.when(
                $.ajax({
                    url :_APP + "/AdminsMsg/addMsg",
                    method : 'POST',
                    data : formData
                })
            )
            .then(function(backdata){
                var redata  = backdata.info;
                if(backdata.status == 0){
                    var field = redata.field;
                    var info  = redata.tipsinfo;
                    $('.form_tips').remove();
                    $('#'+field+'').focus();
                    $('#'+field+'').after("<div class='form_tips am-text-sm am-text-danger'>"+ info +"</div>");
                    setTimeout(function(){
                        $btn.button('reset');
                    }, 1000);
                }else{
                    //推送消息
                    return $.ajax({
                                url : _APP + "/AdminsMsg/pushMsg",
                                method : 'POST',
                                data : {pushobj:pushobj}

                           })
                }
            },function(){
                    layer.msg('添加消息失败');
            })
            .then(
              function(backdata){
                 //推送成功跳转列表页
                 if(backdata.indexOf('ok') > 0){
                    $('.form_tips').remove();
                    layer.msg('推送消息成功', {
                       icon: 1,
                       time: 2000
                    },function(){
                       location.href = _APP + '/AdminsMsg/index';
                    });
                    
                 }
               },
              function(){
                 layer.msg('推送消息失败');
              }
            )
        
    })
})

