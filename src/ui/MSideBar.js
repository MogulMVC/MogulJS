// Class
var MSideBar = (function() {

	function MSideBar() {

	};

	MSideBar.scale = function() {
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
		$("#MSideBar").css("top", headerHeight + toolBarHeight);
		$("#MSideBar").css("height", sidebarHeight);
	};

	MSideBar.leftShow = function() {
		this.scale();

		$("#MSideBarContainer").animate({
			minWidth : 352
		}, speedNorm);

		$("#MSideBar").animate({
			left : 0
		}, speedNorm);

		$(".MIconArrowRight").hide();
	};

	MSideBar.leftHide = function() {
		$("#MSideBarContainer").animate({
			minWidth : 0
		}, speedNorm);

		$("#MSideBar").animate({
			left : -360
		}, speedNorm);

		$(".MIconArrowRight").show();
	};

	MSideBar.rightShow = function() {
		this.scale();

		$("#MSideBarContainer").animate({
			minWidth : 352
		}, speedNorm);

		$("#MSideBar").animate({
			right : 0
		}, speedNorm);

		$(".MIconArrowLeft").hide();
	};

	MSideBar.rightHide = function() {
		$("#MSideBarContainer").animate({
			minWidth : 0
		}, speedNorm);

		$("#MSideBar").animate({
			right : -360
		}, speedNorm);

		$(".MIconArrowLeft").show();
	};

	MSideBar.triggerIndicatorInit = function() {
		if ($('#MSideBarTriggerLeft').length != 0 && $('#MSideBarTriggerLeftIndicator').length == 0) {
			$("#MSideBarTriggerLeft").append('<div id="MSideBarTriggerLeftIndicator"></div>');
		}

		if ($('#MSideBarTriggerRight').length != 0 && $('#MSideBarTriggerRightIndicator').length == 0) {
			$("#MSideBarTriggerRight").append('<div id="MSideBarTriggerRightIndicator"></div>');
		}
	};

	MSideBar.triggerProximity = function(event) {
		this.triggerIndicatorInit();

		var mouseX = event.pageX;
		var windowWidth = $(window).width();

		//Distace away that the indicator should show, in px
		var indicationDistanceStart = 150;

		//Left
		if (document.getElementById("MSideBarTriggerLeftIndicator")) {
			var indicatorWidth = $("#MSideBarTriggerLeftIndicator").width();

			if (mouseX < indicationDistanceStart && mouseX != 0) {
				var percentAwayDecimal = mouseX / indicationDistanceStart;
				var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
				$("#MSideBarTriggerLeftIndicator").css("left", indicatorCSSLeft);
			} else {
				$("#MSideBarTriggerLeftIndicator").css("left", -indicatorWidth);
			}

		}

		//Right
		if (document.getElementById("MSideBarTriggerRightIndicator")) {
			var indicatorWidth = $("#MSideBarTriggerRightIndicator").width();

			if (mouseX > windowWidth - indicationDistanceStart && mouseX != windowWidth) {
				var percentAwayDecimal = (windowWidth - mouseX) / indicationDistanceStart;
				var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
				$("#MSideBarTriggerRightIndicator").css("right", indicatorCSSLeft);
			} else {
				$("#MSideBarTriggerRightIndicator").css("right", -indicatorWidth);
			}

		}
	};

	MSideBar.menuPlaceholderHeight = function() {
		if (document.getElementById("MSideBarMenuFixed")) {
			/*Placeholder height*/
			var sidebar_menu_fixed_height = $("#MSideBarMenuFixed").height();
			$("#MSideBarMenuFixedPlaceholder").height(sidebar_menu_fixed_height);
		}
	};

	MSideBar.menuTop = function() {
		if (document.getElementById("MSideBarMenuFixed")) {
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

			$("#MSideBarMenuFixed").css("top", sidebarMenuTop);
		}
	};

	MSideBar.selectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$('#MSideBar li input[type=checkbox]:visible').each(function() {
			$(this).attr('checked', 'checked');
			MSideBar.updateUI();
		});
	};

	MSideBar.deselectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$('#MSideBar li input[type=checkbox]').each(function() {
			$(this).removeAttr('checked');
			MSideBar.updateUI();
		});
	};

	MSideBar.updateUI = function() {
		$('#MSideBar li input[type=checkbox]').each(function() {
			// Set the default state
			if ($(this).is(':checked')) {
				$(this).closest('li').addClass('active');
			} else {
				$(this).closest('li').removeClass('active');
			}
		});
	}

	return MSideBar;

})();

// Bootstrapper
$(document).ready(function() {
	// Set the default state
	MSideBar.updateUI();

	//Tracking it with live so I can add new items and they still work
	$('#MSideBar li input[type=checkbox]').live('click', function() {
		MSideBar.updateUI();
	});
});

$(window).load(function() {
	MSideBar.scale();

	MSideBar.menuPlaceholderHeight();
	MSideBar.menuTop();

	$("#MSideBar").mouseenter(function() {
		$("#MSideBar").css("overflow-y", "auto");
	});

	$("#MSideBar").mouseleave(function() {
		$("#MSideBar").css("overflow-y", "hidden");
	});

	//MSideBar.fadeIn();
});

$(window).resize(function() {
	MSideBar.scale();
});

$(document).mousemove(function(event) {
	MSideBar.triggerProximity(event);
});
