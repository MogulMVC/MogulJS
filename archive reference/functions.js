function passwordToggle(id){
   var element = document.getElementById(id);
   if(element.type == "password"){
      element.type = "text";
   }else{
      element.type = "password";
   }
}

function scrollBottom(){
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var documentHeight = $(document).height();

  if(scrollBottom == documentHeight){
    return true;
  }
}

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

function locationReset(){
  var answer = confirm("All your changes will be disgarded.\nAre you sure you want to reset?");
  
  if(answer){
    location.reload(true);
    return true
  }
}