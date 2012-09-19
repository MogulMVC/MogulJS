function MToolbarPosition() {
	if (!document.getElementById("MHeader") && !document.getElementById("MHeaderPlaceholder")) {
		$("#MToolbar").css("top", "0px");
	};
}

function MToolbarPlaceholderScale() {
	if (!document.getElementById("MToolbar")) {
		var toolbarHeight = $("#MToolbar").height();
		$("#MToolbarPlaceholder").height(toolbarHeight);
	};
}

$(window).load(function() {
	MToolbarPosition();
});

$(window).resize(function() {
	MToolbarPosition();
}); 