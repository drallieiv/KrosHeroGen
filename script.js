var HeroGenModule = angular.module('HeroGen', []);

HeroGenModule.directive('imageStyle', function(){
	return function(scope, element, attrs) {

    var flag = 0;

		scope.$watch( "["+attrs.imageStyle+".zoom, "+attrs.imageStyle+".offX, "+attrs.imageStyle+".offY, "+attrs.imageStyle+".url] | json",
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

	}
})

HeroGenModule.directive('updown', function() {
  return function(scope, elm, attrs) {
    elm.bind("keyup", function(event) {
      //scope.$apply(attrs.onKeyup);
      var currentValue = eval("scope."+attrs['ngModel'])
      console.log("Key pressed", event.which);
      if(event.which == 38){
        scope.$apply(attrs['ngModel']+" = "+(currentValue+1));
      }else if(event.which == 40){
        scope.$apply(attrs['ngModel']+" = "+(currentValue-1));
      }
    });
  };
});