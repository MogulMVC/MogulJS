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

	// Static Methods
	MSystemMessage.containerPostion = function() {
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

	return MSystemMessage;

})();

(function() {
	// var MSystemMessage = {
	// init : function(message) {
	// var systemMessage = '<div class="MSystemMessage"><span class="MIconClose"/></span><span class="bold">' + message + '</span></div>';
	// $("#MSystemMessageContainer").append(systemMessage);
	//
	// // Click close
	// $('.MSystemMessage:last-child .MIconClose').click(function() {
	// $(this).closest('.MSystemMessage').remove();
	// });
	//
	// // Fade out
	// $('.MSystemMessage:last-child').delay(5000).animate({
	// opacity : 0
	// }).slideUp(speedSlow, function() {//slide up
	// $(this).remove();
	// });
	// },
	// containerPostion : function() {
	// var headerHeight = $("#MHeader").height();
	// var toolbarHeight = $("#MToolBar").height();
	//
	// if (isNaN(headerHeight)) {
	// headerHeight = 0;
	// }
	//
	// if (isNaN(toolbarHeight)) {
	// toolbarHeight = 0;
	// }
	//
	// $("#MSystemMessageContainer").css("top", headerHeight + toolbarHeight);
	// }
	// }
	//
	// window.MSystemMessage = MSystemMessage;
	//
})();

$(document).ready(function() {
	if ($('#MSystemMessageContainer').length == 0) {
		$('#MMainWindow').append('<div id="MSystemMessageContainer"></div>');
	}
	$("#MSystemMessageContainer").fadeIn(speedSlow);

	$('.MSystemMessage .MIconClose').live('click', function() {
		$(this).parent().remove();
	});
});

$(window).load(function() {
	MSystemMessage.containerPostion();
});

$(window).resize(function() {
	MSystemMessage.containerPostion();
});
