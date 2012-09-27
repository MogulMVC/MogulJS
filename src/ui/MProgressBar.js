(function(window) {

	var MProgressBar = {

		setPercent : function(selector, value) {
			$(selector + ' .MProgressBarFG').css('width', value + '%');
			$(selector + ' .MProgressBarIndicator').html(value + '%');
		},

		getPercent : function(selector) {
			// ???
			$(selector + ' .MProgressBarIndicator').val();
		}
	};

	window.MProgressBar = MProgressBar;

})(window);

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
		$(this).replaceWith('<div ' + idString + ' class="MProgressBarContainer"><div class="MProgressBarBG"><div class="MProgressBarFG" style="width:' + percentString + '"><span class="MProgressBarIndicator">' + percentString + '</span></div></div></div>');

	});

}); 