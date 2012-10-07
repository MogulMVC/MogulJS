var MInputText = (function() {

	function MInputText() {
	};

	// Static Methods
	MInputText.passWordToggle = function(id) {
		var element = document.getElementById(id);
		if (element.type == "password") {
			element.type = "text";
		} else {
			element.type = "password";
		}
	};

	return MInputText;

})();
