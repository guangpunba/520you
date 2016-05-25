<?php
namespace Admin\Controller;
use Think\Controller;
class CommonController extends Controller{
	
	/**
	 +----------------------------------------------------------
	 * 分页函数 支持sql和数据集分页 sql请用 buildSelectSql()函数生成
	 +----------------------------------------------------------
	 * @access public
	 +----------------------------------------------------------
	 * @param array   $result 排好序的数据集或者查询的sql语句
	 * @param int       $totalRows  每页显示记录数 默认21
	 * @param string $listvar    赋给模板遍历的变量名 默认list
	 * @param string $parameter  分页跳转的参数
	 * @param string $target  分页后点链接显示的内容id名
	 * @param string $pagesId  分页后点链接元素外层id名
	 * @param string $template ajaxlist的模板名
	 * @param string $url ajax分页自定义的url
	 +----------------------------------------------------------
	 */
	public function ajaxPage($param) {
		extract($param);
		vendor('AjaxPage.AjaxPage');
		
		//总记录数
		$listvar = $listvar ? $listvar : 'list';
		$listRows = $listRows? $listRows : 21;
		if ($flag)
			$totalRows = M()->table($result . ' a')->count();
		else
			$totalRows = ($result) ? count($result) : 1;
		//创建分页对象
		if ($target && $pagesId)
			$p = new \AjaxPage($totalRows, $listRows, $parameter, $url,$target, $pagesId);
		else
			$p = new \AjaxPage($totalRows, $listRows, $parameter,$url);
		//抽取数据
		if ($flag) {
			$result .= " LIMIT {$p->firstRow},{$p->listRows}";
			$voList = M()->query($result);
		} else {
			$voList = array_slice($result, $p->firstRow, $p->listRows);
		}
		$pages = C('PAGE');//要ajax分页配置PAGE中必须theme带%ajax%，其他字符串替换统一在配置文件中设置，
		//可以使用该方法前用C临时改变配置
		foreach ($pages as $key => $value) {
			$p->setConfig($key, $value); // 'theme'=>'%upPage% %linkPage% %downPage% %ajax%'; 要带 %ajax%
		}
		//分页显示
		$page = $p->show();
		//模板赋值
		$this->assign($listvar, $voList);
		$this->assign("page", $page);
		if (IS_AJAX) {//判断ajax请求
			layout(false);
			$template = (!$template) ? 'ajaxlist' : $template;
			exit($this->fetch($template));
		}
		return $voList;
	}
	/*
	 * @param string $uid 指明给谁推送，为空表示向所有在线用户推送
	 * @param string $data 推送的内容
	 * return string 成功：'ok',失败：'fail'
	 **/
	public function sendSocket($uid,$data){
		// 指明给谁推送，为空表示向所有在线用户推送
		$to_uid = $uid;
		// 推送的url地址，上线时改成自己的服务器地址
		$push_api_url = "http://localhost:2121/";
		$post_data = array(
		   "type" => "publish",
		   "content" => $data,
		   "to" => $to_uid, 
		);
		$ch = curl_init ();
		curl_setopt ( $ch, CURLOPT_URL, $push_api_url );
		curl_setopt ( $ch, CURLOPT_POST, 1 );
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, $post_data );
		$return = curl_exec ( $ch );
		curl_close ( $ch );
		var_export($return);
	}

}
