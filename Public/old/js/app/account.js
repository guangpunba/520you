/**
 * Created by Administrator on 2015/10/27.
 */
/* 添加账号模块 */

define(['jquery','layer'],function($,layer){
    
    var sendAjax = function(url,formData,$btn){
        $.ajax({
            url : url, 
            method : 'POST',
            data : formData,
            success:function(backdata){
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
                   
                    $('.form_tips').remove();
                    layer.msg(redata, {
                      icon: 1,
                      time: 2000 
                    }, function(){
                      location.href = _APP + '/Admins/index';
                    });   
                }
            }
            
        })
    }
    
    //添加账号
    var addaccount = function (){
       
        $('#submitAdd').removeClass('am-disabled').on('click',function(event){
            event.preventDefault();
            var $btn = $(this);
            var formData = $('#form').serialize();
            $btn.button('loading');
            
            sendAjax(_APP + "/Admins/addAccount",formData,$btn);
            
        })
    }
    //编辑账号
    var editaccount = function (){
        $('#submitEdit').removeClass('am-disabled').on('click',function(event){
            event.preventDefault();
            var $btn = $(this);
            var formData = {
                username : $.trim($('#username').val()),
                password : $.trim($('#pwd').val()),
                repassword : $.trim($('#repwd').val()),
                id : $.trim($('#getid').val()),
                groupid : $.trim($('#group').val())
            };
            $btn.button('loading');
            sendAjax(_APP + "/Admins/editAccount",formData,$btn);
           
        })
    }
    //删除账号
    var delaccount = function(){
        $('.delbtn').on('click',function(){
            var id = $(this).parents('tr').attr('data-id');
            
            layer.confirm('确定要删除这个账号吗？', {
                title:false,
                btn: ['确定','取消'] //按钮
            }, function(){
                $.post(_APP + "/Admins/delAccount",{id:id},function(backdata){
                    if(backdata.status == 1){
                        layer.msg(backdata.info, {
                          icon: 1,
                          time: 2000 
                        }, function(){
                          location.href = location.href;
                        });   
                    }else{
                        layer.msg(backdata.info, {
                          icon: 2,
                          time: 2000 
                        }, function(){
                          location.href = location.href;
                        }); 
                    }
                })
            }, function(){
                layer.closeAll();
            });
            
            
            
            
            
            
        })
    }
    addaccount();
    editaccount();
    delaccount();
})