(function() {

	function MSystemMessageContainerPostion() {

		var headerHeight = $("#MHeader").height();
		var toolbarHeight = $("#MToolbar").height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolbarHeight)) {
			toolbarHeight = 0;
		}

		$("#MSystemMessageContainer").css("top", headerHeight + toolbarHeight);
	};

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
		MSystemMessageContainerPostion();
	});

	$(window).resize(function() {
		MSystemMessageContainerPostion();
	});

})();
