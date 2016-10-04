$(function () {
	var phonenumber=$.cookie("phonenumber")
	$(".register-ph-num").html(phonenumber)
	$(".password1").blur(function() {
		var str=/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/
		if($(this).val().length==0){
			$(".dis_pwd1").css("display","block")
			$(".password1").css("border-color","#ff6700")
			$(".pwdts").css("display","none")
		}else if(!str.test($(this).val())){
			$(".pwdgs").css("display","block")
			$(".password1").css("border-color","#ff6700")
			$(".pwdts").css("display","none")
		}
	});
	$(".password2").blur(function() {
		if($(this).val().length==0){
			$(".dis_pwd2").css("display","block")
			$(".password2").css("border-color","#ff6700")
			$(".pwdts").css("display","none")
		}else if($(this).val()!=$(".password1").val()){
			$(".nosame").css("display","block")
			$(".password2").css("border-color","#ff6700")
			$(".pwdts").css("display","none")
		}
	});
	$(".password1").keydown(function() {
		$(".dis_pwd1").css("display","none")
		$(".password1").css("border-color","#e8e8e8")
		$(".pwdts").css("display","block")
		$(".pwdgs").css("display","none")
		$(".nosame").css("display","none")
		$(".dis_pwd2").css("display","none")
		$(".password2").css("border-color","#e8e8e8")
	});	
	$(".password2").keydown(function() {
		$(".dis_pwd1").css("display","none")
		$(".password1").css("border-color","#e8e8e8")
		$(".pwdts").css("display","block")
		$(".pwdgs").css("display","none")
		$(".nosame").css("display","none")
		$(".dis_pwd2").css("display","none")
		$(".password2").css("border-color","#e8e8e8")
	});	
	$(".btn335").click(function  (argument) {
		if($(".password2").val()==$(".password1").val()&&$(".dis_box").css("display")=="none"){
			$.cookie("useName",phonenumber,{expires:99999})
			$.cookie("passWord",$(".password1").val(),{expires:99999})
			window.location="register3.html"
		}
	})
	//register3
	$(".success").click(function  (argument) {
		window.location="login1.html"
	})
});