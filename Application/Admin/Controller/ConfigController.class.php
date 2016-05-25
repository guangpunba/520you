<?php
namespace Admin\Controller;
use Think\Controller;
class ConfigController extends IndexController {
	//网站概况
    public function index(){
       $system = PHP_OS; //服务器操作系统
       $tp_version = THINK_VERSION;//thinkp版本号
       $environment = $_SERVER['SERVER_SOFTWARE']; //运行环境
       $php_version = PHP_VERSION; //php版本
       $maxupload = get_cfg_var ("upload_max_filesize")?get_cfg_var ("upload_max_filesize"):"不允许上传附件"; //上传限制
       mysql_connect('127.0.0.1','root',''); 
       $mysql_version = mysql_get_server_info();//获取mysql版本
    	
       $this->assign('system',$system)
       		->assign('tp_version',$tp_version)
       		->assign('environment',$environment)
       		->assign('php_version',$php_version)
       		->assign('mysql_version',$mysql_version)
       		->assign('maxupload',$maxupload);
        
 	   $this->title = '网站概况';
       $this->display();
    }
    
 
}