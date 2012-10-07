var MNote = (function() {

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
