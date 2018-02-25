"use strict";


function makeTabs(selector) {

    var tab_lists_anchors = document.querySelectorAll(selector + " li a");
    var divs = document.querySelector(selector).getElementsByTagName("section");
    for (var i = 0; i < tab_lists_anchors.length; i++) {
        if (tab_lists_anchors[i].classList.contains('active')) {
            divs[i].style.display = "block";
        }

    }

    for (i = 0; i < tab_lists_anchors.length; i++) {

        document.querySelectorAll(".tabs li a")[i].addEventListener('click', function(e) {

            for (i = 0; i < divs.length; i++) {
                divs[i].style.display = "none";
            }

            for (i = 0; i < tab_lists_anchors.length; i++) {
                tab_lists_anchors[i].classList.remove("active");
            }

            var clicked_tab = e.target || e.srcElement;

            clicked_tab.classList.add('active');
            var div_to_show = clicked_tab.getAttribute('href');

            document.querySelector(div_to_show).style.display = "block";

        });
    }

};

function makeAnotherTabs(selector) {

    var tab_lists_another_anchors = document.querySelectorAll(selector + " li a");
    var sections = document.querySelector(selector).getElementsByTagName("section");
    for (var a = 0; a < tab_lists_another_anchors.length; a++) {
        if (tab_lists_another_anchors[a].classList.contains('active')) {
            sections[a].style.display = "block";
        }

    }

    for (a = 0; a < tab_lists_another_anchors.length; a++) {

        document.querySelectorAll(".another_tabs li a")[a].addEventListener('click', function(d) {

            for (a = 0; a < sections.length; a++) {
                sections[a].style.display = "none";
            }

            for (a = 0; a < tab_lists_another_anchors.length; a++) {
                tab_lists_another_anchors[a].classList.remove("active");
            }

            var another_clicked_tab = d.target || d.srcElement;

            another_clicked_tab.classList.add('active');
            var another_div_to_show = another_clicked_tab.getAttribute('href');

            document.querySelector(another_div_to_show).style.display = "block";

        });
    }

}