(function() {

	var MMath = {
		random : function(min, max, decimalPoints) {

			if (decimalPoints == undefined) {
				decimalPoints = 5;
			}

			var multiplier = Math.pow(10, decimalPoints);

			return Math.random() * (max * multiplier - min * multiplier) + min * multiplier;
		},
		toBoolean : function(value) {
			if (!isNaN(value) && value >= 1) {
				return true;
			}
			return false;
		}
	};

	window.MMath = MMath;

})();
