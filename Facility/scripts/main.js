// 'use strict';
// new Swiper('.s_1', {
//     loop: true,
//     nextButton: '.swiper-button-next_s_1',
//     prevButton: '.swiper-button-prev_s_1',
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     paginationClickable: true,
// });
//
// new Swiper('.s_2', {
//     nextButton: '.swiper-button-next_s_2',
//     prevButton: '.swiper-button-prev_s_2',
//     loop: true,
// });
//
// new Swiper('.s_3', {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 40,
//     nextButton: '.swiper-button-next_s_3',
//     prevButton: '.swiper-button-prev_s_3',
//     loop: true,
// });
//
// let modal_launcher = document.querySelector('.hamburger');
// modal_launcher.onclick = (event) => {
//     event.preventDefault();
//     let modal = document.querySelector('.dropdown');
//     modal.classList.toggle('on');
// };
//
// let popup_launcher = document.querySelector('.popup_launcher');
// let popup = document.querySelector('.popup_wrap');
// popup_launcher.onclick=(event)=>{
//     event.preventDefault();
//     popup.classList.add('active');
// };
//
// let popup_closer = document.querySelector('.close_popup');
// popup_closer.onclick=(event)=>{
//     event.preventDefault();
//     popup.classList.remove('active');
// };
'use strict';
document.addEventListener("DOMContentLoaded", function () {

    new Swiper('.s_1', {
        loop: true,
        nextButton: '.swiper-button-next_s_1',
        prevButton: '.swiper-button-prev_s_1',
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    new Swiper('.s_2', {
        nextButton: '.swiper-button-next_s_2',
        prevButton: '.swiper-button-prev_s_2',
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    new Swiper('.s_3', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 40,
        nextButton: '.swiper-button-next_s_3',
        prevButton: '.swiper-button-prev_s_3',
        loop: true
    });

    var modal_launcher = document.querySelector('.hamburger');
    modal_launcher.onclick = function (event) {
        event.preventDefault();
        var modal = document.querySelector('.dropdown');
        modal.classList.toggle('on');
    };



    var popup_launcher = document.querySelector('.popup_launcher');

    popup_launcher.onclick = function () {
        var popup = document.querySelector('.popup_wrap');
        popup.classList.add('active');
    };

    var popup_closer = document.querySelector('.close_popup');
    popup_closer.onclick = function () {
        var popup = document.querySelector('.popup_wrap');
        popup.classList.remove('active');
    };

});
