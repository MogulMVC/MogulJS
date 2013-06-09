$(document).ready(function() {
	
	// Set the default state
	MSideBar.updateUI();

	$(document).on('click', '#MSideBar li input[type=checkbox], #MSideBar li input[type=radio]', function() {
		MSideBar.updateUI();
	});
	
});

$(window).load(function() {
	
	MSideBar.scale();

	MSideBar.menuPlaceholderHeight();
	MSideBar.menuTop();
	
});

$(window).resize(function() {
	MSideBar.scale();
});

$(document).mousemove(function(e) {
	MSideBar.triggerProximity(e);
});