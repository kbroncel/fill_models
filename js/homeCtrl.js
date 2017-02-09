app.controller('homeController', function($scope, fillerService) {
    
    $scope.counter = 1;
    $scope.limitedNewsArray = [];
    
    $scope.addToCounter = function(){
        $scope.counter += 1;
    }

    var newsPath = "/pages/home/news/news",
//    var newsPath = "//student.agh.edu.pl/~brocel/pages/home/news/news",
        newsRowLength = 2,
        newsCount = 9,
        newsArray = [];
    
    fillerService.fillContentArray(newsPath, newsRowLength, newsCount, newsArray).then(function(response){
        newsArray = response;
        $scope.limitedNewsArray = newsArray.slice(0, $scope.counter);
    });
    
    $scope.$watch('counter', function(){
        $scope.limitedNewsArray = newsArray.slice(0, $scope.counter);
    });
});
