$(document).ready(function() {

	$('.MPopup .MIconClose').live('click', function() {
		$(this).closest('.MPopupContainer').hide();
	});
	
	$(document).keyup(function(e) {
		if(e.keyCode == 27){
			$('.MPopupContainer').hide();
		};
	});

});
