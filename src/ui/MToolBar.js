// Class
var MToolBar = (function() {

	function MToolBar() {
		// I don't want a toolbar constructor because it's a singleton class
	};

	MToolBar.position = function() {
		if ($("MHeader").length != 0 && $("MHeaderPlaceholder").length != 0) {
			$("#MToolBar").css("top", "0px");
		}
		this.placeholderScale();
	};

	MToolBar.placeholderScale = function() {
		if ($("MToolBar") != 0) {
			var toolbarHeight = $("#MToolBar").height();
			$("#MToolBarPlaceholder").height(toolbarHeight);
		}
	};

	return MToolBar;

})();
