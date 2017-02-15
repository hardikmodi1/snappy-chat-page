$(document).ready(function(){
    $("#username").click(function(){
        $("#gamediv").slideToggle("slow");
    });
});
$(document).ready(function(){
  $(".member").click(function(){
      $(this).css("color", "red");
  });
  $(".member").blur(function(){
      $(this).css("background-color", "blue");
  });
});
