$(document).ready(function(){

  $("input").attr("autocomplete", "off");
  
  /*Input Prompts*/
  promptSet();
  promptPasswordSet();
  
  /*Tabs*/
  $(".eztab_group").easytabs({updateHash:false});
  
  /*Tootips*/
  $("[MTip=N]").MTip({
    gravity: "N",
    delayIn: speedSlow
  });
  
  $("[MTip=NW]").MTip({
    gravity: "NW",
    delayIn: speedSlow
  });
    
  $("[MTip=NE]").MTip({
    gravity: "NE",
    delayIn: speedSlow
  });

  $("[MTip=S]").MTip({
    gravity: "S",
    delayIn: speedSlow
  });
  
  $("[MTip=SW]").MTip({
    gravity: "SW",
    delayIn: speedSlow
  });
    
  $("[MTip=SE]").MTip({
    gravity: "SE",
    delayIn: speedSlow
  });
  
  $("[MTip=W]").MTip({
    gravity: "W",
    delayIn: speedSlow
  });
  
  $("[MTip=E]").MTip({
    gravity: "E",
    delayIn: speedSlow
  });
  
  $(".MSlider").strackbar({
    
    callback: onTick1,
    defaultValue: 0,
      
    sliderHeight: 10,
    sliderWidth: 300,
    trackerHeight: 20,
    trackerWidth: 20,
    
    style: 'style1',
    
    animate: false,
    
    ticks: false,
    labels: false
  });
  
  function onTick1(){
    
  }
  
});

$(window).load(function(){

  toolbarPosition();
  
  toolbarMessageFadeOut();

  sidebarScale();
  
  listFadeIn();
  
  /*Fade in all images*/
  $("#MMainWindow img").animate({opacity: 1}, speedSlow);
  
  //Fade in the stage image
  $("#MStageImage").delay(speedNorm).animate({opacity: 1}, speedSlow);
  
  /*Draggable*/
  $(".MPopupContainer").draggable();
  $(".MHoverForm").draggable();
  $(".MHoverMessage").draggable();

  $(".MPopupContainer").addTouch();
  $(".MHoverForm").addTouch();
  $(".MHoverMessage").addTouch();

  /*Sidebar*/
  sidebarMenuPlaceholderHeight();
  sidebarMenuTop();

  $("#MSidebar").mouseenter(function(){
    $("#MSidebar").css("overflow-y", "auto");
  });

  $("#MSidebar").mouseleave(function(){
    $("#MSidebar").css("overflow-y", "hidden");
  });

});

$(window).resize(function(){
  toolbarPosition();
  sidebarScale();
});

$(document).mousemove(function(event){
  sidebarTriggerProximity(event);
});