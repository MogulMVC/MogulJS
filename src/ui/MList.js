(function() {

	var MList = {
		fadeIn : function() {
			var i = 0;
			$('.MListItem').each(function() {
				$(this).delay(i).animate({
					opacity : 1
				}, speedNorm);
				i = i + 50;
			});

			var i = 0;
			$('#MSideBar li').each(function() {
				$(this).delay(i).animate({
					opacity : 1
				}, speedNorm);
				i = i + 50;
			});
		},
		selectAll : function(selector) {
			// Set a deault parameter
			selector = typeof selector !== 'undefined' ? selector : '';

			$(selector + ' .MListItem input[type=checkbox]:visible').each(function() {
				$(this).attr('checked', 'checked');
				MList.updateUI();
			});
		},
		deselectAll : function(selector) {
			// Set a deault parameter
			selector = typeof selector !== 'undefined' ? selector : '';

			$(selector + ' .MListItem input[type=checkbox]').each(function() {
				$(this).removeAttr('checked');
				MList.updateUI();
			});
		},
		updateUI : function() {
			$('.MListItem input[type=checkbox]').each(function(index) {
				// Set the default state
				if ($(this).is(':checked')) {
					$(this).closest('.MListItem').addClass('active');
				} else {
					$(this).closest('.MListItem').removeClass('active');
				}
			});
		}
	};

	window.MList = MList;

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

$(window).load(function() {
	MList.fadeIn();
});
