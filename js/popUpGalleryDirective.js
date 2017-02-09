var popUpGallery = angular.module("popUpGallery", []);

popUpGallery.directive('popUpGallery', function(){
    return{
        restrict: 'E',
        templateUrl: '/js/popUpGallery.html',
//        templateUrl: '/~brocel/js/popUpGallery.html',
        scope: {
            model: '='
        },
        link: function(scope, elements, attrs){
            if(scope.model){
                var galleryURL = scope.model.gallery,
                    photosCount = 33,
                    photo = null,
                    i = 0;
                scope.photosList = [];

                while (i<photosCount){
                    photo = galleryURL + '/img' + i + '.jpg';
                    scope.photosList.push(photo);
                    i+=1;
                }
                scope.currentPhoto = scope.photosList[0];

                //wskaznik na ktorym jestesmy zdjzeciu
                scope.indicator = 0;
                scope.slicedPhotoList = scope.photosList.slice(scope.indicator, scope.indicator+4);

                scope.indicatorRight = function(){
                    if (scope.indicator<photosCount-4){
                    scope.indicator = scope.indicator+1;
                    scope.slicedPhotoList = scope.photosList.slice(scope.indicator, scope.indicator+4);
                    }
                }
                scope.indicatorLeft = function(){
                    if (scope.indicator>0){
                    scope.indicator = scope.indicator-1;
                    scope.slicedPhotoList = scope.photosList.slice(scope.indicator, scope.indicator+4);
                    }
                }
                scope.getCurrentPhoto = function(photo){
                    scope.currentPhoto = photo;
                }
            }
        }
    }
});