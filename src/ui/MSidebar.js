(function($) {

	$.fn.Class = function(param) {
		
	};
	
})(jQuery); 

$(window).resize(function() {

	sidebarMenuPlaceholderHeight();
	sidebarMenuTop();

	var windowHeight = $(window).height();
	var headerHeight = $("#MHeader").height();
	var toolbarHeight = $("#MToolbar").height();

	if (isNaN(headerHeight)) {
		headerHeight = 0;
	};

	if (isNaN(toolbarHeight)) {
		toolbarHeight = 0;
	};

	var sidebarHeight = windowHeight - headerHeight - toolbarHeight;
	$("#MSidebar").css("top", headerHeight + toolbarHeight);
	$("#MSidebar").css("height", sidebarHeight);

});

function sidebarMenuPlaceholderHeight() {

	if (document.getElementById("MSidebarMenuFixed")) {

		/*Placeholder height*/
		var sidebar_menu_fixed_height = $("#MSidebarMenuFixed").height();
		$("#MSidebarMenuFixedPlaceholder").height(sidebar_menu_fixed_height);

	};
}

function sidebarMenuTop() {

	if (document.getElementById("MSidebarMenuFixed")) {

		/*Top Position*/
		var headerHeight = $("#MHeader").height();
		var toolbarHeight = $("#MToolbar").height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		};

		if (isNaN(toolbarHeight)) {
			toolbarHeight = 0;
		};

		var sidebarMenuTop = headerHeight + toolbarHeight;

		$("#MSidebarMenuFixed").css("top", sidebarMenuTop);

	};

}

function sidebarRightShow() {

	sidebarScale();

	$("#MSidebarContainer").animate({
		minWidth : 352
	}, speedNorm);
	
	$("#MSidebar").animate({
		right : 0
	}, speedNorm);
	
	$(".MIconArrowLeft").hide();
}

function sidebarRightHide() {
	$("#MSidebarContainer").animate({
		minWidth : 0
	}, speedNorm);
	
	$("#MSidebar").animate({
		right : -360
	}, speedNorm);
	
	$(".MIconArrowLeft").show();
}

function sidebarLeftShow() {

	sidebarScale();

	$("#MSidebarContainer").animate({
		minWidth : 352
	}, speedNorm);
	
	$("#MSidebar").animate({
		left : 0
	}, speedNorm);
	
	$(".MIconArrowRight").hide();
}

function sidebarLeftHide() {
	$("#MSidebarContainer").animate({
		minWidth : 0
	}, speedNorm);
	
	$("#MSidebar").animate({
		left : -360
	}, speedNorm);
	
	$(".MIconArrowRight").show();
}

function sidebarTriggerIndicatorSet() {
	if (document.getElementById("MSidebarTriggerLeft") && !document.getElementById("MSidebarTriggerLeftIndicator")) {
		$("#MSidebarTriggerLeft").append('<div id="MSidebarTriggerLeftIndicator"></div>');
	};

	if (document.getElementById("SidebarTriggerRight") && !document.getElementById("SidebarTriggerRightIndicator")) {
		$("#SidebarTriggerRight").append('<div id="SidebarTriggerRightIndicator"></div>');
	};
}

function sidebarTriggerProximity(event) {

	sidebarTriggerIndicatorSet();

	var mouseX = event.pageX;
	var windowWidth = $(window).width();

	//Distace away that the indicator should show, in px
	var indicationDistanceStart = 150;

	//Left
	if (document.getElementById("MSidebarTriggerLeftIndicator")) {

		var indicatorWidth = $("#MSidebarTriggerLeftIndicator").width();

		if (mouseX < indicationDistanceStart && mouseX != 0) {
			var percentAwayDecimal = mouseX / indicationDistanceStart;
			var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
			$("#MSidebarTriggerLeftIndicator").css("left", indicatorCSSLeft);
		} else {
			$("#MSidebarTriggerLeftIndicator").css("left", -indicatorWidth);
		};

	};

	//Right
	if (document.getElementById("SidebarTriggerRightIndicator")) {

		var indicatorWidth = $("#SidebarTriggerRightIndicator").width();

		if (mouseX > windowWidth - indicationDistanceStart && mouseX != windowWidth) {
			var percentAwayDecimal = (windowWidth - mouseX) / indicationDistanceStart;
			var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
			$("#SidebarTriggerRightIndicator").css("right", indicatorCSSLeft);
		} else {
			$("#SidebarTriggerRightIndicator").css("right", -indicatorWidth);
		};

	};

}