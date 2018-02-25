"use strict";

// document.addEventListener('DOMContentLoaded', () => {

//   function documentReady() {
//     let a = new Tabs("#tabs");
    
//     document.body.addEventListener("click", (event) => {
//       event.target.classList.contains("tabs__button")&&a.SetUp(event);
      
//     }, false);
//   };


//   let  menu = document.querySelector('.menu-wrapper'),
//      footer = document.querySelector('footer'),
//      pageHeight = document.body.offsetHeight,
//      footerHeight = footer.offsetHeight,
//      cutPageHeight = pageHeight - footerHeight - window.innerHeight,
//      snapSlider = document.getElementById('ffds87dfa87fds8');

// 	const mySwiper = new Swiper('.swiper-container', {
// 		loop: true,
// 		nextButton: '.swiper-button-next',
//        	prevButton: '.swiper-button-prev'
// 	});



// noUiSlider.create(snapSlider, {
// 	start: [ 0, 500 ],
// 	connect: true,
// 	tooltips: true,
// 	range: {
// 		'min': 0,
// 		'max': 1000
// 	}
// });

// let trigger = document.querySelector('.trigger');
// let moveMenu = document.querySelector('#menu');



// document.onclick = event => {
// 	event.preventDefault();
//     let el = event.target;
//     if(el === trigger) {
//     	moveMenu.classList.toggle('on');
//     	trigger.classList.toggle('btn-push');
//     } else if(el != menu){
//     	moveMenu.classList.remove('on');
//       trigger.classList.remove('btn-push');
//     };
// };





// function scr(){
   
//      if(event.target.scrollingElement.scrollTop < cutPageHeight) {
//       menu.classList.remove('unfix');
//       menu.style.top = 'auto';
//      } else {
//       menu.classList.add('unfix');
//       menu.style.top = (cutPageHeight)+'px';
//      };
// };

//     document.onscroll = () => scr();



//   document.addEventListener("DOMContentLoaded", documentReady);

  


// }, false);
document.addEventListener('DOMContentLoaded', function () {

  function documentReady() {
    var a = new Tabs("#tabs");

    document.body.addEventListener("click", function (event) {
      event.target.classList.contains("tabs__button") && a.SetUp(event);
    }, false);
  };

  var menu = document.querySelector('.menu-wrapper'),
      footer = document.querySelector('footer'),
      pageHeight = document.body.offsetHeight,
      footerHeight = footer.offsetHeight,
      cutPageHeight = pageHeight - footerHeight - window.innerHeight,
      snapSlider = document.getElementById('ffds87dfa87fds8');

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  noUiSlider.create(snapSlider, {
    start: [0, 500],
    connect: true,
    tooltips: true,
    range: {
      'min': 0,
      'max': 1000
    }
  });

  var trigger = document.querySelector('.trigger');
  var moveMenu = document.querySelector('#menu');

  document.onclick = function (event) {
    event.preventDefault();
    var el = event.target;
    if (el === trigger) {
      moveMenu.classList.toggle('on');
      trigger.classList.toggle('btn-push');
    } else if (el !== menu) {
      moveMenu.classList.remove('on');
      trigger.classList.remove('btn-push');
    }
  };

  function scr() {

    if (event.target.scrollingElement.scrollTop < cutPageHeight) {
      menu.classList.remove('unfix');
      menu.style.top = 'auto';
    } else {
      menu.classList.add('unfix');
      menu.style.top = cutPageHeight + 'px';
    };
  };

  document.onscroll = function () {
    return scr();
  };

  document.addEventListener("DOMContentLoaded", documentReady);
}, false);