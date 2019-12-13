//-------------------------Efecto Fade
$(document).ready(function() {
  $('div.event p').hide();
  $('div.event').mouseenter(function() {
    $(this).fadeTo(300,0.8);
    $('p', this).fadeIn(500);
  });

  $('div.event').mouseleave(function() {
    $(this).fadeTo(300,1);
    $('p', this).fadeOut(500);
  });
});
