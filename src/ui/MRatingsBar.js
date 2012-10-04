var MRatingsBar = (function() {

	function MRatingsBar() {
		_percent = 0;
	};

	// Methods
	MRatingsBar.prototype.toHTML = function() {
		return '<div class="MRatingsBarBG"><div class="MRatingsBarFG" style="width:' + _percent + '%"></div></div>';
	};

	MRatingsBar.prototype.setPercent = function(value) {
		if ( typeof _percent == 'number') {
			if (_percent > 0 && _percent < 100) {
				_percent = value;
			}
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
		$(this).replaceWith('<div ' + idString + ' class="MRatingsBarBG"><div class="MRatingsBarFG" style="width:' + percentString + '"></div></div>');
	});
});
