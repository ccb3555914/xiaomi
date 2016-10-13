$(document).ready(function() {
var cookieObj=JSON.parse($.cookie("cart"))
var arr=[]
var str=""
var num=0
var a=0
var num1=99
for(var key in cookieObj){
	arr.push(key)
}
var num3=arr.length
$.get('js/list.json', function(data) {
	for (var i = 0; i < data[0].product.length; i++) {
	 for (var j = 0; j < arr.length; j++) {
	  if(arr[j].split("&")[0]==data[0].product[i].id){
	   for (var k = 0; k < data[0].product[i].colorimg.length; k++) {
	    if(arr[j].split("&")[1]==data[0].product[i].colorimg[k].color){
	     for (var l = 0; l < data[0].product[i].banben.length; l++) {
	      if(arr[j].split("&")[2]==data[0].product[i].banben[l].banben){
				str+="<div class='item-box'><div class='item-table J_cartGoods'><div class='item-row clearfix'><div class='col col-check'><i class='iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox'>&#xe609;</i></div><div class='col col-img'><a href='//item.mi.com/1162300013.html' target='_blank'><img alt='' src='"+data[0].product[i].colorimg[k].img+"' width='80' height='80'> </a></div><div class='col col-name'><div class='tags'></div><h3 class='name'><a class='' href='//item.mi.com/1162300013.html' target='_blank'>"+data[0].product[i].name+"&nbsp;"+data[0].product[i].colorimg[k].color+"&nbsp;"+data[0].product[i].banben[l].banben+"</a></h3></div><div class='col col-price'><b>"+data[0].product[i].banben[l].price+"</b>元</div><div class='col col-num'><div class='change-goods-num clearfix J_changeGoodsNum'><a href='##' class='J_minus'><i class='iconfont'>&#xe608;</i></a><input tyep='text' name='2162300008_0_buy' value='"+cookieObj[arr[0]]+"'class='goods-num J_goodsNum'><a href='##' class='J_plus'><i class='iconfont'>&#xe607;</i></a></div></div><div class='col col-total'><b>"+data[0].product[i].banben[l].price+"</b>元<p class='pre-info'></p></div><div class='col col-action'><a data-msg='确定删除吗？' href='###' title='删除' class='del J_delGoods'><i class='iconfont'>&#xe606;</i></a></div></div></div><div class='item-sub-box'><div class='extend-buy J_showBaoxian'><i class='iconfont icon-plus'>&#xe607;</i>意外保障服务 "+data[0].product[i].name+" ¥59/份<a href='##'>查看详细条款</a> </div></div></div>"
		  }
	     };
		}
	   };
	}
		};
	};
	$(".list-body").html(str)
	$(".icon-checkbox").each(function  (j) {
		num1=j
		$(this).addClass('icon-checkboxyes')
	})
	$(".icon-checkbox").each(function  (j) {
		var flag=true
		$(this).click(function  (argument) {
			a=0
			flag=!flag
			if(flag){
				$(this).addClass('icon-checkboxyes')
				$("#J_selTotalNum").html($(".icon-checkboxyes").length)
			}else{
				$(this).removeClass('icon-checkboxyes')
				$(".list-head .icon-checkbox").removeClass('icon-checkboxyes')
				$("#J_selTotalNum").html($(".icon-checkboxyes").length)
			}
			$(".icon-checkboxyes").each(function  (i) {
				if(i>num1-2){
					$(".list-head .icon-checkbox").addClass('icon-checkboxyes')
				}
			})
			$(".item-box .icon-checkboxyes").parent().siblings(".col-total").find("b").each(function  (argument) {
			a+=parseInt($(this).html())
			})
			$("#J_cartTotalPrice").html(a+".00")
		})
	})
	var flag=true
	$(".list-head .icon-checkbox").click(function  (argument) {
		a=0
		flag=!flag
		if(flag){
			$(".icon-checkbox").each(function  (argument) {
				$(this).addClass('icon-checkboxyes')
				$(".item-box .icon-checkboxyes").parent().siblings(".col-total").find("b").each(function  (argument) {
				a+=parseInt($(this).html())
				})
				$("#J_cartTotalPrice").html(a+".00")
			})
			$("#J_selTotalNum").html(num3)
		}else{
			$(".icon-checkbox").each(function  (argument) {
				$(this).removeClass('icon-checkboxyes')
				$("#J_cartTotalPrice").html(0+".00")
			})
			$("#J_selTotalNum").html(0)
		}
	})
	$(".J_plus").click(function  (argument) {
		a=0
		num=$(this).parent().find("input").val()
		num++
		$(this).parent().find("input").val(num)
		$(this).parents(".col-num").siblings(".col-total").find("b").html($(this).parents(".col-num").siblings(".col-price").find("b").html()*num)
		$(".item-box .icon-checkboxyes").parent().siblings(".col-total").find("b").each(function  (argument) {
			a+=parseInt($(this).html())
		})
		$("#J_cartTotalPrice").html(a+".00")
	})
	$(".J_minus").click(function  (argument) {
		a=0
		num=$(this).parent().find("input").val()
		num--
		if(num<2){
			num=1
		}
		$(this).parent().find("input").val(num)
		$(this).parents(".col-num").siblings(".col-total").find("b").html($(this).parents(".col-num").siblings(".col-price").find("b").html()*num)
		$(".item-box .icon-checkboxyes").parent().siblings(".col-total").find("b").each(function  (argument) {
			a+=parseInt($(this).html())
		})
		$("#J_cartTotalPrice").html(a+".00")
	})
	$(".item-box .icon-checkboxyes").parent().siblings(".col-total").find("b").each(function  (argument) {
		a+=parseInt($(this).html())
	})
	$("#J_cartTotalPrice").html(a+".00")
	$("#J_cartTotalNum").html(num3)
	$("#J_selTotalNum").html(num3)
});
$(window).scroll( function() { 
	var top=$(".footer-top").offset().top
	console.log(top);
	console.log($(window).height());
	console.log($(".cart-bar").offset().top);
	if($(".cart-bar").offset().top>$(window).height()){
		$(".cart-bar").addClass('cart-bar-fixed')
	}else if($(window).height()>top){
		$(".cart-bar").removeClass('cart-bar-fixed')
	}
} );
});