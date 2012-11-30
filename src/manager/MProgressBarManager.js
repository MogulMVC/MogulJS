$(document).ready(function() {
	$('progress').each(function() {
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
		$(this).replaceWith('<div ' + idString + ' class="MProgressBar"><div class="MProgressBarBG"><div class="MProgressBarFG" style="width:' + percentString + '"><span class="MProgressBarIndicator">' + percentString + '</span></div></div></div>');
	});
});