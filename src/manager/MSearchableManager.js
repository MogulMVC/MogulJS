$(document).ready(function() {
	
	// I am calling this MSearch but putting
	// it inside of MSearchable because there may
	// be other query function
	
	$('#MSearch').keyup(function() {
		MSearchable.show(this.value);
	});

}); 