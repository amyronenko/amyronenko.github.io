'use strict';
function showtab(tabs){

    var tab = tabs;
    switch(tab) //this switch case replaces the tabContent
    {
        case "tab-1":
            document.getElementById('tab_container').innerHTML = document.getElementById("tab-1").innerHTML;
            document.querySelector(".link_first").style.boxShadow = '-1px 3px 57px -17px rgba(125,125,125,0.65)';
            document.querySelector(".link_second").style.boxShadow = 'none';
            document.querySelector(".link_third").style.boxShadow = 'none';
            document.querySelector(".link_fourth").style.boxShadow = 'none';
            document.querySelector(".link_fifth").style.boxShadow = 'none';
            break;
        case "tab-2":
            document.getElementById('tab_container').innerHTML = document.getElementById("tab-2").innerHTML;
            document.querySelector(".link_first").style.boxShadow = 'none';
            document.querySelector(".link_second").style.boxShadow = '-1px 3px 57px -17px rgba(125,125,125,0.65)';
            document.querySelector(".link_third").style.boxShadow = 'none';
            document.querySelector(".link_fourth").style.boxShadow = 'none';
            document.querySelector(".link_fifth").style.boxShadow = 'none';
            break;
        case "tab-3":
            document.getElementById('tab_container').innerHTML = document.getElementById("tab-3").innerHTML;
            document.querySelector(".link_first").style.boxShadow = 'none';
            document.querySelector(".link_second").style.boxShadow = 'none';
            document.querySelector(".link_third").style.boxShadow = '-1px 3px 57px -17px rgba(125,125,125,0.65)';
            document.querySelector(".link_fourth").style.boxShadow = 'none';
            document.querySelector(".link_fifth").style.boxShadow = 'none';
            break;
        case "tab-4":
            document.getElementById('tab_container').innerHTML = document.getElementById("tab-4").innerHTML;
            document.querySelector(".link_first").style.boxShadow = 'none';
            document.querySelector(".link_second").style.boxShadow = 'none';
            document.querySelector(".link_third").style.boxShadow = 'none';
            document.querySelector(".link_fourth").style.boxShadow = '-1px 3px 57px -17px rgba(125,125,125,0.65)';
            document.querySelector(".link_fifth").style.boxShadow = 'none';
            break;
        case "tab-5":
            document.getElementById('tab_container').innerHTML = document.getElementById("tab-5").innerHTML;
            document.querySelector(".link_first").style.boxShadow = 'none';
            document.querySelector(".link_second").style.boxShadow = 'none';
            document.querySelector(".link_third").style.boxShadow = 'none';
            document.querySelector(".link_fourth").style.boxShadow = 'none';
            document.querySelector(".link_fifth").style.boxShadow = '-1px 3px 57px -17px rgba(125,125,125,0.65)';
            break;
        default:
            document.getElementById('tab_container').innerHTML = document.getElementById("tab-1").innerHTML;
            break;
    }
}
