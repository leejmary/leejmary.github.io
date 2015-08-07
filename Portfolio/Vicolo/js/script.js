$(document).ready(function () {

	//SCROLL TO INTERNAL LINKS
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
		
		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({'scrollTop': $target.offset().top}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

	//SCROLL TO TOP OF PAGE
	$(document).scroll(function () {
		var bodyScrollTop = $('body').scrollTop();
		if (bodyScrollTop > 500 && $(window).width() >= 1200) {
			$('.scroll-to-top').fadeIn('fast');
		} else {
			$('.scroll-to-top').fadeOut('fast');
		}
	});

	$('.scroll-to-top').click(function () {
		$('body').animate({ scrollTop: 0 });
	});

	//CUSTOM TOURS TOGGLE SLIDE
	$('#tours .button').click(function () {
		$('#custom-tour').slideToggle();
		$(this).find('i').toggleClass('fa-chevron-right fa-chevron-down');
	});

	//BXSLIDER
	var width = $(document).width();

	var slider = false,
		bxSlider;

	var sliderView = function(width) {
		if (width <= 720 && slider === false) {
			bxSlider = $('.bxslider').bxSlider({
				mode: 'horizontal',
				auto: false,
				controls: false,
				adaptiveHeight: true,
				infiniteLoop: false
			});
			slider = true;
		} else if (width > 720 && slider === true) {
			bxSlider.destroySlider();
			slider = false;
		}
	};

	sliderView(width);

	$(window).resize(function() {
		width = $(document).width();
		sliderView(width);
	});

});


