(function() {

	var MURL = {
		current : function() {
			return currentURL = window.location.protocol + '://' + window.location.host + '/' + window.location.pathname;
		},
		segment : function(segement) {
			var pathArray = window.location.pathname.split('/');
			return secondLevelLocation = pathArray[segement];
		},
		reset : function() {
			var answer = confirm('All your changes will be disgarded.\nAre you sure you want to reset?');

			if (answer) {
				location.reload(true);
				return true
			};
		}
	};

	window.MURL = MURL;

})();
