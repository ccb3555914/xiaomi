$(document).ready(function() {
	$(".search-text").click(function  (argument) {
		$(".search-form input").css("border-color","#ff6700")
		$(".keyword-list").css("display","block")
		$(".search-hot-words").css("display","none")
	})
	$(".search-text").blur(function  (argument) {
		$(".search-form input").css("border-color","#e0e0e0")
		$(".keyword-list").css("display","none")
		$(".search-hot-words").css("display","block")
	})
	var str=""
	var str1=""
	var oName=""
	var num=0
	var strznyj=""
	var strdp=""
	var tablistli=""
	var tablistliname=""
	var tabnum=0
	var rightul1str=""
	var usename=window.location.search.replace("?","")
	if(usename!=""){
		$(".user").html("<a href='###'>"+usename+"</a>")
		$(".mydd").css("display","inline-block")
	}
	$.get('js/product01.json',function (data) {
		var datanav=data.nav
		var znyj=data.znyj
		var dp=data.dp
		
		for (var i = 0; i < dp.length; i++) {
			tablistli+="<li>"+dp[i].name+"</li>"
		};
		$(".tab-list").html(tablistli)
		$(".tab-list li:first").addClass('tab-active')
		$(".tab-list li").each(function  (index) {
		$(this).mouseover(function(event) {
			rightul1str=""
			tablistliname=$(this).html()
			for (var i = 0; i < dp.length; i++) {
				if(tablistliname==dp[i].name){
				tabnum=i
				}
			};
			for (var i = 0; i < dp[tabnum].product.length; i++) {
				rightul1str+="<li class='floor_goods_wrap_li'><a class='floor_goods_img'><img src='"+dp[tabnum].product[i].img+"'></a><a class='floor_goods_tit'>"+dp[tabnum].product[i].name+"</a><a class='floor_goods_price'>"+dp[tabnum].product[i].price+"</a><a class='floor_goods_txt'>"+dp[tabnum].product[i].tit+"</a><div class='review-wrapper'> <a href='##'> <span class='review'>"+dp[tabnum].product[i].pl+"</span> <span class='author'> 来自于"+dp[tabnum].product[i].from+"的评价 <span class='date'></span> </span> </a> </div><div class='flag'>"+dp[tabnum].product[i].sale+"</div></li>"
			};
			$(".floor_goods_wrap1 .rightul").html(rightul1str)
			$(".flag").each(function  (i) {
			if($(".flag").eq(i).html()=="新品"){
				$(this).addClass('flag-new')
			}else if($(".flag").eq(i).html()==""){
				$(this).css("display","none")
			}else if($(".flag").eq(i).html()=="免邮费"){
				$(this).addClass('flag-postfree')
			}else{
				$(this).addClass('flag-saleoff')
			}
		})
			$(this).addClass('tab-active')
			$(this).siblings().removeClass('tab-active')
			$(".floor_goods_wrap_li").each(function  (argument) {
				$(this).mouseover(function(event) {
				$(this).find(".review-wrapper").addClass('review-wrapper1')
				});
			})
			$(".floor_goods_wrap_li").each(function  (argument) {
				$(this).mouseleave(function(event) {
				$(".review-wrapper").removeClass('review-wrapper1')
				});
			})
			});

		})
		for (var i = 1; i < znyj.length; i++) {
			strznyj+="<li class='floor_goods_wrap_li'><a class='floor_goods_img'><img src='"+znyj[i].img+"'></a><a class='floor_goods_tit'>"+znyj[i].name+"</a><a class='floor_goods_txt'>"+znyj[i].tit+"</a><a class='floor_goods_price'>"+znyj[i].price+"</a><div class='flag'>"+znyj[i].sale+"</div></li>"
		};
		$(".floor_goods_wrap2 .rightul").html(strznyj)
		$(".flag").each(function  (i) {
			if($(".flag").eq(i).html()=="新品"){
				$(this).addClass('flag-new')
			}else if($(".flag").eq(i).html()==""){
				$(this).css("display","none")
			}else if($(".flag").eq(i).html()=="免邮费"){
				$(this).addClass('flag-postfree')
			}else{
				$(this).addClass('flag-saleoff')
			}
		})
		for (var i = 0; i < datanav.length; i++) {
			str+="<li><span><a href=''>"+datanav[i].name+"</a></span></li>"
		};
		$(".topnavp").html(str)
		$(".topnavlist").mouseleave(function  (event) {
			$(".topnavlist").slideUp();
		})
		$(".topnav").mouseleave(function  (event) {
			$(".topnavlist").slideUp();
		})
		$(".topnavlist").mouseover(function  (event) {
			$(".topnavlist").css("display","block");
		})
		$(".topnavp a").mouseover(function  (argument) {
			$(".topnavlist").slideDown();
			str1=""
			oName=$(this).html()
			for (var i = 0; i < datanav.length; i++) {
				if(oName==datanav[i].name){
					num=i
				}
			};
			for (var i = 0; i < datanav[num].product.length; i++) {
				str1+="<a href='buy.html?"+datanav[num].product[i].id+"'><li><img src='"+datanav[num].product[i].img+"' alt=''><p>"+datanav[num].product[i].name+"</p><p><span>"+datanav[num].product[i].price+"</span></p></li></a>"
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

	var strnav=""
	var navName=""
	var strnavlist1=""
	var strnavlist2=""
	var strnavlist3=""
	var htmlnum="0"
	$.get('js/nav.json',function (data) {
		for (var i = 0; i < data.length; i++) {
			strnav+="<li><p>"+data[i].name+"</p><span class='iconfont navright'>&#xe605;<span></li>"
		}
		$(".nav ul").html(strnav)
		$(".nav p").each(function  (argument) {
			$(this).click(function  (argument) {
				if($(this).html()=="手机 电话卡"){
					htmlnum="01"
				}else if($(this).html()=="电视 盒子"){
					htmlnum="02"
				}else if($(this).html()=="路由器"){
					htmlnum="03"
				}
				window.location="list.html?"+htmlnum
			})
		})
		$(".nav p").mouseover(function  (argument) {
			$(".navlist").css("display","block");
			strnavlist1=""
			strnavlist2=""
			strnavlist3=""
			navName=$(this).html()
			for (var i = 0; i < data.length; i++) {
				if(navName==data[i].name){
					num=i
				}
			};
			for (var i = 0; i < data[num].product.length; i++) {
			strnavlist1+="<li><a href='buy.html?"+data[num].product[i].id+"' title=''><img src='"+data[num].product[i].img+"' alt=''><span class='text'>"+data[num].product[i].name+"</span></a><a class='btn-buy'>选购</a></li>"
				
			}
				for (var i = 6; i < data[num].product.length; i++) {
				strnavlist2+="<li><a href='buy.html?"+data[num].product[i].id+"' title=''><img src='"+data[num].product[i].img+"' alt=''><span class='text'>"+data[num].product[i].name+"</span></a><a class='btn-buy'>选购</a></li>"
			}
				for (var i = 12; i < data[num].product.length; i++) {
				strnavlist2+="<li><a href='buy.html?"+data[num].product[i].id+"' title=''><img src='"+data[num].product[i].img+"' alt=''><span class='text'>"+data[num].product[i].name+"</span></a><a class='btn-buy'>选购</a></li>"
			}			
			//console.log(strnavlist1);
			//console.log(strnavlist2);
			$(".navlist .ul1").html(strnavlist1)
			$(".navlist .ul2").html(strnavlist2)
			$(".navlist .ul3").html(strnavlist3)
			$(".navlist ul").each(function  (argument) {
				if($(this).html()==""){
				$(this).css("display","none")
				}else{
					$(this).css("display","block")
				}
			})
		})
	})
	$(".nav").mouseleave(function(event) {
		$(".navlist").css("display","none")
	});
	$(".navlist").mouseleave(function(event) {
		$(this).css("display","none")
	});
	$(".navlist").mouseover(function(event) {
		$(this).css("display","block")
	});
	var a=0
	var width_mianli=$(".main2scroll li").outerWidth();
	var len1=$(".main2scroll li").length
	$(".main2scroll").css("width",(width_mianli+14)*len1)
	var timer1=setInterval(function  (argument) {
		a++
		if(a%2==0){
			$(".main2scroll").stop().animate({"margin-left":0})
		}else{
			$(".main2scroll").stop().animate({"margin-left":-(width_mianli+14)*5+14})
		}
	},3000)
	

})