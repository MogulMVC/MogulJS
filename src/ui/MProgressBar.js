var MProgressBar = (function() {

	function MProgressBar() {
		_percent = 0;
	};

	// Methods
	MProgressBar.prototype.toHTML = function() {
		return '<div class="MProgressBar"><div class="MProgressBarBG"><div class="MProgressBarFG" style="width:' + _percent + '%"><span class="MProgressBarIndicator">' + _percent + '%</span></div></div></div>';
	};

	MProgressBar.prototype.setPercent = function(value) {
		value = parseInt(value);
		if (value >= 0 && value <= 100) {
			_percent = value;
		}
	};

	// Static Methods
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

$(document).ready(function() {
	$("progress").each(function() {
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
		$(this).replaceWith('<div ' + idString + ' class="MProgressBar"><div class="MProgressBarBG"><div class="MProgressBarFG" style="width:' + percentString + '"><span class="MProgressBarIndicator">' + percentString + '</span></div></div></div>');
	});
});
