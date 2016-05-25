<?php
/**
 * @todo 			module
 * @copyright 		ruizhi
 * @author 			yangguangpu
 * @version 		1.0
 * @Date:           2015-4-15
**/

//验证账号是否合法
function checkUsername($username){
	$preg='/^[\w\_]{5,20}$/u';//英文、数字、下划线5-20位字符
	if(!preg_match($preg,$username)){
		return false;
	}else{
		return true;
	}
}
?>