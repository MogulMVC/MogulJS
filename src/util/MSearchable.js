(function() {

	var MSearchable = {
		show : function(search) {

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

		},
		showInside : function(search, container) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}
			if (search == "") {
				$(container).closest('[data-searchable=true]').show();
			} else {
				$(container).closest('[data-searchable=true]').hide();
				$(container + ':Contains(' + search + ')').closest('[data-searchable=true]').show();
			}

		},
		hide : function(search, container) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}

			$(container).closest('[data-searchable=true]').show();

			if (search != "") {
				$('[data-searchable=true]:Contains(' + search + ')').hide();
			}

		},
		hideInside : function(search, container) {

			// Creates the Contains function which is case insensitive
			$.expr[':'].Contains = function(x, y, z) {
				return $(x).text().toUpperCase().indexOf(z[3].toUpperCase()) >= 0;
			}

			$(container).closest('[data-searchable=true]').show();

			if (search != "") {
				$(container + ':Contains(' + search + ')').closest('[data-searchable=true]').hide();
			}

		}
	};

	window.MSearchable = MSearchable;

})();
