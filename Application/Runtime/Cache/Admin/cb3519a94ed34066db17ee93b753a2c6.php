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
  <link rel="stylesheet" href="/520you/Public/Admin/dist/css/amazeui.min.css"/>
  <link rel="stylesheet" href="/520you/Public/Admin/dist/css/admin.css">
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
      <li><a href="<?php echo U('adminsMsg/index');?>?userid=<?php echo (session('userid')); ?>"><span class="am-icon-envelope-o"></span> 收件箱 <span class="am-badge am-badge-warning" id='msgCounts'><?php echo ((isset($count) && ($count !== ""))?($count):"0"); ?></span></a></li>
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
        <li><a href="admin-index.html"><span class="am-icon-home"></span> 首页</a></li>
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
          <ul class="am-list am-collapse admin-sidebar-sub am-out" id="collapse-nav">
            <li><a href="<?php echo U('Config/index');?>" class="am-cf"><span class="am-icon-check"></span> 系统信息<span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span></a></li>
            <li><a href="admin-help.html"><span class="am-icon-puzzle-piece"></span> 网站配置信息</a></li>
          </ul>
        </li>
		<li class="admin-parent">
          <a class="am-cf" data-am-collapse="{target: '#nav-msg'}"><span class="am-icon-comments"></span> 消息管理 <span class="am-icon-angle-right am-fr am-margin-right"></span></a>
          <ul class="am-list am-collapse admin-sidebar-sub am-in" id="nav-msg">
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
            <h2 class="am-text-default am-margin-top"><span class="am-icon-user"></span> 用户管理</h2>
            <hr data-am-widget="divider" style="" class="am-divider am-divider-default" />
          </div>
      </div>
      
      <?php if($_SESSION['groupid']== 1 ): ?><div class="am-g am-margin-bottom">
        <div class="am-u-sm-12">
          <a href="<?php echo U('Admins/addAccount');?>" class="am-btn am-btn-default"><span class="am-icon-plus"></span> 添加账号</a>
        </div>
      </div><?php endif; ?> 
    
      <div class="am-g">
          <div class="am-u-sm-12">
              <table class="am-table am-table-bd am-table-striped admin-content-table">
                  <thead>
                      <tr>
                        <th>序号</th><th>用户名</th><th>级别</th><th>创建时间</th>
                        <?php if($_SESSION['groupid']== 1 ): ?><th>管理</th><?php endif; ?>
                      </tr>
                  </thead>
                  <tbody>
                      <?php if(is_array($list)): $k = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?><tr data-id='<?php echo ($vo["id"]); ?>'>
                        <td><?php echo ($k); ?></td>
                        <td><?php echo ($vo["username"]); ?></td>
                        <td><a href="#"><?php echo ($vo["groupname"]); ?></a></td> 
                        <td><?php echo ($vo["createdate"]); ?></td>
                        <?php if($_SESSION['groupid']== 1 ): ?><td>
                          <div class="am-dropdown" data-am-dropdown>
                            <button class="am-btn am-btn-default am-btn-xs am-dropdown-toggle" data-am-dropdown-toggle><span class="am-icon-cog"></span> <span class="am-icon-caret-down"></span></button>
                            <ul class="am-dropdown-content">
                              <li><a href="<?php echo U('Admins/editAccount',array('id'=>$vo['id']));?>" >1. 编辑</a></li>

                              <li><a href="javascript:;" class='delbtn'>2. 删除</a></li>
                            </ul>
                          </div>
                        </td><?php endif; ?>
                      </tr><?php endforeach; endif; else: echo "" ;endif; ?>
                  </tbody>
              </table>
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


<script type="text/javascript" src="/520you/Public/Admin/dist/js/libs/require_config.js"></script>
<script type="text/javascript" data-main='/520you/Public/Admin/dist/js/admin-main.js' src="/520you/Public/Admin/dist/js/libs/require.js"></script>

</body>
</html>