define(["ueditorConfig","ueditor"],function(){var e=function(){editor=UE.getEditor("ueditor",{toolbars:[["source","undo","redo","fontfamily","fontsize","forecolor","backcolor","indent","lineheight","|","justifyleft","justifyright","justifycenter","justifyjustify","horizontal","time","date"],["insertrow","insertcol","mergeright","mergedown","deleterow","deletecol","splittorows","splittocols","splittocells","deletecaption","inserttitle","mergecells","deletetable","|","attachment","simpleupload","insertimage"],["bold","italic","underline","fontborder","strikethrough","superscript","subscript","removeformat","formatmatch","autotypeset","blockquote","pasteplain","|","forecolor","backcolor","insertorderedlist","insertunorderedlist","selectall","cleardoc","link","unlink"]],initialFrameWidth:600,initialFrameHeight:300,wordCount:!1,elementPathEnabled:!1})},t=document.getElementById("ueditor");t&&e()});