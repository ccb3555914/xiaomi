$(document).ready(function() {
	$(".doodle1 span").mouseover(function(event) {
		$(".nav").css("display","block")
	});
	$(".doodle1").mouseleave(function(event) {
		$(".nav").css("display","none")
	});
	$(".navlist").mouseleave(function(event) {
		$(".nav").css("display","none")
		$(".navlist").css("display","none")
	});
	$(".nav").mouseleave(function(event) {
		$(".nav").css("display","none")
	});
	$(".nav").mouseover(function(event) {
		$(".nav").css("display","block")
	});
	$(".navlist").mouseover(function(event) {
		$(".nav").css("display","block")
	});
	var a=0
	var strdatanum
	var strname=""
	var str=""
	var strnum=window.location.search.replace("?","")
	var strfooterimg=""
	var strdpyj=""
	$.get('js/list.json', function(data) {
		for (var i = 0; i < data.length; i++) {
			strdatanum=data[i].id
			if(strdatanum==strnum){
				a=i
			}
		};
		if(data[a].xmhome=="true"){
			console.log('1');
			$(".channel-mihone").css("display","block")
		}else{
			console.log('0');
			$(".channel-mihone").css("display","none")
		}
		for (var i = 0; i < data[a].dpyj.length; i++) {
			strdpyj+="<li><a href=''><img src='"+data[a].dpyj[i].img+"' alt='"+data[a].dpyj[i].name+"'></a><dl><dt><a href=''>"+data[a].dpyj[i].name+"</a></dt><dd><a href=';'>"+data[a].dpyj[i].tit+"</a></dd><dd class='price'>"+data[a].dpyj[i].price+"元</dd></dl></li>"
		};
		if(strdpyj==""){
			$(".channel-acces-des").css("display","none")
		}
		$(".channel-acces-list").html(strdpyj)
		for (var i = 0; i < data[a].footerimg.length; i++) {
			strfooterimg+="<p><a href='' title=''><img src='"+data[a].footerimg[i].img+"' alt=''></a></p>"
		};
		$(".section1").html(strfooterimg)
		for (var i = 0; i < 10; i++) {
			strname+="<li><a href=''>"+data[a].product[i].name+"</a></li>"
		};
		strname="<li class='current'><a>选购<span class='what'>手机 · 平板</span></a></li>"+strname
		$(".channel-nav .clearfix").html(strname)
		$(".big").attr("src",data[a].bigimg)
		for (var i = 0; i < data[a].product.length; i++) {
			str+="<li class='span10'><div class='channel-list-img'><a href='##' target='_blank'><img src='"+data[a].product[i].img+"' alt='"+data[a].product[i].name+"'></a></div><div class='channel-list-con clearfix'><dl class='channel-list-des'><dt>"+data[a].product[i].name+" <b>"+data[a].product[i].price+"</b><span>元起</span></dt><dd>"+data[a].product[i].tit+"</dd></dl><p class='channel-list-btn'><a href='' class='btn btn-line-primary'>立即购买</a></p></div></li>"
		};
		$(".row").html(str)
		if(strnum=="01"){
		$(".what").html("手机 · 平板")
		$(".channel-nav li").css("padding","0 35px")
		$(".channel-nav .current").css("padding","0 10px")
		}else if(strnum=="02"){
		$(".what").html("电视 · 盒子")
		$(".section-03").css("display","block")
		$(".section-02").css("display","block")
		}else if(strnum=="03"){
		$(".what").html("路由器 · 智能硬件")
		$(".channel-nav .current").css("padding","0 5px")

		}
	});
});