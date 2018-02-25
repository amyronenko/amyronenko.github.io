
    // 'use strict';
    //
    //
    // document.addEventListener("DOMContentLoaded",() => {
    //
    //     let setTimer = setTimeout(second_passed, 0);
    //
    //     function second_passed() {
    //
    //         let today = new Date();
    //         let dayX = new Date(2017, 12, 30, 23, 59, 59, 999);
    //
    //         let difference = dayX.getTime() - today.getTime(),
    //             seconds = Math.floor( (difference/1000) % 60 ),
    //             minutes = Math.floor( (difference/1000/60) % 60 ),
    //             hours = Math.floor( (difference/(1000*60*60)) % 24 ),
    //             days = Math.floor( difference/(1000*60*60*24) );
    //
    //
    //         let daysSpan = document.querySelectorAll('.days'),
    //             hoursSpan = document.querySelectorAll('.hours'),
    //             minutesSpan = document.querySelectorAll('.minutes'),
    //             secondsSpan = document.querySelectorAll('.seconds');
    //
    //         daysSpan.forEach((elem) => {
    //             if(days < 10){
    //                 elem.innerHTML = "0" + days;
    //             } else{
    //                 elem.innerHTML = days;
    //             }
    //         });
    //         hoursSpan.forEach((elem) => {
    //             if (hours < 10){
    //                 elem.innerHTML = "0" + hours;
    //             } else{
    //                 elem.innerHTML = hours;
    //             }
    //         });
    //         minutesSpan.forEach((elem) => {
    //             if (minutes < 10){
    //                 elem.innerHTML = "0" + minutes;
    //             } else{
    //                 elem.innerHTML = minutes;
    //             }
    //         });
    //         secondsSpan.forEach((elem) => {
    //             if(seconds < 10){
    //                 elem.innerHTML = "0" + seconds;
    //             } else{
    //                 elem.innerHTML = seconds;
    //             }
    //         });
    //
    //         setTimer = setTimeout(second_passed, 1000);
    //
    //     }
    //
    //     let program_item = document.querySelectorAll(".program_item");
    //
    //     program_item.forEach((elem) => {
    //         elem.querySelector(".program_item_title").onclick = (event) => {
    //             event.preventDefault();
    //             if (elem !== event.target && elem !== event.target.parentNode && !event.target.classList.contains(".program_item")) elem.classList.remove("active");
    //             elem.classList.toggle("active");
    //         };
    //     });
    //
    //
    //     new Swiper('.swiper-container', {
    //         nextButton: '.swiper-button-next',
    //         prevButton: '.swiper-button-prev',
    //         loop: true,
    //         pagination: '.swiper-pagination',
    //         paginationClickable: true
    //     });
    //
    //     let sticky = document.querySelector('.sticky');
    //     let origOffsetY = sticky.offsetTop;
    //
    //     function onScroll(e) {
    //         window.scrollY >= origOffsetY ? sticky.classList.add('sticky_on') :
    //             sticky.classList.remove('sticky_on');
    //     }
    //
    //     document.addEventListener('scroll', onScroll);
    //
    //
    //     let modalLauncher = document.querySelectorAll(".launch__modal");
    //     modalLauncher.forEach((elem) => {
    //         elem.onclick = (event) => {
    //             event.preventDefault();
    //             let modal = document.getElementById(event.target.getAttribute("data-target"));
    //             modal.classList.add("on");
    //         };
    //     });
    //
    //     let modalCloser = document.querySelectorAll(".close-modal");
    //     modalCloser.forEach((elem) => {
    //         elem.onclick = (event) => {
    //             event.preventDefault();
    //             // let modal = event.target.parentNode;
    //             let modal = document.getElementById("test__modal");
    //             modal.classList.remove("on");
    //         };
    //     });
    //
    //
    //
    // });
    //
    'use strict';

    document.addEventListener("DOMContentLoaded", function () {

        var setTimer = setTimeout(second_passed, 0);

        function second_passed() {

            var today = new Date();
            var dayX = new Date(2018, 5, 1, 30, 59, 59, 999);

            var difference = dayX.getTime() - today.getTime(),
                seconds = Math.floor(difference / 1000 % 60),
                minutes = Math.floor(difference / 1000 / 60 % 60),
                hours = Math.floor(difference / (1000 * 60 * 60) % 24),
                days = Math.floor(difference / (1000 * 60 * 60 * 24));

            var daysSpan = document.querySelectorAll('.days'),
                hoursSpan = document.querySelectorAll('.hours'),
                minutesSpan = document.querySelectorAll('.minutes'),
                secondsSpan = document.querySelectorAll('.seconds');

            for(var q = 0; q < hoursSpan.length; q++){
                daysSpan[q].innerHTML = days;
                hoursSpan[q].innerHTML = hours;
                minutesSpan[q].innerHTML = minutes;
                secondsSpan[q].innerHTML = seconds;
                if (days < 10) daysSpan[q].innerHTML = "0" + days;
                if (hours < 10) hoursSpan[q].innerHTML = "0" + hours;
                if (minutes < 10) minutesSpan[q].innerHTML = "0" + minutes;
                if (seconds < 10) secondsSpan[q].innerHTML = "0" + seconds;
            }

             setTimer = setTimeout(second_passed, 1000);
        }

        var program_item = document.querySelectorAll(".program_item");

        Array.prototype.forEach.call(program_item, function(el){
            el.querySelector(".program_item_title").onclick = function (event) {
                         event.preventDefault();
                         if (el !== event.target && el !== event.target.parentNode && !event.target.classList.contains(".program_item")) el.classList.remove("active");
                         el.classList.toggle("active");
                     };
        });

        new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });

        var sticky = document.querySelector('.sticky');
        var origOffsetY = sticky.offsetTop;

        function onScroll(e) {
            window.scrollY >= origOffsetY ? sticky.classList.add('sticky_on') : sticky.classList.remove('sticky_on');
        }

        document.addEventListener('scroll', onScroll);

        var modalLauncher = document.querySelectorAll(".launch__modal");
        Array.prototype.forEach.call(modalLauncher, function(el, i){
            el.onclick = function (event) {
                event.preventDefault();
                var modal = document.getElementById(event.target.getAttribute("data-target"));
                modal.classList.add("on");
            };
        });

        var modalCloser = document.querySelectorAll(".close-modal");
        Array.prototype.forEach.call(modalCloser, function(el, i){
            el.onclick = function (event) {
                event.preventDefault();
                var modal = document.getElementById("test__modal");
                modal.classList.remove("on");
            };
        });





    });