'use strict';
var panorama, viewer;

panorama = new PANOLENS.ImagePanorama( 'https://raw.githubusercontent.com/pchen66/pchen66.github.io/master/Panolens/examples/asset/textures/equirectangular/building.jpg' );

viewer = new PANOLENS.Viewer();
viewer.add( panorama );
