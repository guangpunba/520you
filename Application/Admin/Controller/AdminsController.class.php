<?php
namespace Admin\Controller;
use Think\Controller;
class AdminsController extends IndexController {
	//账号管理首页
    public function index(){
       $Admins = D('Admins');
       $list = $Admins->getAdmins();
       $title = '账号管理';
       $this->assign('title',$title);
       $this->assign('list',$list);	
       $this->display();
       
    }
    //添加账号页面
    public function addAccount(){
    	$Admins = D('Admins');
    	$groupname = $Admins->getGroupname();
    	if(IS_AJAX){
    		$data = $_POST;	//post传递的所有数据
	    	$data['original'] = $data['password']; //原始密码
	    	$data['password'] = md5($data['password']); //加密密码
	    	$data['createdate'] = time();
	    	if(!$Admins->create()){
	            $this->error($Admins->getError());
	        }else{
	        	//$Admins->createdate = 123;
	            $result=$Admins->add($data);
	            if($result) $this->success("添加账号成功"); else $this->error("添加账号失败！");
	        }  
    	}else{
    		$this->assign('groupname',$groupname);
    		$this->display('add_account');
    	}
    	
    	
    }
    //编辑账号界面
    public function editAccount(){
    	$Admins = D('Admins');
    	$info = $Admins->getInfo();
	    $groupname = $Admins->getGroupname();
    	if(IS_AJAX){
    		$data = $_POST;
    		
    		if(!$Admins->create()){
    			$this->error($Admins->getError());
    		}else{
    			$data['original'] = $data['password']; 
    			$data['password'] = md5($data['password']);
    			$where['id'] = array('eq',$data['id']);
    			$result=$Admins->where($where)->save($data);
    			$reinfo = array();
    			if($result){
    				$reinfo['status'] = 1;
    				$reinfo['info'] = '编辑账号成功';
    			}else{
    				$reinfo['status'] = 2;
    				$reinfo['info'] = '编辑账号成功';
    			}
    			$this->ajaxReturn($reinfo,'JSON');
    		}
    	}else{
    		$this->assign('groupname',$groupname);
	    	$this->assign('info',$info);
    	}
    	$this->display('edit_account');
    }
    //删除账号
    public function delAccount(){
    	$Admins = D('Admins');
    	$data['status'] = 0;
    	$where['id'] = I('post.id');
    	$result = $Admins->where($where)->save($data);
    	
    	if($result){
    		$this->success("删除账号成功");
    	}else{
    		$this->error("删除账号失败！");
    	}
    }
 
}