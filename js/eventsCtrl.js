app.controller('eventsController', function($scope, $http, fillerService) {

    $scope.aheadCounter = 1;
    $scope.behindCounter = 1;
    $scope.limitedAheadArray = [];
    $scope.limitedBehindArray = [];
    
    $scope.addToAheadCounter = function(){
        $scope.aheadCounter += 1;
    }
    $scope.addToBehindCounter = function(){
        $scope.behindCounter += 1;
    }
    
    
    //obsługa ahead
    var aheadPath = "/pages/events/ahead/ahead",
//        var aheadPath = "//student.agh.edu.pl/~brocel/pages/events/ahead/ahead",
        aheadRowLength = 1,
        aheadCount = 5,
        aheadsArray = [];
    
    fillerService.fillContentArray(aheadPath, aheadRowLength, aheadCount, aheadsArray).then(function(response){
        $scope.limitedAheadArray = aheadsArray.slice(0, $scope.aheadCounter);
        $scope.$apply();
    });    
    
    $scope.$watch('aheadCounter', function(){
        $scope.limitedAheadArray = aheadsArray.slice(0, $scope.aheadCounter);
    });
    
    
    //obsługa behind
    var behindPath = "/pages/events/behind/behind",
//        var behindPath = "//student.agh.edu.pl/~brocel/pages/events/behind/behind",
        behindRowLength = 1,
        behindCount = 5,
        behindArray = [];
    
    fillerService.fillContentArray(behindPath, behindRowLength, behindCount, behindArray).then(function(response){
        $scope.limitedBehindArray = behindArray.slice(0, $scope.behindCounter);
        $scope.$apply();
    });    
    
    $scope.$watch('behindCounter', function(){
        $scope.limitedBehindArray = behindArray.slice(0, $scope.behindCounter);
    });
});