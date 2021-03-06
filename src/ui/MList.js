var MList = (function() {

	function MList() {
		
		var uiElement = document.createElement('ul');
		$(uiElement).addClass('MList');
		
		return uiElement;
		
	};

	// Static Methods
	MList.selectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$(selector + ' .MListItem input[type=checkbox]:visible').each(function() {
			$(this).attr('checked', 'checked');
			MList.updateUI();
		});
	};

	MList.deselectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$(selector + ' .MListItem input[type=checkbox]').each(function() {
			$(this).removeAttr('checked');
			MList.updateUI();
		});
	};

	MList.updateUI = function() {
		$('.MListItem input[type=checkbox], .MListItem input[type=radio]').each(function() {
			// Set the default state
			if ($(this).is(':checked')) {
				$(this).closest('.MListItem').addClass('active');
			} else {
				$(this).closest('.MListItem').removeClass('active');
			}
		});
	};

	return MList;

})();