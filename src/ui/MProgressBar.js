var MProgressBar = (function() {

	function MProgressBar(percent) {

		percent = parseInt(percent);
		if (isNaN(percent) || percent <= 0 || percent >= 100) {
			percent = 0;
		}

		// Container
		var uiElement = document.createElement('div');

		// Contents
		var uiContents = '\
		<div class="MProgressBarBG">\
			<div class="MProgressBarFG" style="width:' + percent + '%">\
				<span class="MProgressBarIndicator">' + percent + '%</span>\
			</div>\
		</div>';

		// Put it together
		$(uiElement).addClass('MProgressBar').append(uiContents);
		
		return uiElement;

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
