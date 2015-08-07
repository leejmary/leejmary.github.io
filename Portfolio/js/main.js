var navHeight = $('nav').outerHeight();

$(document).ready(function() {
	var navOffset = $('nav').offset().top;
	var $navElements = $('nav ul li a');
	$('nav').wrap('<div class="nav-placeholder"></div>');
	$('.nav-placeholder').height(navHeight);

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();

		if (scrollPos >= navOffset) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}

		$navElements.each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
			if (refElement.position().top - 80 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$navElements.removeClass("selected");
				currLink.addClass("selected");
			} else {
				currLink.removeClass("selected");
			}
        });

	});

});

$('a[href^="#"]').click(function(e){
	e.preventDefault();
	var target = this.hash;
	var $target = $(target);

	$('html, body').stop().animate({'scrollTop': $target.offset().top - navHeight + 1}, 900, 'swing', function () {
		window.location.hash = target;
	});
});



