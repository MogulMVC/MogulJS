var MInputText = (function() {

	function MInputText(label) {
		
		if(label == null || label == ''){
			label = '';
		}
		
		var uiElement = document.createElement('input');
		uiElement.type = 'text';
		$(uiElement).attr('placeholder', label);
		
		return uiElement;
		
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
