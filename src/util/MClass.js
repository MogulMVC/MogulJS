(function(window) {

	function MClass() {
	}


	MClass.static = function(a, b) {
		alert("Static");
	}

	window.MClass = MClass;

})(window); 