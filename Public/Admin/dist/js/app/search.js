define(["layer","getAjaxList"],function(e,n){$("#searchBtn").on("click",function(){var i=$.trim($("input[name=keyword]").val());return""==i||"undefined"==i?(e.msg("请输入你要查询的内容"),!1):void n(_APP+"/News/getSearchList",{keyword:i})})});