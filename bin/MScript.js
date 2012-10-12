//Speed
var speedFast = 125;
var speedNorm = 250;
var speedSlow = 500; 

//Color
var mono_1 = '#0a0a0a';
var mono_1_2 = '#141414'; /* Will Fix Later */
var mono_1_3 = '#232323'; /* Will Fix Later */
var mono_2 = '#323232';
var mono_3 = '#646464';
var mono_4 = '#969696';
var mono_4_2 = '#c8c8c8'; /* Will Fix Later */
var mono_5 = '#e6e6e6';
var mono_6 = '#ffffff';
		
var red_1 = '#960000';
var red_2 = '#fa0000';
var red_3 = '#f07373';
var red_4 = '#890c0c';
		
var orange_1 = '#963c00';
var orange_2 = '#fa6400';
var orange_3 = '#f0a573';
var orange_4 = '#8c4110';
		
var yellow_1 = '#969600';
var yellow_2 = '#fafa00'; //Change to #fac800 after redesign
var yellow_3 = '#f0f073';
var yellow_4 = '#8b8b0e';
		
var green_1 = '#009600';
var green_2 = '#00fa00';
var green_3 = '#73f073';
var green_4 = '#0d8a0d';
		
var blue_1 = '#004b96';
var blue_2 = '#007dfa';
var blue_3 = '#73b2f0';
var blue_4 = '#104e8c';
		
var violet_1 = '#4b0096';
var violet_2 = '#7d00fa';
var violet_3 = '#b273f0';
var violet_4 = '#4a0c89';
		
var outline = mono_3;
var outline_down = mono_2;
		
//Visual
var rounded = '3px'; //Same size as CSS
var rounded_large = '2em';$(window).load(function() {

	// Fade in the stage image
	$("#MStageImage").delay(speedNorm).animate({
		opacity : 1
	}, speedSlow);

	// Draggable
	//$(".MPopupContainer").draggable();
	//$(".MHoverForm").draggable();
	//$(".MHoverMessage").draggable();

	//$(".MPopupContainer").addTouch();
	//$(".MHoverForm").addTouch();
	//$(".MHoverMessage").addTouch();

});
$(document).ready(function() {
	$('input[type="file"]').addClass('MButtonUploadInput');
	$('input[type="file"]').wrap('<div class="MButtonUpload"></div>');
	$('.MButtonUpload').append('<span>Select File</span>');
});$(document).ready(function() {
	// Set the default state
	MList.updateUI();

	$('.MListItem input[type=checkbox]').live('change', function() {
		// Add a change event listener
		// A label can change the state of the checkbox so I am using change instead of click
		MList.updateUI();
	});
});$(window).load(function() {
	// Fade in all images
	$("#MMainWindow img").animate({
		opacity : 1
	}, speedSlow);
});
$(document).ready(function() {
	$('.MNote, .MNoteRed, .MNoteR, .MNoteOrange, .MNoteO, .MNoteYellow, .MNoteY, .MNoteGreen, .MNoteG, .MNoteBlue, .MNoteB, .MNoteViolet, .MNoteV').each(function() {
		var rotation = MMath.random(-8, 8);
		$(this).css({
			'-webkit-transform' : 'rotate(' + rotation + 'deg)',
			'-moz-transform' : 'rotate(' + rotation + 'deg)',
			'-o-transform' : 'rotate(' + rotation + 'deg)',
			'-ms-transform' : 'rotate(' + rotation + 'deg)'
		})
	});
});$(document).ready(function() {
	$('.MPopup .MIconClose').live('click', function() {
		$(this).closest('.MPopupContainer').hide();
	});
});
$(document).ready(function() {
	$("progress").each(function() {
		// Get default settings to reapply later
		var currentId = $(this).attr('id');
		var currentPercent = $(this).attr('value');

		var idString = '';
		if (currentId !== undefined) {
			idString = 'id=' + currentId;
		}

		var percentString = '';
		if (currentPercent !== undefined) {
			percentString = currentPercent + '%';
		}

		// Replace with the Mogul progress bar
		$(this).replaceWith('<div ' + idString + ' class="MProgressBar"><div class="MProgressBarBG"><div class="MProgressBarFG" style="width:' + percentString + '"><span class="MProgressBarIndicator">' + percentString + '</span></div></div></div>');
	});
});$(document).ready(function() {
	$("meter").each(function() {
		// Get default settings to reapply later
		var currentId = $(this).attr('id');
		var currentPercent = $(this).attr('value');

		var idString = '';
		if (currentId !== undefined) {
			idString = 'id=' + currentId;
		}

		var percentString = '';
		if (currentPercent !== undefined) {
			percentString = currentPercent + '%';
		}

		// Replace with the Mogul progress bar
		$(this).replaceWith('<div class="MRatingsBar"><div ' + idString + ' class="MRatingsBarBG"><div class="MRatingsBarFG" style="width:' + percentString + '"></div></div></div>');
	});
});$(document).ready(function() {
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
});

$(window).resize(function() {
	MSideBar.scale();
});

$(document).mousemove(function(event) {
	MSideBar.triggerProximity(event);
});$(document).ready(function() {
	//Add a message container if one doesnt exist
	if ($('#MSystemMessageContainer').length == 0) {
		$('#MMainWindow').append('<div id="MSystemMessageContainer"></div>');
	}

	$('.MSystemMessage .MIconClose').live('click', function() {
		$(this).parent().remove();
	});
});

$(window).load(function() {
	MSystemMessageContainer.position();
});

$(window).resize(function() {
	MSystemMessageContainer.position();
}); $(document).ready(function() {
	$('.MTabWidget').MTab();
}); $(document).ready(function() {
	$("[MTip=n],[MTip=N]").MTip({
		gravity : "N",
		delayIn : speedSlow
	});

	$("[MTip=nw], [MTip=NW]").MTip({
		gravity : "NW",
		delayIn : speedSlow
	});

	$("[MTip=ne], [MTip=NE]").MTip({
		gravity : "NE",
		delayIn : speedSlow
	});

	$("[MTip=s], [MTip=S]").MTip({
		gravity : "S",
		delayIn : speedSlow
	});

	$("[MTip=sw], [MTip=SW]").MTip({
		gravity : "SW",
		delayIn : speedSlow
	});

	$("[MTip=se], [MTip=SE]").MTip({
		gravity : "SE",
		delayIn : speedSlow
	});

	$("[MTip=w], [MTip=W]").MTip({
		gravity : "W",
		delayIn : speedSlow
	});

	$("[MTip=e], [MTip=E]").MTip({
		gravity : "E",
		delayIn : speedSlow
	});
}); $(window).load(function() {
	MToolBar.position();
});

$(window).resize(function() {
	MToolBar.position();
});
var MButton = (function() {

	function MButton() {
		_idString = '';
		_color = '';
		_text = 'Button';
	};

	// Methods
	MButton.prototype.toHTML = function() {
		return '<button ' + _idString + ' class="MButton' + _color + '">' + _text + '</button>';
	};

	// Setters / Getters
	MButton.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MButton.prototype.setColor = function(value) {
		if ( typeof value == 'string') {
			value.toUpperCase();
			if (value == "" || value == null || value == "R" || value == "O" || value == "Y" || value == "G" || value == "B" || value == "V") {
				_color = value;
			}
		}
	};

	MButton.prototype.setText = function(value) {
		if ( typeof value == 'string') {
			if (value != "" && value != null) {
				_text = value;
			}
		}
	};

	return MButton;

})();
var MInputText = (function() {

	function MInputText() {
	};

	// Static Methods
	MInputText.passWordToggle = function(id) {
		var element = document.getElementById(id);
		if (element.type == "password") {
			element.type = "text";
		} else {
			element.type = "password";
		}
	};

	return MInputText;

})();
var MListItem = (function() {

	function MListItem() {
		_idString = '';
	};

	// Methods
	MListItem.prototype.toHTML = function() {
		return '<li ' + _idString + ' class="MListItem"></li>';
	};

	// Setters / Getters
	MListItem.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	return MListItem;

})();
var MList = (function() {

	function MList() {
	};

	// Static Methods
	MList.selectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$(selector + ' .MListItem input[type=checkbox]:visible').each(function() {
			$(this).attr('checked', 'checked');
			MList.updateUI();
		});
	};

	MList.deselectAll = function(selector) {
		// Set a deault parameter
		selector = typeof selector !== 'undefined' ? selector : '';

		$(selector + ' .MListItem input[type=checkbox]').each(function() {
			$(this).removeAttr('checked');
			MList.updateUI();
		});
	};

	MList.updateUI = function() {
		$('.MListItem input[type=checkbox]').each(function() {
			// Set the default state
			if ($(this).is(':checked')) {
				$(this).closest('.MListItem').addClass('active');
			} else {
				$(this).closest('.MListItem').removeClass('active');
			}
		});
	};

	return MList;

})();var MNote = (function() {

	function MNote() {
		_idString = '';
		_text = 'Note';
	};

	// Methods
	MNote.prototype.toHTML = function() {
		var rotation = MMath.random(-8, 8);
		var rotationCss = 'style="-moz-transform: rotate(' + rotation + 'deg); -ms-transform: rotate(' + rotation + 'deg); -o-transform: rotate(' + rotation + 'deg); -webkit-transform: rotate(' + rotation + 'deg)"';
		return '<span ' + _idString + ' class="MNote" ' + rotationCss + '>' + _text + '</span>';
	};

	// Setters / Getters
	MNote.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MNote.prototype.setText = function(value) {
		if ( typeof value == 'string') {
			if (value != "" && value != null) {
				_text = value;
			}
		}
	};

	return MNote;

})();
var MPopup = (function() {

	function MPopup() {
		_idString = '';
		_width = 400;
		_height = 300;
		_title = 'Popup';
	};

	// Methods
	MPopup.prototype.toHTML = function() {
		var widthOffset = -1 * (_width / 2);
		return '<div class="MPopupContainer"><div ' + _idString + ' class="MPopup" style="margin-left:' + widthOffset + 'px;width:' + _width + 'px"><span class="MIconClose"></span><p class="MWidgetTitle">' + _title + '</p></div><div class="MModalBGBlack"></div></div>';
	};

	// Setters / Getters
	MPopup.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MPopup.prototype.setWidth = function(value) {
		_width = value;
	};

	MPopup.prototype.setHeight = function(value) {
		_height = value;
	};

	MPopup.prototype.setTitle = function(value) {
		_title = value;
	};

	return MPopup;

})();
var MProgressBar = (function() {

	function MProgressBar() {
		_idString = '';
		_percent = 0;
	};

	// Methods
	MProgressBar.prototype.toHTML = function() {
		return '<div ' + _idString + ' class="MProgressBar"><div class="MProgressBarBG"><div class="MProgressBarFG" style="width:' + _percent + '%"><span class="MProgressBarIndicator">' + _percent + '%</span></div></div></div>';
	};

	// Static Methods
	MProgressBar.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MProgressBar.prototype.setPercent = function(value) {
		value = parseInt(value);
		if (value >= 0 && value <= 100) {
			_percent = value;
		}
	};

	MProgressBar.setPercent = function(selector, value) {
		$(selector + ' .MProgressBarFG').css('width', value + '%');
		$(selector + ' .MProgressBarIndicator').html(value + '%');
	};

	MProgressBar.getPercent = function(selector) {
		// ???
		$(selector + ' .MProgressBarIndicator').val();
	};

	return MProgressBar;

})();
var MRatingsBar = (function() {

	function MRatingsBar() {
		_idString = '';
		_percent = 0;
	};

	// Methods
	MRatingsBar.prototype.toHTML = function() {
		return '<div class="MRatingsBar"><div ' + _idString + ' class="MRatingsBarBG"><div class="MRatingsBarFG" style="width:' + _percent + '%"></div></div></div>';
	};

	// Static Methods
	MRatingsBar.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MRatingsBar.prototype.setPercent = function(value) {
		value = parseInt(value);
		if (value > 0 && value < 100) {
			_percent = value;
		}
	};

	// Static Methods
	MRatingsBar.setPercent = function(selector, value) {
		// If a value number is set
		if (!isNaN(value) && value > 0) {
			// Set the correct display
			$(selector).removeClass('MRatingsBarWarning');
			$(selector).addClass('MRatingsBarBG');
			$(selector + ' .MRatingsBarFG').show();

			// Set the width
			$(selector + ' .MRatingsBarFG').css('width', value + '%');
		}
		// If a value number is not set
		else {
			$(selector).removeClass('MRatingsBarBG');
			$(selector).addClass('MRatingsBarWarning');
			$(selector + ' .MRatingsBarFG').hide();
		}
	};

	MRatingsBar.getPercent = function(selector) {
		// ???
		$(selector + ' .MRatingsBar').val();
	};

	return MRatingsBar;

})();
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
var MSlider = (function() {

	function MSlider() {
	};

	MSlider.prototype.toHTML = function() {

	};

	MSlider.prototype.setID = function() {

	};

})();

var MSystemMessageContainer = (function() {

	function MSystemMessageContainer() {
	};

	MSystemMessageContainer.position = function() {
		var headerHeight = $("#MHeader").height();
		var toolBarHeight = $("#MToolBar").height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolBarHeight)) {
			toolBarHeight = 0;
		}

		$("#MSystemMessageContainer").css("top", headerHeight + toolBarHeight);
	};

	return MSystemMessageContainer;

})();

var MSystemMessage = (function() {

	function MSystemMessage() {
		_idString = '';
		_text = 'System Message';
	};

	// Methods
	MSystemMessage.prototype.toHTML = function() {
		return '<div ' + _idString + ' class="MSystemMessage"><span class="MIconClose"/></span><span class="bold">' + _text + '</span></div>';
	};

	// Getters / Setters
	MSystemMessage.prototype.setID = function(value) {
		if ( typeof value == 'string') {
			_idString = 'id=' + value;
		}
	};

	MSystemMessage.prototype.setText = function(value) {
		if ( typeof value == 'string') {
			if (value != "" && value != null) {
				_text = value;
			}
		}
	};

	return MSystemMessage;

})();
/*
 *	Forked from jQuery EasyTabs
 *	http://os.alfajango.com/easytabs/
 */
(function($) {

	$.MTab = function(container, options) {

		// Attach to plugin anything that should be available via
		// the $container.data('MTab') object
		var plugin = this, $container = $(container), defaults = {
			animate : true,
			panelActiveClass : "active",
			tabActiveClass : "active",
			defaultTab : "li:first-child",
			animationSpeed : "normal",
			tabs : "> ul > li",
			updateHash : true,
			cycle : false,
			collapsible : false,
			collapsedClass : "collapsed",
			collapsedByDefault : true,
			uiTabs : false,
			transitionIn : 'fadeIn',
			transitionOut : 'fadeOut',
			transitionInEasing : 'swing',
			transitionOutEasing : 'swing',
			transitionCollapse : 'slideUp',
			transitionUncollapse : 'slideDown',
			transitionCollapseEasing : 'swing',
			transitionUncollapseEasing : 'swing',
			containerClass : "",
			tabsClass : "",
			tabClass : "",
			panelClass : "",
			cache : true,
			panelContext : $container
		},

		// Internal instance variables
		// (not available via MTab object)
		$defaultTab, $defaultTabLink, transitions, lastHash, skipUpdateToHash, animationSpeeds = {
			fast : 200,
			normal : 400,
			slow : 600
		},

		// Shorthand variable so that we don't need to call
		// plugin.settings throughout the plugin code
		settings;

		// =============================================================
		// Functions available via MTab object
		// =============================================================

		plugin.init = function() {

			plugin.settings = settings = $.extend({}, defaults, options);

			// Add jQuery UI's crazy class names to markup,
			// so that markup will match theme CSS
			if (settings.uiTabs) {
				settings.tabActiveClass = 'ui-tabs-selected';
				settings.containerClass = 'ui-tabs ui-widget ui-widget-content ui-corner-all';
				settings.tabsClass = 'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all';
				settings.tabClass = 'ui-state-default ui-corner-top';
				settings.panelClass = 'ui-tabs-panel ui-widget-content ui-corner-bottom';
			}

			// If collapsible is true and defaultTab specified, assume user wants defaultTab showing (not collapsed)
			if (settings.collapsible && options.defaultTab !== undefined && options.collpasedByDefault === undefined) {
				settings.collapsedByDefault = false;
			}

			// Convert 'normal', 'fast', and 'slow' animation speed settings to their respective speed in milliseconds
			if ( typeof (settings.animationSpeed) === 'string') {
				settings.animationSpeed = animationSpeeds[settings.animationSpeed];
			}

			$('a.anchor').remove().prependTo('body');

			// Store MTab object on container so we can easily set
			// properties throughout
			$container.data('MTab', {});

			plugin.setTransitions();

			plugin.getTabs();

			addClasses();

			setDefaultTab();

			bindToTabClicks();

			initHashChange();

			initCycle();

			// Append data-MTab HTML attribute to make easy to query for
			// MTab instances via CSS pseudo-selector
			$container.attr('data-MTab', true);
		};

		// Set transitions for switching between tabs based on options.
		// Could be used to update transitions if settings are changes.
		plugin.setTransitions = function() {
			transitions = (settings.animate ) ? {
				show : settings.transitionIn,
				hide : settings.transitionOut,
				speed : settings.animationSpeed,
				collapse : settings.transitionCollapse,
				uncollapse : settings.transitionUncollapse,
				halfSpeed : settings.animationSpeed / 2
			} : {
				show : "show",
				hide : "hide",
				speed : 0,
				collapse : "hide",
				uncollapse : "show",
				halfSpeed : 0
			};
		};

		// Find and instantiate tabs and panels.
		// Could be used to reset tab and panel collection if markup is
		// modified.
		plugin.getTabs = function() {
			var $matchingPanel;

			// Find the initial set of elements matching the setting.tabs
			// CSS selector within the container
			plugin.tabs = $container.find(settings.tabs),

			// Instantiate panels as empty jquery object
			plugin.panels = $(), plugin.tabs.each(function() {
				var $tab = $(this), $a = $tab.children('a'),

				// targetId is the ID of the panel, which is either the
				// `href` attribute for non-ajax tabs, or in the
				// `data-target` attribute for ajax tabs since the `href` is
				// the ajax URL
				targetId = $tab.children('a').data('target');

				$tab.data('MTab', {});

				// If the tab has a `data-target` attribute, and is thus an ajax tab
				if (targetId !== undefined && targetId !== null) {
					$tab.data('MTab').ajax = $a.attr('href');
				} else {
					targetId = $a.attr('href');
				}
				targetId = targetId.match(/#([^\?]+)/)[0].substr(1);

				$matchingPanel = settings.panelContext.find("#" + targetId);

				// If tab has a matching panel, add it to panels
				if ($matchingPanel.length) {

					// Store panel height before hiding
					$matchingPanel.data('MTab', {
						position : $matchingPanel.css('position'),
						visibility : $matchingPanel.css('visibility')
					});

					// Don't hide panel if it's active (allows `getTabs` to be called manually to re-instantiate tab collection)
					$matchingPanel.not(settings.panelActiveClass).hide();

					plugin.panels = plugin.panels.add($matchingPanel);

					$tab.data('MTab').panel = $matchingPanel;

					// Otherwise, remove tab from tabs collection
				} else {
					plugin.tabs = plugin.tabs.not($tab);
				}
			});
		};

		// Select tab and fire callback
		plugin.selectTab = function($clicked, callback) {
			var url = window.location, hash = url.hash.match(/^[^\?]*/)[0], $targetPanel = $clicked.parent().data('MTab').panel, ajaxUrl = $clicked.parent().data('MTab').ajax;

			// Tab is collapsible and active => toggle collapsed state
			if (settings.collapsible && !skipUpdateToHash && ($clicked.hasClass(settings.tabActiveClass) || $clicked.hasClass(settings.collapsedClass))) {
				plugin.toggleTabCollapse($clicked, $targetPanel, ajaxUrl, callback);

				// Tab is not active and panel is not active => select tab
			} else if (! $clicked.hasClass(settings.tabActiveClass) || ! $targetPanel.hasClass(settings.panelActiveClass)) {
				activateTab($clicked, $targetPanel, ajaxUrl, callback);

				// Cache is disabled => reload (e.g reload an ajax tab).
			} else if (!settings.cache) {
				activateTab($clicked, $targetPanel, ajaxUrl, callback);
			}

		};

		// Toggle tab collapsed state and fire callback
		plugin.toggleTabCollapse = function($clicked, $targetPanel, ajaxUrl, callback) {
			plugin.panels.stop(true, true);

			if (fire($container, "MTab:before", [$clicked, $targetPanel, settings])) {
				plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);

				// If panel is collapsed, uncollapse it
				if ($clicked.hasClass(settings.collapsedClass)) {

					// If ajax panel and not already cached
					if (ajaxUrl && (!settings.cache || !$clicked.parent().data('MTab').cached)) {
						$container.trigger('MTab:ajax:beforeSend', [$clicked, $targetPanel]);

						$targetPanel.load(ajaxUrl, function(response, status, xhr) {
							$clicked.parent().data('MTab').cached = true;
							$container.trigger('MTab:ajax:complete', [$clicked, $targetPanel, response, status, xhr]);
						});
					}

					// Update CSS classes of tab and panel
					$clicked.parent().removeClass(settings.collapsedClass).addClass(settings.tabActiveClass).children().removeClass(settings.collapsedClass).addClass(settings.tabActiveClass);

					$targetPanel
					.addClass(settings.panelActiveClass)
					[transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, function() {
						$container.trigger('MTab:midTransition', [$clicked, $targetPanel, settings]);
						if ( typeof callback == 'function')
							callback();
					});

					// Otherwise, collapse it
				} else {

					// Update CSS classes of tab and panel
					$clicked.addClass(settings.collapsedClass).parent().addClass(settings.collapsedClass);

					$targetPanel
					.removeClass(settings.panelActiveClass)
					[transitions.collapse](transitions.speed, settings.transitionCollapseEasing, function() {
						$container.trigger("MTab:midTransition", [$clicked, $targetPanel, settings]);
						if ( typeof callback == 'function')
							callback();
					});
				}
			}
		};

		// Find tab with target panel matching value
		plugin.matchTab = function(hash) {
			return plugin.tabs.find("[href='" + hash + "'],[data-target='" + hash + "']").first();
		};

		// Find panel with `id` matching value
		plugin.matchInPanel = function(hash) {
			return ( hash ? plugin.panels.filter(':has(' + hash + ')').first() : [] );
		};

		// Select matching tab when URL hash changes
		plugin.selectTabFromHashChange = function() {
			var hash = window.location.hash.match(/^[^\?]*/)[0], $tab = plugin.matchTab(hash), $panel;

			if (settings.updateHash) {

				// If hash directly matches tab
				if ($tab.length) {
					skipUpdateToHash = true;
					plugin.selectTab($tab);

				} else {
					$panel = plugin.matchInPanel(hash);

					// If panel contains element matching hash
					if ($panel.length) {
						hash = '#' + $panel.attr('id');
						$tab = plugin.matchTab(hash);
						skipUpdateToHash = true;
						plugin.selectTab($tab);

						// If default tab is not active...
					} else if (! $defaultTab.hasClass(settings.tabActiveClass) && !settings.cycle) {

						// ...and hash is blank or matches a parent of the tab container or
						// if the last tab (before the hash updated) was one of the other tabs in this container.
						if (hash === '' || plugin.matchTab(lastHash).length || $container.closest(hash).length) {
							skipUpdateToHash = true;
							plugin.selectTab($defaultTabLink);
						}
					}
				}
			}
		};

		// Cycle through tabs
		plugin.cycleTabs = function(tabNumber) {
			if (settings.cycle) {
				tabNumber = tabNumber % plugin.tabs.length;
				$tab = $(plugin.tabs[tabNumber]).children("a").first();
				skipUpdateToHash = true;
				plugin.selectTab($tab, function() {
					setTimeout(function() {
						plugin.cycleTabs(tabNumber + 1);
					}, settings.cycle);
				});
			}
		};

		// Convenient public methods
		plugin.publicMethods = {
			select : function(tabSelector) {
				var $tab;

				// Find tab container that matches selector (like 'li#tab-one' which contains tab link)
				if (( $tab = plugin.tabs.filter(tabSelector)).length === 0) {

					// Find direct tab link that matches href (like 'a[href="#panel-1"]')
					if (( $tab = plugin.tabs.find("a[href='" + tabSelector + "']")).length === 0) {

						// Find direct tab link that matches selector (like 'a#tab-1')
						if (( $tab = plugin.tabs.find("a" + tabSelector)).length === 0) {

							// Find direct tab link that matches data-target (lik 'a[data-target="#panel-1"]')
							if (( $tab = plugin.tabs.find("[data-target='" + tabSelector + "']")).length === 0) {

								// Find direct tab link that ends in the matching href (like 'a[href$="#panel-1"]', which would also match http://example.com/currentpage/#panel-1)
								if (( $tab = plugin.tabs.find("a[href$='" + tabSelector + "']")).length === 0) {

									$.error('Tab \'' + tabSelector + '\' does not exist in tab set');
								}
							}
						}
					}
				} else {
					// Select the child tab link, since the first option finds the tab container (like <li>)
					$tab = $tab.children("a").first();
				}
				plugin.selectTab($tab);
			}
		};

		// =============================================================
		// Private functions
		// =============================================================

		// Triggers an event on an element and returns the event result
		var fire = function(obj, name, data) {
			var event = $.Event(name);
			obj.trigger(event, data);
			return event.result !== false;
		}
		// Add CSS classes to markup (if specified), called by init
		var addClasses = function() {
			$container.addClass(settings.containerClass);
			plugin.tabs.parent().addClass(settings.tabsClass);
			plugin.tabs.addClass(settings.tabClass);
			plugin.panels.addClass(settings.panelClass);
		};

		// Set the default tab, whether from hash (bookmarked) or option,
		// called by init
		var setDefaultTab = function() {
			var hash = window.location.hash.match(/^[^\?]*/)[0], $selectedTab = plugin.matchTab(hash).parent(), $panel;

			// If hash directly matches one of the tabs, active on page-load
			if ($selectedTab.length === 1) {
				$defaultTab = $selectedTab;
				settings.cycle = false;

			} else {
				$panel = plugin.matchInPanel(hash);

				// If one of the panels contains the element matching the hash,
				// make it active on page-load
				if ($panel.length) {
					hash = '#' + $panel.attr('id');
					$defaultTab = plugin.matchTab(hash).parent();

					// Otherwise, make the default tab the one that's active on page-load
				} else {
					$defaultTab = plugin.tabs.parent().find(settings.defaultTab);
					if ($defaultTab.length === 0) {
						$.error("The specified default tab ('" + settings.defaultTab + "') could not be found in the tab set.");
					}
				}
			}

			$defaultTabLink = $defaultTab.children("a").first();

			activateDefaultTab($selectedTab);
		};

		// Activate defaultTab (or collapse by default), called by setDefaultTab
		var activateDefaultTab = function($selectedTab) {
			var defaultPanel, defaultAjaxUrl;

			if (settings.collapsible && $selectedTab.length === 0 && settings.collapsedByDefault) {
				$defaultTab.addClass(settings.collapsedClass).children().addClass(settings.collapsedClass);

			} else {

				defaultPanel = $($defaultTab.data('MTab').panel);
				defaultAjaxUrl = $defaultTab.data('MTab').ajax;

				if (defaultAjaxUrl && (!settings.cache || !$defaultTab.data('MTab').cached)) {
					$container.trigger('MTab:ajax:beforeSend', [$defaultTabLink, defaultPanel]);
					defaultPanel.load(defaultAjaxUrl, function(response, status, xhr) {
						$defaultTab.data('MTab').cached = true;
						$container.trigger('MTab:ajax:complete', [$defaultTabLink, defaultPanel, response, status, xhr]);
					});
				}

				$defaultTab.data('MTab').panel.show().addClass(settings.panelActiveClass);

				$defaultTab.addClass(settings.tabActiveClass).children().addClass(settings.tabActiveClass);
			}
		};

		// Bind tab-select funtionality to namespaced click event, called by
		// init
		var bindToTabClicks = function() {
			plugin.tabs.children("a").bind("click.MTab", function(e) {

				// Stop cycling when a tab is clicked
				settings.cycle = false;

				// Hash will be updated when tab is clicked,
				// don't cause tab to re-select when hash-change event is fired
				skipUpdateToHash = false;

				// Select the panel for the clicked tab
				plugin.selectTab($(this));

				// Don't follow the link to the anchor
				e.preventDefault();
			});
		};

		// Activate a given tab/panel, called from plugin.selectTab:
		//
		//   * fire `MTab:before` hook
		//   * get ajax if new tab is an uncached ajax tab
		//   * animate out previously-active panel
		//   * fire `MTab:midTransition` hook
		//   * update URL hash
		//   * animate in newly-active panel
		//   * update CSS classes for inactive and active tabs/panels
		//
		// TODO: This could probably be broken out into many more modular
		// functions
		var activateTab = function($clicked, $targetPanel, ajaxUrl, callback) {
			plugin.panels.stop(true, true);

			if (fire($container, "MTab:before", [$clicked, $targetPanel, settings])) {
				var $visiblePanel = plugin.panels.filter(":visible"), $panelContainer = $targetPanel.parent(), targetHeight, visibleHeight, heightDifference, showPanel, hash = window.location.hash.match(/^[^\?]*/)[0];

				if (settings.animate) {
					targetHeight = getHeightForHidden($targetPanel);
					visibleHeight = $visiblePanel.length ? setAndReturnHeight($visiblePanel) : 0;
					heightDifference = targetHeight - visibleHeight;
				}

				// Set lastHash to help indicate if defaultTab should be
				// activated across multiple tab instances.
				lastHash = hash;

				// TODO: Move this function elsewhere
				showPanel = function() {
					// At this point, the previous panel is hidden, and the new one will be selected
					$container.trigger("MTab:midTransition", [$clicked, $targetPanel, settings]);

					// Gracefully animate between panels of differing heights, start height change animation *after* panel change if panel needs to contract,
					// so that there is no chance of making the visible panel overflowing the height of the target panel
					if (settings.animate && settings.transitionIn == 'fadeIn') {
						if (heightDifference < 0)
							$panelContainer.animate({
								height : $panelContainer.height() + heightDifference
							}, transitions.halfSpeed).css({
								'min-height' : ''
							});
					}

					if (settings.updateHash && !skipUpdateToHash) {
						//window.location = url.toString().replace((url.pathname + hash), (url.pathname + $clicked.attr("href")));
						// Not sure why this behaves so differently, but it's more straight forward and seems to have less side-effects
						window.location.hash = '#' + $targetPanel.attr('id');
					} else {
						skipUpdateToHash = false;
					}

					$targetPanel
					[transitions.show](transitions.speed, settings.transitionInEasing, function() {
						$panelContainer.css({
							height : '',
							'min-height' : ''
						});
						// After the transition, unset the height
						$container.trigger("MTab:after", [$clicked, $targetPanel, settings]);
						// callback only gets called if selectTab actually does something, since it's inside the if block
						if ( typeof callback == 'function') {
							callback();
						}
					});
				};

				if (ajaxUrl && (!settings.cache || !$clicked.parent().data('MTab').cached)) {
					$container.trigger('MTab:ajax:beforeSend', [$clicked, $targetPanel]);
					$targetPanel.load(ajaxUrl, function(response, status, xhr) {
						$clicked.parent().data('MTab').cached = true;
						$container.trigger('MTab:ajax:complete', [$clicked, $targetPanel, response, status, xhr]);
					});
				}

				// Gracefully animate between panels of differing heights, start height change animation *before* panel change if panel needs to expand,
				// so that there is no chance of making the target panel overflowing the height of the visible panel
				if (settings.animate && settings.transitionOut == 'fadeOut') {
					if (heightDifference > 0) {
						$panelContainer.animate({
							height : ($panelContainer.height() + heightDifference )
						}, transitions.halfSpeed);
					} else {
						// Prevent height jumping before height transition is triggered at midTransition
						$panelContainer.css({
							'min-height' : $panelContainer.height()
						});
					}
				}

				// Change the active tab *first* to provide immediate feedback when the user clicks
				plugin.tabs.filter("." + settings.tabActiveClass).removeClass(settings.tabActiveClass).children().removeClass(settings.tabActiveClass);
				plugin.tabs.filter("." + settings.collapsedClass).removeClass(settings.collapsedClass).children().removeClass(settings.collapsedClass);
				$clicked.parent().addClass(settings.tabActiveClass).children().addClass(settings.tabActiveClass);

				plugin.panels.filter("." + settings.panelActiveClass).removeClass(settings.panelActiveClass);
				$targetPanel.addClass(settings.panelActiveClass);

				if ($visiblePanel.length) {
					$visiblePanel
					[transitions.hide](transitions.speed, settings.transitionOutEasing, showPanel);
				} else {
					$targetPanel
					[transitions.uncollapse](transitions.speed, settings.transitionUncollapseEasing, showPanel);
				}
			}
		};

		// Get heights of panels to enable animation between panels of
		// differing heights, called by activateTab
		var getHeightForHidden = function($targetPanel) {

			if ($targetPanel.data('MTab') && $targetPanel.data('MTab').lastHeight) {
				return $targetPanel.data('MTab').lastHeight;
			}

			// this is the only property MTab changes, so we need to grab its value on each tab change
			var display = $targetPanel.css('display'),

			// Workaround, because firefox returns wrong height if element itself has absolute positioning
			height = $targetPanel.wrap($('<div>', {
				position : 'absolute',
				'visibility' : 'hidden',
				'overflow' : 'hidden'
			})).css({
				'position' : 'relative',
				'visibility' : 'hidden',
				'display' : 'block'
			}).outerHeight();

			$targetPanel.unwrap();

			// Return element to previous state
			$targetPanel.css({
				position : $targetPanel.data('MTab').position,
				visibility : $targetPanel.data('MTab').visibility,
				display : display
			});

			// Cache height
			$targetPanel.data('MTab').lastHeight = height;

			return height;
		};

		// Since the height of the visible panel may have been manipulated due to interaction,
		// we want to re-cache the visible height on each tab change, called
		// by activateTab
		var setAndReturnHeight = function($visiblePanel) {
			var height = $visiblePanel.outerHeight();

			if ($visiblePanel.data('MTab')) {
				$visiblePanel.data('MTab').lastHeight = height;
			} else {
				$visiblePanel.data('MTab', {
					lastHeight : height
				});
			}
			return height;
		};

		// Setup hash-change callback for forward- and back-button
		// functionality, called by init
		var initHashChange = function() {

			// enabling back-button with jquery.hashchange plugin
			// http://benalman.com/projects/jquery-hashchange-plugin/
			if ( typeof $(window).hashchange === 'function') {
				$(window).hashchange(function() {
					plugin.selectTabFromHashChange();
				});
			} else if ($.address && typeof $.address.change === 'function') {// back-button with jquery.address plugin http://www.asual.com/jquery/address/docs/
				$.address.change(function() {
					plugin.selectTabFromHashChange();
				});
			}
		};

		// Begin cycling if set in options, called by init
		var initCycle = function() {
			var tabNumber;
			if (settings.cycle) {
				tabNumber = plugin.tabs.index($defaultTab);
				setTimeout(function() {
					plugin.cycleTabs(tabNumber + 1);
				}, settings.cycle);
			}
		};

		plugin.init();

	};

	$.fn.MTab = function(options) {
		var args = arguments;

		return this.each(function() {
			var $this = $(this), plugin = $this.data('MTab');

			// Initialization was called with $(el).MTab( { options } );
			if (undefined === plugin) {
				plugin = new $.MTab(this, options);
				$this.data('MTab', plugin);
			}

			// User called public method
			if (plugin.publicMethods[options]) {
				return plugin.publicMethods[options](Array.prototype.slice.call(args, 1));
			}
		});
	};

})(jQuery);
/*
 *	Forked from jQuery tipsy
 *	http://onehackoranother.com/projects/jquery/tipsy/
 */
(function($) {

	function maybeCall(thing, ctx) {
		return ( typeof thing == 'function') ? (thing.call(ctx)) : thing;
	};

	function Tip(element, options) {
		this.$element = $(element);
		this.options = options;
		this.enabled = true;
		this.fixTitle();
	};

	Tip.prototype = {
		show : function() {
			var title = this.getTitle();
			if (title && this.enabled) {
				var $tip = this.tip();

				$tip.find('.MTipInner')[this.options.html ? 'html' : 'text'](title);
				$tip[0].className = 'MTip';
				// reset classname in case of dynamic gravity
				$tip.remove().css({
					top : 0,
					left : 0,
					visibility : 'hidden',
					display : 'block'
				}).prependTo(document.body);

				var pos = $.extend({}, this.$element.offset(), {
					width : this.$element[0].offsetWidth,
					height : this.$element[0].offsetHeight
				});

				var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight, gravity = maybeCall(this.options.gravity, this.$element[0]);

				var tp;
				switch (gravity.charAt(0)) {
					case 'N':
						tp = {
							top : pos.top + pos.height + this.options.offset,
							left : pos.left + pos.width / 2 - actualWidth / 2
						};
						break;
					case 'S':
						tp = {
							top : pos.top - actualHeight - this.options.offset,
							left : pos.left + pos.width / 2 - actualWidth / 2
						};
						break;
					case 'E':
						tp = {
							top : pos.top + pos.height / 2 - actualHeight / 2,
							left : pos.left - actualWidth - this.options.offset
						};
						break;
					case 'W':
						tp = {
							top : pos.top + pos.height / 2 - actualHeight / 2,
							left : pos.left + pos.width + this.options.offset
						};
						break;
				}

				if (gravity.length == 2) {
					if (gravity.charAt(1) == 'W') {
						tp.left = pos.left + pos.width / 2 - 15;
					} else {
						tp.left = pos.left + pos.width / 2 - actualWidth + 15;
					}
				}

				$tip.css(tp).addClass('MTip' + gravity);
				$tip.find('.MTipArrow')[0].className = 'MTipArrow MTipArrow' + gravity.charAt(0);
				if (this.options.className) {
					$tip.addClass(maybeCall(this.options.className, this.$element[0]));
				}

				if (this.options.fade) {
					$tip.stop().css({
						opacity : 0,
						display : 'block',
						visibility : 'visible'
					}).animate({
						opacity : this.options.opacity
					});
				} else {
					$tip.css({
						visibility : 'visible',
						opacity : this.options.opacity
					});
				}
			}
		},

		hide : function() {
			if (this.options.fade) {
				this.tip().stop().fadeOut(function() {
					$(this).remove();
				});
			} else {
				this.tip().remove();
			}
		},

		fixTitle : function() {
			var $e = this.$element;
			if ($e.attr('title') || typeof ($e.attr('original-title')) != 'string') {
				$e.attr('original-title', $e.attr('title') || '').removeAttr('title');
			}
		},

		getTitle : function() {
			var title, $e = this.$element, o = this.options;
			this.fixTitle();
			var title, o = this.options;
			if ( typeof o.title == 'string') {
				title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
			} else if ( typeof o.title == 'function') {
				title = o.title.call($e[0]);
			}
			title = ('' + title).replace(/(^\s*|\s*$)/, "");
			return title || o.fallback;
		},

		tip : function() {
			if (!this.$tip) {
				this.$tip = $('<div class="MTip"></div>').html('<div class="MTipArrow"></div><div class="MTipInner"></div>');
			}
			return this.$tip;
		},

		validate : function() {
			if (!this.$element[0].parentNode) {
				this.hide();
				this.$element = null;
				this.options = null;
			}
		},

		enable : function() {
			this.enabled = true;
		},
		disable : function() {
			this.enabled = false;
		},
		toggleEnabled : function() {
			this.enabled = !this.enabled;
		}
	};

	$.fn.MTip = function(options) {

		if (options === true) {
			return this.data('MTip');
		} else if ( typeof options == 'string') {
			var tip = this.data('MTip');
			if (tip)
				tip[options]();
			return this;
		}

		options = $.extend({}, $.fn.MTip.defaults, options);

		function get(ele) {
			var tip = $.data(ele, 'MTip');
			if (!tip) {
				tip = new Tip(ele, $.fn.MTip.elementOptions(ele, options));
				$.data(ele, 'MTip', tip);
			}
			return tip;
		}

		function enter() {
			var tip = get(this);
			tip.hoverState = 'in';
			if (options.delayIn == 0) {
				tip.show();
			} else {
				tip.fixTitle();
				setTimeout(function() {
					if (tip.hoverState == 'in')
						tip.show();
				}, options.delayIn);
			}
		};

		function leave() {
			var tip = get(this);
			tip.hoverState = 'out';
			if (options.delayOut == 0) {
				tip.hide();
			} else {
				setTimeout(function() {
					if (tip.hoverState == 'out')
						tip.hide();
				}, options.delayOut);
			}
		};

		if (!options.live)
			this.each(function() {
				get(this);
			});

		if (options.trigger != 'manual') {
			var binder = options.live ? 'live' : 'bind', eventIn = options.trigger == 'hover' ? 'mouseenter' : 'focus', eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
			this[binder](eventIn, enter)[binder](eventOut, leave);
		}

		return this;

	};

	$.fn.MTip.defaults = {
		className : null,
		delayIn : 0,
		delayOut : 0,
		fade : false,
		fallback : '',
		gravity : 'n',
		html : false,
		live : false,
		offset : 0,
		opacity : 1,
		title : 'title',
		trigger : 'hover'
	};

	// Overwrite this method to provide options on a per-element basis.
	// For example, you could store the gravity in a 'tip-gravity' attribute:
	// return $.extend({}, options, {gravity: $(ele).attr('tip-gravity') || 'n' });
	// (remember - do not modify 'options' in place!)
	$.fn.MTip.elementOptions = function(ele, options) {
		return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
	};

	$.fn.MTip.autoNS = function() {
		return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 'S' : 'N';
	};

	$.fn.MTip.autoWE = function() {
		return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'E' : 'W';
	};

	/**
	 * yields a closure of the supplied parameters, producing a function that takes
	 * no arguments and is suitable for use as an autogravity function like so:
	 *
	 * @param margin (int) - distance from the viewable region edge that an
	 *        element should be before setting its tooltip's gravity to be away
	 *        from that edge.
	 * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
	 *        if there are no viewable region edges effecting the tooltip's
	 *        gravity. It will try to vary from this minimally, for example,
	 *        if 'sw' is preferred and an element is near the right viewable
	 *        region edge, but not the top edge, it will set the gravity for
	 *        that element's tooltip to be 'se', preserving the southern
	 *        component.
	 */
	$.fn.MTip.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {
				ns : prefer[0],
				ew : (prefer.length > 1 ? prefer[1] : false)
			}, boundTop = $(document).scrollTop() + margin, boundLeft = $(document).scrollLeft() + margin, $this = $(this);

			if ($this.offset().top < boundTop)
				dir.ns = 'N';
			if ($this.offset().left < boundLeft)
				dir.ew = 'W';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin)
				dir.ew = 'E';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin)
				dir.ns = 'S';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};

})(jQuery);
// Class
var MToolBar = (function() {

	function MToolBar() {
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
(function() {

	var MColor = {
		fadeHex : function(hex, hex2, ratio) {
			this.r = hex >> 16;
			this.g = hex >> 8 & 0xFF;
			this.b = hex & 0xFF;

			this.r += ((hex2 >> 16) - this.r) * ratio;
			this.g += ((hex2 >> 8 & 0xFF) - this.g) * ratio;
			this.b += ((hex2 & 0xFF) - this.b) * ratio;

			return (this.r << 16 | this.g << 8 | this.b);
		}
	}

	window.MColor = MColor;

})();
(function() {

	var MCookie = {
		set : function(name, value, expires, path, domain, secure) {
			var today = new Date();
			today.setTime(today.getTime());
			if (expires) {
				expires = expires * 1000 * 60 * 60 * 24;
			}
			var expires_date = new Date(today.getTime() + (expires));
			document.cookie = name + " = " + escape(value) + ((expires ) ? ";expires = " + expires_date.toGMTString() : "" ) + ((path ) ? ";path = " + path : "" ) + ((domain ) ? ";domain = " + domain : "" ) + ((secure ) ? ";secure" : "" );
		},
		get : function(name) {
			var i, x, y, ARRcookies = document.cookie.split(";");
			for ( i = 0; i < ARRcookies.length; i++) {
				x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
				y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
				x = x.replace(/^\s+|\s+$/g, "");
				if (x == name) {
					return unescape(y);
				}
			}
		}
	}

	window.MCookie = MCookie;

})();
(function($) {

	$.fn.MHTMLAnimate = function(html, speed, callback) {

		return this.each(function() {

			var element = $(this);

			var current = {
				width : element.width() + 'px',
				height : element.height() + 'px'
			}

			var final = {
				width : this.style.width,
				height : this.style.height
			}

			element.html(html);

			var next = {
				width : element.width() + 'px',
				height : element.height() + 'px'
			}

			element.css(current).animate(next, speed, function() {
				element.css(final);
				if ($.isFunction(callback)) {
					callback();
				}
			});

		});

	};

})(jQuery);
(function() {

	var MLoad = {
		js : function(url) {
			var headID = document.getElementsByTagName('head')[0];
			var scriptNode = document.createElement('script');
			scriptNode.src = url;
			headID.appendChild(scriptNode);
		},
		css : function(url) {
			var headID = document.getElementsByTagName('head')[0];
			var cssNode = document.createElement('link');
			cssNode.href = url;
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			headID.appendChild(cssNode);
		}
	}

	window.MLoad = MLoad;

})();
(function() {

	var MMath = {
		random : function(min, max) {
			return Math.random() * (max - min) + min;
		},
		linear_regression : function(x, y) {
			// calculate number points
			var n = x.length;

			// ensure both arrays of points are the same size
			if (n != y.length) {
				return ['Error'];
			}

			// calculate sums
			var x_sum = 0;

			for (var i = 0; i < x.length; i++) {
				x_sum += x[i];
			}

			var y_sum = 0;

			for (var i = 0; i < y.length; i++) {
				y_sum += y[i];
			}

			var xx_sum = 0;
			var xy_sum = 0;

			for (var i = 0; i < n; i++) {
				xy_sum += (x[i] * y[i]);
				xx_sum += (x[i] * x[i]);
			}

			// calculate slope
			var m = ((n * xy_sum) - (x_sum * y_sum)) / ((n * xx_sum) - (x_sum * x_sum));

			// calculate intercept
			var b = (y_sum - (m * x_sum)) / n;

			// return result
			return [m, b];
		}
	}

	window.MMath = MMath;

})();
(function() {

	var MQuery = {
		search : function(search) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}

			if (search == "") {
				$('[searchable=true]').show();
			} else {
				$('[searchable=true]').hide();
				$('[searchable=true]:Contains(' + search + ')').show();
			}
		}
	}

	window.MQuery = MQuery;

})();
(function() {

	var MTemperature = {
		c2f : function(value) {
			return value * 9 / 5 + 32;
		},
		c2k : function(value) {
			return value + 273.15;
		},
		f2c : function(value) {
			return (value - 32) * 5 / 9;
		},
		f2k : function(value) {
			return (5 / 9 * (value - 32) + 273);
		},
		k2c : function(value) {
			return value - 273.15;
		},
		k2f : function(value) {
			return ((value - 273) * 1.8) + 32;
		}
	}

	window.MTemperature = MTemperature;

})();
(function() {

	var MTime = {
		sec2hms : function(sec) {
			var hms = '';

			var hours = parseInt(sec / 3600);
			var minutes = parseInt(sec / 60) % 60;
			var seconds = parseInt(sec % 60);

			//Padding
			//Hours
			var hours_pad = '';

			if (hours < 10) {
				hours_pad = "0";
			}

			//Minutes
			var minutes_pad = '';

			if (minutes < 10) {
				minutes_pad = "0";
			}

			//Seconds
			var seconds_pad = '';

			if (seconds < 10) {
				seconds_pad = "0";
			}

			//Output
			//If there are hours
			if (hours >= 0) {
				hms = hours_pad + hours + ":" + minutes_pad + minutes + ":" + seconds_pad + seconds;
			}

			//If there are no hours but there are mins
			if (hours <= 0 && minutes > 0) {
				hms = minutes_pad + minutes + ":" + seconds_pad + seconds;
			}

			//If there are no hours and no minutes
			//This will display 00 if there are 0 seconds
			if (hours <= 0 && minutes <= 0) {
				hms = seconds_pad + seconds;
			}

			return hms;
		}
	}

	window.MTime = MTime;

})();
(function() {

	var MURL = {
		current : function() {
			return
			var currentURL = window.location.protocol + '://' + window.location.host + '/' + window.location.pathname;
		},
		segment : function(segement) {
			var pathArray = window.location.pathname.split('/');
			var secondLevelLocation = pathArray[segement];
		}
	}
	
	window.MURL = MURL;

})();
