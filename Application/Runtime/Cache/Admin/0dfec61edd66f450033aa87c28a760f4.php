<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="UTF-8">
  <title>Login Page | Amaze UI Example</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <link rel="alternate icon" type="image/png" href="/520you/Public/Admin/dist/images/i/favicon.png">

  <link rel="stylesheet" href="/520you/Public/Admin/dist/css/main.css"/>
  <style>
    .header {
      text-align: center;
    }
    .header h1 {
      font-size: 200%;
      color: #333;
      margin-top: 30px;
    }
    .header p {
      font-size: 14px;
    }
  </style>
</head>

<body>

<div class="am-g">
  <div class="am-u-lg-6 am-u-md-8 am-u-sm-12 am-u-sm-centered">
    <h3>登录</h3>
    <hr>
    
    <br>
    <br>
    <div class="am-form am-form-horizontal">
        <div class="am-form-group">
            <label for="username" class="am-u-lg-3 am-u-md-3 am-u-sm-12 am-form-label">用户名：</label>
            <div class="am-u-lg-6 am-u-md-6 am-u-sm-12 am-u-end">
                <input type="text" id="username" name='username' class="am-form-field" style='width:300px;'>
            </div>
        </div>  
        <div class="am-form-group">
            <label for="password" class="am-u-lg-3 am-u-md-3 am-u-sm-12 am-form-label">密码：</label>
            <div class="am-u-lg-6 am-u-md-6 am-u-sm-12 am-u-end">
                <input type="password" id="password" name='password' class="am-form-field" style='width:300px;'>
            </div>

        </div>
        
        <!-- <div class="am-form-group">
            <label for="verify" class="am-u-sm-2 am-form-label">验证码：</label>
            <div class="am-u-sm-5">
                <input type="text" id="verify" class="am-form-field">
            </div>
            <div class='am-u-sm-4 am-u-end'> <a href ="javascript:void(0)" ><img src="<?php echo U('Login/verify');?>" id="code" onclick="javascript:this.src='<?php echo U('Login/verify');?>?tm='+Math.random()" height="39"></a></div>
           
        </div> -->
        
        <div class="am-form-group">
            <div class="am-u-lg-9 am-u-md-9 am-u-sm-12 am-u-lg-offset-3 am-u-md-offset-3">
                <div id="drag">
                    <div class="drag_bg"></div>
                    <div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>
                    <div class="handler handler_bg"></div>
                </div>
            </div>
           
        </div>
      </label>
        <div class="am-form-group">
            <div class="am-u-lg-9 am-u-md-9 am-u-sm-12 am-u-lg-offset-3 am-u-md-offset-3">
                <input id="remember-me" type="checkbox"> 记住密码
            </div>
        </div> 
        <div class="am-form-group">
            <div class="am-u-lg-9 am-u-md-9 am-u-sm-12 am-u-lg-offset-3 am-u-md-offset-3">
              <button type="submit" class="am-btn am-btn-primary" id='submit_login'>登陆</button>
            </div>
        </div> 
    </div>
  
    <hr>
    
  </div>
</div>

<script type="text/javascript">
  var jsUrl = '/520you/Public/Admin/dist/js';
  var _APP  = '/520you/index.php/Admin';
</script>

<!-- <script type="text/javascript" src="/520you/Public/Admin/dist/js/libs/require_config.js"></script> -->
<script type="text/javascript" src="/520you/Public/Admin/dist/js/libs/require.js" data-main='/520you/Public/Admin/dist/js/login-main.js' ></script>

</body>
</html>