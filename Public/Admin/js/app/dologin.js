/**
 * Created by Administrator on 2015/10/27.
 */
/* 登录模块 */

define(['layer','cookie','base64'],function(layer){
    
    //加载layer样式表
    layer.config({
        path: jsUrl+'/libs/layer/'

    });
    
    //提交登录
    
    $('#submit_login').on('click',function(event){
        event.preventDefault();
       
        var $username = $.trim($('#username').val());
        var $psw = $.trim($('#password').val());
        //var $code = $.trim($('#verify').val());
        var data = {
            username : $username,
            psw : $psw
            //code : $code
        }
        var drag = $('#drag');
        var isCheck = drag.find('.handler').attr('data-check');
        if(isCheck != 'ok'){
            layer.alert('请滑动验证码进行验证', {icon:2,btn:false,title:false});
            return;
        }
        if($username == ''){
           
            layer.alert('请填写用户名', {icon:2,btn:false,title:false});
            return ;
        }
        if($psw == ''){
            layer.alert('请填写密码',{icon:1,btn:false,title:false});
            return;
        }
       /* if($code == ''){
            layer.alert('请填写验证码',{icon:1,btn:false,title:false});
            return;
        }*/
        
        $.post(_APP+"/Login/dologin",data,function(backdata){
        	
        	if(backdata.status == 1){//登录成功回调函数
                //layer.alert('登录成功',{icon:1,btn:false,title:false,time:1000});
                if($('#remember-me').is(':checked')){
                    var b = new Base64();
                    $.cookie('username',$username,{path:'/',expires:7});
                    $.cookie('psw',b.encode($psw),{path:'/',expires:7});
                }else{
                  
                    $.cookie('username',null,{path:'/'});
                    $.cookie('psw',null,{path:'/'});
                }
                setTimeout(function(){
                    location.href = _APP+'/Index/index';
                },100)
                
                    
                
            }else if(backdata.status == 2){
                layer.alert(backdata.info,{icon:2,btn:false,title:false});
                //$('#code').trigger('click');
                 
                //重置验证码
                $('#drag').drag({reset:true});
            }else{
                layer.alert(backdata.info,{icon:2,btn:false,title:false});
            }
        })
    
    }) 
    
    $(document).on('keyup',function(e){
        if(e.keyCode == 13){
            $('#submit_login').trigger('click')
        }
        
    })
    
    
})