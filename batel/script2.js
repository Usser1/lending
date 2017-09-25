(function ($) {
var hwSlideSpeed = 400;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
	$('.slides').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;

	slideCount = $("#sl .slides").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.slides').eq(slideNum).fadeOut(hwSlideSpeed);
		if(arrow == "right"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "left")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slides').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		$(".control-slides.active").removeClass("active");
		$('.control-slides').eq(slideNum).addClass('active');
		}
if(hwNeedLinks){
var $linkArrow = $('<a id="leftbutton" href="#">&lt;</a><a id="rightbutton" href="#">&gt;</a>')
	.prependTo('#sl');		
	$('#rightbutton').click(function(){
		animSlide("right");
		return false;
		})
	$('#leftbutton').click(function(){
		animSlide("left");
		return false;
		})
}
	
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout;}
			}
	
	rotator();
});
})(jQuery);