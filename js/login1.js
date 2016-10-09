$(document).ready(function() {
	var inputUserName = $.cookie().useName;
	var inPassword = $.cookie().passWord;
	$(".ljdl").click(function  (argument) {
		console.log($(".item_account").val());
		if($(".item_account").val().length==0){
			$(".dis_zh").css("display","block")
			$(".usename").css("border-color","#ff6700")
		}else if($("#pwd").val().length==0){
			$(".dis_mm").css("display","block")
			$(".passw").css("border-color","#ff6700")
		}else if($(".item_account").val()!=inputUserName){
			$(".dis_yhm").css("display","block")
			$(".usename").css("border-color","#ff6700")
		}else if($("#pwd").val()!=inPassword){
			$(".dis_yhmmm").css("display","block")
			$(".usename").css("border-color","#ff6700")
		}
		if($(".item_account").val()==inputUserName&&$("#pwd").val()==inPassword){
			window.location="index.html?"+inputUserName
		}
		return false
	})
	$(".usename").keydown(function() {
		$(".dis_yhmmm").css("display","none")
		$(".dis_yhm").css("display","none")
		$(".dis_zh").css("display","none")
		$(".usename").css("border-color","#e8e8e8")
		$(".dis_mm").css("display","none")
		$(".passw").css("border-color","#e8e8e8")
	});
	$(".passw").keydown(function() {
		$(".dis_yhmmm").css("display","none")
		$(".dis_yhm").css("display","none")
		$(".dis_zh").css("display","none")
		$(".usename").css("border-color","#e8e8e8")
		$(".dis_mm").css("display","none")
		$(".passw").css("border-color","#e8e8e8")
	});
})