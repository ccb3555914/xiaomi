$(document).ready(function() {
	var num=window.location.search.replace("?","").split("&")[1]
	var id=window.location.search.replace("?","").split("&")[0]
	var a=0
	var strbanben=""
	var strcolor=""
	var strmsgbd0=""
	var strmsgbd1=""
	var strmsgbd2=""
	var strlb=""
	var strname=""
	$.get('js/list.json', function(data) {
		for (var i = 0; i < data[0].product.length; i++) {
			strname+="<li class='J_item' data-pro='mi5s'><a href='buy.html?"+data[0].product[i].id+"'>"+data[0].product[i].name+"</a></li>"
			if(id==data[0].product[i].id){
				a=i
			}
		};
		$("#J_navBar").html(strname)
		$(".ywb img").attr("src",data[0].product[a].ywb)
		$(".srlj img").attr("src",data[0].product[a].srlj)
		for (var i = 0; i < data[0].product[a].lb.length; i++) {
			strlb+="<li><a href='' style='background:url("+data[0].product[a].lb[i]+") no-repeat center center'></a></li>"
			$("<a>").appendTo($(".slider-nav"))
		};
		$("#scroll_box ul").html(strlb)
		var size=$("#scroll_box li").length;
		$(".slider-nav a").eq(0).addClass("cur")
		var b=0
		function moveLeft() {
            b--;
            if (b == -1) {
                  b = size-1;
            }
            $(".slider-nav a").eq(b).addClass("cur").siblings().removeClass("cur");
            $("#scroll_box ul li").eq(b).fadeIn(300).siblings().fadeOut(300);
        }
        function move() {
            b++;
            if (b == size) {
                b = 0;
            }
            $(".slider-nav a").eq(b).addClass("cur").siblings().removeClass("cur");
            $("#scroll_box ul li").eq(b).fadeIn(300).siblings().fadeOut(300);
        }
		$("#prev").click(function() {
            moveLeft();
        })
        $("#next").click(function() {
            move();
        })
        $(".slider-nav a").click(function() {
            $(this).addClass("cur").siblings().removeClass("cur");
            var index = $(this).index();
            i=index;
            $("#scroll_box ul li").eq(index).fadeIn(300).siblings().fadeOut(300);
        })


		$("#J_proImg").attr({
			src: data[0].product[a].zuhe,
			alt: data[0].product[a].name
		});
		strmsgbd0=data[0].product[a].name
		$(".pro-name").html("购买"+data[0].product[a].name)
		$(".J_proName").html(data[0].product[a].name)
		$(".pro-price").html(data[0].product[a].banben[0].price+"元")
		$(".pro-version-desc").html(data[0].product[a].banben[0].tit)
		for (var i = 0; i < data[0].product[a].banben.length; i++) {
			strbanben+="<li class='J_stepItem' title='"+data[0].product[a].banben[i].banben+"'>"+data[0].product[a].banben[i].banben+"</li>"
		};
		strmsgbd1=data[0].product[a].banben[0].banben
		$(".banbenlist").html(strbanben)
		$(".step-list li:first").addClass('active')
		$(".step-list li").each(function  (index) {
			$(this).click(function  (argument) {
				strmsgbd1=data[0].product[a].banben[index].banben+"&nbsp;"
				$(".pro-price").html(data[0].product[a].banben[index].price+"元")
				$(".pro-version-desc").html(data[0].product[a].banben[index].tit)
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
				$(".msg-bd").html(strmsgbd0+"&nbsp"+strmsgbd1+"&nbsp"+strmsgbd2)
			})
		})
		$(".msg-bd").html(strmsgbd0+"&nbsp"+strmsgbd1)
		for (var i = 0; i <  data[0].product[a].colorimg.length; i++) {
			strcolor+="<li class='J_stepItem' title='"+data[0].product[a].colorimg[i].color+"&nbsp;"+$(".pro-price").html()+"'><img src='img/list/phone/"+data[0].product[a].colorimg[i].id+".jpg' alt=''>&nbsp;"+data[0].product[a].colorimg[i].color+"</li>"
		};
		$(".step-list1").html(strcolor)
		$(".step-list1 li").each(function  (index) {
			$(this).click(function  (argument) {
				$("#J_proImg").attr({
					src: data[0].product[a].colorimg[index].img,
					alt: data[0].product[a].name
				});
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
				$(".btn-dakeLight").addClass('btn-primary')
				$(".btn-dakeLight").html("立即购买")
				strmsgbd2=data[0].product[a].colorimg[index].color+"&nbsp;"+$(".pro-price").html()
				$(".msg-bd").html(strmsgbd0+"&nbsp"+strmsgbd1+"&nbsp"+strmsgbd2)
			})
		})
	});	
	var c=false
	$(".spec-open").click(function(event) {
		c=!c
		if(c){
			$(".arrow").removeClass('arrow1')
			$(".spec-list").css("display","none")
		}else{
			$(".arrow").addClass('arrow1')
			$(".spec-list").css("display","block")
		}
	});
	$(window).scroll( function() { 
		if($(window).scrollTop()>1100){
			$(".header-bar").addClass('header-bar-active')
		}else{
			$(".header-bar").removeClass('header-bar-active')
		}
	 } );
	$(".btn-primary").click(function  (argument) {
		$("html,body").animate({scrollTop:0},"slow")
	})
	if($.cookie("cart")){
		var obj=JSON.parse($.cookie("cart"))
	}else{
		var obj={};
	}

	$(".btn-dakeLight").click(function  (argument) {
		var colortext=$(".active:eq(1)").text().replace(/\s/,"")
		var num=obj[id+$(".active:eq(1)").text()+$(".active:eq(0)").html()]||0;
		var prodId=id+"&"+colortext+"&"+$(".active:eq(0)").html()
		obj[prodId]=++num;
		var objTostr=JSON.stringify(obj)
		$.cookie("cart",objTostr)
		window.location="shopcar.html"
	})
});