(function(window) {

	MInputText = {
		passWordToggle : function passwordToggle(id) {
			var element = document.getElementById(id);
			if (element.type == "password") {
				element.type = "text";
			} else {
				element.type = "password";
			}
		}
	};

	window.MInputText = MInputText;

})(window);