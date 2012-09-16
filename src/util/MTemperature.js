(function(window) {

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

})(window); 