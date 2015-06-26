
$(function(){
	$('li').click(function () {
		var dataTabValue = $(this).data('tab');
		$(this).addClass('selected').siblings().removeClass('selected');

		$('.content-area:visible').fadeOut(function () {
			$('.content-area-' + dataTabValue).fadeIn('slow');
		});

	});

  	function testAnim(x) {
    $('.fa-heart').removeClass(x + " animated").addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(x);
    	});
  	}

	$(".fa-heart").on("mouseenter", function(e){
		e.preventDefault();
		testAnim("wobble");
	});

});