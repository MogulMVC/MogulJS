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

			// Set a default valid
			// The loop will change this to false if it isn't valid
			var valid = true;

			// If input is a string convert it to an array
			if ( typeof input == 'string') {
				input = input.split('');
			}

			// Loop over the input
			for (var i = 0; i < input.length; i++) {

				var loopValid = false;

				// Loop over the choices
				for (var j = 0; j < choices.length; j++) {

					// If the item is in the choice make the loop true and break the loop
					if (input[i] == choices[j]) {
						loopValid = true;
						break;
					}

				}

				// Break the loop if the loop is invalid
				// The input can only contain whats in the array
				// So if any section of the input is invalid the entire input is invalid
				if (!loopValid) {
					valid = false;
					break;
				}

			}

			return valid;

		},
		mustContain : function(input, choices) {

			// If input is a string convert it to an array
			if ( typeof input == 'string') {
				input = input.split('');
			}

			// Create an array to check matches against
			var matches = [];

			for (var i = 0; i < choices.length; i++) {
				matches[i] = false;
			}

			// Loop over the choices array checking if each choice is found in the input array
			for (var i = 0; i < choices.length; i++) {

				for (var j = 0; j < input.length; j++) {

					// Check for a match
					if (input[j] == choices[i]) {
						matches[i] = true;
					}

				}

			}

			// The following loop needs to assume they are valid
			var valid = true;

			for (var i = 0; i < matches.length; i++) {
				// If any match is found to be false valid is false
				if (!matches[i]) {
					valid = false;
				}
			}

			return valid;

		},
		cantContain : function(input, choices) {

			// If input is a string convert it to an array
			if ( typeof input == 'string') {
				input = input.split('');
			}

			// Loop over the choices array checking if each choice is found in the input array
			for (var i = 0; i < choices.length; i++) {

				for (var j = 0; j < input.length; j++) {

					// Check for a match
					if (input[j] == choices[i]) {
						return false;
					}

				}

			}

			// If no match was found return true
			return true;

		},
		includedIn : function(input, choices) {

			var valid = false;

			for (var i = 0; i < choices.length; i++) {
				if (input == choices[i]) {
					valid = true;
				}
			}

			return valid;

		},
		excludedFrom : function(input, choices) {

			var valid = true;

			for (var i = 0; i < choices.length; i++) {
				if (input == choices[i]) {
					valid = false;
				}
			}

			return valid;

		},
		between : function(input, min, max) {
			if (min < input && input < max) {
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
			var stateArray = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'iansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'washington dc', 'west virginia', 'wisconsin', 'wyoming'];

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
