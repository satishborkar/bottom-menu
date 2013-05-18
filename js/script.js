/* Author: Satish Borkar

 */

$(document).ready(function() {
	var $page = $('#container');
	var $footer = $('footer');
	var $content = $('#main');
	//$page.hide();
	$page.animate({
		left : "0%"
	}, 1500);
	$content.delay(1800).fadeIn();
	$footer.delay(2200).fadeIn().animate({
		bottom : "0px"
	}, 1000);


	$(window).scroll($.debounce(250, true, function() {
		$('footer nav').fadeOut();
	}));
	$(window).scroll($.debounce(250, function() {
		$('footer nav').fadeIn();
	}));

})

