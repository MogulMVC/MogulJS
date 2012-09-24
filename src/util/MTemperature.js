(function(window) {

	var MTemperature = {

		c2f : function(value) {
			return value * 9 / 5 + 32;
		},

		c2k : function(value) {
			return value + 273.15;
		},

		f2c : function(value) {
			return (value - 32) * 5 / 9;
		},

		f2k : function(value) {
			return (5 / 9 * (value - 32) + 273);
		},

		k2c : function(value) {
			return value - 273.15;
		},

		k2f : function(value) {
			return ((value - 273) * 1.8) + 32;
		}
	};

	window.MTemperature = MTemperature;

})(window);
