$(document).ready(function(){
  console.log('testing')

    $("#pugs").hover(function(){
    $(this).attr("src", "imgs/pugcostume.png");
    }, function() {
    $(this).attr("src", "imgs/pug.png");
  })

  $("#black-cat").hover(function(){
    $(this).attr("src", "imgs/blackcatcostume.png");
    }, function() {
    $(this).attr("src", "imgs/blackcat.png");
  })

  $("#golden").hover(function(){
    $(this).attr("src", "imgs/goldencostume.png");
    }, function() {
    $(this).attr("src", "imgs/golden.png");
  })

  $("#tabby").hover(function(){
    $(this).attr("src", "imgs/tabbycostume.png");
    }, function() {
    $(this).attr("src", "imgs/tabby.png");
  })

});




/*

$("#ninja-zero").click(function(){
    // Change src attribute of image
    $(this).attr("src", "cat0.png");
  }); 


This will show what is happening on the event (click, hover, etc.):
  console.log(event.target)

    */