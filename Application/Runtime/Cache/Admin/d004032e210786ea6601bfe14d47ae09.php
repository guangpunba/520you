<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html class="no-js fixed-layout">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title><?php echo ($title); ?></title>
  <meta name="description" content="芝士大学后台管理系统">
  <meta name="keywords" content="芝士大学">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <link rel="icon" type="image/png" href="/520you/Public/Admin/dist/images/i/favicon.png">
  <link rel="apple-touch-icon-precomposed" href="/520you/Public/Admin/dist/images/i/app-icon72x72@2x.png">
  <meta name="apple-mobile-web-app-title" content="芝士大学" />

  <link rel="stylesheet" href="/520you/Public/Admin/dist/css/main.css">
  <!--[if lte IE 9]>
  <p class="browsehappy">你正在使用<strong>过时</strong>的浏览器，Amaze UI 暂不支持。 请 <a href="http://browsehappy.com/" target="_blank">升级浏览器</a>
    以获得更好的体验！</p>
  <![endif]-->
</head>
<body>


<header class="am-topbar admin-header">
  <div class="am-topbar-brand">
    <strong>芝士大学</strong> <small id="online_box">后台管理模板</small>
  </div>
  
  <!-- <button class="am-btn am-btn-default" id='send'>推送</button>
   
  <center id="online_box"></center> -->
  <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

  <div class="am-collapse am-topbar-collapse" id="topbar-collapse">

    <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
      <li><a href="javascript:;">您好：<?php echo (session('username')); ?></a></li>
      <li><a href="<?php echo U('adminsMsg/index');?>?userid=<?php echo (session('userid')); ?>"><span class="am-icon-envelope-o"></span> 收件箱 <span class="am-badge am-badge-warning" id='msgCounts'><?php echo ((isset($count) && ($count !== ""))?($count):"20"); ?></span></a></li>
      <li class="am-dropdown" data-am-dropdown>
        <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
          <span class="am-icon-users"></span> 管理员 <span class="am-icon-caret-down"></span>
        </a>
        <ul class="am-dropdown-content">
          <li><a href="#"><span class="am-icon-user"></span> 资料</a></li>
          <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
          <li><a href="<?php echo U('Login/outlogin');?>" id='outlogin'><span class="am-icon-power-off"></span> 退出</a></li>
        </ul>
      </li>
      
    </ul>
  </div>
</header>
<input type="hidden" value="<?php echo (session('userid')); ?>" id='uid'> 

<div class="am-cf admin-main">
  <!-- sidebar start -->
  <div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
    <div class="am-offcanvas-bar admin-offcanvas-bar">
      <ul class="am-list admin-sidebar-list">
        <li><a href="<?php echo U('Index/index');?>"><span class="am-icon-home"></span> 首页</a></li>
        <!-- <li class="admin-parent">
          <a class="am-cf" data-am-collapse="{target: '#collapse-nav'}"><span class="am-icon-file"></span> 网站配置 <span class="am-icon-angle-right am-fr am-margin-right"></span></a>
          <ul class="am-list am-collapse admin-sidebar-sub am-in" id="collapse-nav">
            <li><a href="admin-user.html" class="am-cf"><span class="am-icon-check"></span> 网站概况<span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span></a></li>
            <li><a href="admin-help.html"><span class="am-icon-puzzle-piece"></span> 网站配置信息</a></li>
            <li><a href="admin-gallery.html"><span class="am-icon-th"></span> 相册页面<span class="am-badge am-badge-secondary am-margin-right am-fr">24</span></a></li>
            <li><a href="admin-log.html"><span class="am-icon-calendar"></span> 系统日志</a></li>
            <li><a href="admin-404.html"><span class="am-icon-bug"></span> 404</a></li>
          </ul>
        </li>
        <li><a href="admin-table.html"><span class="am-icon-table"></span> 表格</a></li>
        <li><a href="admin-form.html"><span class="am-icon-pencil-square-o"></span> 表单</a></li>
        <li><a href="#"><span class="am-icon-sign-out"></span> 注销</a></li> -->
        <li><a href="<?php echo U('News/index');?>"><span class="am-icon-file-text-o"></span> 新闻管理</a></li>
        <li><a href="<?php echo U('Admins/index');?>"><span class="am-icon-user"></span> 账号管理</a></li>
        <li class="admin-parent">
          <a class="am-cf" data-am-collapse="{target: '#collapse-nav'}"><span class="am-icon-cogs"></span> 网站配置 <span class="am-icon-angle-right am-fr am-margin-right"></span></a>
          <ul class="am-list am-collapse admin-sidebar-sub" id="collapse-nav">
            <li><a href="<?php echo U('Config/index');?>" class="am-cf"><span class="am-icon-check"></span> 系统信息<span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span></a></li>
            <li><a href="admin-help.html"><span class="am-icon-puzzle-piece"></span> 网站配置信息</a></li>
          </ul>
        </li>
		<li class="admin-parent">
          <a class="am-cf" data-am-collapse="{target: '#nav-msg'}"><span class="am-icon-comments"></span> 消息管理 <span class="am-icon-angle-right am-fr am-margin-right"></span></a>
          <ul class="am-list am-collapse admin-sidebar-sub" id="nav-msg">
          	<?php if($_SESSION['groupid']== 1 ): ?><li><a href="<?php echo U('AdminsMsg/index');?>" class="am-cf"><span class="am-icon-envelope"></span> 管理员消息推送</a></li><?php endif; ?>
            	<li><a href="admin-help.html"><span class="am-icon-envelope-o"></span> 会员消息推送</a></li>
           
          </ul>
        </li>
      </ul>

      <div class="am-panel am-panel-default admin-sidebar-panel">
        <div class="am-panel-bd">
          	<p><span class="am-icon-bookmark"></span> 公告</p>
          	<p>时光静好，与君语；细水流年，与君同。—— Amaze UI</p>
        </div>
      </div>

      <div class="am-panel am-panel-default admin-sidebar-panel">
        <div class="am-panel-bd">
          <p><span class="am-icon-tag"></span> wiki</p>
          <p>Welcome to the Amaze UI wiki!</p>
        </div>
      </div>
    </div>
  </div>
  <!-- sidebar end --> 

  <!-- content start -->
  <div class="admin-content">


    <div class="am-g">
      <div class="am-u-sm-12">
        <h2 class="am-text-default am-margin-top"><span class="am-icon-user"></span> 新闻管理 -- 添加新闻</h2>
        <hr data-am-widget="divider" style="" class="am-divider am-divider-default" />
      </div>
    </div>
 
    <div class="am-g">
        <div class="am-u-sm-6">

            <form class="am-form am-form-horizontal" id="form">
                <div class="am-form-group">
                  <label for="username" class="am-u-sm-3 am-form-label">标题：</label>
                  <div class="am-u-sm-9">
                    <input type="text" id="title" name='title' value="<?php echo ($info["title"]); ?>">
                  </div>
                </div>
      
                <div class="am-form-group">
                  <label for="pwd" class="am-u-sm-3 am-form-label">作者：</label>
                  <div class="am-u-sm-4 am-u-end">
                    <input type="text" id="author" name='author' value="<?php echo ((isset($info["author"]) && ($info["author"] !== ""))?($info["author"]):"芝士大学"); ?>">
                  </div>
                </div>
                <div class="am-form-group">
                  <label for="repwd" class="am-u-sm-3 am-form-label">是否推荐：</label>
                  <div class="am-u-sm-3 am-u-end">
                      <select data-am-selected="{btnWidth: '120px',}" name='recommended' id="recommended" placeholder='请选择'>
                          <option value=""></option>
                          <option value="0" <?php if(($info["recommended"]) == "0"): ?>selected=selected<?php endif; ?>>不推荐</option>
                          <option value="1" <?php if(($info["recommended"]) == "1"): ?>selected=selected<?php endif; ?>>推荐</option>
                      </select>
                     
                  </div>
                </div>
                <div class="am-form-group">
                  <label for="group" class="am-u-sm-3 am-form-label">选择类型：</label>
                  <div class="am-u-sm-4 am-u-end">
                      <select name='type' id='type'>
                          <option value="">请选择</option>
                          <?php if(is_array($newstype)): $i = 0; $__LIST__ = $newstype;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><option value="<?php echo ($vo["id"]); ?>" <?php if(($info["type"]) == $vo["id"]): ?>selected=selected<?php endif; ?>><?php echo ($vo["name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                      </select> 
                
                  </div>
                </div>
                
                <div class="am-form-group">
                  <label for="repwd" class="am-u-sm-3 am-form-label">文章详情：</label>
                  <div class="am-u-sm-9">
                    <!-- 加载编辑器的容器 -->
                    <script id="ueditor" name="content" type="text/plain">
                        <?php echo ($info["content"]); ?>
                    </script>
                  </div>
                </div>
                
                <div class="am-form-group">
                  <div class="am-u-sm-9 am-u-sm-offset-3">
                    <button type="submit" class="am-btn am-btn-primary am-disabled" id="submitEdit" data-am-loading="{loadingText: '提交中...'}">提交</button>
                  </div>
                </div>
                <input type="hidden" value="<?php echo ($_GET['id']); ?>" id='getid'>
    
            </form>
        
        </div>
    </div>

  </div>
  <!-- content end -->

</div>

<a href="#" class="am-show-sm-only admin-menu" data-am-offcanvas="{target: '#admin-offcanvas'}">
  <span class="am-icon-btn am-icon-th-list"></span>
</a>
<!-- <footer>
  <hr>
  <p class="am-padding-left">© 2014 AllMobilize, Inc. Licensed under MIT license.</p>
</footer> -->
<!--[if lt IE 9]>
<script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>
<script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
<script src="assets/js/amazeui.ie8polyfill.min.js"></script>
<![endif]-->

<!-- [if (gte IE 9)|!(IE)]>>
<script src="/520you/Public/Admin/dist/js/libs/jquery.min.js"></script>
<![endif] -->

<script type="text/javascript">
  var jsUrl = '/520you/Public/Admin/dist/js';
  var _APP  = '/520you/index.php/Admin';

</script> 


<!--[if lt IE 9]>
<script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>
<script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
<script src="assets/js/amazeui.ie8polyfill.min.js"></script>
<![endif]-->

<!-- [if (gte IE 9)|!(IE)]>>
<script src="/520you/Public/Admin/dist/js/libs/jquery.min.js"></script>
<![endif] -->


<script type="text/javascript" src="/520you/Public/Admin/dist/js/libs/require_config.js"></script>
<script type="text/javascript" data-main='/520you/Public/Admin/dist/js/news-main.js' src="/520you/Public/Admin/dist/js/libs/require.js"></script>

</body>
</html>