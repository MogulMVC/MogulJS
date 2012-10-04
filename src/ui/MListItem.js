var MListItem = (function() {

	function MListItem() {
		_idString = '';
	};

	// Methods
	MListItem.prototype.toHTML = function() {
		console.log("sdsadasdasdas");
		return '<li ' + _idString + ' class="MListItem"></li>';
	};

	// Setters / Getters
	MListItem.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	// Static Methods
	MListItem.selectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$(selector + ' .MListItem input[type=checkbox]:visible').each(function() {
			$(this).attr('checked', 'checked');
			MList.updateUI();
		});
	};

	MListItem.deselectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$(selector + ' .MListItem input[type=checkbox]').each(function() {
			$(this).removeAttr('checked');
			MList.updateUI();
		});
	};

	MListItem.updateUI = function() {
		$('.MListItem input[type=checkbox]').each(function() {
			// Set the default state
			if ($(this).is(':checked')) {
				$(this).closest('.MListItem').addClass('active');
			} else {
				$(this).closest('.MListItem').removeClass('active');
			}
		});
	};

	return MListItem;

})();

// Setup checked when the page loads
$(document).ready(function() {
	// Set the default state
	MListItem.updateUI();

	$('.MListItem input[type=checkbox]').live('change', function() {
		// Add a change event listener
		// A label can change the state of the checkbox so I am using change instead of click
		MListItem.updateUI();
	});
});
