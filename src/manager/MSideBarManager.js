$(document).ready(function() {
	// Set the default state
	MSideBar.updateUI();

	//Tracking it with live so I can add new items and they still work
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

$(document).mousemove(function(event) {
	MSideBar.triggerProximity(event);
});