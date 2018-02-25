// 'use strict';
//
// new Swiper('.swiper-container', {
//     loop: true,
//     pagination: '.swiper-pagination',
//     paginationClickable: true
// });
//
// function documentReady() {
//     let a = new Tabs("#tabs");
//     document.body.addEventListener("click", (event) => {
//         event.target.classList.contains("tabs__button")&&a.SetUp(event);
// }, false);
// }
// document.addEventListener("DOMContentLoaded", documentReady);
'use strict';

window.addEventListener("load", function() {
    makeTabs(".tabs");
    makeAnotherTabs(".another_tabs");
});


document.addEventListener('DOMContentLoaded', function (){
    onclick = function(event){

        var dropdown_click = document.querySelectorAll(".dropdown_click"),
            target = event.target,
            popup_trigger = document.getElementById("popup_trigger"),
            popup_table = document.querySelector(".popup_table"),
            trigger = document.querySelector(".trigger"),
            tabs = document.querySelector(".tabs"),
            another_tabs = document.querySelector(".another_tabs"),
            more = document.querySelector(".more"),
            less = document.querySelector(".less");

        if(target === trigger){
            console.log(target);
            tabs.classList.add("hidden");
            another_tabs.classList.add("on");
            more.classList.add("hidden");
            less.classList.add("on");
        }
        if(target === less){
            tabs.classList.remove("hidden");
            another_tabs.classList.remove("on");
            more.classList.remove("hidden");
            less.classList.remove("on");
        }

        if(target === popup_trigger) document.getElementById('popup').style.display='inline';
        if(target === popup_table) document.getElementById('popup').style.display='none';
        console.log(target);

        Array.prototype.forEach.call(dropdown_click, function(elem){

            if (target === elem){
                elem.classList.toggle("active");
            } else {
                elem.classList.remove("active");
            }
        });
    };



    var lightbox = new Lightbox();
    lightbox.load();

    new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });


});






