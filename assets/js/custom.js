$(document).ready(function(){

	// Scroll-btn
	$('.scroll-tp').click(function(){
		$('html,body').animate({
			scrollTop:0
		}, 1000);

		return false;
	});
	$('.scroll-btm').click(function(){
		$('html,body').animate({
			scrollTop:750
		}, 1000);

		return false;
	});


	// Owl-Carousel
	$('.team-items').owlCarousel({
		items:4,
		loop:true,
		autoplay:true,
		dots:false,
		nav:true,
		margin:20,
		responsive:{
			0:{
            	items:1
       		 },
       		577:{
            	items:2
        	},
      		768:{
            	items:3
       		},
       		1200:{
            	items:4
       		 }
    	}

	})


	// Owl-Carousel
	$('.testimonials-area').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		nav:true,
	})

	// Owl_carousel
	$('.client').owlCarousel({
		items:4,
		loop:true,
		autoplay:true,
		dots:false,
		nav:true,
		autoplayTimeout:1500,
		responsive:{
			0:{
            	items:1
       		 },
       		577:{
            	items:2
        	},
      		768:{
            	items:4
       		}
    	}
	})
	


	// Pop Up
	$('.work-popup').magnificPopup({
		type:'image',
		gallery: {
    		enabled: true
  	}
	})

	// Mobaile Menu
	$('.nav-icon').click(function(){
		$('.header-menu ul').slideToggle(1000)

		return false;
	})
	

	// progresss bar 
    $('svg.radial-progress').each(function( index, value ) { 
     $(this).find($('circle.complete')).removeAttr( 'style' );
   });

   $(window).scroll(function(){
     $('svg.radial-progress').each(function( index, value ) { 
       // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
       if ( 
           $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
           $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
       ) {
           // Get percentage of progress
           percent = $(value).data('percentage');
           // Get radius of the svg's circle.complete
           radius = $(this).find($('circle.complete')).attr('r');
           // Get circumference (2πr)
           circumference = 2 * Math.PI * radius;
           // Get stroke-dashoffset value based on the percentage of the circumference
           strokeDashOffset = circumference - ((percent * circumference) / 100);
           // Transition progress for 1.25 seconds
           $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
       }
     });
   }).trigger('scroll');

})




$(window).scroll(function(){
	var scrollValue = $(this).scrollTop();
	if(scrollValue>698){
        $('.header-menu-area').addClass('FixedHeader');
    }else{
        $('.header-menu-area').removeClass('FixedHeader');
    }
});