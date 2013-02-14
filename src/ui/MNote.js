var MNote = (function() {

	function MNote(label) {

		if (label == '' || label == null) {
			label = 'Note';
		}

		var uiElement = document.createElement('span');

		$(uiElement).addClass('MNote').css({
			'transform' : MMath.random(-8, 8)
		}).html(label);

		return uiElement;

	};

	return MNote;

})();
