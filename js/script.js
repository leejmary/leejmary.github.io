
$(function(){
	$('li').click(function () {
		var dataTabValue = $(this).data('tab');
		$(this).addClass('selected').siblings().removeClass('selected');

		$('.content-area:visible').fadeOut(function () {
			$('.content-area-' + dataTabValue).fadeIn('slow');
		});

	});
});