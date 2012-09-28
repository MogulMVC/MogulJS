(function($) {

	$.fn.MHTMLAnimate = function(html, speed, callback) {

		return this.each(function() {

			var element = $(this);

			var current = {
				width : element.width() + 'px',
				height : element.height() + 'px'
			}

			var final = {
				width : this.style.width,
				height : this.style.height
			}

			element.html(html);

			var next = {
				width : element.width() + 'px',
				height : element.height() + 'px'
			}

			element.css(current).animate(next, speed, function() {
				element.css(final);
				if ($.isFunction(callback)) {
					callback();
				}
			});

		});

	};

})(jQuery);
