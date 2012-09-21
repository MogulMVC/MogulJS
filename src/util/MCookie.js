(function(window) {

	MCookie = {
		set : function(name, value, expires, path, domain, secure) {
			var today = new Date();
			today.setTime(today.getTime());
			if (expires) {
				expires = expires * 1000 * 60 * 60 * 24;
			};
			var expires_date = new Date(today.getTime() + (expires));
			document.cookie = name + " = " + escape(value) + ((expires ) ? ";expires = " + expires_date.toGMTString() : "" ) + ((path ) ? ";path = " + path : "" ) + ((domain ) ? ";domain = " + domain : "" ) + ((secure ) ? ";secure" : "" );
		},

		get : function(name) {
			var i, x, y, ARRcookies = document.cookie.split(";");
			for ( i = 0; i < ARRcookies.length; i++) {
				x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
				y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
				x = x.replace(/^\s+|\s+$/g, "");
				if (x == name) {
					return unescape(y);
				};
			};
		}
	};

	window.MCookie = MCookie;

})(window);
