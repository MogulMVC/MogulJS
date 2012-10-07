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
