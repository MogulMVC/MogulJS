(function(window) {

	var MQuery = {
		search : function(search) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			};

			if (search == "") {
				$('[searchable=true]').show();
			} else {
				$('[searchable=true]').hide();
				$('[searchable=true]:Contains(' + search + ')').show();
			}
		}
	};

	window.MQuery = MQuery;

})(window);
