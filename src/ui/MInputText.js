var MInputText = (function() {

	function MInputText() {
		_type = 'text';
		_placeholder = '';
	};

	// Methods
	MInputText.prototype.toHTML = function() {
		return '<input type="' + _type + '" placeholder="' + _placeholder + '" />'
	};

	// Setters / Getters
	MInputText.prototype.setType = function(value) {
		if ( typeof value == 'string') {
			if (value != '' && value != null) {
				_type = value;
			}
		}
	};

	MInputText.prototype.setPlaceholder = function(value) {
		if ( typeof value == 'string') {
			if (value != '' && value != null) {
				_placeholder = value;
			}
		}
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
