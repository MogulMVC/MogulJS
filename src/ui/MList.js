(function() {

	function MListFadeIn() {
		var i = 0;
		$(".MListItem").each(function() {
			$(this).delay(i).animate({
				opacity : 1
			}, speedNorm);
			i = i + 50;
		});

		var i = 0;
		$("#MSidebar li").each(function() {
			$(this).delay(i).animate({
				opacity : 1
			}, speedNorm);
			i = i + 50;
		});
	};

	//Fix Later
	function MListSelect(id) {
		if (document.getElementById("checkbox_" + id).checked) {
			$("#list_item_container_" + id).addClass("blue");
		} else {
			$("#list_item_container_" + id).removeClass("blue");
		}
	};

	$(window).load(function() {
		MListFadeIn();
	});

})();
