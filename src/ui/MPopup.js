var MPopup = (function() {

	function MPopup() {
		_idString = '';
		_width = 400;
		_height = 300;
		_title = 'Popup';
	};

	// Methods
	MPopup.prototype.toHTML = function() {
		var widthOffset = -1 * (_width / 2);
		return '<div class="MPopupContainer"><div ' + _idString + ' class="MPopup" style="margin-left:' + widthOffset + 'px;width:' + _width + 'px"><span class="MIconClose"></span><p class="MWidgetTitle">' + _title + '</p></div><div class="MModalBGBlack"></div></div>';
	};

	// Setters / Getters
	MPopup.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MPopup.prototype.setWidth = function(value) {
		_width = value;
	};

	MPopup.prototype.setHeight = function(value) {
		_height = value;
	};

	MPopup.prototype.setTitle = function(value) {
		_title = value;
	};

	return MPopup;

})();
