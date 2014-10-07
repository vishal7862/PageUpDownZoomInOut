var app=angular.module("MyApp",['ngRoute']).config(function($routeProvider){

 $routeProvider.when('/Phase1', {
        templateUrl: '/Templates/Phase1.html'

    });

     $routeProvider.when('/Original', {
        templateUrl: '/svg-editor.html',
         controller:'HomeController'
    });
});
