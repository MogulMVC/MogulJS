(function(window) {

	var MSystemMessage = {

		init : function(message) {

			var systemMessage = '<div class="MSystemMessage"><span class="MIconClose"/></span><span class="bold">' + message + '</span></div>';
			$("#MSystemMessageContainer").append(systemMessage);

			// Click close
			$('#MSystemMessageContainer .MSystemMessage:last-child').find('.MIconClose').click(function() {
				console.log('click');
				MSystemMessage.closeRemove(systemMessage);
			});

			// Fade out
			$('#MSystemMessageContainer .MSystemMessage:last-child').delay(5000).animate({
				opacity : 0
			}).slideUp(speedSlow, function() {//slide up
				$(this).remove();
			});
		},

		closeRemove : function(selector) {
			$(selector).animate({
				opacity : 0
			}).slideUp(speedSlow, function() {
				$(selector).remove();
			});
		},

		containerPostion : function() {

			var headerHeight = $("#MHeader").height();
			var toolbarHeight = $("#MToolbar").height();

			if (isNaN(headerHeight)) {
				headerHeight = 0;
			}

			if (isNaN(toolbarHeight)) {
				toolbarHeight = 0;
			}

			$("#MSystemMessageContainer").css("top", headerHeight + toolbarHeight);
		}
	};

	window.MSystemMessage = MSystemMessage;

})(window);

$(document).ready(function() {

	$("#MSystemMessageContainer").fadeIn(speedSlow);

	var i = 5000;
	$(".MSystemMessage").each(function() {
		$(this).delay(i).animate({
			opacity : 0
		}).slideUp(speedSlow, function() {//slide up
			$(this).remove();
		});
		i = i + 5000;
	});

});

$(window).load(function() {
	MSystemMessage.containerPostion();
});

$(window).resize(function() {
	MSystemMessage.containerPostion();
});
