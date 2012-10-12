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
});