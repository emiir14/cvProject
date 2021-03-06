// ==================================== activate animation on scroll ================================0
      
$(window).scroll(function () {
    $('.animation-test').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideRight");
        } else {
            $(this).removeClass("slideRight");
        }
    });
});

$(window).scroll(function () {
    $('.animation-test2').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideLeft");
        } else {
            $(this).removeClass("slideLeft");
        }
    });
});

// =============== SCROLL SECTION BY SECTION ================

(function($) {
	$.fn.sectionsnap = function( options ) {
		var settings = $.extend({
			'delay'				: 100 // time dilay (ms)
			, 'selector'		: ".section" // selector
			, 'reference'		: .9 // % of window height from which we start
			, 'animationTime'	: 400 // animation time (snap scrolling)
			, 'offsetTop'		: 0 // offset top (no snap before scroll reaches this position)
			, 'offsetBottom'	: 0 // offset bottom (no snap after bottom - offsetBottom)
		}, options);		
		
		var $wrapper = this
		, direction = 'down'
		, currentScrollTop = $(window).scrollTop()
		, scrollTimer
		, animating = false;

		// check the direction
		var updateDirection = function() {
			if ($(window).scrollTop() >= currentScrollTop)
				direction = 'down';
			else
				direction = 'up';
			currentScrollTop = $(window).scrollTop();
		}

		// return the closest element (depending on direction)
		var getClosestElement = function() {			
			var $list = $wrapper.find(settings.selector)
			, wt = $(window).scrollTop()
			, wh = $(window).height()
			, refY = wh * settings.reference
			, wtd = wt + refY - 1
			, $target;

			if (window.innerWidth > 700) {
				if (direction == 'down') {
					$list.each(function() {
						var st = $(this).position().top;					
						if ((st > wt) && (st <= wtd)) {
							$target = $(this);
							return false; // just to break the each loop
						}
					});
				} else {
					wtd = wt - refY + 1;
					$list.each(function() {
						var st = $(this).position().top;					
						if ((st < wt) && (st >= wtd)) {
							$target = $(this);
							return false; // just to break the each loop
						}
					});
				}
			}
			return $target;
		}

		// snap
		var snap = function() {
			var $target = getClosestElement();
			if ($target) {
				animating = true;
				$('html, body').animate({
						scrollTop: ($target.offset().top)
					}, settings.animationTime, function() {
						window.clearTimeout(scrollTimer);
						animating = false;
					});
			}
		}
		// on window scroll
		var windowScroll = function() {
			if (animating) 
				return;
			var st = $(window).scrollTop();
			if (st < settings.offsetTop)
				return;
			if (st > ($("html").height() - $(window).height() - settings.offsetBottom))
				return;
			updateDirection();
			window.clearTimeout(scrollTimer);
			scrollTimer = window.setTimeout(snap, settings.delay);
		}
		$(window).scroll(windowScroll);
		return this;
	};
})(jQuery);

$(document).ready(function() {
    $(".section").css("min-height", $(window).height() + "px");
    $(".sections-wrapper").sectionsnap({
        delay : 100
        , selector : '.section'
        , reference : 1
        , animationTime : 600
    });
});

// ====================================== go to seccion by clicking on href  ==========================================

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

// ===================================== back to top button  =====================================

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// ====================================== rotate on click ===================================

$(".rotate").click(function () {
    $(this).toggleClass("down");
});

// ======================================   ===============================









