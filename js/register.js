window.onload=function  (argument) {
	var inputUserName = $.cookie().inputUserName;
	var inPassword = $.cookie().inPassword;
	$(document).ready(function() {
		//var remember=location.search.replace(/\?/,"")
		var Checked = $.cookie().choice;
		if(Checked=="checked"){
			$("#checked").prop("checked",true)
			$("#username").val($.cookie().username);
		}
	});
	
	$("#username").blur(function  (argument) {
		if($("#username").val()!=inputUserName){
			$("#username").val("用户名不存在")
			$(this).parent().addClass('has-error has-feedback').append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
	})
	$("#inputPassword").blur(function  (argument) {
		if($("#inputPassword").val()!=inPassword){
			$(this).parent().addClass('has-error has-feedback').append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		}
	})
	for (var i = 0; i < $("input").length; i++) {
			$("input").eq(i).on("focus",function  (argument) {
				$(this).parent().removeClass('has-error has-feedback')
				$(this).next().remove();
			})
		};
}