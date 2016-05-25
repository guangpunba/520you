/* 加载依赖模块 */
var date = new Date();
//var $public = document.getElementById('public').value;
var libs = 'libs/';
var app  = 'app/';

require.config({
    baseUrl:jsUrl,
    //urlArgs: "v="+ date.getTime(), //清除缓存
    paths : {
        "jquery"    : libs + "jquery.min", //jquery框架
        "amazeui"   : libs + 'amazeui.min',   //amazeui主框架
        "layer"     : libs + 'layer/layer',  //弹窗插件
        "cookie"    : libs + 'jquery.cookie', //cookie插件
        "base64"    : libs + 'base64',
        "ueditorConfig"   : libs + 'ueditor/ueditor.config', //编辑器配置文件
        "ueditor"   : libs + 'ueditor/ueditor.all.min', //编辑器源码
        "socketIO"  : 'http://cdn.bootcss.com/socket.io/1.3.7/socket.io',
        
        
        
        "dologin"   : app + 'dologin', //登录操作
        "getPsw"    : app + 'get_password',//记住密码
        "account": app + 'account',//添加账号 
        "newueditor": app + 'ueditor', //初始化编辑器
        "news"      : app + 'news',//新闻模块操作
        "getAjaxList" : app + 'getAjaxList', //ajax获取列表
        "push"      : app + 'push' //推送
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
        }
        
        /*'zepto': {
            exports:'Zepto'
        },
        
        'slide':['css!../css/swiper.min.css','swiper']*/
        
    }


})

