(function() {

	var MURL = {
		current : function() {
			return
			var currentURL = window.location.protocol + '://' + window.location.host + '/' + window.location.pathname;
		},
		segment : function(segement) {
			var pathArray = window.location.pathname.split('/');
			var secondLevelLocation = pathArray[segement];
		}
	}
	
	window.MURL = MURL;

})();
