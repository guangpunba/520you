/*! WebUploader 0.1.2 */

(function(e,t){var n={},r=function(e,t){var n,r,i;if(typeof e=="string")return o(e);n=[];for(r=e.length,i=0;i<r;i++)n.push(o(e[i]));return t.apply(null,n)},i=function(e,t,n){arguments.length===2&&(n=t,t=null),r(t||[],function(){s(e,n,arguments)})},s=function(e,t,i){var s={exports:t},o;typeof t=="function"&&(i.length||(i=[r,s.exports,s]),o=t.apply(null,i),o!==undefined&&(s.exports=o)),n[e]=s.exports},o=function(t){var r=n[t]||e[t];if(!r)throw new Error("`"+t+"` is undefined");return r},u=function(e){var t,r,i,s,o,u;u=function(e){return e&&e.charAt(0).toUpperCase()+e.substr(1)};for(t in n){r=e;if(!n.hasOwnProperty(t))continue;i=t.split("/"),o=u(i.pop());while(s=u(i.shift()))r[s]=r[s]||{},r=r[s];r[o]=n[t]}},a=t(e,i,r),f;u(a),typeof module=="object"&&typeof module.exports=="object"?module.exports=a:typeof define=="function"&&define.amd?define([],a):(f=e.WebUploader,e.WebUploader=a,e.WebUploader.noConflict=function(){e.WebUploader=f})})(this,function(e,t,n){return t("dollar-third",[],function(){return e.jQuery||e.Zepto}),t("dollar",["dollar-third"],function(e){return e}),t("promise-third",["dollar"],function(e){return{Deferred:e.Deferred,when:e.when,isPromise:function(e){return e&&typeof e.then=="function"}}}),t("promise",["promise-third"],function(e){return e}),t("base",["dollar","promise"],function(t,n){function s(e){return function(){return i.apply(e,arguments)}}function o(e,t){return function(){return e.apply(t,arguments)}}function u(e){var t;return Object.create?Object.create(e):(t=function(){},t.prototype=e,new t)}var r=function(){},i=Function.call;return{version:"0.1.2",$:t,Deferred:n.Deferred,isPromise:n.isPromise,when:n.when,browser:function(e){var t={},n=e.match(/WebKit\/([\d.]+)/),r=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),i=e.match(/MSIE\s([\d\.]+)/)||e.match(/(?:trident)(?:.*rv:([\w.]+))?/i),s=e.match(/Firefox\/([\d.]+)/),o=e.match(/Safari\/([\d.]+)/),u=e.match(/OPR\/([\d.]+)/);return n&&(t.webkit=parseFloat(n[1])),r&&(t.chrome=parseFloat(r[1])),i&&(t.ie=parseFloat(i[1])),s&&(t.firefox=parseFloat(s[1])),o&&(t.safari=parseFloat(o[1])),u&&(t.opera=parseFloat(u[1])),t}(navigator.userAgent),os:function(e){var t={},n=e.match(/(?:Android);?[\s\/]+([\d.]+)?/),r=e.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);return n&&(t.android=parseFloat(n[1])),r&&(t.ios=parseFloat(r[1].replace(/_/g,"."))),t}(navigator.userAgent),inherits:function(e,n,r){var i;return typeof n=="function"?(i=n,n=null):n&&n.hasOwnProperty("constructor")?i=n.constructor:i=function(){return e.apply(this,arguments)},t.extend(!0,i,e,r||{}),i.__super__=e.prototype,i.prototype=u(e.prototype),n&&t.extend(!0,i.prototype,n),i},noop:r,bindFn:o,log:function(){return e.console?o(console.log,console):r}(),nextTick:function(){return function(e){setTimeout(e,1)}}(),slice:s([].slice),guid:function(){var e=0;return function(t){var n=(+(new Date)).toString(32),r=0;for(;r<5;r++)n+=Math.floor(Math.random()*65535).toString(32);return(t||"wu_")+n+(e++).toString(32)}}(),formatSize:function(e,t,n){var r;n=n||["B","K","M","G","TB"];while((r=n.shift())&&e>1024)e/=1024;return(r==="B"?e:e.toFixed(t||2))+r}}}),t("mediator",["base"],function(e){function s(e,n,r,i){return t.grep(e,function(e){return e&&(!n||e.e===n)&&(!r||e.cb===r||e.cb._cb===r)&&(!i||e.ctx===i)})}function o(e,n,i){t.each((e||"").split(r),function(e,t){i(t,n)})}function u(e,t){var n=!1,r=-1,i=e.length,s;while(++r<i){s=e[r];if(s.cb.apply(s.ctx2,t)===!1){n=!0;break}}return!n}var t=e.$,n=[].slice,r=/\s+/,i;return i={on:function(e,t,n){var r=this,i;return t?(i=this._events||(this._events=[]),o(e,t,function(e,t){var s={e:e};s.cb=t,s.ctx=n,s.ctx2=n||r,s.id=i.length,i.push(s)}),this):this},once:function(e,t,n){var r=this;return t?(o(e,t,function(e,t){var i=function(){return r.off(e,i),t.apply(n||r,arguments)};i._cb=t,r.on(e,i,n)}),r):r},off:function(e,n,r){var i=this._events;return i?!e&&!n&&!r?(this._events=[],this):(o(e,n,function(e,n){t.each(s(i,e,n,r),function(){delete i[this.id]})}),this):this},trigger:function(e){var t,r,i;return!this._events||!e?this:(t=n.call(arguments,1),r=s(this._events,e),i=s(this._events,"all"),u(r,t)&&u(i,arguments))}},t.extend({installTo:function(e){return t.extend(e,i)}},i)}),t("uploader",["base","mediator"],function(e,t){function r(e){this.options=n.extend(!0,{},r.options,e),this._init(this.options)}var n=e.$;return r.options={},t.installTo(r.prototype),n.each({upload:"start-upload",stop:"stop-upload",getFile:"get-file",getFiles:"get-files",addFile:"add-file",addFiles:"add-file",sort:"sort-files",removeFile:"remove-file",skipFile:"skip-file",retry:"retry",isInProgress:"is-in-progress",makeThumb:"make-thumb",getDimension:"get-dimension",addButton:"add-btn",getRuntimeType:"get-runtime-type",refresh:"refresh",disable:"disable",enable:"enable",reset:"reset"},function(e,t){r.prototype[e]=function(){return this.request(t,arguments)}}),n.extend(r.prototype,{state:"pending",_init:function(e){var t=this;t.request("init",e,function(){t.state="ready",t.trigger("ready")})},option:function(e,t){var r=this.options;if(!(arguments.length>1))return e?r[e]:r;n.isPlainObject(t)&&n.isPlainObject(r[e])?n.extend(r[e],t):r[e]=t},getStats:function(){var e=this.request("get-stats");return{successNum:e.numOfSuccess,cancelNum:e.numOfCancel,invalidNum:e.numOfInvalid,uploadFailNum:e.numOfUploadFailed,queueNum:e.numOfQueue}},trigger:function(e){var r=[].slice.call(arguments,1),i=this.options,s="on"+e.substring(0,1).toUpperCase()+e.substring(1);return t.trigger.apply(this,arguments)===!1||n.isFunction(i[s])&&i[s].apply(this,r)===!1||n.isFunction(this[s])&&this[s].apply(this,r)===!1||t.trigger.apply(t,[this,e].concat(r))===!1?!1:!0},request:e.noop}),e.create=r.create=function(e){return new r(e)},e.Uploader=r,r}),t("runtime/runtime",["base","mediator"],function(e,t){function s(t){this.options=n.extend({container:document.body},t),this.uid=e.guid("rt_")}var n=e.$,r={},i=function(e){for(var t in e)if(e.hasOwnProperty(t))return t;return null};return n.extend(s.prototype,{getContainer:function(){var e=this.options,t,r;return this._container?this._container:(t=n(e.container||document.body),r=n(document.createElement("div")),r.attr("id","rt_"+this.uid),r.css({position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),t.append(r),t.addClass("webuploader-container"),this._container=r,r)},init:e.noop,exec:e.noop,destroy:function(){this._container&&this._container.parentNode.removeChild(this.__container),this.off()}}),s.orders="html5,flash",s.addRuntime=function(e,t){r[e]=t},s.hasRuntime=function(e){return e?!!r[e]:!!i(r)},s.create=function(e,t){var o,u;t=t||s.orders,n.each(t.split(/\s*,\s*/g),function(){if(r[this])return o=this,!1}),o=o||i(r);if(!o)throw new Error("Runtime Error");return u=new r[o](e),u},t.installTo(s.prototype),s}),t("runtime/client",["base","mediator","runtime/runtime"],function(e,t,n){function i(t,i){var s=e.Deferred(),o;this.uid=e.guid("client_"),this.runtimeReady=function(e){return s.done(e)},this.connectRuntime=function(t,u){if(o)throw new Error("already connected!");return s.done(u),typeof t=="string"&&r.get(t)&&(o=r.get(t)),o=o||r.get(null,i),o?(e.$.extend(o.options,t),o.__promise.then(s.resolve),o.__client++):(o=n.create(t,t.runtimeOrder),o.__promise=s.promise(),o.once("ready",s.resolve),o.init(),r.add(o),o.__client=1),i&&(o.__standalone=i),o},this.getRuntime=function(){return o},this.disconnectRuntime=function(){if(!o)return;o.__client--,o.__client<=0&&(r.remove(o),delete o.__promise,o.destroy()),o=null},this.exec=function(){if(!o)return;var n=e.slice(arguments);return t&&n.unshift(t),o.exec.apply(this,n)},this.getRuid=function(){return o&&o.uid},this.destroy=function(e){return function(){e&&e.apply(this,arguments),this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()}}(this.destroy)}var r;return r=function(){var e={};return{add:function(t){e[t.uid]=t},get:function(t,n){var r;if(t)return e[t];for(r in e){if(n&&e[r].__standalone)continue;return e[r]}return null},remove:function(t){delete e[t.uid]}}}(),t.installTo(i.prototype),i}),t("lib/blob",["base","runtime/client"],function(e,t){function n(e,n){var r=this;r.source=n,r.ruid=e,t.call(r,"Blob"),this.uid=n.uid||this.uid,this.type=n.type||"",this.size=n.size||0,e&&r.connectRuntime(e)}return e.inherits(t,{constructor:n,slice:function(e,t){return this.exec("slice",e,t)},getSource:function(){return this.source}}),n}),t("lib/file",["base","lib/blob"],function(e,t){function i(e,i){var s;t.apply(this,arguments),this.name=i.name||"untitled"+n++,s=r.exec(i.name)?RegExp.$1.toLowerCase():"",!s&&this.type&&(s=/\/(jpg|jpeg|png|gif|bmp)$/i.exec(this.type)?RegExp.$1.toLowerCase():"",this.name+="."+s),!this.type&&~"jpg,jpeg,png,gif,bmp".indexOf(s)&&(this.type="image/"+(s==="jpg"?"jpeg":s)),this.ext=s,this.lastModifiedDate=i.lastModifiedDate||(new Date).toLocaleString()}var n=1,r=/\.([^.]+)$/;return e.inherits(t,i)}),t("lib/filepicker",["base","runtime/client","lib/file"],function(t,n,r){function s(e){e=this.options=i.extend({},s.options,e),e.container=i(e.id);if(!e.container.length)throw new Error("按钮指定错误");e.innerHTML=e.innerHTML||e.label||e.container.html()||"",e.button=i(e.button||document.createElement("div")),e.button.html(e.innerHTML),e.container.html(e.button),n.call(this,"FilePicker",!0)}var i=t.$;return s.options={button:null,container:null,label:null,innerHTML:null,multiple:!0,accept:null,name:"file"},t.inherits(n,{constructor:s,init:function(){var t=this,n=t.options,s=n.button;s.addClass("webuploader-pick"),t.on("all",function(e){var o;switch(e){case"mouseenter":s.addClass("webuploader-pick-hover");break;case"mouseleave":s.removeClass("webuploader-pick-hover");break;case"change":o=t.exec("getFiles"),t.trigger("select",i.map(o,function(e){return e=new r(t.getRuid(),e),e._refer=n.container,e}),n.container)}}),t.connectRuntime(n,function(){t.refresh(),t.exec("init",n),t.trigger("ready")}),i(e).on("resize",function(){t.refresh()})},refresh:function(){var e=this.getRuntime().getContainer(),t=this.options.button,n=t.outerWidth?t.outerWidth():t.width(),r=t.outerHeight?t.outerHeight():t.height(),i=t.offset();n&&r&&e.css({bottom:"auto",right:"auto",width:n+"px",height:r+"px"}).offset(i)},enable:function(){var e=this.options.button;e.removeClass("webuploader-pick-disable"),this.refresh()},disable:function(){var e=this.options.button;this.getRuntime().getContainer().css({top:"-99999px"}),e.addClass("webuploader-pick-disable")},destroy:function(){this.runtime&&(this.exec("destroy"),this.disconnectRuntime())}}),s}),t("widgets/widget",["base","uploader"],function(e,t){function o(e){if(!e)return!1;var t=e.length,r=n.type(e);return e.nodeType===1&&t?!0:r==="array"||r!=="function"&&r!=="string"&&(t===0||typeof t=="number"&&t>0&&t-1 in e)}function u(e){this.owner=e,this.options=e.options}var n=e.$,r=t.prototype._init,i={},s=[];return n.extend(u.prototype,{init:e.noop,invoke:function(e,t){var r=this.responseMap;return!!r&&e in r&&r[e]in this&&!!n.isFunction(this[r[e]])?this[r[e]].apply(this,t):i},request:function(){return this.owner.request.apply(this.owner,arguments)}}),n.extend(t.prototype,{_init:function(){var e=this,t=e._widgets=[];return n.each(s,function(n,r){t.push(new r(e))}),r.apply(e,arguments)},request:function(t,n,r){var s=0,u=this._widgets,a=u.length,f=[],l=[],c,h,p,d;n=o(n)?n:[n];for(;s<a;s++)c=u[s],h=c.invoke(t,n),h!==i&&(e.isPromise(h)?l.push(h):f.push(h));return r||l.length?(p=e.when.apply(e,l),d=p.pipe?"pipe":"then",p[d](function(){var t=e.Deferred(),n=arguments;return setTimeout(function(){t.resolve.apply(t,n)},1),t.promise()})[d](r||e.noop)):f[0]}}),t.register=u.register=function(t,r){var i={init:"init"},o;return arguments.length===1?(r=t,r.responseMap=i):r.responseMap=n.extend(i,t),o=e.inherits(u,r),s.push(o),o},u}),t("widgets/filepicker",["base","uploader","lib/filepicker","widgets/widget"],function(e,t,n){var r=e.$;return r.extend(t.options,{pick:null,accept:null}),t.register({"add-btn":"addButton",refresh:"refresh",disable:"disable",enable:"enable"},{init:function(e){return this.pickers=[],e.pick&&this.addButton(e.pick)},refresh:function(){r.each(this.pickers,function(){this.refresh()})},addButton:function(t){var i=this,s=i.options,o=s.accept,u,a,f;if(!t)return;return f=e.Deferred(),r.isPlainObject(t)||(t={id:t}),u=r.extend({},t,{accept:r.isPlainObject(o)?[o]:o,swf:s.swf,runtimeOrder:s.runtimeOrder}),a=new n(u),a.once("ready",f.resolve),a.on("select",function(e){i.owner.request("add-file",[e])}),a.init(),this.pickers.push(a),f.promise()},disable:function(){r.each(this.pickers,function(){this.disable()})},enable:function(){r.each(this.pickers,function(){this.enable()})}})}),t("lib/image",["base","runtime/client","lib/blob"],function(e,t,n){function i(e){this.options=r.extend({},i.options,e),t.call(this,"Image"),this.on("load",function(){this._info=this.exec("info"),this._meta=this.exec("meta")})}var r=e.$;return i.options={quality:90,crop:!1,preserveHeaders:!0,allowMagnify:!0},e.inherits(t,{constructor:i,info:function(e){return e?(this._info=e,this):this._info},meta:function(e){return e?(this._meta=e,this):this._meta},loadFromBlob:function(e){var t=this,n=e.getRuid();this.connectRuntime(n,function(){t.exec("init",t.options),t.exec("loadFromBlob",e)})},resize:function(){var t=e.slice(arguments);return this.exec.apply(this,["resize"].concat(t))},getAsDataUrl:function(e){return this.exec("getAsDataUrl",e)},getAsBlob:function(e){var t=this.exec("getAsBlob",e);return new n(this.getRuid(),t)}}),i}),t("widgets/image",["base","uploader","lib/image","widgets/widget"],function(e,t,n){var r=e.$,i;return i=function(e){var t=0,n=[],r=function(){var r;while(n.length&&t<e)r=n.shift(),t+=r[0],r[1]()};return function(e,i,s){n.push([i,s]),e.once("destroy",function(){t-=i,setTimeout(r,1)}),setTimeout(r,1)}}(5242880),r.extend(t.options,{thumb:{width:110,height:110,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"},compress:{width:1600,height:1600,quality:90,allowMagnify:!1,crop:!1,preserveHeaders:!0}}),t.register({"make-thumb":"makeThumb","before-send-file":"compressImage"},{makeThumb:function(e,t,s,o){var u,a;e=this.request("get-file",e);if(!e.type.match(/^image/)){t(!0);return}u=r.extend({},this.options.thumb),r.isPlainObject(s)&&(u=r.extend(u,s),s=null),s=s||u.width,o=o||u.height,a=new n(u),a.once("load",function(){e._info=e._info||a.info(),e._meta=e._meta||a.meta(),a.resize(s,o)}),a.once("complete",function(){t(!1,a.getAsDataUrl(u.type)),a.destroy()}),a.once("error",function(){t(!0),a.destroy()}),i(a,e.source.size,function(){e._info&&a.info(e._info),e._meta&&a.meta(e._meta),a.loadFromBlob(e.source)})},compressImage:function(t){var i=this.options.compress||this.options.resize,s=i&&i.compressSize||307200,o,u;t=this.request("get-file",t);if(!i||!~"image/jpeg,image/jpg".indexOf(t.type)||t.size<s||t._compressed)return;return i=r.extend({},i),u=e.Deferred(),o=new n(i),u.always(function(){o.destroy(),o=null}),o.once("error",u.reject),o.once("load",function(){t._info=t._info||o.info(),t._meta=t._meta||o.meta(),o.resize(i.width,i.height)}),o.once("complete",function(){var e,n;try{e=o.getAsBlob(i.type),n=t.size,e.size<n&&(t.source=e,t.size=e.size,t.trigger("resize",e.size,n)),t._compressed=!0,u.resolve()}catch(r){u.resolve()}}),t._info&&o.info(t._info),t._meta&&o.meta(t._meta),o.loadFromBlob(t.source),u.promise()}})}),t("file",["base","mediator"],function(e,t){function u(){return r+i++}function a(e){this.name=e.name||"Untitled",this.size=e.size||0,this.type=e.type||"application",this.lastModifiedDate=e.lastModifiedDate||new Date*1,this.id=u(),this.ext=s.exec(this.name)?RegExp.$1:"",this.statusText="",o[this.id]=a.Status.INITED,this.source=e,this.loaded=0,this.on("error",function(e){this.setStatus(a.Status.ERROR,e)})}var n=e.$,r="WU_FILE_",i=0,s=/\.([^.]+)$/,o={};return n.extend(a.prototype,{setStatus:function(e,t){var n=o[this.id];typeof t!="undefined"&&(this.statusText=t),e!==n&&(o[this.id]=e,this.trigger("statuschange",e,n))},getStatus:function(){return o[this.id]},getSource:function(){return this.source},destory:function(){delete o[this.id]}}),t.installTo(a.prototype),a.Status={INITED:"inited",QUEUED:"queued",PROGRESS:"progress",ERROR:"error",COMPLETE:"complete",CANCELLED:"cancelled",INTERRUPT:"interrupt",INVALID:"invalid"},a}),t("queue",["base","mediator","file"],function(e,t,n){function s(){this.stats={numOfQueue:0,numOfSuccess:0,numOfCancel:0,numOfProgress:0,numOfUploadFailed:0,numOfInvalid:0},this._queue=[],this._map={}}var r=e.$,i=n.Status;return r.extend(s.prototype,{append:function(e){return this._queue.push(e),this._fileAdded(e),this},prepend:function(e){return this._queue.unshift(e),this._fileAdded(e),this},getFile:function(e){return typeof e!="string"?e:this._map[e]},fetch:function(e){var t=this._queue.length,n,r;e=e||i.QUEUED;for(n=0;n<t;n++){r=this._queue[n];if(e===r.getStatus())return r}return null},sort:function(e){typeof e=="function"&&this._queue.sort(e)},getFiles:function(){var e=[].slice.call(arguments,0),t=[],n=0,i=this._queue.length,s;for(;n<i;n++){s=this._queue[n];if(e.length&&!~r.inArray(s.getStatus(),e))continue;t.push(s)}return t},_fileAdded:function(e){var t=this,n=this._map[e.id];n||(this._map[e.id]=e,e.on("statuschange",function(e,n){t._onFileStatusChange(e,n)})),e.setStatus(i.QUEUED)},_onFileStatusChange:function(e,t){var n=this.stats;switch(t){case i.PROGRESS:n.numOfProgress--;break;case i.QUEUED:n.numOfQueue--;break;case i.ERROR:n.numOfUploadFailed--;break;case i.INVALID:n.numOfInvalid--}switch(e){case i.QUEUED:n.numOfQueue++;break;case i.PROGRESS:n.numOfProgress++;break;case i.ERROR:n.numOfUploadFailed++;break;case i.COMPLETE:n.numOfSuccess++;break;case i.CANCELLED:n.numOfCancel++;break;case i.INVALID:n.numOfInvalid++}}}),t.installTo(s.prototype),s}),t("widgets/queue",["base","uploader","queue","file","lib/file","runtime/client","widgets/widget"],function(e,t,n,r,i,s){var o=e.$,u=/\.\w+$/,a=r.Status;return t.register({"sort-files":"sortFiles","add-file":"addFiles","get-file":"getFile","fetch-file":"fetchFile","get-stats":"getStats","get-files":"getFiles","remove-file":"removeFile",retry:"retry",reset:"reset","accept-file":"acceptFile"},{init:function(t){var r=this,i,u,a,f,l,c,h;o.isPlainObject(t.accept)&&(t.accept=[t.accept]);if(t.accept){l=[];for(a=0,u=t.accept.length;a<u;a++)f=t.accept[a].extensions,f&&l.push(f);l.length&&(c="\\."+l.join(",").replace(/,/g,"$|\\.").replace(/\*/g,".*")+"$"),r.accept=new RegExp(c,"i")}r.queue=new n,r.stats=r.queue.stats;if(this.request("predict-runtime-type")!=="html5")return;return i=e.Deferred(),h=new s("Placeholder"),h.connectRuntime({runtimeOrder:"html5"},function(){r._ruid=h.getRuid(),i.resolve()}),i.promise()},_wrapFile:function(e){if(!(e instanceof r)){if(!(e instanceof i)){if(!this._ruid)throw new Error("Can't add external files.");e=new i(this._ruid,e)}e=new r(e)}return e},acceptFile:function(e){var t=!e||e.size<6||this.accept&&u.exec(e.name)&&!this.accept.test(e.name);return!t},_addFile:function(e){var t=this;e=t._wrapFile(e);if(!t.owner.trigger("beforeFileQueued",e))return;if(!t.acceptFile(e)){t.owner.trigger("error","Q_TYPE_DENIED",e);return}return t.queue.append(e),t.owner.trigger("fileQueued",e),e},getFile:function(e){return this.queue.getFile(e)},addFiles:function(e){var t=this;e.length||(e=[e]),e=o.map(e,function(e){return t._addFile(e)}),t.owner.trigger("filesQueued",e),t.options.auto&&t.request("start-upload")},getStats:function(){return this.stats},removeFile:function(e){var t=this;e=e.id?e:t.queue.getFile(e),e.setStatus(a.CANCELLED),t.owner.trigger("fileDequeued",e)},getFiles:function(){return this.queue.getFiles.apply(this.queue,arguments)},fetchFile:function(){return this.queue.fetch.apply(this.queue,arguments)},retry:function(e,t){var n=this,r,i,s;if(e){e=e.id?e:n.queue.getFile(e),e.setStatus(a.QUEUED),t||n.request("start-upload");return}r=n.queue.getFiles(a.ERROR),i=0,s=r.length;for(;i<s;i++)e=r[i],e.setStatus(a.QUEUED);n.request("start-upload")},sortFiles:function(){return this.queue.sort.apply(this.queue,arguments)},reset:function(){this.queue=new n,this.stats=this.queue.stats}})}),t("widgets/runtime",["uploader","runtime/runtime","widgets/widget"],function(e,t){return e.support=function(){return t.hasRuntime.apply(t,arguments)},e.register({"predict-runtime-type":"predictRuntmeType"},{init:function(){if(!this.predictRuntmeType())throw Error("Runtime Error")},predictRuntmeType:function(){var e=this.options.runtimeOrder||t.orders,n=this.type,r,i;if(!n){e=e.split(/\s*,\s*/g);for(r=0,i=e.length;r<i;r++)if(t.hasRuntime(e[r])){this.type=n=e[r];break}}return n}})}),t("lib/transport",["base","runtime/client","mediator"],function(e,t,n){function i(e){var n=this;e=n.options=r.extend(!0,{},i.options,e||{}),t.call(this,"Transport"),this._blob=null,this._formData=e.formData||{},this._headers=e.headers||{},this.on("progress",this._timeout),this.on("load error",function(){n.trigger("progress",1),clearTimeout(n._timer)})}var r=e.$;return i.options={server:"",method:"POST",withCredentials:!1,fileVal:"file",timeout:12e4,formData:{},headers:{},sendAsBinary:!1},r.extend(i.prototype,{appendBlob:function(e,t,n){var r=this,i=r.options;r.getRuid()&&r.disconnectRuntime(),r.connectRuntime(t.ruid,function(){r.exec("init")}),r._blob=t,i.fileVal=e||i.fileVal,i.filename=n||i.filename},append:function(e,t){typeof e=="object"?r.extend(this._formData,e):this._formData[e]=t},setRequestHeader:function(e,t){typeof e=="object"?r.extend(this._headers,e):this._headers[e]=t},send:function(e){this.exec("send",e),this._timeout()},abort:function(){return clearTimeout(this._timer),this.exec("abort")},destroy:function(){this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()},getResponse:function(){return this.exec("getResponse")},getResponseAsJson:function(){return this.exec("getResponseAsJson")},getStatus:function(){return this.exec("getStatus")},_timeout:function(){var e=this,t=e.options.timeout;if(!t)return;clearTimeout(e._timer),e._timer=setTimeout(function(){e.abort(),e.trigger("error","timeout")},t)}}),n.installTo(i.prototype),i}),t("widgets/upload",["base","uploader","file","lib/transport","widgets/widget"],function(e,t,n,r){function u(e,t){var n=[],r=e.source,i=r.size,s=t?Math.ceil(i/t):1,o=0,u=0,a;while(u<s)a=Math.min(t,i-o),n.push({file:e,start:o,end:t?o+a:i,total:i,chunks:s,chunk:u++}),o+=a;return e.blocks=n.concat(),e.remaning=n.length,{file:e,has:function(){return!!n.length},fetch:function(){return n.shift()}}}var i=e.$,s=e.isPromise,o=n.Status;i.extend(t.options,{prepareNextFile:!1,chunked:!1,chunkSize:5242880,chunkRetry:2,threads:3,formData:null}),t.register({"start-upload":"start","stop-upload":"stop","skip-file":"skipFile","is-in-progress":"isInProgress"},{init:function(){var t=this.owner;this.runing=!1,this.pool=[],this.pending=[],this.remaning=0,this.__tick=e.bindFn(this._tick,this),t.on("uploadComplete",function(e){e.blocks&&i.each(e.blocks,function(e,t){t.transport&&(t.transport.abort(),t.transport.destroy()),delete t.transport}),delete e.blocks,delete e.remaning})},start:function(){var t=this;i.each(t.request("get-files",o.INVALID),function(){t.request("remove-file",this)});if(t.runing)return;t.runing=!0,i.each(t.pool,function(e,n){var r=n.file;r.getStatus()===o.INTERRUPT&&(r.setStatus(o.PROGRESS),t._trigged=!1,n.transport&&n.transport.send())}),t._trigged=!1,t.owner.trigger("startUpload"),e.nextTick(t.__tick)},stop:function(e){var t=this;if(t.runing===!1)return;t.runing=!1,e&&i.each(t.pool,function(e,t){t.transport&&t.transport.abort(),t.file.setStatus(o.INTERRUPT)}),t.owner.trigger("stopUpload")},isInProgress:function(){return!!this.runing},getStats:function(){return this.request("get-stats")},skipFile:function(e,t){e=this.request("get-file",e),e.setStatus(t||o.COMPLETE),e.skipped=!0,e.blocks&&i.each(e.blocks,function(e,t){var n=t.transport;n&&(n.abort(),n.destroy(),delete t.transport)}),this.owner.trigger("uploadSkip",e)},_tick:function(){var t=this,n=t.options,r,i;if(t._promise)return t._promise.always(t.__tick);t.pool.length<n.threads&&(i=t._nextBlock())?(t._trigged=!1,r=function(n){t._promise=null,n&&n.file&&t._startSend(n),e.nextTick(t.__tick)},t._promise=s(i)?i.always(r):r(i)):!t.remaning&&!t.getStats().numOfQueue&&(t.runing=!1,t._trigged||e.nextTick(function(){t.owner.trigger("uploadFinished")}),t._trigged=!0)},_nextBlock:function(){var e=this,t=e._act,n=e.options,r,i;if(t&&t.has()&&t.file.getStatus()===o.PROGRESS)return n.prepareNextFile&&!e.pending.length&&e._prepareNextFile(),t.fetch();if(e.runing)return!e.pending.length&&e.getStats().numOfQueue&&e._prepareNextFile(),r=e.pending.shift(),i=function(r){return r?(t=u(r,n.chunked?n.chunkSize:0),e._act=t,t.fetch()):null},s(r)?r[r.pipe?"pipe":"then"](i):i(r)},_prepareNextFile:function(){var e=this,t=e.request("fetch-file"),n=e.pending,r;t&&(r=e.request("before-send-file",t,function(){return t.getStatus()===o.QUEUED?(e.owner.trigger("uploadStart",t),t.setStatus(o.PROGRESS),t):e._finishFile(t)}),r.done(function(){var e=i.inArray(r,n);~e&&n.splice(e,1,t)}),r.fail(function(n){t.setStatus(o.ERROR,n),e.owner.trigger("uploadError",t,n),e.owner.trigger("uploadComplete",t)}),n.push(r))},_popBlock:function(e){var t=i.inArray(e,this.pool);this.pool.splice(t,1),e.file.remaning--,this.remaning--},_startSend:function(t){var n=this,r=t.file,i;n.pool.push(t),n.remaning++,t.blob=t.chunks===1?r.source:r.source.slice(t.start,t.end),i=n.request("before-send",t,function(){r.getStatus()===o.PROGRESS?n._doSend(t):(n._popBlock(t),e.nextTick(n.__tick))}),i.fail(function(){r.remaning===1?n._finishFile(r).always(function(){t.percentage=1,n._popBlock(t),n.owner.trigger("uploadComplete",r),e.nextTick(n.__tick)}):(t.percentage=1,n._popBlock(t),e.nextTick(n.__tick))})},_doSend:function(t){var n=this,s=n.owner,u=n.options,a=t.file,f=new r(u),l=i.extend({},u.formData),c=i.extend({},u.headers),h,p;t.transport=f,f.on("destroy",function(){delete t.transport,n._popBlock(t),e.nextTick(n.__tick)}),f.on("progress",function(e){var n=0,r=0;n=t.percentage=e,t.chunks>1&&(i.each(a.blocks,function(e,t){r+=(t.percentage||0)*(t.end-t.start)}),n=r/a.size),s.trigger("uploadProgress",a,n||0)}),h=function(e){var n;return p=f.getResponseAsJson()||{},p._raw=f.getResponse(),n=function(t){e=t},s.trigger("uploadAccept",t,p,n)||(e=e||"server"),e},f.on("error",function(e,n){t.retried=t.retried||0,t.chunks>1&&~"http,abort".indexOf(e)&&t.retried<u.chunkRetry?(t.retried++,f.send()):(!n&&e==="server"&&(e=h(e)),a.setStatus(o.ERROR,e),s.trigger("uploadError",a,e),s.trigger("uploadComplete",a))}),f.on("load",function(){var e;if(e=h()){f.trigger("error",e,!0);return}a.remaning===1?n._finishFile(a,p):f.destroy()}),l=i.extend(l,{id:a.id,name:a.name,type:a.type,lastModifiedDate:a.lastModifiedDate,size:a.size}),t.chunks>1&&i.extend(l,{chunks:t.chunks,chunk:t.chunk}),s.trigger("uploadBeforeSend",t,l,c),f.appendBlob(u.fileVal,t.blob,a.name),f.append(l),f.setRequestHeader(c),f.send()},_finishFile:function(e,t,n){var r=this.owner;return r.request("after-send-file",arguments,function(){e.setStatus(o.COMPLETE),r.trigger("uploadSuccess",e,t,n)}).fail(function(t){e.getStatus()===o.PROGRESS&&e.setStatus(o.ERROR,t),r.trigger("uploadError",e,t)}).always(function(){r.trigger("uploadComplete",e)})}})}),t("widgets/validator",["base","uploader","file","widgets/widget"],function(e,t,n){var r=e.$,i={},s;return s={addValidator:function(e,t){i[e]=t},removeValidator:function(e){delete i[e]}},t.register({init:function(){var e=this;r.each(i,function(){this.call(e.owner)})}}),s.addValidator("fileNumLimit",function(){var e=this,t=e.options,n=0,r=t.fileNumLimit>>0,i=!0;if(!r)return;e.on("beforeFileQueued",function(e){return n>=r&&i&&(i=!1,this.trigger("error","Q_EXCEED_NUM_LIMIT",r,e),setTimeout(function(){i=!0},1)),n>=r?!1:!0}),e.on("fileQueued",function(){n++}),e.on("fileDequeued",function(){n--}),e.on("uploadFinished",function(){n=0})}),s.addValidator("fileSizeLimit",function(){var e=this,t=e.options,n=0,r=t.fileSizeLimit>>0,i=!0;if(!r)return;e.on("beforeFileQueued",function(e){var t=n+e.size>r;return t&&i&&(i=!1,this.trigger("error","Q_EXCEED_SIZE_LIMIT",r,e),setTimeout(function(){i=!0},1)),t?!1:!0}),e.on("fileQueued",function(e){n+=e.size}),e.on("fileDequeued",function(e){n-=e.size}),e.on("uploadFinished",function(){n=0})}),s.addValidator("fileSingleSizeLimit",function(){var e=this,t=e.options,r=t.fileSingleSizeLimit;if(!r)return;e.on("beforeFileQueued",function(e){if(e.size>r)return e.setStatus(n.Status.INVALID,"exceed_size"),this.trigger("error","F_EXCEED_SIZE",e),!1})}),s.addValidator("duplicate",function(){function r(e){var t=0,n=0,r=e.length,i;for(;n<r;n++)i=e.charCodeAt(n),t=i+(t<<6)+(t<<16)-t;return t}var e=this,t=e.options,n={};if(t.duplicate)return;e.on("beforeFileQueued",function(e){var t=e.__hash||(e.__hash=r(e.name+e.size+e.lastModifiedDate));if(n[t])return this.trigger("error","F_DUPLICATE",e),!1}),e.on("fileQueued",function(e){var t=e.__hash;t&&(n[t]=!0)}),e.on("fileDequeued",function(e){var t=e.__hash;t&&delete n[t]})}),s}),t("runtime/compbase",[],function(){function e(e,t){this.owner=e,this.options=e.options,this.getRuntime=function(){return t},this.getRuid=function(){return t.uid},this.trigger=function(){return e.trigger.apply(e,arguments)}}return e}),t("runtime/flash/runtime",["base","runtime/runtime","runtime/compbase"],function(t,n,r){function u(){var e;try{e=navigator.plugins["Shockwave Flash"],e=e.description}catch(t){try{e=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(n){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1],10)}function a(){function l(e,t){var n=e.type||e,r,s;r=n.split("::"),s=r[0],n=r[1],n==="Ready"&&s===a.uid?a.trigger("ready"):i[s]&&i[s].trigger(n.toLowerCase(),e,t)}var r={},i={},u=this.destory,a=this,f=t.guid("webuploader_");n.apply(a,arguments),a.type=s,a.exec=function(e,n){var s=this,u=s.uid,f=t.slice(arguments,2),l;i[u]=s;if(o[e]){r[u]||(r[u]=new o[e](s,a)),l=r[u];if(l[n])return l[n].apply(l,f)}return a.flashExec.apply(s,arguments)},e[f]=function(){var e=arguments;setTimeout(function(){l.apply(null,e)},1)},this.jsreciver=f,this.destory=function(){return u&&u.apply(this,arguments)},this.flashExec=function(e,n){var r=a.getFlash(),i=t.slice(arguments,2);return r.exec(this.uid,e,n,i)}}var i=t.$,s="flash",o={};return t.inherits(n,{constructor:a,init:function(){var e=this.getContainer(),n=this.options,r;e.css({position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"}),r='<object id="'+this.uid+'" type="application/'+'x-shockwave-flash" data="'+n.swf+'" ',t.browser.ie&&(r+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),r+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+n.swf+'" />'+'<param name="flashvars" value="uid='+this.uid+"&jsreciver="+this.jsreciver+'" />'+'<param name="wmode" value="transparent" />'+'<param name="allowscriptaccess" value="always" />'+"</object>",e.html(r)},getFlash:function(){return this._flash?this._flash:(this._flash=i("#"+this.uid).get(0),this._flash)}}),a.register=function(e,n){return n=o[e]=t.inherits(r,i.extend({flashExec:function(){var e=this.owner,t=this.getRuntime();return t.flashExec.apply(e,arguments)}},n)),n},u()>=11.4&&n.addRuntime(s,a),a}),t("runtime/flash/filepicker",["base","runtime/flash/runtime"],function(e,t){var n=e.$;return t.register("FilePicker",{init:function(e){var t=n.extend({},e),r,i;r=t.accept&&t.accept.length;for(i=0;i<r;i++)t.accept[i].title||(t.accept[i].title="Files");delete t.button,delete t.container,this.flashExec("FilePicker","init",t)},destroy:function(){}})}),t("runtime/flash/image",["runtime/flash/runtime"],function(e){return e.register("Image",{loadFromBlob:function(e){var t=this.owner;t.info()&&this.flashExec("Image","info",t.info()),t.meta()&&this.flashExec("Image","meta",t.meta()),this.flashExec("Image","loadFromBlob",e.uid)}})}),t("runtime/flash/transport",["base","runtime/flash/runtime","runtime/client"],function(e,t,n){var r=e.$;return t.register("Transport",{init:function(){this._status=0,this._response=null,this._responseJson=null},send:function(){var e=this.owner,t=this.options,n=this._initAjax(),i=e._blob,s=t.server,o;n.connectRuntime(i.ruid),t.sendAsBinary?(s+=(/\?/.test(s)?"&":"?")+r.param(e._formData),o=i.uid):(r.each(e._formData,function(e,t){n.exec("append",e,t)}),n.exec("appendBlob",t.fileVal,i.uid,t.filename||e._formData.name||"")),this._setRequestHeader(n,t.headers),n.exec("send",{method:t.method,url:s},o)},getStatus:function(){return this._status},getResponse:function(){return this._response},getResponseAsJson:function(){return this._responseJson},abort:function(){var e=this._xhr;e&&(e.exec("abort"),e.destroy(),this._xhr=e=null)},destroy:function(){this.abort()},_initAjax:function(){var e=this,t=new n("XMLHttpRequest");return t.on("uploadprogress progress",function(t){return e.trigger("progress",t.loaded/t.total)}),t.on("load",function(){var n=t.exec("getStatus"),r="";return t.off(),e._xhr=null,n>=200&&n<300?(e._response=t.exec("getResponse"),e._responseJson=t.exec("getResponseAsJson")):n>=500&&n<600?(e._response=t.exec("getResponse"),e._responseJson=t.exec("getResponseAsJson"),r="server"):r="http",t.destroy(),t=null,r?e.trigger("error",r):e.trigger("load")}),t.on("error",function(){t.off(),e._xhr=null,e.trigger("error","http")}),e._xhr=t,t},_setRequestHeader:function(e,t){r.each(t,function(t,n){e.exec("setRequestHeader",t,n)})}})}),t("preset/flashonly",["base","widgets/filepicker","widgets/image","widgets/queue","widgets/runtime","widgets/upload","widgets/validator","runtime/flash/filepicker","runtime/flash/image","runtime/flash/transport"],function(e){return e}),t("webuploader",["preset/flashonly"],function(e){return e}),n("webuploader")});