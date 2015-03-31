//Main app

angular.module('hearmenow', [

    'hearmenow.service',
    'hearmenow.controller',
    'ngRoute',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination'

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

        when("/representative", {

            templateUrl: "views/rep-view.html",
            controller: "repController"

        }).

        when("/export", {

        templateUrl: "views/second-view.html",
        controller: "homeController"

    }).

        otherwise({redirectTo: "/home"});

    }]).config(function(paginationTemplateProvider) {

        paginationTemplateProvider.setPath('bower_components/angular-utils-pagination/dirPagination.tpl.html');

    });