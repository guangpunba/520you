<?php if (!defined('THINK_PATH')) exit(); if(empty($list)): ?><div align="center" style="padding:20px 0; font-size:18px;">暂无数据</div>
<?php else: ?>

<table class="am-table am-table-bd am-table-striped admin-content-table">
    <thead>
        <tr>
          <th>序号</th>
          <th>标题</th>
          <th>所属分类</th>
          <th>创建时间</th>
          <th>是否推荐</th>
          <th>浏览量</th>
          <th>管理</th>
          
        </tr>
    </thead>
    <tbody>

        <?php if(is_array($list)): $k = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?><tr data-id='<?php echo ($vo["newsid"]); ?>'>
          <td><?php echo ($k); ?></td>
          <td><?php echo ($vo["title"]); ?></td>
          <td><?php echo ($vo["typename"]); ?></td> 
          <td><?php echo ($vo["createdate"]); ?></td>
          <td>
            <?php if(($vo["recommended"]) == "1"): ?><span class="am-badge am-badge-danger">推荐</span><?php endif; ?>
            <?php if(($vo["recommended"]) == "0"): ?><span class="am-badge">不推荐</span><?php endif; ?>
          </td>
          <td><?php echo ($vo["views"]); ?></td>
          <td>
            <div class="am-dropdown" data-am-dropdown>
              <button class="am-btn am-btn-default am-btn-xs am-dropdown-toggle" data-am-dropdown-toggle><span class="am-icon-cog"></span> <span class="am-icon-caret-down"></span></button>
              <ul class="am-dropdown-content">
                  <li><a href="<?php echo U('News/editNews',array('id'=>$vo['newsid']));?>" >1. 编辑</a></li>
                  <li><a href="javascript:;" class='delbtn'>2. 删除</a></li>
              </ul>
            </div>
          </td>
        
        </tr><?php endforeach; endif; else: echo "" ;endif; ?>
    </tbody>
</table>

  <!-- 分页 start-->
  <div class="dataTables_paginate paging_full_numbers" id="ajaxPage">
      <span><?php echo ($page); ?></span>
    </div>
  <!-- 分页 end --><?php endif; ?>