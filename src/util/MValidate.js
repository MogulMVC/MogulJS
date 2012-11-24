(function() {

	var MValidate = {
		email : function(email) {
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			return reg.test(email);
		}
	};
	
	window.MValidate = MValidate;

})();
