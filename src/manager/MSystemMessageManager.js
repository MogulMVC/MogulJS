$(document).ready(function() {
	//Add a message container if one doesnt exist
	if ($('#MSystemMessageContainer').length == 0) {
		console.log("fired");
		$('#MMainWindow').append('<div id="MSystemMessageContainer"></div>');
	}

	$('.MSystemMessage .MIconClose').live('click', function() {
		$(this).parent().remove();
	});
});

$(window).load(function() {
	MSystemMessageContainer.position();
});

$(window).resize(function() {
	MSystemMessageContainer.position();
});