$(document).ready(function() {

	$(document).on('click', '.MPopup .MIconClose', function() {
		$(this).closest('.MPopupContainer').hide();
	});
	
	$(document).keyup(function(e) {
		if(e.keyCode == 27){
			$('.MPopupContainer').hide();
		};
	});

});
