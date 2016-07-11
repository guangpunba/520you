({
    appDir: "../",
    baseUrl: "./js",
    dir: "../dist", //打包生成的文件夹
    paths : {
        //插件
        "jquery"    : "libs/jquery.min", //jquery框架
        "amazeui"   : 'libs/amazeui.min',   //amazeui主框架
        "layer"     : 'libs/layer/layer',  //弹窗插件
        "cookie"    : 'libs/jquery.cookie', //cookie插件
        "base64"    : 'libs/base64', //加密解密插件
        "drag"      : 'libs/drag', //滑动验证码
        "ueditorConfig"   : 'libs/ueditor/ueditor.config', //编辑器配置文件
        "ueditor"   : 'libs/ueditor/ueditor.all.min', //编辑器源码
        //模块
        "common"    : 'app/common', //公共模块
        "push"      : 'app/push', //推送
        "dologin"   : 'app/dologin', //登录操作
        "getPsw"    : 'app/get_password',//记住密码
        "news"      : 'app/news',//新闻模块操作
        "getAjaxList" : 'app/getAjaxList', //ajax获取列表
        "search"    : 'app/search', //查询
        "socketIO"  : 'http://cdn.bootcss.com/socket.io/1.3.7/socket.io',
        "loadueditor":'app/loadueditor', //初始化编辑器
        "account": 'app/account',//添加账号 
        //入口文件
        'login-main': 'login-main',
        'index-main': 'index-main',
        'news-main' : 'news-main',
        'admin-main': 'admin-main',
        'AdminsMsg-main':'AdminsMsg-main'

    },
    shim:{
        'amazeui': ['jquery'],
        'cookie':['jquery'],
        'drag':['jquery'],
        'dologin':['jquery'],
        'layer': {
            deps: ["jquery"],
            exports:'layer'

        }
    },
    modules: [
        {
            name : 'login-main' //登陆入口文件
        },
        {
            name : 'index-main' //首页入口文件
        },
        {
            name : 'news-main'  //新闻入口文件
        },
        {
            name : 'admin-main' //账号管理入口文件
        },
        {
            name : 'AdminsMsg-main' //推送信息入口文件
        }
    ],
    fileExclusionRegExp: /^(\.|build|less|dist)/ //在打包后的文件中删除的文件夹名称

    
})


/*({
    appDir: "./",
    baseUrl: "js",
    dir: "../build",
    paths: {
        'jquery':'libs/jquery-1.8.2',
        'easyDialog':'utils/easyDialog',
        'easySwitch':'utils/easySwitch',
        'easyValidator':'utils/easyValidator',
        'miniNotification':'utils/miniNotification',
        'scoreToRank':'utils/scoreToRank',
        'score-intro':'app/score-intro',
        'convert-center':'app/convert-center'
    },
    shim:{
        'easyDialog': ['jquery'],
        'easySwitch':['jquery'],
        'easyValidator':['jquery'],
        'miniNotification':['jquery']
    },
    modules: [{
        name: 'score-intro'
    },{
        name: 'convert-center'
    }]
})*/