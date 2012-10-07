$(document).ready(function() {
	$('input[type="file"]').addClass('MButtonUploadInput');
	$('input[type="file"]').wrap('<div class="MButtonUpload"></div>');
	$('.MButtonUpload').append('<span>Select File</span>');
});