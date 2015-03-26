//Main app

angular.module('hearmenow', [

    'hearmenow.service',
    'hearmenow.controller',
    'ngRoute'

]).config(['$routeProvider', function($routeProvider){

    $routeProvider.

        when("/home", {

            templateUrl: "views/home-view.html",
            controller: "homeController"

        }).

        when("/bills", {

            templateUrl: "views/bill-view.html",
            controller: "billController"

        }).

        otherwise({redirectTo: "/bills"});

}]);