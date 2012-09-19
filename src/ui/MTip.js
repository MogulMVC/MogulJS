/*
 * Forked from jQuery tipsy
 *
 */
(function($) {

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

//Setup the default MTip
(function() {
	$(document).ready(function() {
		$("[MTip=n],[MTip=N]").MTip({
			gravity : "N",
			delayIn : speedSlow
		});

		$("[MTip=nw], [MTip=NW]").MTip({
			gravity : "NW",
			delayIn : speedSlow
		});

		$("[MTip=ne], [MTip=NE]").MTip({
			gravity : "NE",
			delayIn : speedSlow
		});

		$("[MTip=s], [MTip=S]").MTip({
			gravity : "S",
			delayIn : speedSlow
		});

		$("[MTip=sw], [MTip=SW]").MTip({
			gravity : "SW",
			delayIn : speedSlow
		});

		$("[MTip=se], [MTip=SE]").MTip({
			gravity : "SE",
			delayIn : speedSlow
		});

		$("[MTip=w], [MTip=W]").MTip({
			gravity : "W",
			delayIn : speedSlow
		});

		$("[MTip=e], [MTip=E]").MTip({
			gravity : "E",
			delayIn : speedSlow
		});
	});
})();

