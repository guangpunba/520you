/**
 * Created by Administrator on 2015/10/27.
 */
/* 登录模块 */

define(['cookie','base64'],function(){
    
    //获取用户名和密码
    function getCookie(){
        var b = new Base64();  
        var username = $.cookie('username');
        var psw = $.cookie('psw');
        if(username != null || username != undefined){
            $('#remember-me').attr('checked',true);
            $('#username').val(username);
            $('#password').val(b.decode(psw));
            
            
        }
        
    } 
    

    return getCookie;
    
})