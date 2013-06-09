var MButton = (function(){
	
	function MButton(label){
		
		if(label == null || label == ''){
			label = 'Button';
		}
		
		var uiElement = document.createElement('button');
		$(uiElement).addClass('MButton').html(label);
		
		return uiElement;
		
	};
	
	return MButton;
	
})();
