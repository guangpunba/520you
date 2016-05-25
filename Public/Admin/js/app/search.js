/**
 * Created by Administrator on 2015/10/27.
 */
/* 添加账号模块 */

define(['layer','getAjaxList'],function(layer,getAjaxList){
    
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