function searchableHide(string){
  
  /*Makes contains case insensitive*/
  $.expr[':'].Contains = function(x, y, z){
    return jQuery(x).text().toUpperCase().indexOf(z[3].toUpperCase())>=0;
  };
  
  if(string == ""){
    $("[searchable=true]").show();
  }else{
    $("[searchable=true]").hide();
    $("[searchable=true]:Contains(" + string + ")").show();
  }
  
}