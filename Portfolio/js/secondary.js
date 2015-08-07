var navHeight = $('nav').outerHeight();

$(document).ready(function() {
	var navOffset = $('nav').offset().top;
	var $navElements = $('nav ul li a');
	$('nav').wrap('<div class="nav-placeholder"></div>');
	$('.nav-placeholder').height(navHeight);

	$(window).scroll(function() {
		var scrollPos = $(this).scrollTop();

		if (scrollPos >= navOffset) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}

		$('header .title').css('transform', 'translate(-50%, -' + (50 + (scrollPos / 1.8)) + '%');


		if (scrollPos > $('.project').offset().top + ($(window).height() / 33)) {
				$(".process img").addClass("is-showing");
		}

		if (scrollPos > $('.role').offset().top + ($(window).height() / 33)) {
			$('.additional-images img').each(function(i) {
				setTimeout(function() {
					$('.additional-images img').eq(i).addClass('is-showing');
					}, 300 * (i+1));

				});
			}
	});
});




//TODO--Ensure that the website is JS-free compatible, in that, have images display by default, and only through JS are they made invisible.











