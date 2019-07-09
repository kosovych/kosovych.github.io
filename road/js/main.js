$('#header-menu-btn').on('click', function () {
	$('#header-menu-btn').toggleClass('active');
	$('#header-nav').toggleClass('active');
});

$('.asphalt-type__label').on('click', function (ev) {
	$('.asphalt-type__label').removeClass('active');
	$(this).addClass('active');
});