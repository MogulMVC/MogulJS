$(document).ready(function() {
	// Set the default state
	MSideBar.updateUI();

	//Tracking it with live so I can add new items and they still work
	$('#MSideBar li input[type=checkbox]').live('click', function() {
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