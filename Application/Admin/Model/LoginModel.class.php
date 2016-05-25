<?php
namespace Admin\Model;
use Think\Model;
class LoginModel extends Model{
	protected $tableName = 'master'; 
	protected $_validate = array(
     	
     	array('username','require','请填写用户名',1,'',4),  // 只在登录时候验证
     	array('psw','require','请填写密码',1,'',4), // 只在登录时候验证
    );
	public function getUser(){
		$username = $_POST['username'];
		$password = md5($_POST['psw']);
		
		$where['username'] = array('eq',$username);
		$where['password'] = array('eq',$password);
		$where['status'] = array('eq',1);
		$result = $this->where($where)->find();
		
		return $result;
		
	}
} 