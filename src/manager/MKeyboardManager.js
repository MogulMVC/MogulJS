$(document).ready(function() {

	$(document).keydown(function(e) {
		MKeyboard.keys[e.keyCode] = 1;
	});

	$(document).keyup(function(e) {
		MKeyboard.keys[e.keyCode] = 0;
	});
	
});
