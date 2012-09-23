function MSystemMessageContainerScale() {

	var windowHeight = $(window).height();
	var headerHeight = $("#MHeader").height();
	var toolbarHeight = $("#MToolbar").height();

	if (isNaN(headerHeight)) {
		headerHeight = 0;
	}

	if (isNaN(toolbarHeight)) {
		toolbarHeight = 0;
	}

	var messageContainerHeight = windowHeight - headerHeight - toolbarHeight;
	$("#MSystemMessageContainer").css("top", headerHeight + toolbarHeight);
	$("#MSystemMessageContainer").css("height", messageContainerHeight);
}


$(document).ready(function() {
	//$('.MToolbarMessage').delay(5000).fadeOut(speedNorm);
});

$(window).load(function() {
	MSystemMessageContainerScale();
});

$(window).resize(function() {
	MSystemMessageContainerScale();
}); 