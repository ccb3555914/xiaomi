$(document).ready(function() {
	var uname=$.cookie("useName")
	//手机号
	$("#phone").blur(function () {
		var mob=$("#phone").val();
	  	var str = /(1[3-9]\d{9}$)/
	  	if(mob.length==0){
	  		$(".dis_nophone").css("display","block")
	  		$(this).css("border-color","#ff6700")
	  	}else if(!str.test(mob)){
	  		$(".dis_phone").css("display","block")
	  		$(this).css("border-color","#ff6700")
	  	}else if(uname==mob){
	  		$(".dis_samephone").css("display","block")
	  		$(this).css("border-color","#ff6700")
	  	}
	});
	$("#phone").keydown(function() {
		$(".dis_nophone").css("display","none")
		$(".dis_phone").css("display","none")
		$(".dis_samephone").css("display","none")
	  	$(this).css("border-color","#e8e8e8")
	});
	//验证码
	function randomWord () {
		var str=""
	 	var	arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	 	for(var i=0;i<5;i++){
	 		str+=arr[Math.round(Math.random() * (arr.length-1))]
	 	}
	 	return str
	} 
	$(".yzm").html(randomWord())
	$(".yzm").click(function() {
		$(".yzm").html(randomWord())
		var num=Math.ceil(Math.random()/2*10);
		$(".yzm").css("background","url(img/yzm"+num+".jpg)")
	});
	$("#syzm").blur(function() {
		if($(this).val().length==0){
			$("#dis_erroryzm").css("display","block")
			$("#syzm").css("border-color","#ff6700")
		}
	});
	$("#syzm").keydown(function() {
		$("#dis_yzm").css("display","none")
		$("#dis_erroryzm").css("display","none")
		$("#syzm").css("border-color","#e8e8e8")
	});		
	$(".btn332").click(function  (argument) {
		if($("#phone").val().length==0){
			$(".dis_nophone").css("display","block")
	  		$("#phone").css("border-color","#ff6700")
		}else if($("#syzm").val().toLowerCase()!=$(".yzm").html().toLowerCase()){
			$("#dis_yzm").css("display","block")
			$("#syzm").css("border-color","#ff6700")
		}else{
			$.cookie("phonenumber",$("#phone").val())
			window.location="register1.html"
		}
	})
})