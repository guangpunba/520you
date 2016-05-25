<?php
namespace Admin\Model;
use Think\Model;
class AdminsMsgModel extends Model{
	
	protected $_validate = array(
		 //array(验证字段1,验证规则,错误提示,[验证条件（0 存在字段就验证（默认），1 必须验证，2 值不为空的时候验证）,附加规则,验证时间（1新增数据时候验证，2编辑数据时候验证，3全部情况下验证（默认））])
	     array('title','require',array('field' =>'title','tipsinfo' => '请填写标题！')), //默认情况下用正则进行验证
	     array('title','3,20',array('field' =>'title','tipsinfo' => '字符长度在3~20之间'),2,'length',3), //验证字符长度
	     array('pushobj','require',array('field' =>'pushobj','tipsinfo' => '请选择类型')) //默认情况下用正则进行验证
	   );
	//获取信息列表
	public function getList(){
		$where['status'] = array('eq',1);
		//$list = $this->where($where)->select();
		$userid = $_GET['userid'];
		
		if(isset($userid)){
			$field = array('gp_admins_msg.id as mid','title','createtime','createby','read');
			$where['userid'] = $userid;
			$list = $this->join( 'gp_admins_msg_read On gp_admins_msg_read.msgid=gp_admins_msg.id')->where($where)->field($field)->order('createtime desc')->select();
		}else{
			$field = array('gp_admins_msg.id as mid','title','groupname','createtime','createby');
			$list = $this->join( 'gp_groupmanager On gp_groupmanager.groupid=gp_admins_msg.pushobj')->where($where)->field($field)->order('createtime desc')->select();
		}
		
		return $list;
	}
	   
	   
	   
	//获取管理员组
	public function getGroup(){
		$group = M('groupmanager');
		$result = $group->select();
		return $result;
	
	}   
	//添加信息
	public function addMsg(){
		$read = M('admins_msg_read');
		$data = $_POST;	//post传递的所有数据
		$data['createtime'] = time();
	    $data['createby'] = session('username');
	    $result=$this->add($data);
	    if($result){
	    	$groupid = $_POST['pushobj'];
	    	$adminsList = $this->getAdmins($groupid);
	    	//添加是否已读数据
	    	$readData['msgid'] = $result;
	    	foreach ($adminsList as $k => $v){
	    		$readData['userid'] = $v['id'];
	    		$lastid = $read->add($readData);
		    	if(!$lastid){
		    		exit();
		    	}
	    	}
	    	return $result;
		}else{
	    	return false;
	    }
	}   
	
	/*
	 * 查询管理组成员列表
	 * @param string $groupid 分组id
	 * 
	 * return array;
	 * */
	public function getAdmins($groupid){
		$master = M('master');
		$where['groupid'] = $groupid;
		$where['status'] = array('eq',1);
		$list = $master->where($where)->field('id')->select();
		return $list;
		
	
	}   
	/*
	 * 获取未读信息数量
	 * @param string $userid 用户id
	 * 
	 * return int;
	 * */   
	public function getUnRead($userid){
		$read = M('admins_msg_read');
		$where['userid'] = $userid;
		$where['read'] = array('eq',1);
		$count = $read->where($where)->count();
		
		return $count;
	
	}
	
	//获取消息详情
    public function getDetails(){
    	$mid = $_GET['mid'];
    	if(isset($mid)){
    		//将未读改成已读
    		$read = M('admins_msg_read');
    		$userid = session('userid');
    		$whereRead['userid'] = $userid;
    		$whereRead['msgid'] = $mid;
    		$data['read'] = 2;
    		$result = $read->where($whereRead)->save($data);
    		//查找数据
    		$where['id'] = $mid;
    		$info = $this->where($where)->find();
    		
    	}else{
    		throw_exception('参数错误');    
    	}
    	
    	
    	return $info;
    }
}
