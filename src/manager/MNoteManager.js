$(document).ready(function() {

	$('.MNote, .MNoteRed, .MNoteR, .MNoteOrange, .MNoteO, .MNoteYellow, .MNoteY, .MNoteGreen, .MNoteG, .MNoteBlue, .MNoteB, .MNoteViolet, .MNoteV').each(function() {
		$(this).css({
			'transform' : 'rotate(' + MNumber.random(-8, 8) + 'deg)'
		});
	});

});
