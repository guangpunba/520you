<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {
	/**
	 *  @todo 判断session是否存在
	 */
	function _initialize() {
		$userid = session('userid');
		if(empty($userid) || !isset($userid)){
			$this->redirect('Login/login');
			
		}
		//获取未读信息条数
		$msg = D('admins_msg');
    	$userid = session('userid');
		$counts = $msg->getUnRead($userid);
        $this->assign('count',$counts);
		/*$obj = M('viewhours');
		$data['webtype'] = CONTROLLER_NAME.'/'.ACTION_NAME;
		$data['starttime'] = time();
		$result = $obj->add($data);*/
	}
	
    public function index(){
       $title = '芝士大学后台管理系统';
       $this->assign('title',$title);
       $this->display();
    }
}