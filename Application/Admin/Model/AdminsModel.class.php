<?php
namespace Admin\Model;
use Think\Model;
class AdminsModel extends Model{
	protected $tableName = 'master'; 
	protected $_validate = array(
		 //array(验证字段1,验证规则,错误提示,[验证条件（0 存在字段就验证（默认），1 必须验证，2 值不为空的时候验证）,附加规则,验证时间（1新增数据时候验证，2编辑数据时候验证，3全部情况下验证（默认））])
	     array('username','require',array('field' =>'username','tipsinfo' => '请填写账号名称！')), //默认情况下用正则进行验证
	     array('username','',array('field' =>'username','tipsinfo' => '此帐号已被注册！'),0,'unique',1), // 字段是否唯一
	     //array('username','checkUsername','账号格式不正确',2,'callback',3,array('username')), //验证是否合法
	     array('username','checkUsername',array('field' =>'username','tipsinfo' => '账号格式不正确'),2,'function',3), //验证是否合法
	     array('password','require',array('field' =>'pwd','tipsinfo' => '请填写密码！')), //默认情况下用正则进行验证
	     array('password','6,20',array('field' =>'pwd','tipsinfo' => '密码长度在6~20之间'),2,'length',3), //验证字符长度
	     array('repassword','require',array('field' =>'repwd','tipsinfo' => '请填写确认密码！')), //默认情况下用正则进行验证
	     array('repassword','password',array('field' =>'repwd','tipsinfo' => '填写的密码不一致'),0,'confirm'), // 验证确认密码是否和密码一致
	   );
	//获取管理员列表
	public function getAdmins(){
	
		$where['status'] = array('eq',1);
		$field = array(id,username,groupname,createdate);
		$result = $this->join( 'gp_groupmanager On gp_groupmanager.groupid=gp_master.groupid')->where($where)->field($field)->order('groupname desc')->select();
		if($result !== false){
			foreach ($result as $k => $v){
				$result[$k]['createdate'] = date('Y-m-d H:i:s', $v['createdate']);
			}
		}
		return $result;
		
		
		
	}
	//获取管理组列表
	public function getGroupname(){
		$groupmanager = M('groupmanager');
		$where['status'] = array('eq',1);
		$list = $groupmanager->where($where)->select();
		return $list;
	}
	//获取账号信息（编辑页面）
	public function getInfo(){
		$where['id'] = I('get.id');
		$info = $this->where($where)->find();
		return $info;
	}
	
}
