(function() {

	var MNumber = {
		random : function(min, max) {
			return Math.random() * (max - min) + min;
		},
		toBoolean : function(value) {
			if (!isNaN(value) && value >= 1) {
				return true;
			}
			return false;
		}
	};

	window.MNumber = MNumber;

})();
