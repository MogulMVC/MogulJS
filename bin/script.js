//Speed

/* Needs Matching */
var speedFast = 125;
var speedNorm = 250;
var speedSlow = 500; 

//Color

var mono_1 = '#0a0a0a';
var mono_1_2 = '#141414'; /* Will Fix Later */
var mono_1_3 = '#232323'; /* Will Fix Later */
var mono_2 = '#323232';
var mono_3 = '#646464';
var mono_4 = '#969696';
var mono_4_2 = '#c8c8c8'; /* Will Fix Later */
var mono_5 = '#e6e6e6';
var mono_6 = '#ffffff';
		
var red_1 = '#960000';
var red_2 = '#fa0000';
var red_3 = '#f07373';
var red_4 = '#890c0c';
		
var orange_1 = '#963c00';
var orange_2 = '#fa6400';
var orange_3 = '#f0a573';
var orange_4 = '#8c4110';
		
var yellow_1 = '#969600';
var yellow_2 = '#fafa00'; //Change to #fac800 after redesign
var yellow_3 = '#f0f073';
var yellow_4 = '#8b8b0e';
		
var green_1 = '#009600';
var green_2 = '#00fa00';
var green_3 = '#73f073';
var green_4 = '#0d8a0d';
		
var blue_1 = '#004b96';
var blue_2 = '#007dfa';
var blue_3 = '#73b2f0';
var blue_4 = '#104e8c';
		
var violet_1 = '#4b0096';
var violet_2 = '#7d00fa';
var violet_3 = '#b273f0';
var violet_4 = '#4a0c89';
		
var outline = mono_3;
var outline_down = mono_2;
		
//Visual
		
var rounded = '3px'; //Same size as CSS
var rounded_large = '2em';(function($) {

	$.fn.MButtonUpload = function(param) {
		
	};
	
})(jQuery); (function($) {

	$.fn.MComboBox = function(param) {
		
	};
	
})(jQuery); (function($) {

	$.fn.MHTMLAnimate = function(html, speed, callback) {

		return this.each(function() {

			var element = $(this);

			var current = {
				width : element.width() + 'px',
				height : element.height() + 'px'
			};

			var final = {
				width : this.style.width,
				height : this.style.height
			};

			element.html(html);

			var next = {
				width : element.width() + 'px',
				height : element.height() + 'px'
			};

			element.css(current).animate(next, speed, function() {
				element.css(final);
				if ($.isFunction(callback)) {
					callback();
				};
			});

		});

	};

})(jQuery);
//Manages the prompts attribute.

(function() {

	$("input").attr("autocomplete", "off");
	
	//
  
    $("[prompt]").each(function(index){
    
    //Set the prompt
    var originalPrompt = $(this).attr("prompt");
    
    $(this).val(originalPrompt);
    
    //Set the focus
    $(this).focus(function(){
      
      var currentPrompt = $(this).val();
      
      if(currentPrompt == originalPrompt){
	$(this).val("");
      }
      
    });
  
    //Set the blur
    $(this).blur(function(){
      
      var currentPrompt = $(this).val();
      
      if(currentPrompt == ""){
	$(this).val(originalPrompt);
      }
      
    });
    
  });

//

  
    $("[promptPassword]").each(function(index){
    
    //Set the prompt
    var originalPrompt = $(this).attr("promptPassword");
    
    $(this).val(originalPrompt);
    
    //Set the focus
    $(this).focus(function(){
      
      var currentPrompt = $(this).val();
      
      if(currentPrompt == originalPrompt){
	$(this).val("");
	this.type = "password";
      }
      
    });
  
    //Set the blur
    $(this).blur(function(){
      
      var currentPrompt = $(this).val();
      
      if(currentPrompt == ""){
	$(this).val(originalPrompt);
	this.type = "text";
      }
      
    });
    
  });


})(); //Accepts a width and height. If height isn't set it will be automatic.
//Also can have a modal background.

(function($) {

	$.fn.MComboBox = function(param) {
		
	};
	
})(jQuery); (function($) {

	$.fn.MProgressBar = function(param) {
		
	};
	
})(jQuery); (function($) {

	$.fn.Class = function(param) {
		
	};
	
})(jQuery); 

$(window).resize(function() {

	sidebarMenuPlaceholderHeight();
	sidebarMenuTop();

	var windowHeight = $(window).height();
	var headerHeight = $("#MHeader").height();
	var toolbarHeight = $("#MToolbar").height();

	if (isNaN(headerHeight)) {
		headerHeight = 0;
	}

	if (isNaN(toolbarHeight)) {
		toolbarHeight = 0;
	}

	var sidebarHeight = windowHeight - headerHeight - toolbarHeight;
	$("#MSidebar").css("top", headerHeight + toolbarHeight);
	$("#MSidebar").css("height", sidebarHeight);

});

function sidebarMenuPlaceholderHeight() {

	if (document.getElementById("MSidebarMenuFixed")) {

		/*Placeholder height*/
		var sidebar_menu_fixed_height = $("#MSidebarMenuFixed").height();
		$("#MSidebarMenuFixedPlaceholder").height(sidebar_menu_fixed_height);

	}
}

function sidebarMenuTop() {

	if (document.getElementById("MSidebarMenuFixed")) {

		/*Top Position*/
		var headerHeight = $("#MHeader").height();
		var toolbarHeight = $("#MToolbar").height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolbarHeight)) {
			toolbarHeight = 0;
		}

		var sidebarMenuTop = headerHeight + toolbarHeight;

		$("#MSidebarMenuFixed").css("top", sidebarMenuTop);

	}

}

function sidebarRightShow() {

	sidebarScale();

	$("#MSidebarContainer").animate({
		minWidth : 352
	}, speedNorm);
	$("#MSidebar").animate({
		right : 0
	}, speedNorm);
	$(".MIconArrowLeft").hide();
}

function sidebarRightHide() {
	$("#MSidebarContainer").animate({
		minWidth : 0
	}, speedNorm);
	$("#MSidebar").animate({
		right : -360
	}, speedNorm);
	$(".MIconArrowLeft").show();
}

function sidebarLeftShow() {

	sidebarScale();

	$("#MSidebarContainer").animate({
		minWidth : 352
	}, speedNorm);
	$("#MSidebar").animate({
		left : 0
	}, speedNorm);
	$(".MIconArrowRight").hide();
}

function sidebarLeftHide() {
	$("#MSidebarContainer").animate({
		minWidth : 0
	}, speedNorm);
	$("#MSidebar").animate({
		left : -360
	}, speedNorm);
	$(".MIconArrowRight").show();
}

function sidebarTriggerIndicatorSet() {
	if (document.getElementById("MSidebarTriggerLeft") && !document.getElementById("MSidebarTriggerLeftIndicator")) {
		$("#MSidebarTriggerLeft").append('<div id="MSidebarTriggerLeftIndicator"></div>');
	}

	if (document.getElementById("SidebarTriggerRight") && !document.getElementById("SidebarTriggerRightIndicator")) {
		$("#SidebarTriggerRight").append('<div id="SidebarTriggerRightIndicator"></div>');
	}
}

function sidebarTriggerProximity(event) {

	sidebarTriggerIndicatorSet();

	var mouseX = event.pageX;
	var windowWidth = $(window).width();

	//Distace away that the indicator should show, in px
	var indicationDistanceStart = 150;

	//Left
	if (document.getElementById("MSidebarTriggerLeftIndicator")) {

		var indicatorWidth = $("#MSidebarTriggerLeftIndicator").width();

		if (mouseX < indicationDistanceStart && mouseX != 0) {
			var percentAwayDecimal = mouseX / indicationDistanceStart;
			var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
			$("#MSidebarTriggerLeftIndicator").css("left", indicatorCSSLeft);
		} else {
			$("#MSidebarTriggerLeftIndicator").css("left", -indicatorWidth);
		}

	}

	//Right
	if (document.getElementById("SidebarTriggerRightIndicator")) {

		var indicatorWidth = $("#SidebarTriggerRightIndicator").width();

		if (mouseX > windowWidth - indicationDistanceStart && mouseX != windowWidth) {
			var percentAwayDecimal = (windowWidth - mouseX) / indicationDistanceStart;
			var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
			$("#SidebarTriggerRightIndicator").css("right", indicatorCSSLeft);
		} else {
			$("#SidebarTriggerRightIndicator").css("right", -indicatorWidth);
		}

	}

}(function($) {

	$.fn.Class = function(param) {
		
	};
	
})(jQuery); (function($) {

	$.fn.MSystemMessage = function(text, type) {
		
	};
	
})(jQuery); (function($) {

	$.fn.MTab = function(param) {
		
	};
	
})(jQuery); (function($) {

	function maybeCall(thing, ctx) {
		return ( typeof thing == 'function') ? (thing.call(ctx)) : thing;
	};

	function Tip(element, options) {
		this.$element = $(element);
		this.options = options;
		this.enabled = true;
		this.fixTitle();
	};

	Tip.prototype = {
		show : function() {
			var title = this.getTitle();
			if (title && this.enabled) {
				var $tip = this.tip();

				$tip.find('.MTipInner')[this.options.html ? 'html' : 'text'](title);
				$tip[0].className = 'MTip';
				// reset classname in case of dynamic gravity
				$tip.remove().css({
					top : 0,
					left : 0,
					visibility : 'hidden',
					display : 'block'
				}).prependTo(document.body);

				var pos = $.extend({}, this.$element.offset(), {
					width : this.$element[0].offsetWidth,
					height : this.$element[0].offsetHeight
				});

				var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight, gravity = maybeCall(this.options.gravity, this.$element[0]);

				var tp;
				switch (gravity.charAt(0)) {
					case 'N':
						tp = {
							top : pos.top + pos.height + this.options.offset,
							left : pos.left + pos.width / 2 - actualWidth / 2
						};
						break;
					case 'S':
						tp = {
							top : pos.top - actualHeight - this.options.offset,
							left : pos.left + pos.width / 2 - actualWidth / 2
						};
						break;
					case 'E':
						tp = {
							top : pos.top + pos.height / 2 - actualHeight / 2,
							left : pos.left - actualWidth - this.options.offset
						};
						break;
					case 'W':
						tp = {
							top : pos.top + pos.height / 2 - actualHeight / 2,
							left : pos.left + pos.width + this.options.offset
						};
						break;
				}

				if (gravity.length == 2) {
					if (gravity.charAt(1) == 'W') {
						tp.left = pos.left + pos.width / 2 - 15;
					} else {
						tp.left = pos.left + pos.width / 2 - actualWidth + 15;
					}
				}

				$tip.css(tp).addClass('MTip' + gravity);
				$tip.find('.MTipArrow')[0].className = 'MTipArrow MTipArrow' + gravity.charAt(0);
				if (this.options.className) {
					$tip.addClass(maybeCall(this.options.className, this.$element[0]));
				}

				if (this.options.fade) {
					$tip.stop().css({
						opacity : 0,
						display : 'block',
						visibility : 'visible'
					}).animate({
						opacity : this.options.opacity
					});
				} else {
					$tip.css({
						visibility : 'visible',
						opacity : this.options.opacity
					});
				}
			}
		},

		hide : function() {
			if (this.options.fade) {
				this.tip().stop().fadeOut(function() {
					$(this).remove();
				});
			} else {
				this.tip().remove();
			}
		},

		fixTitle : function() {
			var $e = this.$element;
			if ($e.attr('title') || typeof ($e.attr('original-title')) != 'string') {
				$e.attr('original-title', $e.attr('title') || '').removeAttr('title');
			}
		},

		getTitle : function() {
			var title, $e = this.$element, o = this.options;
			this.fixTitle();
			var title, o = this.options;
			if ( typeof o.title == 'string') {
				title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
			} else if ( typeof o.title == 'function') {
				title = o.title.call($e[0]);
			}
			title = ('' + title).replace(/(^\s*|\s*$)/, "");
			return title || o.fallback;
		},

		tip : function() {
			if (!this.$tip) {
				this.$tip = $('<div class="MTip"></div>').html('<div class="MTipArrow"></div><div class="MTipInner shadow_large"></div>');
			}
			return this.$tip;
		},

		validate : function() {
			if (!this.$element[0].parentNode) {
				this.hide();
				this.$element = null;
				this.options = null;
			}
		},

		enable : function() {
			this.enabled = true;
		},
		disable : function() {
			this.enabled = false;
		},
		toggleEnabled : function() {
			this.enabled = !this.enabled;
		}
	};

	$.fn.MTip = function(options) {

		if (options === true) {
			return this.data('MTip');
		} else if ( typeof options == 'string') {
			var tip = this.data('MTip');
			if (tip)
				tip[options]();
			return this;
		}

		options = $.extend({}, $.fn.MTip.defaults, options);

		function get(ele) {
			var tip = $.data(ele, 'MTip');
			if (!tip) {
				tip = new Tip(ele, $.fn.MTip.elementOptions(ele, options));
				$.data(ele, 'MTip', tip);
			}
			return tip;
		}

		function enter() {
			var tip = get(this);
			tip.hoverState = 'in';
			if (options.delayIn == 0) {
				tip.show();
			} else {
				tip.fixTitle();
				setTimeout(function() {
					if (tip.hoverState == 'in')
						tip.show();
				}, options.delayIn);
			}
		};

		function leave() {
			var tip = get(this);
			tip.hoverState = 'out';
			if (options.delayOut == 0) {
				tip.hide();
			} else {
				setTimeout(function() {
					if (tip.hoverState == 'out')
						tip.hide();
				}, options.delayOut);
			}
		};

		if (!options.live)
			this.each(function() {
				get(this);
			});

		if (options.trigger != 'manual') {
			var binder = options.live ? 'live' : 'bind', eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus', eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
			this[binder](eventIn, enter)[binder](eventOut, leave);
		}

		return this;

	};

	$.fn.MTip.defaults = {
		className : null,
		delayIn : 0,
		delayOut : 0,
		fade : false,
		fallback : '',
		gravity : 'n',
		html : false,
		live : false,
		offset : 0,
		opacity : 1,
		title : 'title',
		trigger : 'hover'
	};

	// Overwrite this method to provide options on a per-element basis.
	// For example, you could store the gravity in a 'tip-gravity' attribute:
	// return $.extend({}, options, {gravity: $(ele).attr('tip-gravity') || 'n' });
	// (remember - do not modify 'options' in place!)
	$.fn.MTip.elementOptions = function(ele, options) {
		return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
	};

	$.fn.MTip.autoNS = function() {
		return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 'S' : 'N';
	};

	$.fn.MTip.autoWE = function() {
		return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'E' : 'W';
	};

	/**
	 * yields a closure of the supplied parameters, producing a function that takes
	 * no arguments and is suitable for use as an autogravity function like so:
	 *
	 * @param margin (int) - distance from the viewable region edge that an
	 *        element should be before setting its tooltip's gravity to be away
	 *        from that edge.
	 * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
	 *        if there are no viewable region edges effecting the tooltip's
	 *        gravity. It will try to vary from this minimally, for example,
	 *        if 'sw' is preferred and an element is near the right viewable
	 *        region edge, but not the top edge, it will set the gravity for
	 *        that element's tooltip to be 'se', preserving the southern
	 *        component.
	 */
	$.fn.MTip.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {
				ns : prefer[0],
				ew : (prefer.length > 1 ? prefer[1] : false)
			}, boundTop = $(document).scrollTop() + margin, boundLeft = $(document).scrollLeft() + margin, $this = $(this);

			if ($this.offset().top < boundTop)
				dir.ns = 'N';
			if ($this.offset().left < boundLeft)
				dir.ew = 'W';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin)
				dir.ew = 'E';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin)
				dir.ns = 'S';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};

})(jQuery);
(function(window) {

	function MColor() {
	}

	MColor.fadeHex = function(hex, hex2, ratio) {
		var r = hex >> 16;
		var g = hex >> 8 & 0xFF;
		var b = hex & 0xFF;

		r += ((hex2 >> 16) - r) * ratio;
		g += ((hex2 >> 8 & 0xFF) - g) * ratio;
		b += ((hex2 & 0xFF) - b) * ratio;

		return (r << 16 | g << 8 | b);
	}

	window.MColor = MColor;

})(window); (function(window) {

	function MLoad() {
	}

	MLoad.js = function(url) {
		var headID = document.getElementsByTagName('head')[0];
		var scriptNode = document.createElement('script');
		scriptNode.src = url;
		headID.appendChild(scriptNode);
	}

	MLoad.css = function(url) {
		var headID = document.getElementsByTagName('head')[0];
		var cssNode = document.createElement('link');
		cssNode.href = url;
		cssNode.type = 'text/css';
		cssNode.rel = 'stylesheet';
		headID.appendChild(cssNode);
	}

	window.MLoad = MLoad;

})(window); (function(window) {

	function MMath() {
	}

	MMath.random = function(min, max) {
		return Math.random() * (max - min) + min;
	}

	MMath.linear_regression = function(x, y) {

		// calculate number points
		var n = x.length;

		// ensure both arrays of points are the same size
		if (n != y.length) {
			return ['Error'];
		}

		// calculate sums
		var x_sum = 0;

		for (var i = 0; i < x.length; i++) {
			x_sum += x[i];
		}

		var y_sum = 0;

		for (var i = 0; i < y.length; i++) {
			y_sum += y[i];
		}

		var xx_sum = 0;
		var xy_sum = 0;

		for (var i = 0; i < n; i++) {
			xy_sum += (x[i] * y[i]);
			xx_sum += (x[i] * x[i]);
		}

		// calculate slope
		var m = ((n * xy_sum) - (x_sum * y_sum)) / ((n * xx_sum) - (x_sum * x_sum));

		// calculate intercept
		var b = (y_sum - (m * x_sum)) / n;

		// return result
		return [m, b];

	}

	window.MMath = MMath;

})(window); (function(window) {

	function MTemperature() {
	}

	MTemperature.c2f = function(value) {
		return value * 9 / 5 + 32;
	}

	MTemperature.c2k = function(value) {
		return value + 273.15;
	}

	MTemperature.f2c = function(value) {
		return (value - 32) * 5 / 9;
	}

	MTemperature.f2k = function(value) {
		return (5 / 9 * (value - 32) + 273);
	}

	MTemperature.k2c = function(value) {
		return value - 273.15;
	}

	MTemperature.k2f = function(value) {
		return ((value - 273) * 1.8) + 32;
	}

	window.MTemperature = MTemperature;

})(window); (function(window) {

	function MTime() {
	}

	MTime.sec2hms = function(sec) {

		var hms = '';

		var hours = parseInt(sec / 3600);
		var minutes = parseInt(sec / 60) % 60;
		var seconds = parseInt(sec % 60);

		//Padding
		//Hours
		var hours_pad = '';

		if (hours < 10) {
			hours_pad = "0";
		}

		//Minutes
		var minutes_pad = '';

		if (minutes < 10) {
			minutes_pad = "0";
		}

		//Seconds
		var seconds_pad = '';

		if (seconds < 10) {
			seconds_pad = "0";
		}

		//Output
		//If there are hours
		if (hours >= 0) {
			hms = hours_pad + hours + ":" + minutes_pad + minutes + ":" + seconds_pad + seconds;
		}

		//If there are no hours but there are mins
		if (hours <= 0 && minutes > 0) {
			hms = minutes_pad + minutes + ":" + seconds_pad + seconds;
		}

		//If there are no hours and no minutes
		//This will display 00 if there are 0 seconds
		if (hours <= 0 && minutes <= 0) {
			hms = seconds_pad + seconds;
		}

		return hms;
	}

	window.MTime = MTime;

})(window); 