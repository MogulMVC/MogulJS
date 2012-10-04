var MNote = (function() {

	function MNote() {
		_content = "Note";
	};

	// Methods
	MNote.prototype.toHTML = function() {
		return '<span class="MNote">' + _content + '</span>';
	};

	// Setters / Getters
	MNote.prototype.setContent = function(value) {
		_content = value;
	};
	
	return MNote;

})();

$(document).ready(function() {
	$('.MNote').each(function() {
		var rotation = MMath.random(-8, 8);
		$(this).css({
			'-webkit-transform' : 'rotate(' + rotation + 'deg)',
			'-moz-transform' : 'rotate(' + rotation + 'deg)',
			'-o-transform' : 'rotate(' + rotation + 'deg)',
			'-ms-transform' : 'rotate(' + rotation + 'deg)'
		})
	});
});
