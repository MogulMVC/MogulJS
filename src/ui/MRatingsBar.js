// Class
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

// Bootstrapper
$(document).ready(function() {
	$("meter").each(function() {
		// Get default settings to reapply later
		var currentId = $(this).attr('id');
		var currentPercent = $(this).attr('value');

		var idString = '';
		if (currentId !== undefined) {
			idString = 'id=' + currentId;
		}

		var percentString = '';
		if (currentPercent !== undefined) {
			percentString = currentPercent + '%';
		}

		// Replace with the Mogul progress bar
		// Might need to fix this by creating a new object
		$(this).replaceWith('<div class="MRatingsBar"><div ' + idString + ' class="MRatingsBarBG"><div class="MRatingsBarFG" style="width:' + percentString + '"></div></div></div>');
	});
});
