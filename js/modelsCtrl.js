app.controller('modelstController', function($scope, fillerService) {
    
    $scope.modelCounter = 1;
    $scope.hostessesCounter = 1;
    $scope.limitedModelsArray = [];
    $scope.limitedHostessesArray = [];
    

    $scope.addToModelsCounter = function(){
        $scope.modelCounter += 1;
    }
    $scope.addToHostessesCounter = function(){
        $scope.hostessesCounter += 1;
    }
    
    
    //obsługa modelek
    var modelsPath = "/pages/models/models/model",
//        var modelsPath = "//student.agh.edu.pl/~brocel/pages/models/models/model",
        modelsRowLength = 4,
        modelsCount = 6,
        modelsArray = [];
    
    fillerService.fillContentArray(modelsPath, modelsRowLength, modelsCount, modelsArray).then(function(response){
        modelsArray = response;
        $scope.limitedModelsArray = modelsArray.slice(0, $scope.modelCounter);
    });     
    
    $scope.$watch('modelCounter', function(){
        $scope.limitedModelsArray = modelsArray.slice(0, $scope.modelCounter);
    });
    

    //obsługa hostess
    var hostessesPath = "/pages/models/hostesses/hostess",
//        var hostessesPath = "//student.agh.edu.pl/~brocel/pages/models/hostesses/hostess",
        hostessesRowLength = 4,
        hostessesCount = 6,
        hostessesArray = [];
    
    fillerService.fillContentArray(hostessesPath, hostessesRowLength, hostessesCount, hostessesArray).then(function(response){
        hostessesArray = response;
        $scope.limitedHostessesArray = hostessesArray.slice(0, $scope.hostessesCounter);
    });    
    
    $scope.$watch('hostessesCounter', function(){
        $scope.limitedHostessesArray = hostessesArray.slice(0, $scope.hostessesCounter);
    });
});

