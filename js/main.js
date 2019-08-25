$(window).load(function () {
	$(".before-after").twentytwenty({
		before_label: 'Со скинали', // Set a custom before label
		after_label: 'Без сканали' // Set a custom after label
	});
	$(".before-slider").slick({
		draggable: false,
		dots: true,
		dotsClass: 'before-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});
	//верхнее меню
	$('.menu-button').on('click', function() {
		$('.menu').toggleClass('menu_active');
	});

	$('.menu-button').on('click', function(cross) {
		cross.preventDefault;
		$('.burger-menu').toggleClass('burger-menu-active');
	});



	/* Настройка select */
	$('.select__checked').on('click', function() {
		$('.select__dropdown').toggleClass('select__dropdown_open');
	});
	$('.select__option').on('click', function() {
		var value = $(this).attr('data-value');
		$('#select-type').val(value);
		$('.select__checked').text(value);
		$('.select__dropdown').toggleClass('select__dropdown_open');
	});

	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top -100 + "px" });
		return false;
	});

	$('input[type="tel"]').mask("+38 (999) 999-99-99");

});

$(document).ready(function(){
	$(".review-slider").slick({
		arrows: false,
		centerMode: true,
		centerPadding: "20px",
	});
});


