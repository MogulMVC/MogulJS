var MRatingsBar = (function() {

	function MRatingsBar() {
		_idString = '';
		_percent = 0;
	};

	// Methods
	MRatingsBar.prototype.toHTML = function() {
		return '<div class="MRatingsBar"><div ' + _idString + ' class="MRatingsBarBG"><div class="MRatingsBarFG" style="width:' + _percent + '%"></div></div></div>';
	};

	// Static Methods
	MRatingsBar.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MRatingsBar.prototype.setPercent = function(value) {
		value = parseInt(value);
		if (value > 0 && value < 100) {
			_percent = value;
		}
	};

	// Static Methods
	MRatingsBar.setPercent = function(selector, value) {
		// If a value number is set
		if (!isNaN(value) && value > 0) {
			// Set the correct display
			$(selector).removeClass('MRatingsBarWarning');
			$(selector).addClass('MRatingsBarBG');
			$(selector + ' .MRatingsBarFG').show();

			// Set the width
			$(selector + ' .MRatingsBarFG').css('width', value + '%');
		}
		// If a value number is not set
		else {
			$(selector).removeClass('MRatingsBarBG');
			$(selector).addClass('MRatingsBarWarning');
			$(selector + ' .MRatingsBarFG').hide();
		}
	};

	MRatingsBar.getPercent = function(selector) {
		// ???
		$(selector + ' .MRatingsBar').val();
	};

	return MRatingsBar;

})();
