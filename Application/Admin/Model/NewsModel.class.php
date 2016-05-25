<?php
namespace Admin\Model;
use Think\Model;
class NewsModel extends Model{
	
	protected $_validate = array(
		 //array(验证字段1,验证规则,错误提示,[验证条件（0 存在字段就验证（默认），1 必须验证，2 值不为空的时候验证）,附加规则,验证时间（1新增数据时候验证，2编辑数据时候验证，3全部情况下验证（默认））])
	     array('title','require',array('field' =>'title','tipsinfo' => '请填写标题！')), //默认情况下用正则进行验证
	     array('title','6,20',array('field' =>'title','tipsinfo' => '字符长度在6~20之间'),2,'length',3), //验证字符长度
	     array('type','require',array('field' =>'type','tipsinfo' => '请选择类型')) //默认情况下用正则进行验证
	      
	     
	   );
	
	//获取新闻列表
	public function getNewsList(){
		$where['status'] = array('eq',1);
	
		$field = array('gp_news.id as newsid',title,views,recommended,createdate,'name as typename');
		$list = $this->join( 'gp_dictionary On gp_dictionary.id=gp_news.type')->where($where)->field($field)->order('createdate desc')->select();
		/*foreach ($list as $k => $v){
			$dictionary_where['id'] = $v['type'];
			$result = $dictionary->where($dictionary_where)->find();
			$list[$k]['typename'] = $result['name'];
		}*/
		foreach ($list as $k => $v){
			$list[$k]['createdate'] = date('Y-m-d H:i:s', $v['createdate']);
			
		}
		return $list;
	}
 
	   
	//获取新闻类型列表
	public function getType(){
		$dictionary = M('dictionary');
		$where['status'] = array('eq',1);
		$where['type']	 = array('eq','newtype');
		$result = $dictionary->where($where)->select();
		if($result !== false){
			return $result;
		}
		
		
		
		
	}
	//添加新闻
	public function addNews(){
		$data = $_POST;	//post传递的所有数据
	    $data['createdate'] = time();
	    $data['createby'] = session('username');
	    $result = $this->add($data);
	    return $result;
	}
	//编辑新闻：获取新闻内容
	public function getInfo(){
		$newid = I('get.id');
		if(!isset ($newid) || empty($newid)){
            $reinfo['flag'] = 0;
        }else{
        	$where['id'] = array('eq',$newid);
			$info = $this->where($where)->find();
            $reinfo['flag'] = 1;
            $reinfo['info'] = $info;
        }
		return $reinfo;
	}
	/**
	 * @todo 查找关键字
	 * @param string   $keyword 关键字 
	 * return array
	 */
	public function getSearch(){
		$keyword = I('request.keyword');
		
		$where['title'] = array('like','%'.$keyword.'%');
		$where['status'] = array('eq',1);
		$result = $this->where($where)->select();
		foreach ($result as $k => $v){
			//替换查找的字符串
			$result[$k]['title'] = str_replace($keyword, "<span class='am-text-danger'>".$keyword."</span>", $v['title']);
			$result[$k]['createdate'] = date('Y-m-d H:i:s', $v['createdate']);
			
		}
		return $result;
	}
}
