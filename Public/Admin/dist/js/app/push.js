define(["jquery","socketIO"],function(n,o){var t=o("http://"+document.domain+":2120"),e=n("#uid").val();t.on("connect",function(){t.emit("login",e)}),t.on("update_online_count",function(o){n("#online_box").html(o)}),t.on("new_msg",function(o){""!=o&&n("#msgCounts").html(o)})});