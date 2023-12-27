(function($) {

	'use strict';

	/**
	 	<=={Master JS}==>
	 	01 - Mobile Menu JS
		02 - Header Sticky JS
		03 - Partner Slider JS
		04 - Services JS
		05 - Testimonial Slider JS
		06 - Popup JS
		07 - Back To Top JS
		08 - Preloader JS
		09 - WOW JS
		10 - Counter JS
		11 - Mixitup JS
		12 - Gallery JS
	**/

	/**<<=== 01 Mobile Menu JS ==>>**/
	$('#mobile-menu-active').mobileMenus();
	$('#mobile-menu-active .has-children > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".mobile-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('open');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".menu-slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.mobile-menu').removeClass('open');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".menu-slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.mobile-menu').removeClass('open');
	});
	
	/**<<=== 02 Header Sticky JS ==>>**/
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar').addClass("is-sticky");
		}
		else{
			$('.navbar').removeClass("is-sticky");
		};
	});

	/**<<=== 03 Partner Slider JS ==>>**/
	$('.partner-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		autoplay: true,
		smartSpeed: 800,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>",
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 4,
			},
			1500: {
				items: 4,
			},
		},
	});

	/**<<=== 04 Testimonial Slider JS ==>>**/
	$('.testimonial-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		smartSpeed: 800,
		autoplayHoverPause: true,
		center: true,
		navText: [
			"<i class='icofont-long-arrow-left'></i>",
			"<i class='icofont-long-arrow-right'></i>",
		],
	});

	/**<<=== 05 Popup JS ==>>**/
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	/**<<=== 06 Back To Top JS ==>>**/
	$('.back-to-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" }, 50);
	});
	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.back-to-top').addClass('active');
		if (scrolled < 300) $('.back-to-top').removeClass('active');
	});

	/**<<=== 07 Preloader JS ==>>**/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	}) 

	/**<<=== 08 WOW JS ==>>**/
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	/**<<=== 09 Counter JS ==>>**/
    $('.counter').counterUp({
        time: 1000
    });

	/**<<=== 10 Mixitup JS ==>>**/
	try {
		var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

		var mixer = mixitup(containerEl, {
			selectors: {
				target: '[data-ref~="mixitup-target"]'
			}
		});
	} catch (err) {}

	/**<<=== 11 Gallery JS ==>>**/
	$('.gallery-popup').each(function() {
		$(this).magnificPopup({
			delegate: '.img', 
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});

	/**<<=== 12 Password JS ==>>**/
	$(".toggle-password").click(function() {

		$(this).toggleClass("fa-eye icofont-eye-blocked");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
		  	input.attr("type", "password");
		}
	});

	/**<<=== 13 Active Un active JS ==>>**/
	var sectionIds = $('#list-example a');
	$(document).scroll(function(){
		sectionIds.each(function(){
			var container = $(this).attr('href');
			var containerOffset = $(container).offset().top;
			var containerHeight = $(container).outerHeight();
			var containerBottom = containerOffset + containerHeight;
			var scrollPosition = $(document).scrollTop();
	
			if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
				$(this).addClass('active');
			} else{
				$(this).removeClass('active');
			}
		});
	});

	/**<<=== 24 Count Down JS ==>>**/
	var time = $('.count-down');
    if (time.length) {
      var endDate = new Date(time.data("end-date"));
      time.countdown({
        date: endDate,
			render: function (data) {
			$(this.el).html('<div class="cd-row"><div><h1>' + this.leadingZeros(data.days, 3)
				+ '</h1><p>days</p></div><div><h1>'
				+ this.leadingZeros(data.hours, 2)
				+ '</h1><p>hrs</p></div></div><div class="cd-row"><div><h1>'
				+ this.leadingZeros(data.min, 2)
				+ '</h1><p>min</p></div><div><h1>'
				+ this.leadingZeros(data.sec, 2)
				+ '</h1><p>sec</p></div></div>');
			}
      	});
    }

	/**<<=== 15 Curt BTN JS ==>>**/
	$(".minus").click(function () {
		var $input = $(this).parent().find(".box");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$(".plus").click(function () {
		var $input = $(this).parent().find(".box");
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

})(jQuery);
