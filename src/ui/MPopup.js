var MPopup = (function() {

	function MPopup() {
		_width = 400;
		_height = 300;
		_title = 'Popup';
		_content = 'null';
	};

	// Methods
	MPopup.prototype.toHTML = function() {
		var widthOffset = -1 * (_width / 2);
		return '<div class="MPopup" style="margin-left:' + widthOffset + 'px;width:' + _width + 'px"><span class="MIconClose"></span><p class="MWidgetTitle">' + _title + '</p>' + _content + '</div>';
	};

	// Setters / Getters
	MPopup.prototype.setWidth = function(value) {
		_width = value;
	};

	MPopup.prototype.setHeight = function(value) {
		_height = value;
	};

	MPopup.prototype.setTitle = function(value) {
		_title = value;
	};

	MPopup.prototype.setContent = function(value) {
		_content = value;
	};
	
	return MPopup;

})();

