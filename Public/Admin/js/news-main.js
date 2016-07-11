/*
* 新闻模块
*/

var path = document.location.pathname; //获取url目录部分
if(path.indexOf('index') > 0){
    require(['getAjaxList','search'],function(getAjaxList){
        //获取新闻列表
        getAjaxList(_APP+'/News/getNewsList');
    })
}

require(['common','news','loadueditor'],function(){
       
        //显示列表下拉菜单
        $(document).on('click','.am-dropdown',function(){

            $(this).dropdown('open') 
        })
       // require(['loadueditor'])
      

})



    
