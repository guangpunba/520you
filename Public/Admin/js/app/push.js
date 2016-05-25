/**
 * Created by Administrator on 2015/10/27.
 */
/* 推送 */

define(['jquery','socketIO'],function($,io){


    // 连接服务端
    var socket = io('http://'+document.domain+':2120');
    var uid = $('#uid').val(); //用户id
    // 连接后登录
    socket.on('connect', function(){
        socket.emit('login', uid);
    });
    // 后端推送来在线数据时
    socket.on('update_online_count', function(online_stat){
        $('#online_box').html(online_stat);
    });

    socket.on('new_msg', function(msg){
        if(msg != ''){
            $('#msgCounts').html(msg);
        }


    });
/*    var websocket = {
        connect : function(){
            var uid = $('#uid').val(); //用户id
            // 连接后登录
            socket.on('connect', function(){
                socket.emit('login', uid);
            });
        },
        online  : function(){
            // 后端推送来在线数据时
            socket.on('update_online_count', function(online_stat){
                $('#online_box').html(online_stat);
            });
        },
        show    : function(){
            socket.on('new_msg', function(msg){
                if(msg != ''){
                    $('#msgCounts').html(msg);
                }


            });
        }
    }
    return websocket;*/
    // 后端推送来消息时
    //向单个用户推送
    /*if(pushArrID[0] == uid && pushArrID.length == 1){
        socket.on('new_msg', function(msg){
            if(msg != ''){
                $('#msg').html('收到新消息：'+msg);
            }


        });
    }*/
    //向所有用户推送
    /*if(pushID == ''){
        socket.on('new_msg', function(msg){
            if(msg != ''){
                $('#msg').html('收到新消息：'+msg).show();
            }


        });
    }*/
    //向多个用户推送
    /*if(pushArrID.length > 1){
        for(var i=0; i<pushArrID.length; i++){
            if(pushArrID[i] == uid){
                socket.on('new_msg', function(msg){
                    if(msg != ''){
                        $('#msg').html('收到新消息：'+msg).show();
                    }


                });
            }
        }
    }*/


})