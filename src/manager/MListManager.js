$(document).ready(function() {
	// Set the default state
	MList.updateUI();

	$('.MListItem input[type=checkbox], .MListItem input[type=radio]').live('change', function() {
		// Add a change event listener
		// A label can change the state of the checkbox or radio so I am using change instead of click
		MList.updateUI();
	});
});