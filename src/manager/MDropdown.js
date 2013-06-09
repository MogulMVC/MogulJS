$(document).ready(function() {

	$(document).on('mouseenter', '.MDropdown li:has(ul)', function() {
		$(this).children('ul').show();
	});

	$(document).on('mouseleave', '.MDropdown li:has(ul)', function() {
		$(this).children('ul').hide();
	});

});
