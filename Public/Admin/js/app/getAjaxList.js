/**
 * Created by Administrator on 2015/10/27.
 */
/* 登录模块 */

define(['jquery'],function($){
    
    
    /*
    * 获取列表
    * url 请求地址
    * data 请求data
    */
    var getList = function(url,data){
       
        $.ajax({
            url: url,
            data:data,
            type:'POST',
            beforeSend: function(XMLHttpRequest){ 
               
                $('#listInfo').empty();
                $('#loading').show();
              
            },
            complete:function(XMLHttpRequest){
               
                $('#loading').hide();
            },
            success: function (backData) {
               
                $('#listInfo').html(backData);
            }
        })
   }
    
   return getList;
})