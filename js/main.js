var app = angular.module('app', ['ngRoute', 'popUpGallery']);

app.config(function($routeProvider) {
    $routeProvider
    
        .when('/', {
            templateUrl: 'pages/home/home.html',
            controller: 'homeController'
        })
    
        .when('/join', {
            templateUrl: 'pages/join/join.html',
            controller: 'joinController'
        })
    
        .when('/events', {
            templateUrl: 'pages/events/events.html',
            controller: 'eventsController'
        })
    
        .when('/models', {
            templateUrl: 'pages/models/models.html',
            controller: 'modelstController'
        })
    
        .when('/offer', {
            templateUrl: 'pages/offer/offer.html',
            controller: 'offerController'
        })
})


app.controller('mainController', function($scope, $location, $anchorScroll, $timeout) {
    $scope.scrollTo = function(page, hash) {
        
        var href = window.location.href;
        var currentPage = href.substr(href.length - page.length);
        if(currentPage != page){
            window.location.href = page;
            $('body').scrollTop(0);
        }
            $timeout(function(){
                try{
                    if (/chrome/.test(navigator.userAgent.toLowerCase())){
                        var position = $(hash).offset().top-130;
                        $('body').animate({scrollTop:position}, "fast");
                    }
                    if (/firefox/.test(navigator.userAgent.toLowerCase())){
                        var position = $(hash).offset().top-130;
                        $('body,html').animate({scrollTop:position}, "fast");
                    }
                }
                catch(TypeError){}
            });   
        }
    });