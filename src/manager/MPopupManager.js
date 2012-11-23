$(document).ready(function() {

	$('.MPopupContainer').live('click', function() {
		$(this).hide();
	});

	$('.MPopup .MIconClose').live('click', function() {
		$(this).closest('.MPopupContainer').hide();
	});

});
