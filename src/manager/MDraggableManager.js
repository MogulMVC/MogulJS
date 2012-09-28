(function() {

	var MDraggableManager = {

		drag : false,

		setup : function(initalizer) {

			$(initalizer).mousedown(function() {
				MDraggableManager.drag = true;
			});

			$(window).mouseup(function() {
				MDraggableManager.drag = false;
			});

			$(window).mousemove(function(event) {
				if (MDraggableManager.drag) {
					console.log("test");
					$(initalizer).css({
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
