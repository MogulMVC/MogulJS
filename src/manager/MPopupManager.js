$(document).ready(function() {

	$(document).on('click', '.MModal, .MModalBG, .MModalBGBlack, .MModalBGWhite', function() {
		$(this).closest('.MPopupContainer').hide();
	});

	$(document).on('click', '.MPopup .MIconClose', function() {
		$(this).closest('.MPopupContainer').hide();
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('.MPopupContainer').hide();
		};
	});

});
