$(document).ready(function() {
	// Set the default state
	MList.updateUI();

	$('.MListItem input[type=checkbox]').live('change', function() {
		// Add a change event listener
		// A label can change the state of the checkbox so I am using change instead of click
		MList.updateUI();
	});
});