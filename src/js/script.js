$(document).ready(function(){
	$('.carousel__inner').slick({
		/* dots: true, */ /* кружочки внизу */
		infinite: true, /* бесконечная прокрутка */
		speed: 1200, /* скорость прокрутки */
		slidesToShow: 1, /* сколько показывать слайдов */
		adaptiveHeight: true, /* автоматическая подстройка высоты */
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				dots: true,
				arrows: false
			  }
			}
		]
	});
  });