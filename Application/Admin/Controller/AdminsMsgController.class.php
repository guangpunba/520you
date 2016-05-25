<?php
namespace Admin\Controller;
use Org\Util\Date;

use Think\Controller;
class AdminsMsgController extends IndexController {
	//管理员消息推送首页
    public function index(){
    	$msg = D('admins_msg');
    	
    	$list = $msg->getList();
 		$this->assign('title','管理员消息推送')->assign('list',$list);
    	$this->display();
    }
    //推送
    public function pushMsg(){
    	$msg = D('admins_msg');
    	
    	$admins = $msg->getAdmins($_POST['pushobj']);
    	$comm = A('Common');
    	if(IS_AJAX){
	    	foreach ($admins as $k => $v){
	    		$counts = $msg->getUnRead($v['id']);
	    		$pushobj = $v['id'];
	    		$comm->sendSocket($pushobj,$counts);
	    	}
    	}
      	
    }
	//添加消息页面
    public function addMsg(){
    	$msg = D('admins_msg');
    	
    	if(IS_AJAX){
    		if(!$msg->create()){
	            $this->error($msg->getError());
	        }else{
	        	$result = $msg->addMsg();
	        	if($result) $this->success("推送消息成功"); else $this->error("推送消息失败！");
	            
	        } 
    	}else{
    		$grouplist = $msg->getGroup();
    		$this->assign('title','添加消息')->assign('group',$grouplist);
    		$this->display('add_msg');
    	}
    	
    	
    }
    //消息详情
    public function details(){
    	$msg = D('admins_msg');
    	$userid = session('userid');
    	$result = $msg->getDetails();
    	$counts = $msg->getUnRead($userid);
    	$this->assign('info',$result)->assign('count',$counts);
    	$this->display();
    }
    
    
    
    
    
    
}