var MNote = (function() {

	function MNote(label) {

		if (label == null || label == '') {
			label = 'Note';
		}

		var uiElement = document.createElement('span');

		var rotation = MMath.random(-8, 8);
		var rotationCss = 'rotate(' + rotation + 'deg)';

		$(uiElement).addClass('MNote').css({
			'-webkit-transform' : rotationCss,
			'-moz-transform' : rotationCss,
			'-ms-transform' : rotationCss,
			'-o-transform' : rotationCss,
			'transform' : rotationCss
		}).html(label);

		return uiElement;

	};

	return MNote;

})();
