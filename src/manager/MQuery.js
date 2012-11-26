$(document).ready(function() {
	
	// I am calling this MSearch but putting
	// it inside of MQuery because there may
	// be other query function
	
	$('#MSearch').keyup(function() {
		MQuery.search(this.value);
	});

}); 