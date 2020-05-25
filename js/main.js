$( document ).ready(function() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1000);
	    return false;
	});

	$('.browsers-slider').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  cssEase: 'linear',
	  slidesToShow: 1,
	  autoplay: true,
	  adaptiveHeight: true,
	});

});

