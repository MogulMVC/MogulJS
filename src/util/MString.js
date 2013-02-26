(function() {

	var MString = {
		escapeHtml : function(unsafe) {
	  		return unsafe
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#039;");
		},
		firstToUpperCase : function(str) {
			str += '';
			var f = str.charAt(0).toUpperCase();
			return f + str.substr(1);
		}
	};

	window.MString = MString;

})();
