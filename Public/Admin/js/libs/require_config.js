/* 加载依赖模块 */
var date = new Date();
//var $public = document.getElementById('public').value;
var libs = 'libs/';
var app  = 'app/';


var require = {
    baseUrl:jsUrl,
    //urlArgs: "v="+ date.getTime(), //清除缓存
    paths : {
        //插件
        "jquery"    :  "libs/jquery.min", //jquery框架
        "amazeui"   : libs + 'amazeui.min',   //amazeui主框架
        "layer"     : libs + 'layer/layer',  //弹窗插件
        "cookie"    : libs + 'jquery.cookie', //cookie插件
        "base64"    : libs + 'base64', //加密解密插件
        "drag"      : libs + 'drag', //滑动验证码
        "ueditorConfig"   : libs + 'ueditor/ueditor.config', //编辑器配置文件
        "ueditor"   : libs + 'ueditor/ueditor.all.min', //编辑器源码
        //模块
        "common"    : app + 'common', //公共模块
        "push"      : app + 'push', //推送
        "dologin"   : app + 'dologin', //登录操作
        "getPsw"    : app + 'get_password',//记住密码
        "news"      : app + 'news',//新闻模块操作
        "getAjaxList" : app + 'getAjaxList', //ajax获取列表
        "search"    : app + 'search', //查询
        "loadueditor": app + 'loadueditor', //初始化编辑器
        "account": app + 'account',//添加账号 
        "socketIO"  : 'http://cdn.bootcss.com/socket.io/1.3.7/socket.io'

    },
    waitSeconds: 15,
  
    
    shim: {
        'amazeui' : ['jquery'],
        'layer': {
            deps: ["jquery"],
            exports:'layer'

        },
        'cookie': {
            deps: ["jquery"],
            exports:'cookie'

        },
      
        'drag' : {
            deps:['jquery']
        }
      
       
        
        /*'zepto': {
            exports:'Zepto'
        },
        
        'slide':['css!../css/swiper.min.css','swiper']*/
        
    }

};

/*

require.config({
    baseUrl:jsUrl,
    urlArgs: "v="+ date.getTime(), //清除缓存
    paths : {
        "jquery"    :  "libs/jquery", //jquery框架
        "amazeui"   : libs + 'amazeui',   //amazeui主框架
        "layer"     : libs + 'layer/layer',  //弹窗插件
        "cookie"    : libs + 'jquery.cookie', //cookie插件
        "base64"    : libs + 'base64', //加密解密插件
        "ueditorConfig"   : libs + 'ueditor/ueditor.config', //编辑器配置文件
        "ueditor"   : libs + 'ueditor/ueditor.all.min', //编辑器源码
        "socketIO"  : 'http://cdn.bootcss.com/socket.io/1.3.7/socket.io',
        "drag"      : libs + 'drag', //滑动验证码
        
        "common"   : app + 'common', //登录操作
        "dologin"   : app + 'dologin', //登录操作
        "getPsw"    : app + 'get_password',//记住密码
        "account": app + 'account',//添加账号 
        "loadueditor": app + 'loadueditor', //初始化编辑器
        "news"      : app + 'news',//新闻模块操作
        "getAjaxList" : app + 'getAjaxList', //ajax获取列表
        "push"      : app + 'push', //推送
        "search"    : app + 'search' //查询
    },
    map: {
        '*': {
            'css': libs + 'css.min' //加载requireCss.js
        }
    },
    shim: {
        'amazeui' : ['jquery'],
        'layer': {
            deps: ["jquery"],
            exports:'layer'

        },
        'cookie': {
            deps: ["jquery"],
            exports:'cookie'

        },
        'newueditor' :{
            deps: ["ueditorConfig","ueditor"]
        },
        'drag' : {
            deps:['jquery']
        }
      
     }


})*/
      
        
        /*'zepto': {
            exports:'Zepto'
        },
        
        'slide':['css!../css/swiper.min.css','swiper']*/
        




