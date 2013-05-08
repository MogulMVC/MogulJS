(function() {

	var MDate = {
		datetime : function() {
			var now = new Date();
			var year = now.getFullYear();
			var month = ('0' + (now.getMonth() + 1)).slice(-2);
			var date = ('0' + (now.getDate())).slice(-2);
			var hour = ('0' + (now.getHours())).slice(-2);
			var minute = ('0' + (now.getMinutes())).slice(-2);
			var second = ('0' + (now.getSeconds())).slice(-2);
			return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
		},
		date : function() {
			var now = new Date();
			var year = now.getFullYear();
			var month = ('0' + (now.getMonth() + 1)).slice(-2);
			var date = ('0' + (now.getDate())).slice(-2);
			return year + '-' + month + '-' + date;
		}
	};

	window.MDate = MDate;

})();
