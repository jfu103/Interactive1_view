// Sticky Header

$(document).ready(function(){
//	$(window).scroll(function() {
//	  if ($(window).scrollTop() > 100) {
//		$(".main_h").addClass("sticky");
//	  } else {
//		$(".main_h").removeClass("sticky");
//	  }
//	});
//
//	// Mobile Navigation
//	$(".mobile-toggle").click(function() {
//	  if ($(".main_h").hasClass("open-nav")) {
//		$(".main_h").removeClass("open-nav");
//	  } else {
//		$(".main_h").addClass("open-nav");
//	  }
//	});
//
//	$(".main_h li a").click(function() {
//	  if ($(".main_h").hasClass("open-nav")) {
//		$(".navigation").removeClass("open-nav");
//		$(".main_h").removeClass("open-nav");
//	  }
//	});
//
//	// navigation scroll lijepo radi materem
//	$("nav a").click(function(event) {
//	  var id = $(this).attr("href");
//	  var offset = 70;
//	  var target = $(id).offset().top - offset;
//	  $("html, body").animate(
//		{
//		  scrollTop: target
//		},
//		500
//	  );
//	  event.preventDefault();
//	});
	
	
	$('a').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	
})
