$(document).ready(function() {
	
	// Set the default state
	MList.updateUI();

	$(document).on('change', '.MListItem input[type=checkbox], .MListItem input[type=radio]', function() {
		MList.updateUI();
	});
	
});