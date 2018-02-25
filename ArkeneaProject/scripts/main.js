'use strict';
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000
    });

var modalLauncher = document.querySelectorAll(".menu-onclick");
    modalLauncher.forEach(function (elem) {
        elem.onclick = function (event) {
            event.preventDefault();
            var modal = document.getElementById('test__modal');
            modal.classList.toggle("on");
            var bannerContent = document.querySelector('.banner-content');
            bannerContent.classList.toggle("off");
        };
});
 // let modalLauncher = document.querySelectorAll(".menu-onclick");
 //  modalLauncher.forEach((elem) => {
 //    elem.onclick = (event) => {
 //      event.preventDefault();
 //      let modal = document.getElementById('test__modal');
 //      modal.classList.toggle("on");
 //      let bannerContent = document.querySelector('.banner-content');
 //      bannerContent.classList.toggle("off");
 //    };
 //  });
