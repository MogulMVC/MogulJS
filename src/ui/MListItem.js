var MListItem = (function() {

	function MListItem() {
		
		var uiElement = document.createElement('li');
		$(uiElement).addClass('MListItem');
		
		return uiElement;
		
	};

	return MListItem;

})();
