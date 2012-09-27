(function(window) {

	var MRatingsBar = {

		setPercent : function(selector, value) {

			console.log(value);

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
		},

		getPercent : function(selector) {
			// ???
			$(selector + ' .MRatingsBar').val();
		}
	};

	window.MRatingsBar = MRatingsBar;

})(window);

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
		$(this).replaceWith('<div ' + idString + ' class="MRatingsBarBG"><div class="MRatingsBarFG" style="width:' + percentString + '"></div></div>');

	});

});
