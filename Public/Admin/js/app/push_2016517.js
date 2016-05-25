/**
 * Created by Administrator on 2015/10/27.
 */
/* 推送 */

define(['jquery','socketIO'],function($,io){
    var uid = $('#uid').val(); //用户id
    var pushID = '';    //推送id
    var content = '富士达'; //推送内容
    var pushArrID = pushID.split(',');
    

    //发送给后端数据
    var data = {
        pushID : pushID,
        content : content
    }
    // 连接服务端
    var socket = io('http://'+document.domain+':2120');
    // 连接后登录
    socket.on('connect', function(){
        socket.emit('login', uid);
    });

    // 后端推送来在线数据时
    socket.on('update_online_count', function(online_stat){
        $('#online_box').html(online_stat);
    });

    // 后端推送来消息时
    //向单个用户推送
    if(pushArrID[0] == uid && pushArrID.length == 1){
        socket.on('new_msg', function(msg){
            if(msg != ''){
                $('#msg').html('收到新消息：'+msg);
            }


        });
    }
    //向所有用户推送
    if(pushID == ''){
        socket.on('new_msg', function(msg){
            if(msg != ''){
                $('#msg').html('收到新消息：'+msg).show();
            }


        });
    }
    //向多个用户推送
    if(pushArrID.length > 1){
        for(var i=0; i<pushArrID.length; i++){
            if(pushArrID[i] == uid){
                socket.on('new_msg', function(msg){
                    if(msg != ''){
                        $('#msg').html('收到新消息：'+msg).show();
                    }


                });
            }
        }
    }

   /*$('#send').on('click',function(){
      
       $.ajax({
            url: _APP+'/News/index',
            data:data,
            type:'POST',
           
            success: function (backData) {

                // 后端推送来消息时
                console.log(backData)
            }
        })
    })
   */
    
        
    /*$('#send_to_all').attr('href', 'http://'+document.domain+':2121/?type=publish&content=rrrr&to=2');
    
        $('.uid').html(uid);
        $('.domain').html(document.domain);*/
})