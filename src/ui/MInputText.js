var MInputText = (function() {

	function MInputText(label) {

		if (label == '' || label == null) {
			label = '';
		}

		var uiElement = document.createElement('input');
		uiElement.type = 'text';
		$(uiElement).attr('placeholder', label);

		return uiElement;

	};

	MInputText.passWordToggle = function(id) {

		var element = document.getElementById(id);

		if (element.type == 'password') {
			element.type = 'text';
		} else {
			element.type = 'password';
		};

	};

	return MInputText;

})();
