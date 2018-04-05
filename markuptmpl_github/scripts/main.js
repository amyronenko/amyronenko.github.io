'use strict'

window.alert = function () {};

$('#myCarousel').carousel({ interval: false });

// scroll slides on swipe for touch enabled devices
$('#myCarousel').on('touchstart', function (event) {
  var yClick = event.originalEvent.touches[0].pageY;
  $(this).one('touchmove', function (event){
    var yMove = event.originalEvent.touches[0].pageY;
    if(Math.floor(yClick - yMove) > 1){
      $('.carousel').carousel('next');
    }
    else if (Math.floor(yClick - yMove) < -1){
      $('.carousel').carousel('prev');
    }
  });
  $('.carousel').on('touchend', function () {
    $(this).off('touchmove');
  });
});

$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('main');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $('.navbar').css('background-color', 'rgba(255, 255, 255, 0.82)');
        $('.header__button').css('color', '#000');
        $('.spinner').css('background-color', '#000');
        $('.nav-link').css('color', 'rgba(0, 0, 0, 0.5)');
      } else {
        $('.navbar').css('background-color', 'transparent');
        $('.header__button').css('color', '#fff');
        $('.spinner').css('background-color', '#fff');
        $('.nav-link').css('color', 'rgba(255, 255, 255, 0.85)');
      }
    });
  }
});
