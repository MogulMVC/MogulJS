$(document).ready(function() {
	//Add a message container if one doesnt exist
	if ($('#MSystemMessageContainer').length == 0) {
		$('#MMainWindow').append('<div id="MSystemMessageContainer"></div>');
	}

	$(document).on('click', '.MSystemMessage .MIconClose', function() {
		$(this).parent().remove();
	});
});

$(window).load(function() {
	MSystemMessageContainer.position();
});

$(window).resize(function() {
	MSystemMessageContainer.position();
});
