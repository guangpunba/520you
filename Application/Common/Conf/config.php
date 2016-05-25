<?php
return array(
	//'配置项'=>'配置值'
	'DB_TYPE'   => 'mysql', // 数据库类型
	'DB_HOST'   => 'localhost', // 服务器地址
	'DB_NAME'   => 'lvyou', // 数据库名
	'DB_USER'   => 'root', // 用户名
	'DB_PWD'    => '', // 密码
	'DB_PORT'   => 3306, // 端口
	'DB_PREFIX' => 'gp_', // 数据库表前缀 
	'DB_CHARSET'=> 'utf8', // 字符集
	
	'TAGLIB_BEGIN'=>'{',
	'TAGLIB_END'=>'}',
	//'SHOW_PAGE_TRACE' =>true, //查看页面的调试动态
	
	'SESSION_AUTO_START' => true,  //开启session
	
	
	'URL_CASE_INSENSITIVE'  =>  true,  //不区分大小写
	//'URL_MODEL'=>3,  //0是普通模式、1是PATHINFO、2是REWRITE重写 3兼容所有，
	'URL_MODEL'=>2,  //0是普通模式、1是PATHINFO、2是REWRITE重写 3兼容所有，
	'MODULE_ALLOW_LIST'    =>  array('Home','Admin'),
	'MULTI_MODULE'         =>  true, //开启多模块访问
	
	'LOG_RECORD' => true // 开启日志记录
);

