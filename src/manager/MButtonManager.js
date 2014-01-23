$(document).ready(function() {

	$('input[type="file"][data-mbuttonfile=true]').addClass('MButtonUploadInput');
	$('input[type="file"][data-mbuttonfile=true]').wrap('<div class="MButtonUpload"></div>');
	$('.MButtonUpload').append('<span>Select File</span>');

});
