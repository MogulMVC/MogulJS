/*
 * MScript.js by Alan James
 * version 130508
 * recommended jQuery version 1.9.0
 */

(function() {

	var MConfig = {};

	MConfig.version = '130508';

	// Speed
	MConfig.speedFast = 125;
	MConfig.speedNorm = 250;
	MConfig.speedSlow = 500;

	// Color
	MConfig.mono_1 = '#0a0a0a';
	MConfig.mono_1_2 = '#141414'; // Will Fix Later
	MConfig.mono_1_3 = '#232323'; // Will Fix Later
	MConfig.mono_2 = '#323232';
	MConfig.mono_3 = '#646464';
	MConfig.mono_4 = '#969696';
	MConfig.mono_4_2 = '#c8c8c8'; // Will Fix Later
	MConfig.mono_5 = '#e6e6e6';
	MConfig.mono_6 = '#ffffff';

	MConfig.red_1 = '#960000';
	MConfig.red_2 = '#fa0000';
	MConfig.red_3 = '#f07373';
	MConfig.red_4 = '#890c0c';

	MConfig.orange_1 = '#963c00';
	MConfig.orange_2 = '#fa6400';
	MConfig.orange_3 = '#f0a573';
	MConfig.orange_4 = '#8c4110';

	MConfig.yellow_1 = '#969600';
	MConfig.yellow_2 = '#fafa00'; // Change to #fac800 after redesign
	MConfig.yellow_3 = '#f0f073';
	MConfig.yellow_4 = '#8b8b0e';

	MConfig.green_1 = '#009600';
	MConfig.green_2 = '#00fa00';
	MConfig.green_3 = '#73f073';
	MConfig.green_4 = '#0d8a0d';

	MConfig.blue_1 = '#004b96';
	MConfig.blue_2 = '#007dfa';
	MConfig.blue_3 = '#73b2f0';
	MConfig.blue_4 = '#104e8c';

	MConfig.violet_1 = '#4b0096';
	MConfig.violet_2 = '#7d00fa';
	MConfig.violet_3 = '#b273f0';
	MConfig.violet_4 = '#4a0c89';

	MConfig.outline = MConfig.mono_3;
	MConfig.outline_down = MConfig.mono_2;

	// Visual
	MConfig.rounded = '3px'; // Same size as CSS
	MConfig.rounded_large = '2em';

	window.MConfig = MConfig;

})();
$(document).ready(function() {

	$('input[type="file"]').addClass('MButtonUploadInput');
	$('input[type="file"]').wrap('<div class="MButtonUpload"></div>');
	$('.MButtonUpload').append('<span>Select File</span>');

}); $(document).ready(function() {

	$(document).on('mouseenter', '.MDropdown li:has(ul)', function() {
		$(this).children('ul').show();
	});

	$(document).on('mouseleave', '.MDropdown li:has(ul)', function() {
		$(this).children('ul').hide();
	});

});
$(document).ready(function() {
	
	// Set the default state
	MList.updateUI();

	$(document).on('change', '.MListItem input[type=checkbox], .MListItem input[type=radio]', function() {
		MList.updateUI();
	});
	
});$(window).load(function() {

	$('#MMainWindow img').animate({
		opacity : 1
	}, MConfig.speedNorm);

});
$(document).ready(function() {

	$('.MNote, .MNoteRed, .MNoteR, .MNoteOrange, .MNoteO, .MNoteYellow, .MNoteY, .MNoteGreen, .MNoteG, .MNoteBlue, .MNoteB, .MNoteViolet, .MNoteV').each(function() {
		$(this).css({
			'transform' : 'rotate(' + MNumber.random(-8, 8) + 'deg)'
		});
	});

});
$(document).ready(function() {

	$(document).on('click', '.MPopup .MIconClose', function() {
		$(this).closest('.MPopupContainer').hide();
	});
	
	$(document).keyup(function(e) {
		if(e.keyCode == 27){
			$('.MPopupContainer').hide();
		};
	});

});
$(document).ready(function() {
	
	$('progress').each(function() {
		
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
	
	// I am calling this MSearch but putting
	// it inside of MQuery because there may
	// be other query function
	
	$('#MSearch').keyup(function() {
		MQuery.search(this.value);
	});

}); $(document).ready(function() {
	
	$('meter').each(function() {
		
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

	$(document).on('click', '#MSideBar li input[type=checkbox], #MSideBar li input[type=radio]', function() {
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

$(document).mousemove(function(e) {
	MSideBar.triggerProximity(e);
});$(window).load(function() {

	// Fade in the stage image
	$('#MStageImage').delay(MConfig.speedNorm).animate({
		opacity : 1
	}, MConfig.speedSlow);

});
$(document).ready(function() {

	// Add a message container if one doesnt exist
	if ($('#MSystemMessageContainer').length == 0) {
		$('#MMainWindow').append('<div id="MSystemMessageContainer"></div>');
	}

	// Remove the message is the close button is clicked
	$(document).on('click', '.MSystemMessage .MIconClose', function() {
		$(this).parent().remove();
	});

});

$(window).load(function() {
	MSystemMessageContainer.position();
});

$(window).resize(function() {
	MSystemMessageContainer.position();
});
$(document).ready(function() {
	$('.MTabWidget').MTab();
}); $(document).ready(function() {

	$('[data-mtip=n], [data-mtip=N], [data-mtip=b], [data-mtip=B]').MTip({
		gravity : 'N',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=nw], [data-mtip=NW]').MTip({
		gravity : 'NW',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=ne], [data-mtip=NE]').MTip({
		gravity : 'NE',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=s], [data-mtip=S], [data-mtip=t], [data-mtip=T]').MTip({
		gravity : 'S',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=sw], [data-mtip=SW]').MTip({
		gravity : 'SW',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=se], [data-mtip=SE]').MTip({
		gravity : 'SE',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=w], [data-mtip=W], [data-mtip=r], [data-mtip=R]').MTip({
		gravity : 'W',
		delayIn : MConfig.speedSlow
	});

	$('[data-mtip=e], [data-mtip=E], [data-mtip=l], [data-mtip=L]').MTip({
		gravity : 'E',
		delayIn : MConfig.speedSlow
	});

});
$(window).load(function() {
	MToolBar.position();
});

$(window).resize(function() {
	MToolBar.position();
});
var MButton = (function(){
	
	function MButton(label){
		
		if(label == null || label == ''){
			label = 'Button';
		}
		
		var uiElement = document.createElement('button');
		$(uiElement).addClass('MButton').html(label);
		
		return uiElement;
		
	};
	
	return MButton;
	
})();
var MInputText = (function() {

	function MInputText(label) {

		if (label == '' || label == null) {
			label = '';
		}

		var uiElement = document.createElement('input');
		uiElement.type = 'text';
		$(uiElement).attr('placeholder', label);

		return uiElement;

	};

	MInputText.passWordToggle = function(id) {

		var element = document.getElementById(id);

		if (element.type == 'password') {
			element.type = 'text';
		} else {
			element.type = 'password';
		};

	};

	return MInputText;

})();
var MListItem = (function() {

	function MListItem() {
		
		var uiElement = document.createElement('li');
		$(uiElement).addClass('MListItem');
		
		return uiElement;
		
	};

	return MListItem;

})();
var MList = (function() {

	function MList() {
		
		var uiElement = document.createElement('ul');
		$(uiElement).addClass('MList');
		
		return uiElement;
		
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
		$('.MListItem input[type=checkbox], .MListItem input[type=radio]').each(function() {
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

	function MNote(label) {

		if (label == '' || label == null) {
			label = 'Note';
		}

		var uiElement = document.createElement('span');

		$(uiElement).addClass('MNote').css({
			'transform' : MNumber.random(-8, 8)
		}).html(label);

		return uiElement;

	};

	return MNote;

})();
var MPopup = (function() {

	function MPopup(width, height, title) {
		
		if(width == null || width == ''){
			width = 400;
		}
		
		if(height == null || height == ''){
			height = 300;
		}
		
		if(title == null || title == ''){
			title = 'Popup';
		}
		
		// Container
		var uiElement = document.createElement('div');
		
		var marginLeft = -1 * width / 2;
		
		// Contents
		var uiContents = '\
		<div class="MPopup" style="margin-left:' + marginLeft + 'px;width:' + width + 'px">\
			<span class="MIconClose"></span>\
			<p class="MWidgetTitle">' + title + '</p>\
		</div>\
		<div class="MModalBGBlack"></div>';
		
		// Put it together
		$(uiElement).addClass('MPopupContainer').append(uiContents);
		
		return uiElement;

	};

	return MPopup;

})();

var MProgressBar = (function() {

	function MProgressBar(percent) {

		percent = parseInt(percent);
		if (isNaN(percent) || percent <= 0 || percent >= 100) {
			percent = 0;
		}

		// Container
		var uiElement = document.createElement('div');

		// Contents
		var uiContents = '\
		<div class="MProgressBarBG">\
			<div class="MProgressBarFG" style="width:' + percent + '%">\
				<span class="MProgressBarIndicator">' + percent + '%</span>\
			</div>\
		</div>';

		// Put it together
		$(uiElement).addClass('MProgressBar').append(uiContents);
		
		return uiElement;

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

	function MRatingsBar(percent) {

		percent = parseInt(percent);
		if (isNaN(percent) || percent <= 0 || percent >= 100) {
			percent = 0;
		}
		
		// Container
		var uiElement = document.createElement('div');

		// Contents
		var uiContents = '\
		<div class="MRatingsBarBG">\
			<div class="MRatingsBarFG" style="width:' + percent + '%"></div>\
		</div>';

		// Put it together
		$(uiElement).addClass('MRatingsBar').append(uiContents);
		
		return uiElement;
			
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
		// I don't want a sidebar constructor because it's a singleton class
	};

	MSideBar.scale = function() {
		this.menuPlaceholderHeight();
		this.menuTop();

		var windowHeight = $(window).height();
		var headerHeight = $('#MHeaderPlaceholder').height();
		var toolBarHeight = $('#MToolBarPlaceholder').height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolBarHeight)) {
			toolBarHeight = 0;
		}

		var sidebarHeight = windowHeight - headerHeight - toolBarHeight;
		$('#MSideBar').css('top', headerHeight + toolBarHeight);
		$('#MSideBar').css('height', sidebarHeight);
	};

	MSideBar.leftShow = function() {
		this.scale();

		var sideBarWidth = $('#MSideBar').outerWidth();

		$('#MSideBarContainer').animate({
			minWidth : sideBarWidth
		}, MConfig.speedNorm);

		$('#MSideBar').animate({
			left : 0
		}, MConfig.speedNorm);

		$('.MIconArrowRight').hide();
	};

	MSideBar.leftHide = function() {
		$('#MSideBarContainer').animate({
			minWidth : 0
		}, MConfig.speedNorm);

		$('#MSideBar').animate({
			left : -360
		}, MConfig.speedNorm);

		$('.MIconArrowRight').show();
	};

	MSideBar.rightShow = function() {
		this.scale();

		var sideBarWidth = $('#MSideBar').outerWidth();

		$('#MSideBarContainer').animate({
			minWidth : sideBarWidth
		}, MConfig.speedNorm);

		$('#MSideBar').animate({
			right : 0
		}, MConfig.speedNorm);

		$('.MIconArrowLeft').hide();
	};

	MSideBar.rightHide = function() {
		$('#MSideBarContainer').animate({
			minWidth : 0
		}, MConfig.speedNorm);

		$('#MSideBar').animate({
			right : -360
		}, MConfig.speedNorm);

		$('.MIconArrowLeft').show();
	};

	MSideBar.triggerIndicatorInit = function() {
		if ($('#MSideBarTriggerLeft').length != 0 && $('#MSideBarTriggerLeftIndicator').length == 0) {
			$('#MSideBarTriggerLeft').append('<div id="MSideBarTriggerLeftIndicator"></div>');
		}

		if ($('#MSideBarTriggerRight').length != 0 && $('#MSideBarTriggerRightIndicator').length == 0) {
			$('#MSideBarTriggerRight').append('<div id="MSideBarTriggerRightIndicator"></div>');
		}
	};

	MSideBar.triggerProximity = function(event) {
		this.triggerIndicatorInit();

		var mouseX = event.pageX;
		var windowWidth = $(window).width();

		//Distace away that the indicator should show, in px
		var indicationDistanceStart = 150;

		//Left
		if (document.getElementById('MSideBarTriggerLeftIndicator')) {
			var indicatorWidth = $('#MSideBarTriggerLeftIndicator').width();

			if (mouseX < indicationDistanceStart && mouseX != 0) {
				var percentAwayDecimal = mouseX / indicationDistanceStart;
				var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
				$('#MSideBarTriggerLeftIndicator').css('left', indicatorCSSLeft);
			} else {
				$('#MSideBarTriggerLeftIndicator').css('left', -indicatorWidth);
			}

		}

		//Right
		if (document.getElementById('MSideBarTriggerRightIndicator')) {
			var indicatorWidth = $('#MSideBarTriggerRightIndicator').width();

			if (mouseX > windowWidth - indicationDistanceStart && mouseX != windowWidth) {
				var percentAwayDecimal = (windowWidth - mouseX) / indicationDistanceStart;
				var indicatorCSSLeft = -(percentAwayDecimal * indicatorWidth);
				$('#MSideBarTriggerRightIndicator').css('right', indicatorCSSLeft);
			} else {
				$('#MSideBarTriggerRightIndicator').css('right', -indicatorWidth);
			}

		}
	};

	MSideBar.menuPlaceholderHeight = function() {
		if (document.getElementById('MSideBarMenuFixed')) {
			/*Placeholder height*/
			var sidebar_menu_fixed_height = $('#MSideBarMenuFixed').height();
			$('#MSideBarMenuFixedPlaceholder').height(sidebar_menu_fixed_height);
		}
	};

	MSideBar.menuTop = function() {
		if (document.getElementById('MSideBarMenuFixed')) {
			/*Top Position*/
			var headerHeight = $('#MHeaderPlaceholder').height();
			var toolBarHeight = $('#MToolBarPlaceholder').height();

			if (isNaN(headerHeight)) {
				headerHeight = 0;
			};

			if (isNaN(toolBarHeight)) {
				toolBarHeight = 0;
			};

			var sidebarMenuTop = headerHeight + toolBarHeight;

			$('#MSideBarMenuFixed').css('top', sidebarMenuTop);
		}
	};

	MSideBar.selectAll = function() {
		$('#MSideBar li input[type=checkbox]:visible').each(function() {
			$(this).attr('checked', 'checked');
			MSideBar.updateUI();
		});
	};

	MSideBar.deselectAll = function() {
		$('#MSideBar li input[type=checkbox]').each(function() {
			$(this).removeAttr('checked');
			MSideBar.updateUI();
		});
	};

	MSideBar.updateUI = function() {
		$('#MSideBar li input[type=checkbox], #MSideBar li input[type=radio]').each(function() {
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
var MSystemMessageContainer = (function() {

	function MSystemMessageContainer() {
		// I don't want a message container constructor because it's a singleton class
	};

	MSystemMessageContainer.position = function() {

		var headerHeight = $('#MHeaderPlaceholder').height();
		var toolBarHeight = $('#MToolBarPlaceholder').height();

		if (isNaN(headerHeight)) {
			headerHeight = 0;
		}

		if (isNaN(toolBarHeight)) {
			toolBarHeight = 0;
		}

		$('#MSystemMessageContainer').css('top', headerHeight + toolBarHeight);

	};

	MSystemMessageContainer.append = function(MSystemMessage, fadeDelay, fadeSpeed) {

		if (fadeDelay == undefined) {
			fadeDelay = 0;
		}

		if (fadeSpeed == undefined) {
			fadeSpeed = 0;
		}

		$('#MSystemMessageContainer').append(MSystemMessage);
		$('.MSystemMessage').last().delay(fadeDelay).fadeTo(fadeSpeed, 0, function() {
			$(this).slideUp(250, function() {
				$(this).remove();
			});
		});

	};

	return MSystemMessageContainer;

})();
var MSystemMessage = (function() {

	function MSystemMessage(label) {

		if (label == null || label == '') {
			label = 'System Message';
		}

		// Container
		var uiElement = document.createElement('div');

		// Contents
		var uiContent = '\
		<span class="MIconClose"/></span>\
		<span class="MTextBold">' + label + '</span>';

		// Put it together
		$(uiElement).addClass('MSystemMessage').append(uiContent);

		return uiElement;

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
var MToolBar = (function() {

	function MToolBar() {
		// I don't want a toolbar constructor because it's a singleton class
	};

	MToolBar.position = function() {
		if (!document.getElementById('MHeader') && !document.getElementById('MHeaderPlaceholder')) {
			$('#MToolBar').css('top', '0px');
		}
		this.placeholderScale();
	};

	MToolBar.placeholderScale = function() {
		if ($('MToolBar') != 0) {
			var toolbarHeight = $('#MToolBar').height();
			$('#MToolBarPlaceholder').height(toolbarHeight);
		}
	};

	return MToolBar;

})();
(function() {

	var MColor = {
		fadeHex : function(hex, hex2, ratio) {
			var r = hex >> 16;
			var g = hex >> 8 & 0xFF;
			var b = hex & 0xFF;

			r += ((hex2 >> 16) - r) * ratio;
			g += ((hex2 >> 8 & 0xFF) - g) * ratio;
			b += ((hex2 & 0xFF) - b) * ratio;

			return (r << 16 | g << 8 | b);
		}
	};

	window.MColor = MColor;

})();
(function() {

	var MCookie = {
		set : function(name, value, expires, path, domain, secure) {
			var today = new Date();
			today.setTime(today.getTime());
			if (expires) {
				expires = expires * 1000 * 60 * 60 * 24;
			};
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
				};
			};
		}
	};

	window.MCookie = MCookie;

})();
(function() {

	var MDate = {
		datetime : function() {
			var now = new Date();
			var year = now.getFullYear();
			var month = ('0' + (now.getMonth() + 1)).slice(-2);
			var date = ('0' + (now.getDate())).slice(-2);
			var hour = ('0' + (now.getHours())).slice(-2);
			var minute = ('0' + (now.getMinutes())).slice(-2);
			var second = ('0' + (now.getSeconds())).slice(-2);
			return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
		},
		date : function() {
			var now = new Date();
			var year = now.getFullYear();
			var month = ('0' + (now.getMonth() + 1)).slice(-2);
			var date = ('0' + (now.getDate())).slice(-2);
			return year + '-' + month + '-' + date;
		}
	};

	window.MDate = MDate;

})();
(function() {

	var MLoad = {

		jsFramework : function(file) {

		},
		jsApplication : function(file) {

		},
		jsCache : function(file) {

		},
		jsExternal : function(url) {
			var headID = document.getElementsByTagName('head')[0];
			var scriptNode = document.createElement('script');
			scriptNode.src = url;
			headID.appendChild(scriptNode);
		},
		cssFramework : function(file) {

		},
		cssApplication : function(file) {

		},
		cssCache : function(file) {

		},
		cssExternal : function(url) {
			var headID = document.getElementsByTagName('head')[0];
			var cssNode = document.createElement('link');
			cssNode.href = url;
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			headID.appendChild(cssNode);
		}
	};

	window.MLoad = MLoad;

})();
(function() {

	var MMath = {
		linearRegression : function(x, y) {
			// calculate number points
			var n = x.length;

			// ensure both arrays of points are the same size
			if (n != y.length) {
				return ['Error'];
			};

			// calculate sums
			var x_sum = 0;

			for (var i = 0; i < x.length; i++) {
				x_sum += x[i];
			};

			var y_sum = 0;

			for (var i = 0; i < y.length; i++) {
				y_sum += y[i];
			};

			var xx_sum = 0;
			var xy_sum = 0;

			for (var i = 0; i < n; i++) {
				xy_sum += (x[i] * y[i]);
				xx_sum += (x[i] * x[i]);
			};

			// calculate slope
			var m = ((n * xy_sum) - (x_sum * y_sum)) / ((n * xx_sum) - (x_sum * x_sum));

			// calculate intercept
			var b = (y_sum - (m * x_sum)) / n;

			// return result
			return [m, b];
		}
	};

	window.MMath = MMath;

})();
(function() {

	var MNumber = {
		random : function(min, max) {
			return Math.random() * (max - min) + min;
		},
		toBoolean : function(value) {
			if (!isNaN(value) && value >= 1) {
				return true;
			}
			return false;
		}
	};

	window.MNumber = MNumber;

})();
(function() {

	var MSearchable = {
		show : function(search) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}
			if (search == "") {
				$('[data-searchable=true]').show();
			} else {
				$('[data-searchable=true]').hide();
				$('[data-searchable=true]:Contains(' + search + ')').show();
			}

		},
		showInside : function(search, container) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}
			if (search == "") {
				$(container).closest('[data-searchable=true]').show();
			} else {
				$(container).closest('[data-searchable=true]').hide();
				$(container + ':Contains(' + search + ')').closest('[data-searchable=true]').show();
			}

		},
		hide : function(search, container) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}

			$(container).closest('[data-searchable=true]').show();

			if (search != "") {
				$('[data-searchable=true]:Contains(' + search + ')').hide();
			}

		},
		hideInside : function(search, container) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}

			$(container).closest('[data-searchable=true]').show();

			if (search != "") {
				$(container + ':Contains(' + search + ')').closest('[data-searchable=true]').hide();
			}

		}
	};

	window.MSearchable = MSearchable;

})();
(function() {

	var MString = {
		random : function(length) {

			var possibleCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', '', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

			var string = '';

			for (var i = 0; i < length; i++) {
				var randomNumber = Math.random() * possibleCharacters.length;
				var randomCharacter = possibleCharacters[randomNumber];
				string += randomCharacter;
			}

			return string;
		},
		toBoolean : function(value) {

			if (value != '' && (value == 'true' || value == 'TRUE')) {
				return true;
			}

			if (value != '' && (value == '1')) {
				return true;
			}

			return false;

		},
		subBefore : function(string, character) {

		},
		urlLink : function(string, noFollow) {

		},
		urlTitle : function(string, seperator) {

		},
		escapeHtml : function(unsafe) {
			return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
		},
		firstToUpperCase : function(str) {
			var f = str.charAt(0).toUpperCase();
			return f + str.substr(1);
		}
	};

	window.MString = MString;

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
	};

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
				hours_pad = '0';
			};

			//Minutes
			var minutes_pad = '';

			if (minutes < 10) {
				minutes_pad = '0';
			};

			//Seconds
			var seconds_pad = '';

			if (seconds < 10) {
				seconds_pad = '0';
			};

			//Output
			//If there are hours
			if (hours >= 0) {
				hms = hours_pad + hours + ':' + minutes_pad + minutes + ':' + seconds_pad + seconds;
			};

			//If there are no hours but there are mins
			if (hours <= 0 && minutes > 0) {
				hms = minutes_pad + minutes + ':' + seconds_pad + seconds;
			};

			//If there are no hours and no minutes
			//This will display 00 if there are 0 seconds
			if (hours <= 0 && minutes <= 0) {
				hms = seconds_pad + seconds;
			};

			return hms;
		}
	};

	window.MTime = MTime;

})();
(function() {

	var MURL = {
		protocol : function() {
			return location.protocol;
		},

		subdomain : function() {
			var url = document.domain.split('.');

			var subdomain = '';

			if (url[0]) {
				subdomain = url[0];
			}

			return subdomain;
		},
		domain : function() {
			var url = document.domain.split('.');

			var ext = url[url.length - 1];
			var domain = url[url.length - 2];
			return domain + '.' + ext;
		},
		canonical : function() {
			return location.protocol + '://' + document.domain;
		},
		current : function() {
			return currentURL = location.protocol + '://' + location.host + '/' + location.pathname;
		},
		segment : function(segement) {
			var pathArray = location.pathname.split('/');
			secondLevelLocation = pathArray[segement];

			if (secondLevelLocation != undefined) {
				return secondLevelLocation
			} else {
				return '';
			}

		},
		reset : function() {
			var answer = confirm('All your changes will be disgarded.\nAre you sure you want to reset?');

			if (answer) {
				location.reload(true);
				return true
			};
		}
	};

	window.MURL = MURL;

})();
(function() {

	var MValidate = {
		email : function(email) {
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			return reg.test(email);
		},
		optional : function(input) {

		},
		required : function(input) {

		},
		onlyContain : function(input, array) {

		},
		mustContain : function(input, array) {

		},
		between : function(value, min, max) {
			if (value > min && value < max) {
				return true;
			}
			return false;
		},
		multipleOf : function(number, multiple) {
			if (number % multiple == 0) {
				return true;
			}
			return false;
		},
		state : function(state) {

			var stateString = state.toLowerCase();

			var stateAbbreviationArray = ['ak', 'al', 'ar', 'as', 'az', 'ca', 'co', 'ct', 'dc', 'de', 'fl', 'ga', 'gu', 'hi', 'ia', 'id', 'il', 'in', 'ks', 'ky', 'la', 'ma', 'md', 'me', 'mh', 'mi', 'mn', 'mo', 'ms', 'mt', 'nc', 'nd', 'ne', 'nh', 'nj', 'nm', 'nv', 'ny', 'oh', 'ok', 'or', 'pa', 'pr', 'pw', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'vi', 'vt', 'wa', 'wi', 'wv', 'wy'];
			var stateArray = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'iansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];

			// Check the abbreviations
			for (var i = 0, j = stateAbbreviationArray.length; i < j; i++) {

				if (stateString == stateAbbreviationArray[i]) {
					return true;
				}

			}

			// Check the full name
			for (var i = 0, j = stateArray.length; i < j; i++) {

				if (stateString == stateArray[i]) {
					return true;
				}

			}

			// If the state was not found
			return false;

		}
	};

	window.MValidate = MValidate;

})();
