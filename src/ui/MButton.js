var MButton = (function() {

	function MButton() {
		_color = '';
		_label = 'Button';
	};

	// Methods
	MButton.prototype.toHTML = function() {
		return '<button class="MButton' + _color + '">' + _label + '</button>';
	};

	// Setters / Getters
	MButton.prototype.setColor = function(value) {
		if ( typeof value == 'string') {
			value.toUpperCase();
			if (value == "" || value == null || value == "R" || value == "O" || value == "Y" || value == "G" || value == "B" || value == "V") {
				_color = value;
			}
		}
	};

	MButton.prototype.setLabel = function(value) {
		if ( typeof value == 'string') {
			if (value != "" && value != null) {
				_label = value;
			}
		}
	};

	return MButton;

})();

$(document).ready(function() {
	$('input[type="file"]').addClass('MButtonUploadInput');
	$('input[type="file"]').wrap('<div class="MButtonUpload"></div>');
	$('.MButtonUpload').append('<span>Select File</span>');
});
