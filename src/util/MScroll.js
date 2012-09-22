function scrollBottom(){
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var documentHeight = $(document).height();

  if(scrollBottom == documentHeight){
    return true;
  }
}