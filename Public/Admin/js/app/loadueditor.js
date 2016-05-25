/**
 * Created by Administrator on 2015/10/27.
 */
/* 实例化编辑器 */

define(['ueditorConfig','ueditor'],function(){
    
    var newue = function(){
                  
            <!-- 实例化编辑器 -->
            editor =  UE.getEditor('ueditor',{
                toolbars: [
                    [ 'source', 'undo',             'redo','fontfamily','fontsize','forecolor','backcolor','indent','lineheight','|','justifyleft','justifyright','justifycenter','justifyjustify','horizontal','time','date'],
                    ['insertrow','insertcol','mergeright','mergedown','deleterow','deletecol','splittorows','splittocols','splittocells','deletecaption','inserttitle','mergecells','deletetable','|','attachment','simpleupload','insertimage'],
                    ['bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc','link','unlink']
                ],
                initialFrameWidth:600, //初始化宽度
                initialFrameHeight:300, //初始化高度
                wordCount:false,  //关闭字数统计  
                elementPathEnabled :false //关闭路径
            }); 

        } 

    var ue = document.getElementById('ueditor');
    if(ue){
        newue();
       
    }      
   //ueObj.newue()
   //console.log(editor)
  // return newue;
})