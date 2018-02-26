$(document).ready(function(){
  console.log("Listoooo");
  $('.scrollLink0').click( function() {
       $('html, body').animate({
            scrollTop: $('#home').offset().top
       }, 400);
  });
  $('.scrollLink1').click( function() {
       $('html, body').animate({
            scrollTop: $('#about-me').offset().top
       }, 400);
  });
  $('.scrollLink2').click( function() {
       $('html, body').animate({
            scrollTop: $('#experience').offset().top
       }, 400);
  });
  $('.scrollLink3').click( function() {
       $('html, body').animate({
            scrollTop: $('#portafolio').offset().top
       }, 400);
  });
  $('.scrollLink4').click( function() {
       $('html, body').animate({
            scrollTop: $('#contact').offset().top
       }, 400);
  });



});
