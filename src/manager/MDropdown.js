$(document).ready(function() {
	$('.MDropdown li:has(ul)').bind('mouseenter', function(e) {
		$(this).children('ul').show()
		return false;
	});

	$('.MDropdown li:has(ul)').bind('mouseleave', function(e) {
		$(this).children('ul').hide()
		return false;
	});
}); 