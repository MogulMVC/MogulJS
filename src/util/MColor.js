(function(window){

  function MColor(){ 
  }
  
  MColor.fadeHex = function(hex, hex2, ratio){
    var r = hex >> 16;
    var g = hex >> 8 & 0xFF;
    var b = hex & 0xFF;

    r += ((hex2 >> 16)-r) * ratio;
    g += ((hex2 >> 8 & 0xFF) - g) * ratio;
    b += ((hex2 & 0xFF) - b) * ratio;

    return(r<<16 | g<<8 | b);
  }
  
  window.MColor = MColor;
  
})(window);