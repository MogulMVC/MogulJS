(function() {

	var MType = {
		string2Boolean : function(value) {

			// Check if it's a string of true or false
			if (value === 'true' || value === 'TRUE') {
				return true;
			}

			if (value === '1') {
				return true;
			}

			return false;

		}
	};

	window.MType = MType;

})();
