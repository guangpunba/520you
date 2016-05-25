require(['jquery','layer','getAjaxList','amazeui','news','push'],function($,layer,getAjaxList){
    //加载编辑器
    var ue = $('#ueditor');
    if(ue.length > 0){
        require(['newueditor'],function(newueditor){
             newueditor();
        })
       
    }
    
    
    
    
    //加载layer样式表  
    layer.config({
        path: jsUrl+'/libs/layer/'

    });
    //显示列表下拉菜单
    $(document).on('click','.am-dropdown',function(){
  
        $(this).dropdown('open') 
    })
    
    
    
    
    //获取新闻列表
    getAjaxList(_APP+'/News/getNewsList');
    
    
    //查询
    $('#searchBtn').on('click',function(){
        var keyword = $.trim($('input[name=keyword]').val());
        if(keyword == '' || keyword == 'undefined'){
            
            layer.msg('请输入你要查询的内容');
            return false;
        }else{
            getAjaxList(_APP+'/News/getSearchList',{keyword:keyword});
            
        }
      
    })
    
     
    
    
   
   
   
})

    
