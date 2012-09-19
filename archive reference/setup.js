$(document).ready(function() {

	$(".MSlider").strackbar({

		callback : onTick1,
		defaultValue : 0,

		sliderHeight : 10,
		sliderWidth : 300,
		trackerHeight : 20,
		trackerWidth : 20,

		style : 'style1',

		animate : false,

		ticks : false,
		labels : false
	});

	function onTick1() {

	}

});

$(window).load(function() {

	// Fade in the stage image
	$("#MStageImage").delay(speedNorm).animate({
		opacity : 1
	}, speedSlow);

	// Draggable
	$(".MPopupContainer").draggable();
	$(".MHoverForm").draggable();
	$(".MHoverMessage").draggable();

	$(".MPopupContainer").addTouch();
	$(".MHoverForm").addTouch();
	$(".MHoverMessage").addTouch();

});
