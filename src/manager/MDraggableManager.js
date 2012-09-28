(function() {

	var MDraggableManager = {

		setup : function(selector) {

			var drag = false;
			var item = selector;

			$(item).mousedown(function() {
				drag = true;
			});

			$(window).mouseup(function() {
				drag = false;
			});

			$(window).mousemove(function(event) {
				if (drag) {

					console.log(event.pageX);

					$(item).css({
						position : "absolute",
						left : event.pageX,
						top : event.pageY
					});
				}
			});

		}
	}

	window.MDraggableManager = MDraggableManager;

})();
