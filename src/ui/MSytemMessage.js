// Class
var MSystemMessageContainer = (function(){
	
	function MSystemMessageContainer(){
	};
	
	MSystemMessageContainer.position = function() {
		console.log("running")
		var headerHeight = $("#MHeader").height();
		var toolbarHeight = $("#MToolBar").height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolbarHeight)) {
			toolbarHeight = 0;
		}

		$("#MSystemMessageContainer").css("top", headerHeight + toolbarHeight);
	};
	
	return MSystemMessageContainer;
	
})();

var MSystemMessage = (function() {

	function MSystemMessage() {
		_idString = '';
		_message = 'System Message';
	};

	// Methods
	MSystemMessage.prototype.toHTML = function() {
		return '<div ' + _idString + ' class="MSystemMessage"><span class="MIconClose"/></span><span class="bold">' + _message + '</span></div>';
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
