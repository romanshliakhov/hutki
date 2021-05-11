$('.burger__inner').click(function (event) {
	$('.burger__inner').toggleClass('burger__inner-active'),
		$('.burger__body').toggleClass('burger__body-active');
	$('.menu').toggleClass('menu--none');
});

// lightGallery
lightGallery(document.getElementById('aniimated-thumbnials'), {
	thumbnail: true,
	fullScreen: true,
});


// stock slider
$(function () {
	$('.stock__slider-inner').slick({
		prevArrow: '.stock__arrow-prev',
		nextArrow: '.stock__arrow-next',
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		// variableWidth: true 
		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			},
		]
	});
});

// last video slider
$(function () {
	$('.latest__slider-inner').slick({
		prevArrow: '.latest__arrow-prev',
		nextArrow: '.latest__arrow-next',
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		// variableWidth: true  
		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			},
		]
	});
});

// last news slider
$(function () {
	$('.carsnews__slider-inner').slick({
		prevArrow: '.carsnews__arrow-prev',
		nextArrow: '.carsnews__arrow-next',
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		// variableWidth: true 
		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			},
		]
	});
});

// cars card slider 
$(function () {
	$('.car__slider-inner').slick({
		prevArrow: '.car__arrow-prev',
		nextArrow: '.car__arrow-next',
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		dots: false,
		asNavFor: '.car__preview-inner',
		responsive: [{
			breakpoint: 575,
			settings: {
				dots: true,
			}
		}, ]

	});

	$('.car__preview-inner').slick({
		arrows: false,
		dots: false,
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.car__slider-inner',
		focusOnSelect: true,
		variableWidth: false,
		responsive: [{
				breakpoint: 1199,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
		]
	});

});


// parts card slider
$(function () {
	$('.spares__slider-inner').slick({
		arrows: false,
		dots: false,
		asNavFor: '.spares__preview-inner',
	});

	$('.spares__preview-inner').slick({
		arrows: false,
		dots: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.spares__slider-inner',
		focusOnSelect: true,
		variableWidth: false,
		responsive: [{
				breakpoint: 769,
				settings: {
					vertical: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 575,
				settings: {
					vertical: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},

		]
	});

});

// counter start
const counter = function () {
	const btns = document.querySelectorAll('.spares__conter-btn');

	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			const direction = this.dataset.direction;
			const inp = this.parentElement.querySelector('.spares__counter-value');
			const currentValue = +inp.value;
			let newValue;

			if (direction === 'plus') {
				newValue = currentValue + 1;
			} else {
				newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
			}

			inp.value = newValue;
		})
	})
}

counter();

// tabs start
$(function () {
	$('.galery__tab').on('click', function (e) {
		e.preventDefault();
		$('.galery__tab').removeClass('galery__tab-active');
		$('.galery__content').removeClass('galery__tab--active');

		$($(this).attr('href')).addClass('galery__tab--active');
		$(this).addClass('galery__tab-active');
	});
});


// accordion start
$('.filter__header').click(function () {
	$(this).next('.filter__body').slideToggle();
})
// accordion end

// accordion filters start
$('.catalog__mob-header').click(function () {
	$(this).next('.catalog__mob-body').slideToggle();
})
// accordion end

// accordion menu start
$('.parts__mob-header').click(function () {
	$(this).next('.parts__mob-body').slideToggle();
})
// accordion end

// menu overlay 
$('.border__block').hover(function () {
	$(this).prev().toggleClass('border__block--none')
})

$('.menu__main').hover(function () {
	$('.overlay').toggleClass('overlay--display')
});


// 
const child = $('.main-nav__child');

$(child).hover(function () {
	$(this).toggleClass('main-nav__child--active');
	($('.scroll__img')[this.dataset.id]).classList.toggle('scroll__img--active');
});


$(".polzunok-5").slider({
	min: 0,
	max: 100000,
	values: [15000 , 80000],
	range: true,
	animate: "fast",
	slide: function (event, ui) {
		$(".polzunok-input-5-left").val(ui.values[ 0 ].toLocaleString('EUR')  + "€");   
		$(".polzunok-input-5-right").val(ui.values[ 1 ].toLocaleString('EUR')  + "€"); 
	}
});



$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0).toLocaleString('EUR') + "€");
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1).toLocaleString('EUR') + "€");
$(document).focusout(function() {
	var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),	
	opt_left = $(".polzunok-5").slider("option", "min"),
	where_right = $(".polzunok-5").slider("values", 1),
	input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),	
	opt_right = $(".polzunok-5").slider("option", "max"),
	where_left = $(".polzunok-5").slider("values", 0); 
	if (input_left > where_right) { 
		input_left = where_right; 
	}
	if (input_left < opt_left) {
		input_left = opt_left; 
	}
	if (input_left == "") {
		input_left = 0;	
	}		
	if (input_right < where_left) { 
		input_right = where_left; 
	}
	if (input_right > opt_right) {
		input_right = opt_right; 
	}
	if (input_right == "") {
		input_right = 0;	
	}	
	$(".polzunok-5").slider( "values", [ input_left, input_right ] );	
	$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0).toLocaleString('EUR') + "€");
	$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1).toLocaleString('EUR') + "€");	
});























