var MSystemMessageContainer = (function() {

	function MSystemMessageContainer() {
		// I don't want a message container constructor because it's a singleton class
	};

	MSystemMessageContainer.position = function() {
		var headerHeight = $('#MHeader').height();
		var toolBarHeight = $('#MToolBar').height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolBarHeight)) {
			toolBarHeight = 0;
		}

		$('#MSystemMessageContainer').css('top', headerHeight + toolBarHeight);
	};

	return MSystemMessageContainer;

})();

var MSystemMessage = (function() {

	function MSystemMessage(label) {

		if (label == null || label == '') {
			label = 'System Message';
		}

		// Container
		var uiElement = document.createElement('div');

		// Contents
		var uiContent = '\
		<span class="MIconClose"/></span>\
		<span class="MTextBold">' + label + '</span>';

		// Put it together
		$(uiElement).addClass('MSystemMessage').append(uiContent);

		return uiElement;
	};

	return MSystemMessage;

})();
