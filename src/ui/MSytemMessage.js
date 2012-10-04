// Class
var MSystemMessageContainer = (function() {

	function MSystemMessageContainer() {
	};

	MSystemMessageContainer.position = function() {
		var headerHeight = $("#MHeader").height();
		var toolBarHeight = $("#MToolBar").height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolBarHeight)) {
			toolBarHeight = 0;
		}

		$("#MSystemMessageContainer").css("top", headerHeight + toolBarHeight);
	};

	return MSystemMessageContainer;

})();

var MSystemMessage = (function() {

	function MSystemMessage() {
		_idString = '';
		_text = 'System Message';
	};

	// Methods
	MSystemMessage.prototype.toHTML = function() {
		return '<div ' + _idString + ' class="MSystemMessage"><span class="MIconClose"/></span><span class="bold">' + _text + '</span></div>';
	};

	// Getters / Setters
	MSystemMessage.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MSystemMessage.prototype.setText = function(value) {
		if ( typeof value == 'string') {
			if (value != "" && value != null) {
				_text = value;
			}
		}
	};

	return MSystemMessage;

})();

// Bootstrapper
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
