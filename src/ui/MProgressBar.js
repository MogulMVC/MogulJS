var MProgressBar = (function() {

	function MProgressBar() {
		_idString = '';
		_percent = 0;
	};

	// Methods
	MProgressBar.prototype.toHTML = function() {
		return '<div ' + _idString + ' class="MProgressBar"><div class="MProgressBarBG"><div class="MProgressBarFG" style="width:' + _percent + '%"><span class="MProgressBarIndicator">' + _percent + '%</span></div></div></div>';
	};

	// Static Methods
	MProgressBar.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MProgressBar.prototype.setPercent = function(value) {
		value = parseInt(value);
		if (value >= 0 && value <= 100) {
			_percent = value;
		}
	};

	MProgressBar.setPercent = function(selector, value) {
		$(selector + ' .MProgressBarFG').css('width', value + '%');
		$(selector + ' .MProgressBarIndicator').html(value + '%');
	};

	MProgressBar.getPercent = function(selector) {
		// ???
		$(selector + ' .MProgressBarIndicator').val();
	};

	return MProgressBar;

})();
