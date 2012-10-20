(function() {

	var MQuery = {
		search : function(search) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}

			if (search == "") {
				$('[data-searchable=true]').show();
			} else {
				$('[data-searchable=true]').hide();
				$('[data-searchable=true]:Contains(' + search + ')').show();
			}
		}
	}

	window.MQuery = MQuery;

})();
