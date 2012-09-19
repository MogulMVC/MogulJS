function passwordToggle(id){
   var element = document.getElementById(id);
   if(element.type == "password"){
      element.type = "text";
   }else{
      element.type = "password";
   }
}


function listSelect(id){
  if(document.getElementById("checkbox_" + id).checked){
    $("#list_item_container_" + id).addClass("blue");
  }else{
    $("#list_item_container_" + id).removeClass("blue");
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

function toolbarPosition(){
  if(!document.getElementById("MHeader") && !document.getElementById("MHeaderPlaceholder")){
    $("#MToolbar").css("top", "0px");
  }
}

function toolbarMessageFadeOut(){
  $(".MToolbarMessage").delay(5000).fadeOut(speedSlow);
}

function toolbarPlaceholderScale(){
  var toolbar_height = $("#MToolbar").height();
  $("#MToolbarPlaceholder").height(toolbar_height);
}

function listFadeIn(){
  var i = 0;
  $(".MListItemContainer").each(function(){
    $(this).delay(i).animate({opacity: 1}, speedNorm);   
    i = i + 50;
  });
  
  var i = 0;
  $("#MSidebar li").each(function(){
    $(this).delay(i).animate({opacity: 1}, speedNorm);
    i = i + 50;
  }); 
}

function locationReset(){
  var answer = confirm("All your changes will be disgarded.\nAre you sure you want to reset?");
  
  if(answer){
    location.reload(true);
    return true
  }
}