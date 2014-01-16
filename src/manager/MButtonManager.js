$(document).ready(function() {

	$('input[type="file"].MButton').addClass('MButtonUploadInput');
	$('input[type="file"].MButton').wrap('<div class="MButtonUpload"></div>');
	$('.MButtonUpload').append('<span>Select File</span>');

	$('input[type="file"].MButton').removeClass('MButton');

});
