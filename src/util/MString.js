(function() {

	var MString = {
		random : function(length) {

			var possibleCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', '', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

			var string = '';

			for (var i = 0; i < length; i++) {
				var randomNumber = Math.random() * possibleCharacters.length;
				var randomCharacter = possibleCharacters[randomNumber];
				string += randomCharacter;
			}

			return string;
		},
		toBoolean : function(value) {

			if (value != '' && (value == 'true' || value == 'TRUE')) {
				return true;
			}

			if (value != '' && (value == '1')) {
				return true;
			}

			return false;

		},
		subBefore : function(string, character) {

		},
		urlLink : function(string, noFollow) {

		},
		urlTitle : function(string, seperator) {

		},
		escapeHtml : function(unsafe) {
			return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
		},
		firstToUpperCase : function(str) {
			var f = str.charAt(0).toUpperCase();
			return f + str.substr(1);
		}
	};

	window.MString = MString;

})();
