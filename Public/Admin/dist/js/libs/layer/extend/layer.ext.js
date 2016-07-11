/*! layer弹层组件拓展类 */

!function(){layer.use("skin/layer.ext.css",function(){layer.layui_layer_extendlayerextjs=!0});var e=layer.cache||{},t=function(t){return e.skin?" "+e.skin+" "+e.skin+"-"+t:""};layer.prompt=function(e,n){e=e||{},"function"==typeof e&&(n=e);var r,i=2==e.formType?'<textarea class="layui-layer-input">'+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}();return layer.open($.extend({btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:i,skin:"layui-layer-prompt"+t("prompt"),success:function(e){r=e.find(".layui-layer-input"),r.focus()},yes:function(t){var i=r.val();""===i?r.focus():i.length>(e.maxlength||500)?layer.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",r,{tips:1}):n&&n(i,t,r)}},e))},layer.tab=function(e){e=e||{};var n=e.tab||{};return layer.open($.extend({type:1,skin:"layui-layer-tab"+t("tab"),title:function(){var e=n.length,t=1,r="";if(e>0)for(r='<span class="layui-layer-tabnow">'+n[0].title+"</span>";e>t;t++)r+="<span>"+n[t].title+"</span>";return r}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=n.length,t=1,r="";if(e>0)for(r='<li class="layui-layer-tabli xubox_tab_layer">'+(n[0].content||"no content")+"</li>";e>t;t++)r+='<li class="layui-layer-tabli">'+(n[t].content||"no  content")+"</li>";return r}()+"</ul>",success:function(e){var t=e.find(".layui-layer-title").children(),n=e.find(".layui-layer-tabmain").children();t.on("mousedown",function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;var t=$(this),r=t.index();t.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),n.eq(r).show().siblings().hide()})}},e))},layer.photos=function(e,n,r){function i(e,t,n){var r=new Image;r.onload=function(){r.onload=null,t(r)},r.onerror=function(e){r.onload=null,n(e)},r.src=e}var s={};if(e=e||{},e.photos){var o=e.photos.constructor===Object,u=o?e.photos:{},a=u.data||[],f=u.start||0;if(s.imgIndex=f+1,o){if(0===a.length)return void layer.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var l=$(e.photos),c=l.find(e.img||"img");if(0===c.length)return;if(n||l.find(u.img||"img").each(function(t){var n=$(this);a.push({alt:n.attr("alt"),pid:n.attr("layer-pid"),src:n.attr("layer-src")||n.attr("src"),thumb:n.attr("src")}),n.on("click",function(){layer.photos($.extend(e,{photos:{start:t,data:a,tab:e.tab},full:e.full}),!0)})}),!n)return}s.imgprev=function(e){s.imgIndex--,s.imgIndex<1&&(s.imgIndex=a.length),s.tabimg(e)},s.imgnext=function(e){s.imgIndex++,s.imgIndex>a.length&&(s.imgIndex=1),s.tabimg(e)},s.keyup=function(e){if(!s.end){var t=e.keyCode;e.preventDefault(),37===t?s.imgprev(!0):39===t?s.imgnext(!0):27===t&&layer.close(s.index)}},s.tabimg=function(t){a.length<=1||(u.start=s.imgIndex-1,layer.close(s.index),layer.photos(e,!0,t))},s.event=function(){s.bigimg.hover(function(){s.imgsee.show()},function(){s.imgsee.hide()}),s.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),s.imgprev()}),s.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),s.imgnext()}),$(document).on("keyup",s.keyup)},s.loadi=layer.load(1,{shade:"shade"in e?!1:.9,scrollbar:!1}),i(a[f].src,function(n){layer.close(s.loadi),s.index=layer.open($.extend({type:1,area:function(){var t=[n.width,n.height],r=[$(window).width()-100,$(window).height()-100];return!e.full&&t[0]>r[0]&&(t[0]=r[0],t[1]=t[0]*r[1]/t[0]),[t[0]+"px",t[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,shift:5*Math.random()|0,skin:"layui-layer-photos"+t("photos"),content:'<div class="layui-layer-phimg"><img src="'+a[f].src+'" alt="'+(a[f].alt||"")+'" layer-pid="'+a[f].pid+'"><div class="layui-layer-imgsee">'+(a.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(r?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(a[f].alt||"")+"</a><em>"+s.imgIndex+"/"+a.length+"</em></span></div></div></div>",success:function(t,n){s.bigimg=t.find(".layui-layer-phimg"),s.imgsee=t.find(".layui-layer-imguide,.layui-layer-imgbar"),s.event(t),e.tab&&e.tab(a[f],t)},end:function(){s.end=!0,$(document).off("keyup",s.keyup)}},e))},function(){layer.close(s.loadi),layer.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;",{time:2e3},function(){a.length>1&&s.imgnext(!0)})})}}}();