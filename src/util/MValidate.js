(function() {

	var MValidate = {
		email : function(email) {
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			return reg.test(email);
		},
		optional : function(input) {

		},
		required : function(input) {

		},
		onlyContain : function(input, choices) {

		},
		mustContain : function(input, choices) {

		},
		cantContain : function(input, choices) {

		},
		includedIn : function(input, choices) {

		},
		excludedIn : function(input, choices) {

		},
		between : function(input, min, max) {
			if (input > min && input < max) {
				return true;
			}
			return false;
		},
		multipleOf : function(input, multiple) {
			if (input % multiple == 0) {
				return true;
			}
			return false;
		},
		even : function(input) {
			if (input % 2 == 0) {
				return true;
			}
			return false;
		},
		odd : function(input) {
			if (input % 2 != 0) {
				return true;
			}
			return false;
		},
		state : function(state) {

			var stateString = state.toLowerCase();

			var stateAbbreviationArray = ['ak', 'al', 'ar', 'as', 'az', 'ca', 'co', 'ct', 'dc', 'de', 'fl', 'ga', 'gu', 'hi', 'ia', 'id', 'il', 'in', 'ks', 'ky', 'la', 'ma', 'md', 'me', 'mh', 'mi', 'mn', 'mo', 'ms', 'mt', 'nc', 'nd', 'ne', 'nh', 'nj', 'nm', 'nv', 'ny', 'oh', 'ok', 'or', 'pa', 'pr', 'pw', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'vi', 'vt', 'wa', 'wi', 'wv', 'wy'];
			var stateArray = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'iansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];

			// Check the abbreviations
			for (var i = 0, j = stateAbbreviationArray.length; i < j; i++) {

				if (stateString == stateAbbreviationArray[i]) {
					return true;
				}

			}

			// Check the full name
			for (var i = 0, j = stateArray.length; i < j; i++) {

				if (stateString == stateArray[i]) {
					return true;
				}

			}

			// If the state was not found
			return false;

		}
	};

	window.MValidate = MValidate;

})();
