(function(){
	
	var MString = {
		escapeHtml : function(unsafe) {
	  		return unsafe
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#039;");
		}
	};
	
	window.MString = MString;
	
})();