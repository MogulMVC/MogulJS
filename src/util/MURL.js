(function() {

	var MURL = {
		protocal : function() {
			return location.protocol;
		},

		subdomain : function() {
			var url = document.domain.split(',');

			var subdomain = uri[uri.length - 3];
			return subdomain;
		},
		domain : function() {
			var url = document.domain.split(',');

			var ext = uri[uri.length - 1];
			var domain = uri[uri.length - 2];
			return domain + '.' + ext;
		},
		base : function() {
			return location.protocol + '://' + document.domain;
		},
		current : function() {
			return currentURL = location.protocol + '://' + location.host + '/' + location.pathname;
		},
		segment : function(segement) {
			var pathArray = location.pathname.split('/');
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
