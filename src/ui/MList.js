var MList = (function() {

	function MList() {
		_content = '';
	};

	// Methods
	MList.prototype.toHTML = function() {
		return '<li class="MListItem">' + _content + '</li>';
	};

	// Setters / Getters
	MList.prototype.setContent = function(value) {
		_content = value;
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
		$('.MListItem input[type=checkbox]').each(function(index) {
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

// Setup checked when the page loads
$(document).ready(function() {
	// Set the default state
	MList.updateUI();

	$('.MListItem input[type=checkbox]').each(function(index) {
		// Add a change event listener
		// A label can change the state of the checkbox so I am using change instead of click
		$(this).change(function() {
			MList.updateUI();
		});
	});
});
