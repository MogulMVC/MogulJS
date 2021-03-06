var MSystemMessageContainer = (function() {

	function MSystemMessageContainer() {
		// I don't want a message container constructor because it's a singleton class
	};

	MSystemMessageContainer.position = function() {

		var headerHeight = $('#MHeaderPlaceholder').height();
		var toolBarHeight = $('#MToolBarPlaceholder').height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolBarHeight)) {
			toolBarHeight = 0;
		}

		$('#MSystemMessageContainer').css('top', headerHeight + toolBarHeight);

	};

	MSystemMessageContainer.append = function(MSystemMessage, fadeDelay, fadeSpeed) {

		if (fadeDelay == undefined) {
			fadeDelay = 1000000;
		}

		if (fadeSpeed == undefined) {
			fadeSpeed = 0;
		}

		$('#MSystemMessageContainer').append(MSystemMessage);
		$('.MSystemMessage').last().delay(fadeDelay).fadeTo(fadeSpeed, 0, function() {
			$(this).slideUp(250, function() {
				$(this).remove();
			});
		});

	};

	return MSystemMessageContainer;

})();
