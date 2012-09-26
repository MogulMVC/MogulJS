(function() {

	var MList = {
		fadeIn : function() {
			var i = 0;
			$(".MListItem").each(function() {
				$(this).delay(i).animate({
					opacity : 1
				}, speedNorm);
				i = i + 50;
			});

			var i = 0;
			$("#MSidebar li").each(function() {
				$(this).delay(i).animate({
					opacity : 1
				}, speedNorm);
				i = i + 50;
			});
		},
		selectAll : function(selector) {
			console.log(selector);
			$(selector + " .MListItem input[type=checkbox]:visible").each(function() {
				$(this).attr("checked", "checked");
				MList.updateUI(selector);
			});
		},
		deselectAll : function(selector) {
			console.log(selector);
			$(selector + ' .MListItem input[type=checkbox]').each(function() {
				$(this).removeAttr('checked');
				MList.updateUI(selector);
			});
		},
		updateUI : function(selector) {

			// Check if anything was passed in
			if (selector === undefined) {
				selector = '';
			}

			$(selector + '.MListItem input[type=checkbox]').each(function(index) {

				// Set the default state
				if ($(this).is(":checked")) {
					$(this).closest('.MListItem').addClass('blue');
				}else{
					$(this).closest('.MListItem').removeClass('blue');
				}

				// Add a change event listener
				// A label can change the state of the checkbox so I am using change instead of click
				$(this).live('change', function() {
					if ($(this).is(":checked")) {
						$(this).closest('.MListItem').addClass('blue');
					} else {
						$(this).closest('.MListItem').removeClass('blue');
					}
				});

			});

		}
	};

	window.MList = MList;

})();

// Setup checked when the page loads
$(document).ready(function() {

	$('.MListItem input[type=checkbox]').each(function(index) {

		// Set the default state
		MList.updateUI();

		// Add a change event listener
		// A label can change the state of the checkbox so I am using change instead of click
		$(this).live('change', function() {
			if ($(this).is(":checked")) {
				$(this).closest('.MListItem').addClass('blue');
			} else {
				$(this).closest('.MListItem').removeClass('blue');
			}
		});

	});

});

$(window).load(function() {
	MList.fadeIn();
});
