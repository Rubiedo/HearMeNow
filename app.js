//Main app

angular.module('hearmenow', [

    'hearmenow.services',
    'hearmenow.controller',
    'ngRoute'

]).config(['$routeProvider', function($routeProvider){

    $routeProvider.

        when("/bills", {

            templateUrl: "views/bill-view.html",
            controller: "billController"

        }). otherwise({redirectTo: "views/home-view.html"});

}]);