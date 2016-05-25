/**
 * Created by Administrator on 2015/10/27.
 */
/* 新闻新增，修改，删除 */

define(['jquery','layer'],function(jquery,layer){
   //ajax请求方法 
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
                      //location.href = _APP + '/News/index';
                    });   
                }
            }
            
        })
    }
    //添加新闻
    var addnews = function (){
       
        $('#submitAdd').removeClass('am-disabled').on('click',function(event){
            event.preventDefault();
            var $btn = $(this);
            var formData = $('#form').serialize();
            $btn.button('loading');
            
            
            
            //
            $.when(
                $.ajax({
                    url :_APP + "/News/addNew",
                    method : 'POST',
                    data : formData,
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

                        $('.form_tips').remove();
                        layer.msg(redata, {
                          icon: 1,
                          time: 2000 
                        }, function(){
                            return $.ajax({
                                url : _APP + "/News/pushMsg",
                                method : 'POST'

                            })

                        });   
                    }
          

            })
            .then(
              function(backdata){
                 setTimeout(function(){
                      console.log(backdata)
                 },5000)
                  
               //location.href = _APP + '/News/index';
              },
              function(){
                console.log('第二个请求错误')
              }
            )
            //
            
            
            
            //sendAjax(_APP + "/News/addNew",formData,$btn);
            
        })
    }
    //编辑新闻
    var editnews = function(){
        $('#submitEdit').removeClass('am-disabled').on('click',function(event){
            event.preventDefault();
            var $btn = $(this);
            var formData = $('#form').serializeArray();
            var id = $('#getid').val();
            $btn.button('loading');
           
            formData.push({name:'id',value:id})
            //console.log(formData)
            sendAjax(_APP + "/News/editNews",formData,$btn);
            
        })
        
    }
    
    //删除新闻
    var delnews = function(){
      
            
       $(document).on('click','.delbtn',function(){
            var id = $(this).parents('tr').attr('data-id');
            layer.confirm('确定要删除这条新闻吗？', {
                title:false,
                btn: ['确定','取消'] //按钮
            }, function(){
                $.post(_APP + "/News/delNew",{id:id},function(backdata){
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
    delnews();
    editnews();
    addnews();
})