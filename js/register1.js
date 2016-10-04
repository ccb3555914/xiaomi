$(function () {
	var min=60
	var num5=0
	function random(argument) {
		var num=0
		var arr=[]
		for (var i = 0; i <5; i++) {
			num=Math.floor(Math.random()*10)
			arr.push(num)
		};
		num5=arr.join("")
		return  num5
	}
	var start=setInterval(function  (argument) {
		alert(random())
		clearInterval(start)
	},1000)
	var timer=setInterval(t1,1000)
	function t1() {
		min--
		$(".remain").html("重新发送("+min+")")
		$(".remain").addClass('disabled')
		if(min==0){
			clearInterval(timer)
			$(".remain").html("重新发送")
			$(".remain").removeClass('disabled')
		}
	}
	$(".remain").click(function  (argument) {
		min=60
		timer=setInterval(t1,1000)
		alert(random())
	})
	$(".btn335").click(function  (argument) {
		if($(".re1yzm").val()!=num5){
			$(".dis_yzmgq").css("display","block")
			$(".re1yzm").css("border-color","#ff6700")
		}
	})
	$(".re1yzm").keydown(function() {
		$(".dis_yzmgq").css("display","none")
		$(".re1yzm").css("border-color","#e8e8e8")
	});	
	$(".back1").click(function  (argument) {
		window.location="register.html"
	})
});