function clickHandler(e,t,n){for(var r=0,i=e.length;r<i;r++)e[r].className="";n.className="focus";var s=n.getAttribute("tabSrc");for(var o=0,u=t.length;o<u;o++){var a=t[o],f=a.getAttribute("id");a.onclick=function(){this.style.zoom=1},f!=s?a.style.zIndex=1:a.style.zIndex=200}}function switchTab(e){var t=$G(e).children,n=t[0].children,r=t[1].children;for(var i=0,s=n.length;i<s;i++){var o=n[i];o.className==="focus"&&clickHandler(n,r,o),o.onclick=function(){clickHandler(n,r,this)}}}switchTab("helptab"),document.getElementById("version").innerHTML=parent.UE.version;