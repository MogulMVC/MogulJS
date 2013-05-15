(function() {

	var MLoad = {

		jsFramework : function(file) {
			var headID = document.getElementsByTagName('head')[0];
			var scriptNode = document.createElement('script');
			scriptNode.src = '/framework/js/' + file;
			headID.appendChild(scriptNode);
		},
		jsApplication : function(file) {
			var headID = document.getElementsByTagName('head')[0];
			var scriptNode = document.createElement('script');
			scriptNode.src = '/js/' + file;
			headID.appendChild(scriptNode);
		},
		jsCache : function(file) {
			var headID = document.getElementsByTagName('head')[0];
			var scriptNode = document.createElement('script');
			scriptNode.src = '/cache/' + file;
			headID.appendChild(scriptNode);
		},
		jsExternal : function(url) {
			var headID = document.getElementsByTagName('head')[0];
			var scriptNode = document.createElement('script');
			scriptNode.src = url;
			headID.appendChild(scriptNode);
		},
		cssFramework : function(file) {
			var headID = document.getElementsByTagName('head')[0];
			var cssNode = document.createElement('link');
			cssNode.href = '/framework/' + file;
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			headID.appendChild(cssNode);
		},
		cssApplication : function(file) {
			var headID = document.getElementsByTagName('head')[0];
			var cssNode = document.createElement('link');
			cssNode.href = '/css/' + file;
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			headID.appendChild(cssNode);
		},
		cssCache : function(file) {
			var headID = document.getElementsByTagName('head')[0];
			var cssNode = document.createElement('link');
			cssNode.href = '/cache/' + file;
			cssNode.type = 'text/css';
			cssNode.rel = 'stylesheet';
			headID.appendChild(cssNode);
		},
		cssExternal : function(url) {
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
