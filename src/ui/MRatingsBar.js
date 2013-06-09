var MRatingsBar = (function() {

	function MRatingsBar(percent) {

		percent = parseInt(percent);
		if (isNaN(percent) || percent <= 0 || percent >= 100) {
			percent = 0;
		}
		
		// Container
		var uiElement = document.createElement('div');

		// Contents
		var uiContents = '\
		<div class="MRatingsBarBG">\
			<div class="MRatingsBarFG" style="width:' + percent + '%"></div>\
		</div>';

		// Put it together
		$(uiElement).addClass('MRatingsBar').append(uiContents);
		
		return uiElement;
			
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
