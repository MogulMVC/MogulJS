(function() {

	var MURL = {
		protocol : function() {
			return location.protocol;
		},

		subdomain : function() {
			var url = document.domain.split('.');

			var subdomain = '';

			if (url[0]) {
				subdomain = url[0];
			}

			return subdomain;
		},
		domain : function() {
			var url = document.domain.split('.');

			var ext = url[url.length - 1];
			var domain = url[url.length - 2];
			return domain + '.' + ext;
		},
		canonical : function() {
			return location.protocol + '://' + document.domain;
		},
		current : function() {
			return currentURL = location.protocol + '://' + location.host + '/' + location.pathname;
		},
		segment : function(segement) {
			var pathArray = location.pathname.split('/');
			secondLevelLocation = pathArray[segement];

			if (secondLevelLocation != undefined) {
				return secondLevelLocation
			} else {
				return '';
			}

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
