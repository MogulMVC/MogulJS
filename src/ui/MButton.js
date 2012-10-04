// Class
var MButton = (function() {

	function MButton() {
		_idString = '';
		_color = '';
		_text = 'Button';
	};

	// Methods
	MButton.prototype.toHTML = function() {
		return '<button ' + _idString + ' class="MButton' + _color + '">' + _text + '</button>';
	};

	// Setters / Getters
	MButton.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MButton.prototype.setColor = function(value) {
		if ( typeof value == 'string') {
			value.toUpperCase();
			if (value == "" || value == null || value == "R" || value == "O" || value == "Y" || value == "G" || value == "B" || value == "V") {
				_color = value;
			}
		}
	};

	MButton.prototype.setText = function(value) {
		if ( typeof value == 'string') {
			if (value != "" && value != null) {
				_text = value;
			}
		}
	};

	return MButton;

})();

// Bootstrapper
$(document).ready(function() {
	$('input[type="file"]').addClass('MButtonUploadInput');
	$('input[type="file"]').wrap('<div class="MButtonUpload"></div>');
	$('.MButtonUpload').append('<span>Select File</span>');
});
