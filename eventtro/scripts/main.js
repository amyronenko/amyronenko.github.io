'use strict';
//    function initMap() {
//         var uluru = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru,
//           scrollwheel: false
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }


//       $('#countdown').timeTo({
//     timeTo: new Date(new Date('Fri Aug 30 2017 09:00:00 GMT+0300 (Финляндия (лето))')),
//     displayDays: 2,
//     theme: "white",
//     displayCaptions: true,
//     fontSize: 35,
//     fontFamily: 'Oswald'
// });

//       let modalLauncher = document.querySelectorAll(".hamburger-menu");
//   modalLauncher.forEach((elem) => {
//     elem.onclick = (event) => {
//       event.preventDefault();
//       let modal = document.getElementById('test__modal');
//       modal.classList.toggle("on");
//       let bannerContent = document.querySelector('.header-content-wrapper');
//       bannerContent.classList.toggle("off");
//     };
//   });
function initMap() {
  var uluru = { lat: 23.80467233, lng: 90.41541362 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

$('#countdown').timeTo({
  timeTo: new Date(new Date('Fri Aug 30 2018 09:00:00 GMT+0300 (Финляндия (лето))')),
  displayDays: 2,
  theme: "white",
  displayCaptions: true,
  fontSize: 35,
  fontFamily: 'Oswald'
});

var modalLauncher = document.querySelectorAll(".hamburger-menu");
modalLauncher.forEach(function (elem) {
  elem.onclick = function (event) {
    event.preventDefault();
    var modal = document.getElementById('test__modal');
    modal.classList.toggle("on");
    var bannerContent = document.querySelector('.header-content-wrapper');
    bannerContent.classList.toggle("off");
  };
});