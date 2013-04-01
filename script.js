var HeroGenModule = angular.module('HeroGen', []);

HeroGenModule.directive('imageStyle', function(){
	return function(scope, element, attrs) {

		scope.$watch( "["+attrs.imageStyle+".zoom, "+attrs.imageStyle+".offX, "+attrs.imageStyle+".offY, "+attrs.imageStyle+".url]",
		  function updateImageZoom(value){
			console.log('Zoom Changed');
			loadImage();
		});

		function loadImage(){
			var face = scope.hero.face;
			if(face !== undefined){
				$(element).css('background-image', 'url("'+scope.hero.face.url+'")');

				if(face.offX !== undefined){
					$(element).css('background-position-x', face.offX+'px');
				}

				if(face.offY !== undefined){
					$(element).css('background-position-y', face.offY+'px');
				}

				if(face.zoom !== undefined){
					$(element).css('background-size', face.zoom+'%');
				}
			}
		}

		loadImage();

	}
})