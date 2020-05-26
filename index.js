// 第一二个a标签
$firstTwoTagA = $(".four-data>div:lt(2)>a");
// 第三四个a标签
$thirdFourthTagA = $(".four-data>div:gt(1)>a");
// 第一二个图片
$firstTwoTagImg = $(".four-data>div:lt(2)>img");
// 第三四个图片
$thirdFourthTagImg = $(".four-data>div:gt(1)>img");
console.log($firstTwoTagImg);
$(window).scroll(function(){
	$scrollTop = $(window).scrollTop();
	if ($scrollTop <=1300){
		// a标签
		$firstTwoTagA.addClass("cur");
		$thirdFourthTagA.addClass("cur");
		// 图片
		$firstTwoTagImg.addClass("cur");
		$thirdFourthTagImg.addClass("cur");
	}else if ($scrollTop >=1800){
		// a标签
		$thirdFourthTagA.removeClass("cur");
		// 图片
		$thirdFourthTagImg.removeClass("cur");
	}else if ($scrollTop >=1300){
		// a标签
		$firstTwoTagA.removeClass("cur");
		$thirdFourthTagA.addClass("cur");
		// 图片
		$firstTwoTagImg.removeClass("cur");
		$thirdFourthTagImg.addClass("cur");
	}
});
