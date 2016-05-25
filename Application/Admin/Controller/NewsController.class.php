<?php
namespace Admin\Controller;
use Think\Controller;
class NewsController extends IndexController {
	//新闻管理首页
    public function index(){
    	$this->assign('title','新闻管理');
        $this->display();
       
    }

	//加载新闻列表
	public function getNewsList(){
		$news = D('news');
		$list = $news->getNewsList();
		//分页
		if(false !== $list){
			//分页
	        $param = array (
	            'result' => $list, //分页用的数组或sql
	            'listvar' => 'list' , //分页循环变量
	            'listRows' => '10' , //每页记录数
	            'parameter' => "" , //url分页后继续带的参数
	            'target' => 'listInfo' , //ajax更新内容的容器id，不带#  片段的载体id
	            'pagesId' => 'ajaxPage' , //分页的  页面元素id   如<div id="ajax_page">
	            'template' => 'list_page' );//ajax更新模板
			//$obj_comm = new \Home\Controller\CommonController();
			$obj_comm = A('Common');
	        $obj_comm->ajaxPage($param );
	    }else{
	    	$this->error("参数错误");
	    }
	}
	//添加新闻页面
    public function addNew(){
    	$news = D('News');
    	$newstype = $news->getType();
    	if(IS_AJAX){
    		
	    	if(!$news->create()){
	            $this->error($news->getError());
	        }else{
	        	$result=$news->addNews();
	            // if($result) $this->success("添加新闻成功"); else $this->error("添加新闻失败！");
	            if($result){
	      			$this->success("添加新闻成功"); 
	            }else{
	            	$this->error("添加新闻失败！");
	            }
	        }  
    	}else{
    		
    		$this->assign('newstype',$newstype);
    		$this->display('add_new');
    	}
    	
    	
    }
    //编辑新闻
    public function editNews(){
    	$news = D('News');
    	$redata = $news->getInfo();
    	$newstype = $news->getType();
    	if(IS_AJAX){
    		$data = $_POST;
    		if(!$news->create()){
    			$this->error($news->getError());
    		}else{
    			$where['id'] = array('eq',$data['id']);
    			$result = $news->where($where)->save($data);
    			$reinfo = array();
    			if($result){
    				$reinfo['status'] = 1;
    				$reinfo['info'] = '编辑新闻成功';
    			}else{
    				$reinfo['status'] = 2;
    				$reinfo['info'] = '编辑新闻成功';
    			}
    			$this->ajaxReturn($reinfo,'JSON');
    			
    		}
    		
    	}else{
    		if($redata['flag'] == 1){
    			$this->assign('info',$redata['info'])->assign('newstype',$newstype);
    			$this->display('edit_new');
    		}else{
    			$this->error("参数错误");
    		}
    		
    	}
    	
    }
	//删除新闻
    public function delNew(){
    	$news = D('News');
    	$data['status'] = 0;
    	$where['id'] = I('post.id');
    	$result = $news->where($where)->save($data);
    	
    	if($result){
    		$this->success("删除账号成功");
    	}else{
    		$this->error("删除账号失败！");
    	}
    }
    
    //获取搜索列表
    public function getSearchList(){
    	$news = D('News');
    	$list = $news->getSearch();
    	$keyword = I('request.keyword');
   		//分页
		if(false !== $list){
			//分页
	        $param = array (
	            'result' => $list, //分页用的数组或sql
	            'listvar' => 'list' , //分页循环变量
	            'listRows' => '2' , //每页记录数
	            'parameter' => 'keyword='.$keyword , //url分页后继续带的参数
	            'target' => 'listInfo' , //ajax更新内容的容器id，不带#  片段的载体id
	            'pagesId' => 'ajaxPage' , //分页的  页面元素id   如<div id="ajax_page">
	            'template' => 'list_page' );//ajax更新模板
			//$obj_comm = new \Home\Controller\CommonController();
			$obj_comm = A('Common');
	        $obj_comm->ajaxPage($param );
	    }else{
	    	$this->error("参数错误");
	    }
    }
    
    
    
    
    
    
    
}