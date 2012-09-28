(function() {

	var MSidebar = {
		menuPlaceholderHeight : function() {
			if (document.getElementById("MSidebarMenuFixed")) {
				/*Placeholder height*/
				var sidebar_menu_fixed_height = $("#MSidebarMenuFixed").height();
				$("#MSidebarMenuFixedPlaceholder").height(sidebar_menu_fixed_height);
			}
		},
		menuTop : function() {
			if (document.getElementById("MSidebarMenuFixed")) {
				/*Top Position*/
				var headerHeight = $("#MHeader").height();
				var toolBarHeight = $("#MToolBar").height();

				if (isNaN(headerHeight)) {
					headerHeight = 0;
				};

				if (isNaN(toolBarHeight)) {
					toolBarHeight = 0;
				};

				var sidebarMenuTop = headerHeight + toolBarHeight;

				$("#MSidebarMenuFixed").css("top", sidebarMenuTop);
			}
		},
		scale : function() {
			this.menuPlaceholderHeight();
			this.menuTop();

			var windowHeight = $(window).height();
			var headerHeight = $("#MHeader").height();
			var toolBarHeight = $("#MToolBar").height();

			if (isNaN(headerHeight)) {
				headerHeight = 0;
			}

			if (isNaN(toolBarHeight)) {
				toolBarHeight = 0;
			}

			var sidebarHeight = windowHeight - headerHeight - toolBarHeight;
			$("#MSidebar").css("top", headerHeight + toolBarHeight);
			$("#MSidebar").css("height", sidebarHeight);
		},
		leftShow : function() {
			this.scale();

			$("#MSidebarContainer").animate({
				minWidth : 352
			}, speedNorm);

			$("#MSidebar").animate({
				left : 0
			}, speedNorm);

			$(".MIconArrowRight").hide();
		},
		leftHide : function() {
			$("#MSidebarContainer").animate({
				minWidth : 0
			}, speedNorm);

			$("#MSidebar").animate({
				left : -360
			}, speedNorm);

			$(".MIconArrowRight").show();
		},
		rightShow : function() {

			this.scale();

			$("#MSidebarContainer").animate({
				minWidth : 352
			}, speedNorm);

			$("#MSidebar").animate({
				right : 0
			}, speedNorm);

			$(".MIconArrowLeft").hide();
		},
		rightHide : function() {
			$("#MSidebarContainer").animate({
				minWidth : 0
			}, speedNorm);

			$("#MSidebar").animate({
				right : -360
			}, speedNorm);

			$(".MIconArrowLeft").show();
		},
		triggerIndicatorInit : function() {
			if ($('#MSidebarTriggerLeft').length != 0 && $('#MSidebarTriggerLeftIndicator').length == 0) {
				$("#MSidebarTriggerLeft").append('<div id="MSidebarTriggerLeftIndicator"></div>');
			}

			if ($('#MSidebarTriggerRight').length != 0 && $('#MSidebarTriggerRightIndicator').length == 0) {
				$("#MSidebarTriggerRight").append('<div id="MSidebarTriggerRightIndicator"></div>');
			}
		},
		triggerProximity : function(event) {
			this.triggerIndicatorInit();

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
				}

			}

			//Right
			if (document.getElementById("MSidebarTriggerRightIndicator")) {
				var indicatorWidth = $("#MSidebarTriggerRightIndicator").width();

				if (mouseX > windowWidth - indicationDistanceStart && mouseX != windowWidth) {
					var percentAwayDecimal = (windowWidth - mouseX) / indicationDistanceStart;
					var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
					$("#MSidebarTriggerRightIndicator").css("right", indicatorCSSLeft);
				} else {
					$("#MSidebarTriggerRightIndicator").css("right", -indicatorWidth);
				}

			}
		}
	};

	window.MSidebar = MSidebar;

})(window);

$(window).load(function() {
	MSidebar.scale();

	MSidebar.menuPlaceholderHeight();
	MSidebar.menuTop();

	$("#MSidebar").mouseenter(function() {
		$("#MSidebar").css("overflow-y", "auto");
	});

	$("#MSidebar").mouseleave(function() {
		$("#MSidebar").css("overflow-y", "hidden");
	});

});

$(window).resize(function() {
	MSidebar.scale();
});

$(document).mousemove(function(event) {
	MSidebar.triggerProximity(event);
});
