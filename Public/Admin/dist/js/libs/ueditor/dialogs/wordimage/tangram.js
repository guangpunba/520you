// Copyright (c) 2009, Baidu Inc. All rights reserved.
// 
// Licensed under the BSD License
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http:// tangram.baidu.com/license.html
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/json.js
 * author: erik
 * version: 1.1.0
 * date: 2009/12/02
 */

/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/json/parse.js
 * author: erik, berg
 * version: 1.2
 * date: 2009/11/23
 */

/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/json/decode.js
 * author: erik, cat
 * version: 1.3.4
 * date: 2010/12/23
 */

/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/json/stringify.js
 * author: erik
 * version: 1.1.0
 * date: 2010/01/11
 */

/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 * 
 * path: baidu/json/encode.js
 * author: erik, cat
 * version: 1.3.4
 * date: 2010/12/23
 */

var T,baidu=T=baidu||{version:"1.5.0"};baidu.guid="$BAIDU$",baidu.$$=window[baidu.guid]=window[baidu.guid]||{global:{}},baidu.flash=baidu.flash||{},baidu.dom=baidu.dom||{},baidu.dom.g=function(e){return e?"string"==typeof e||e instanceof String?document.getElementById(e):!e.nodeName||e.nodeType!=1&&e.nodeType!=9?null:e:null},baidu.g=baidu.G=baidu.dom.g,baidu.array=baidu.array||{},baidu.each=baidu.array.forEach=baidu.array.each=function(e,t,n){var r,i,s,o=e.length;if("function"==typeof t)for(s=0;s<o;s++){i=e[s],r=t.call(n||e,i,s);if(r===!1)break}return e},baidu.lang=baidu.lang||{},baidu.lang.isFunction=function(e){return"[object Function]"==Object.prototype.toString.call(e)},baidu.lang.isString=function(e){return"[object String]"==Object.prototype.toString.call(e)},baidu.isString=baidu.lang.isString,baidu.browser=baidu.browser||{},baidu.browser.opera=/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent)?+(RegExp.$6||RegExp.$2):undefined,baidu.dom.insertHTML=function(e,t,n){e=baidu.dom.g(e);var r,i;return e.insertAdjacentHTML&&!baidu.browser.opera?e.insertAdjacentHTML(t,n):(r=e.ownerDocument.createRange(),t=t.toUpperCase(),t=="AFTERBEGIN"||t=="BEFOREEND"?(r.selectNodeContents(e),r.collapse(t=="AFTERBEGIN")):(i=t=="BEFOREBEGIN",r[i?"setStartBefore":"setEndAfter"](e),r.collapse(i)),r.insertNode(r.createContextualFragment(n))),e},baidu.insertHTML=baidu.dom.insertHTML,baidu.swf=baidu.swf||{},baidu.swf.version=function(){var e=navigator;if(e.plugins&&e.mimeTypes.length){var t=e.plugins["Shockwave Flash"];if(t&&t.description)return t.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0"}else if(window.ActiveXObject&&!window.opera)for(var n=12;n>=2;n--)try{var r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+n);if(r){var i=r.GetVariable("$version");return i.replace(/WIN/g,"").replace(/,/g,".")}}catch(s){}}(),baidu.string=baidu.string||{},baidu.string.encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},baidu.encodeHTML=baidu.string.encodeHTML,baidu.swf.createHTML=function(e){e=e||{};var t=baidu.swf.version,n=e.ver||"6.0.0",r,i,s,o,u,a,f={},l=baidu.string.encodeHTML;for(o in e)f[o]=e[o];e=f;if(!t)return"";t=t.split("."),n=n.split(".");for(s=0;s<3;s++){r=parseInt(t[s],10),i=parseInt(n[s],10);if(i<r)break;if(i>r)return""}var c=e.vars,h=["classid","codebase","id","width","height","align"];e.align=e.align||"middle",e.classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",e.codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0",e.movie=e.url||"",delete e.vars,delete e.url;if("string"==typeof c)e.flashvars=c;else{var p=[];for(o in c)a=c[o],p.push(o+"="+encodeURIComponent(a));e.flashvars=p.join("&")}var d=["<object "];for(s=0,u=h.length;s<u;s++)a=h[s],d.push(" ",a,'="',l(e[a]),'"');d.push(">");var v={wmode:1,scale:1,quality:1,play:1,loop:1,menu:1,salign:1,bgcolor:1,base:1,allowscriptaccess:1,allownetworking:1,allowfullscreen:1,seamlesstabbing:1,devicefont:1,swliveconnect:1,flashvars:1,movie:1};for(o in e)a=e[o],o=o.toLowerCase(),v[o]&&(a||a===!1||a===0)&&d.push('<param name="'+o+'" value="'+l(a)+'" />');e.src=e.movie,e.name=e.id,delete e.id,delete e.movie,delete e.classid,delete e.codebase,e.type="application/x-shockwave-flash",e.pluginspage="http://www.macromedia.com/go/getflashplayer",d.push("<embed");var m;for(o in e){a=e[o];if(a||a===!1||a===0){if((new RegExp("^salign$","i")).test(o)){m=a;continue}d.push(" ",o,'="',l(a),'"')}}return m&&d.push(' salign="',l(m),'"'),d.push("></embed></object>"),d.join("")},baidu.swf.create=function(e,t){e=e||{};var n=baidu.swf.createHTML(e)||e.errorMessage||"";t&&"string"==typeof t&&(t=document.getElementById(t)),baidu.dom.insertHTML(t||document.body,"beforeEnd",n)},baidu.browser.ie=baidu.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:undefined,baidu.array.remove=function(e,t){var n=e.length;while(n--)n in e&&e[n]===t&&e.splice(n,1);return e},baidu.lang.isArray=function(e){return"[object Array]"==Object.prototype.toString.call(e)},baidu.lang.toArray=function(e){if(e===null||e===undefined)return[];if(baidu.lang.isArray(e))return e;if(typeof e.length!="number"||typeof e=="string"||baidu.lang.isFunction(e))return[e];if(e.item){var t=e.length,n=new Array(t);while(t--)n[t]=e[t];return n}return[].slice.call(e)},baidu.swf.getMovie=function(e){var t=document[e],n;return baidu.browser.ie==9?t&&t.length?(n=baidu.array.remove(baidu.lang.toArray(t),function(e){return e.tagName.toLowerCase()!="embed"})).length==1?n[0]:n:t:t||window[e]},baidu.flash._Base=function(){function t(){return e+Math.floor(Math.random()*2147483648).toString(36)}function n(e){return typeof e!="undefined"&&typeof e.flashInit!="undefined"&&e.flashInit()?!0:!1}function r(e,t){var n=null;e=e.reverse(),baidu.each(e,function(e){n=t.call(e.fnName,e.params),e.callBack(n)})}function i(e){var n="";if(baidu.lang.isFunction(e))return n=t(),window[n]=function(){e.apply(window,arguments)},n;if(baidu.lang.isString)return e}function s(e){e.id||(e.id=t());var n=e.container||"";return delete e.container,baidu.swf.create(e,n),baidu.swf.getMovie(e.id)}var e="bd__flash__";return function(e,t){function p(){n(f)&&(clearInterval(h),h=null,d(),l=!0)}function d(){r(c,f),c=[]}var o=this,u=typeof e.autoRender!="undefined"?e.autoRender:!0,a=e.createOptions||{},f=null,l=!1,c=[],h=null,t=t||[];o.render=function(){f=s(a),t.length>0&&baidu.each(t,function(n,r){t[r]=i(e[n]||new Function)}),o.call("setJSFuncName",[t])},o.isReady=function(){return l},o.call=function(e,t,n){if(!e)return null;n=n||new Function;var r=null;l?(r=f.call(e,t),n(r)):(c.push({fnName:e,params:t,callBack:n}),!h&&(h=setInterval(p,200)))},o.createFunName=function(e){return i(e)},u&&o.render()}}(),baidu.flash.imageUploader=baidu.flash.imageUploader||function(e){var t=this,e=e||{},n=new baidu.flash._Base(e,["selectFileCallback","exceedFileCallback","deleteFileCallback","startUploadCallback","uploadCompleteCallback","uploadErrorCallback","allCompleteCallback","changeFlashHeight"]);t.upload=function(){n.call("upload")},t.pause=function(){n.call("pause")},t.addCustomizedParams=function(e,t){n.call("addCustomizedParams",[e,t])}},baidu.object=baidu.object||{},baidu.extend=baidu.object.extend=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},baidu.flash.fileUploader=baidu.flash.fileUploader||function(e){var t=this,e=e||{};e.createOptions=baidu.extend({wmod:"transparent"},e.createOptions||{});var n=new baidu.flash._Base(e,["selectFile","exceedMaxSize","deleteFile","uploadStart","uploadComplete","uploadError","uploadProgress"]);n.call("setMaxNum",e.maxNum?[e.maxNum]:[1]),t.setHandCursor=function(e){n.call("setHandCursor",[e||!1])},t.setMSFunName=function(e){n.call("setMSFunName",[n.createFunName(e)])},t.upload=function(e,t,r,i){if(typeof e!="string"||typeof t!="string")return null;typeof i=="undefined"&&(i=-1),n.call("upload",[e,t,r,i])},t.cancel=function(e){typeof e=="undefined"&&(e=-1),n.call("cancel",[e])},t.deleteFile=function(e,t){var r=function(e){t&&t(e)};if(typeof e=="undefined"){n.call("deleteFilesAll",[],r);return}typeof e=="Number"&&(e=[e]),e.sort(function(e,t){return t-e}),baidu.each(e,function(e){n.call("deleteFileBy",e,r)})},t.addFileType=function(e){var e=e||[[]];e instanceof Array?e=[e]:e=[[e]],n.call("addFileTypes",e)},t.setFileType=function(e){var e=e||[[]];e instanceof Array?e=[e]:e=[[e]],n.call("setFileTypes",e)},t.setMaxNum=function(e){n.call("setMaxNum",[e])},t.setMaxSize=function(e){n.call("setMaxSize",[e])},t.getFileAll=function(e){n.call("getFileAll",[],e)},t.getFileByIndex=function(e,t){n.call("getFileByIndex",[],t)},t.getStatusByIndex=function(e,t){n.call("getStatusByIndex",[],t)}},baidu.sio=baidu.sio||{},baidu.sio._createScriptTag=function(e,t,n){e.setAttribute("type","text/javascript"),n&&e.setAttribute("charset",n),e.setAttribute("src",t),document.getElementsByTagName("head")[0].appendChild(e)},baidu.sio._removeScriptTag=function(e){if(e.clearAttributes)e.clearAttributes();else for(var t in e)e.hasOwnProperty(t)&&delete e[t];e&&e.parentNode&&e.parentNode.removeChild(e),e=null},baidu.sio.callByBrowser=function(e,t,n){var r=document.createElement("SCRIPT"),i=0,s=n||{},o=s.charset,u=t||function(){},a=s.timeOut||0,f;r.onload=r.onreadystatechange=function(){if(i)return;var e=r.readyState;if("undefined"==typeof e||e=="loaded"||e=="complete"){i=1;try{u(),clearTimeout(f)}finally{r.onload=r.onreadystatechange=null,baidu.sio._removeScriptTag(r)}}},a&&(f=setTimeout(function(){r.onload=r.onreadystatechange=null,baidu.sio._removeScriptTag(r),s.onfailure&&s.onfailure()},a)),baidu.sio._createScriptTag(r,e,o)},baidu.sio.callByServer=function(e,t,n){function d(e){return function(){try{e?u.onfailure&&u.onfailure():(t.apply(window,arguments),clearTimeout(c)),window[s]=null,delete window[s]}catch(n){}finally{baidu.sio._removeScriptTag(r)}}}var r=document.createElement("SCRIPT"),i="bd__cbs__",s,o,u=n||{},a=u.charset,f=u.queryField||"callback",l=u.timeOut||0,c,h=new RegExp("(\\?|&)"+f+"=([^&]*)"),p;if(baidu.lang.isFunction(t))s=i+Math.floor(Math.random()*2147483648).toString(36),window[s]=d(0);else if(baidu.lang.isString(t))s=t;else if(p=h.exec(e))s=p[2];l&&(c=setTimeout(d(1),l)),e=e.replace(h,"$1"+f+"="+s),e.search(h)<0&&(e+=(e.indexOf("?")<0?"?":"&")+f+"="+s),baidu.sio._createScriptTag(r,e,a)},baidu.sio.log=function(e){var t=new Image,n="tangram_sio_log_"+Math.floor(Math.random()*2147483648).toString(36);window[n]=t,t.onload=t.onerror=t.onabort=function(){t.onload=t.onerror=t.onabort=null,window[n]=null,t=null},t.src=e},baidu.json=baidu.json||{},baidu.json.parse=function(e){return(new Function("return ("+e+")"))()},baidu.json.decode=baidu.json.parse,baidu.json.stringify=function(){function t(t){return/["\\\x00-\x1f]/.test(t)&&(t=t.replace(/["\\\x00-\x1f]/g,function(t){var n=e[t];return n?n:(n=t.charCodeAt(),"\\u00"+Math.floor(n/16).toString(16)+(n%16).toString(16))})),'"'+t+'"'}function n(e){var t=["["],n=e.length,r,i,s;for(i=0;i<n;i++){s=e[i];switch(typeof s){case"undefined":case"function":case"unknown":break;default:r&&t.push(","),t.push(baidu.json.stringify(s)),r=1}}return t.push("]"),t.join("")}function r(e){return e<10?"0"+e:e}function i(e){return'"'+e.getFullYear()+"-"+r(e.getMonth()+1)+"-"+r(e.getDate())+"T"+r(e.getHours())+":"+r(e.getMinutes())+":"+r(e.getSeconds())+'"'}var e={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case"undefined":return"undefined";case"number":return isFinite(e)?String(e):"null";case"string":return t(e);case"boolean":return String(e);default:if(e===null)return"null";if(e instanceof Array)return n(e);if(e instanceof Date)return i(e);var r=["{"],s=baidu.json.stringify,o,u;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){u=e[a];switch(typeof u){case"undefined":case"unknown":case"function":break;default:o&&r.push(","),o=1,r.push(s(a)+":"+s(u))}}return r.push("}"),r.join("")}}}(),baidu.json.encode=baidu.json.stringify;