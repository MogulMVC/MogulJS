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

(function() {

	$("input").attr("autocomplete", "off");

	$("[prompt]").each(function(index) {

		//Set the prompt
		var originalPrompt = $(this).attr("prompt");
		$(this).val(originalPrompt);

		//Set the focus
		$(this).focus(function() {

			var currentPrompt = $(this).val();

			if (currentPrompt == originalPrompt) {
				$(this).val("");
			};

		});

		//Set the blur
		$(this).blur(function() {

			var currentPrompt = $(this).val();

			if (currentPrompt == "") {
				$(this).val(originalPrompt);
			};

		});

	});

	$("[promptPassword]").each(function(index) {

		//Set the prompt
		var originalPrompt = $(this).attr("promptPassword");
		$(this).val(originalPrompt);

		//Set the focus
		$(this).focus(function() {

			var currentPrompt = $(this).val();

			if (currentPrompt == originalPrompt) {
				$(this).val("");
				this.type = "password";
			};

		});

		//Set the blur
		$(this).blur(function() {

			var currentPrompt = $(this).val();

			if (currentPrompt == "") {

				$(this).val(originalPrompt);
				this.type = "text";
			};

		});

	});

})();
