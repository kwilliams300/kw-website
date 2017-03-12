$(document).ready(function(){
  $(".hidden").removeClass("hidden")
  //JQuery goes home-banner-content

   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });

});
