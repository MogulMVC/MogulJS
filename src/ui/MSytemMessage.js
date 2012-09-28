(function() {

	var MSystemMessage = {
		init : function(message) {
			var systemMessage = '<div class="MSystemMessage"><span class="MIconClose"/></span><span class="bold">' + message + '</span></div>';
			$("#MSystemMessageContainer").append(systemMessage);

			// Click close
			$('.MSystemMessage:last-child .MIconClose').click(function() {
				$(this).closest('.MSystemMessage').remove();
			});

			// Fade out
			$('.MSystemMessage:last-child').delay(5000).animate({
				opacity : 0
			}).slideUp(speedSlow, function() {//slide up
				$(this).remove();
			});
		},
		containerPostion : function() {
			var headerHeight = $("#MHeader").height();
			var toolbarHeight = $("#MToolBar").height();

			if (isNaN(headerHeight)) {
				headerHeight = 0;
			}

			if (isNaN(toolbarHeight)) {
				toolbarHeight = 0;
			}

			$("#MSystemMessageContainer").css("top", headerHeight + toolbarHeight);
		}
	}

	window.MSystemMessage = MSystemMessage;

})();

$(document).ready(function() {
	$("#MSystemMessageContainer").fadeIn(speedSlow);
});

$(window).load(function() {
	MSystemMessage.containerPostion();
});

$(window).resize(function() {
	MSystemMessage.containerPostion();
});
