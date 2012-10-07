$(document).ready(function() {
	$('.MPopup .MIconClose').live('click', function() {
		$(this).closest('.MPopupContainer').hide();
	});
});
