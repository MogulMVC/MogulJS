(function() {

	var MLoad = {
		js : function(url) {
			var headID = document.getElementsByTagName('head')[0];
			var scriptNode = document.createElement('script');
			scriptNode.src = url;
			headID.appendChild(scriptNode);
		},
		css : function(url) {
			var headID = document.getElementsByTagName('head')[0];
			var cssNode = document.createElement('link');
			cssNode.href = url;
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			headID.appendChild(cssNode);
		}
	};

	window.MLoad = MLoad;

})();
