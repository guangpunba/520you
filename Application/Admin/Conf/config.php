<?php
//Admin网站相关配置
return array(
	//'配置项'=>'配置值'
	
	/* 模板相关配置 */
    'TMPL_PARSE_STRING' => array(
		
        '__IMG__'    => __ROOT__.'/Public/' . MODULE_NAME . '/dist/images',
        '__CSS__'    => __ROOT__.'/Public/' . MODULE_NAME . '/dist/css',
        '__JS__'     => __ROOT__.'/Public/' . MODULE_NAME . '/dist/js',
		'__FONT__'   => __ROOT__.'/Public/' . MODULE_NAME . '/dist/font',
        '__APP__'    => __ROOT__.'/index.php/'.MODULE_NAME

    ),
    'SESSION_OPTIONS'=>  array('name' => 'userid','expire' =>3600)
);