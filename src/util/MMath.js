(function(window) {

	MMath = {
		random : function(min, max) {
			return Math.random() * (max - min) + min;
		},
		
		linear_regression : function(x, y) {

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
	};

	window.MMath = MMath;

})(window);
