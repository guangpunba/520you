<?php
namespace Admin\Controller;
use Think\Controller;
class LoginController extends Controller{

	public function login(){
		
		$this->display();
	}
	
	/*
	 * @todo 用户登录
	 * @param string $username 用户名
	 * @param string $password 用户密码
	 * @return json
	 * */ 
	public function dologin(){
		$master = D('Login');
		$code = $_POST['code'];
		//文字验证
		/*if($this->check_verify($code)){
			$result = $master->getUser();
			if($result != false){
				
				session('userid',$result['id']);
				session('username',$result['username']);
				session('groupid',$result['groupid']);
				
				$reinfo['status'] = '1';
				$reinfo['info'] = '登录成功';
			}else{
				$reinfo['status'] = '2';
				$reinfo['info'] = '用户名或密码不正确';
			}
		}else{
			$reinfo['status'] = '0';
			$reinfo['info'] = '验证码错误';
		}*/
		$result = $master->getUser();
		if($result != false){
			
			session('userid',$result['id']);
			session('username',$result['username']);
			session('groupid',$result['groupid']);
			
			$reinfo['status'] = '1';
			
			$reinfo['info'] = '登录成功';
		}else{
			
			$reinfo['status'] = '2';
			$reinfo['info'] = '用户名或密码不正确';
		}
		$this->ajaxReturn($reinfo,'json');
	}
	/*
	 * 加载验证码
	 * 
	 * */
	/*public function verify(){
		$config =    array(
		    'fontSize'    =>    40,    // 验证码字体大小
		    'length'      =>    4,     // 验证码位数
		    'useNoise'    =>    true, // 关闭验证码杂点
		);
		$Verify =     new \Think\Verify($config);

		$Verify->entry();
		
	}*/
	/*
	 * 检测验证码
	 * */
	/*public function check_verify($code, $id){
		
	    $verify = new \Think\Verify();
	    return $verify->check($code, $id);
	}*/
	/*
	 * 退出登录
	 * */
	public function outlogin(){
		session('userid',null);
		session('username',null);
	    $this->redirect('Index/index');
	}
	
}
