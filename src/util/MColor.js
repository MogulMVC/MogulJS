(function() {

	var MColor = {
		fadeHex : function(hex, hex2, ratio) {
			this.r = hex >> 16;
			this.g = hex >> 8 & 0xFF;
			this.b = hex & 0xFF;

			this.r += ((hex2 >> 16) - this.r) * ratio;
			this.g += ((hex2 >> 8 & 0xFF) - this.g) * ratio;
			this.b += ((hex2 & 0xFF) - this.b) * ratio;

			return (this.r << 16 | this.g << 8 | this.b);
		}
	}

	window.MColor = MColor;

})();
