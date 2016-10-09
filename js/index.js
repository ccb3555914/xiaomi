$(document).ready(function() {
	var str=""
	var str1=""
	var oName=""
	var num=0
	var usename=window.location.search.replace("?","")
	if(usename!=""){
		$(".user").html("<a href='###'>"+usename+"</a>")
		$(".mydd").css("display","inline-block")
	}
	$.get('js/product01.json',function (data) {
	for (var i = 0; i < data.length; i++) {
		str+="<li><span><a href=''>"+data[i].name+"</a></span></li>"
	};
	//var str="<img src='"+data[0].product[0].img+"' alt=''>"
	$(".topnavp").html(str)
	$(".topnavlist").mouseout(function  (event) {
		console.log('1');
		$(".topnavlist").slideUp();
		var e = window.event || event;
		if ( e.stopPropagation ){
		e.stopPropagation();
		}else{
		window.event.cancelBubble = true;
		}
		
	})
	$(".topnavp a").mouseover(function  (argument) {
		$(".topnavlist").slideDown();
		str1=""
		oName=$(this).html()
		for (var i = 0; i < data.length; i++) {
			if(oName==data[i].name){
				num=i
			}
		};
		for (var i = 0; i < data[num].product.length; i++) {
			str1+="<li><img src='"+data[num].product[i].img+"' alt=''><p>"+data[num].product[i].name+"</p><p><span>"+data[num].product[i].price+"</span></p></li>"
		};
		$(".topnavlist ul").html(str1)
	})
	});
	$.get("js/banner.json",function(data) {
		$.each(data,function  (index,value) {
			$("<li><a href='' style='background:url("+value+") no-repeat center center'></a></li>").appendTo("#scroll_box ul");
			$("<a>").appendTo($(".slider-nav"))
		})
		 $("#scroll_box li:first-child").clone().appendTo(".clearfix1")
		var $ul=$("#scroll_box ul")
		var $li=$("#scroll_box li")
		console.log($li);
		var len=$("#scroll_box li").length;
		var perWidth=$li.outerWidth();
		$ul.css("width",perWidth*len);
		$li.css("width",perWidth);
		$(".slider-nav a").eq(0).addClass("cur")
		var i=0;
		var timer=setInterval(move,3000)
		function move (argument) {
			i++;
			if(i==-1){
				i=len-2
				$ul.css("margin-left",-perWidth*(len-1));
			}
			if(i==(len-1)){
				$(".slider-nav a").eq(0).addClass("cur").siblings().removeClass();
			}
			if(i==len){
				i=1
				$("#scroll_box ul").css("margin-left",0)
			}
			$ul.stop().animate({"margin-left":-perWidth*i});
			$(".slider-nav a").eq(i).addClass("cur").siblings().removeClass();
		}
		$("#next").click(function  (argument) {
			clearInterval(timer);
			move();
			timer=setInterval(move, 3000)
		})
		$("#prev").click(function  (argument) {
			clearInterval(timer);
			i=i-2;
			move();
			timer=setInterval(move, 3000)
		})
		$(".slider-nav a").hover(function  (argument) {
			clearInterval(timer)
			i=$(this).index()-1;
			move()
		},function  (argument) {
			timer=setInterval(move(),3000)
		})
	})
	$("#scroll_box .btn").each(function  (argument) {
		$(this).mouseover(function  (argument) {
		$(this).css("background","rgba(0, 0, 0, .5)")
		})
	})
	$("#scroll_box .btn").mouseout(function  (argument) {
		$("#scroll_box .btn").css("background","")
	})
})