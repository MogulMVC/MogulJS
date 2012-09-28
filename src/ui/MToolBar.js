(function() {

	var MToolBar = {
		position : function() {
			if (!document.getElementById("MHeader") && !document.getElementById("MHeaderPlaceholder")) {
				$("#MToolBar").css("top", "0px");
			}
			this.placeholderScale();
		},
		placeholderScale : function() {
			if (!document.getElementById("MToolBar")) {
				var toolbarHeight = $("#MToolBar").height();
				$("#MToolBarPlaceholder").height(toolbarHeight);
			}
		}
	}

	window.MToolBar = MToolBar;

})();

$(window).load(function() {
	MToolBar.position();
});

$(window).resize(function() {
	MToolBar.position();
}); 