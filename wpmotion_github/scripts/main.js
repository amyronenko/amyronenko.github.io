'use strict'
$(document).ready(function () {

  $('#roundabout').AnimatedSlider({
    prevButton: '#btn_next',
    nextButton: '#btn_prev',
    visibleItems: 3,
    infiniteScroll: true,
    willChangeCallback: function (obj, item) { $('#statusText').text('Will change to ' + item) },
    changedCallback: function (obj, item) { $('#statusText').text('Changed to ' + item) }
  })

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    init: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30

      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  })

  $('#singleItemCarousel').carousel({})

  $('#carouselMobile').carousel({})

  function myFunction (x) {
    if (x.matches) { // If media query matches
      var scroll_start = 0
      var startchange = $('main')
      var offset = startchange.offset()
      if (startchange.length) {
        $(document).scroll(function () {
          scroll_start = $(this).scrollTop()
          if (scroll_start > offset.top) {
            $('.navbar__logo').css('display', 'none')
            $('.navbar-logo__subtitle').css('display', 'none')
            $('.header').css('background', 'transparent')
            $('.navbar-toggler').css('background', '#f56262')
            $('.navbar-collapse').css('background', '#f56262')
          } else {
            $('.navbar__logo').css('display', 'block')
            $('.navbar-logo__subtitle').css('display', 'block')
            $('.header').css('background', '#f56262')
            $('.navbar-toggler').css('background', 'transparent')
            $('.navbar-collapse').css('background', 'transparent')
          }
        })
      }
    }
  }

  var x = window.matchMedia('(max-width: 992px)')
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

})

function initMap () {
  var uluru = {lat: -33.877462, lng: 151.193297}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  })

  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h3 id="firstHeading" class="firstHeading">Contact Us</h3>' +
    '<div id="bodyContent">' +
    '<p>7oroof@7oroof.com</p>' +
    '<p>Your address goes here</p>' +
    '</div>' +
    '</div>'

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  })

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  })
  marker.addListener('mouseover', function () {
    infowindow.open(map, marker)
  })

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infowindow, 'domready', function () {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw')

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev()
    var iwParent = iwOuter.parent()

    iwBackground.children(':nth-child(1) :nth-child(3)').css({'display': 'none'})

    iwBackground.children(':nth-child(1)').css({'border-top': '24px solid rgba(0, 0, 0, 0.73)', 'top': '99px'})

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display': 'none'})

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display': 'none'})

    // Moves the infowindow 115px to the right.
    iwOuter.parent().css({top: '-180px', background: '#000000ba'})

    // iwParent.children(':nth-child(3)').css({'height' : '7px'});

    iwOuter.css({top: '18px', left: '20px'})

    // Moves the shadow of the arrow 76px to the left margin.
    // iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Moves the arrow 76px to the left margin.
    // iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

    // Changes the desired tail shadow color.
    // iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next()

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '10px', top: '10px', 'border-radius': '13px'})

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if ($('.iw-content').height() < 140) {
      $('.iw-bottom-gradient').css({display: 'none'})
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function () {
      $(this).css({opacity: '1'})
    })
  })
}