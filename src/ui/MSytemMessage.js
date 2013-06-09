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
