function clickHandler(e,t,n){for(var r=0,i=e.length;r<i;r++)e[r].className="";n.className="focus";var s=n.getAttribute("tabSrc");for(var o=0,u=t.length;o<u;o++){var a=t[o],f=a.getAttribute("id");f!=s?a.style.zIndex=1:a.style.zIndex=200}}function switchTab(e){var t=$G(e).children,n=t[0].children,r=t[1].children;for(var i=0,s=n.length;i<s;i++){var o=n[i];o.className==="focus"&&clickHandler(n,r,o),o.onclick=function(){clickHandler(n,r,this)}}}function getMatchCase(e){return $G(e).checked?!0:!1}editor.firstForSR=0,editor.currentRangeForSR=null,$G("searchtab").onmousedown=function(){$G("search-msg").innerHTML="",$G("replace-msg").innerHTML=""},$G("nextFindBtn").onclick=function(e,t,n){var r=$G("findtxt").value,i;if(!r)return!1;i={searchStr:r,dir:1,casesensitive:getMatchCase("matchCase")};if(!frCommond(i)){var s=editor.selection.getRange().createBookmark();$G("search-msg").innerHTML=lang.getEnd,editor.selection.getRange().moveToBookmark(s).select()}},$G("nextReplaceBtn").onclick=function(e,t,n){var r=$G("findtxt1").value,i;if(!r)return!1;i={searchStr:r,dir:1,casesensitive:getMatchCase("matchCase1")},frCommond(i)},$G("preFindBtn").onclick=function(e,t,n){var r=$G("findtxt").value,i;if(!r)return!1;i={searchStr:r,dir:-1,casesensitive:getMatchCase("matchCase")},frCommond(i)||($G("search-msg").innerHTML=lang.getStart)},$G("preReplaceBtn").onclick=function(e,t,n){var r=$G("findtxt1").value,i;if(!r)return!1;i={searchStr:r,dir:-1,casesensitive:getMatchCase("matchCase1")},frCommond(i)},$G("repalceBtn").onclick=function(){var e=$G("findtxt1").value.replace(/^\s|\s$/g,""),t,n=$G("replacetxt").value.replace(/^\s|\s$/g,"");if(!e)return!1;if(e==n||!getMatchCase("matchCase1")&&e.toLowerCase()==n.toLowerCase())return!1;t={searchStr:e,dir:1,casesensitive:getMatchCase("matchCase1"),replaceStr:n},frCommond(t)},$G("repalceAllBtn").onclick=function(){var e=$G("findtxt1").value.replace(/^\s|\s$/g,""),t,n=$G("replacetxt").value.replace(/^\s|\s$/g,"");if(!e)return!1;if(e==n||!getMatchCase("matchCase1")&&e.toLowerCase()==n.toLowerCase())return!1;t={searchStr:e,casesensitive:getMatchCase("matchCase1"),replaceStr:n,all:!0};var r=frCommond(t);r&&($G("replace-msg").innerHTML=lang.countMsg.replace("{#count}",r))};var frCommond=function(e){return editor.execCommand("searchreplace",e)};switchTab("searchtab");