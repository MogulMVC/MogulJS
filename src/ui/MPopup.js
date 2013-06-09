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

