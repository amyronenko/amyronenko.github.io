'use strict';
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    loopFillGroupWithBlank: true,
    pagination:'.swiper-pagination',
    paginationClickable: true,
    // Responsive breakpoints
    breakpoints: {
        360:{
            nextButton: false,
            prevButton: false,
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1
        },
        // when window width is <= 480px
        480: {
            nextButton: false,
            prevButton: false,
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 2
        },
        // when window width is <= 660px
        660: {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2
        },
        // when window width is <= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3
        }
    }
});
var oldIE = true;
if (typeof oldIE === 'undefined' && Object.keys) {
    hljs.initHighlighting();
}
baguetteBox.run('.gallery', {
    captions: function(element) {
        return element.getElementsByClassName('card_video_img')[0].alt;
    }
});
var gallery, galleryContainer, photo, panoramaContainer, mainContainer, closeButton, viewer, panorama, progress, path, format, url;

gallery = [ 'building', 'road', 'sunset', 'leaf', 'field'];
path = 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/';
format = '.jpg';


galleryContainer = document.getElementById( 'gallery-container' );
panoramaContainer = document.getElementById( 'panorama-container' );
mainContainer = document.getElementById( 'main-container' );
var progressBar = document.getElementById( 'progress-bar' );
closeButton = panoramaContainer.querySelector( '.close' );
photo = document.querySelectorAll( '.photo' );
photo.type = 'image';


function buildGallery () {

    Array.prototype.forEach.call(photo, function(element, index){

            element.onclick = function(event){

                panorama = new PANOLENS.ImagePanorama( path + gallery[ index ] + format );

                console.log(index);

                panorama.addEventListener( 'progress', function ( event ) {

                    progress = event.progress.loaded / event.progress.total * 100;
                    progressBar.style.width = progress + '%';
                    if ( progress === 100 ) {
                        progressBar.style.opacity = 0;
                    }
                } );
                viewer.add( panorama );
                panoramaContainer.classList.add( 'open' );
            }


    });

}

function setupPanolens () {

    viewer = new PANOLENS.Viewer( { container: mainContainer } );

}

function disposePanorama () {

    panorama.dispose();
    viewer.remove( panorama );
    panorama = null;
}

function init () {

    // Build up gallery
    buildGallery();

    // Setup panolens
    setupPanolens();

    // Dispose panorama when close
    closeButton.addEventListener( 'click', function () {

        disposePanorama();

        progressBar.style.width = 0;
        progressBar.style.opacity = 1;

        panoramaContainer.classList.remove( 'open' );

    }, false );

}

init();

var video_trigger = document.getElementById('video_trigger');

video_trigger.onclick = function(){

    document.querySelector('.video_box').style.display = 'flex';
    document.getElementById('iframe').src = 'https://www.youtube.com/embed/iQsnObyii4Q';

    document.querySelector('.video_box').onclick = function(event){

        if (event.target !== document.getElementById('iframe')) {
            document.querySelector('.video_box').style.display = 'none';

            document.getElementById('iframe').src='';

        }

    }

};


