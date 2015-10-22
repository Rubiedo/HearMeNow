//Main app

angular.module('hearmenow', [

    'hearmenow.service',
    'hearmenow.controller',
    'ngRoute',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination',
    'auth0',
    'angular-storage',
    'angular-jwt'

]).

    config(function (authProvider) {
        authProvider.init({
            domain: 'mastawu.auth0.com',
            clientID: 'LgrXG2C7GoQSVp4hdlNO31M9JQFkBHg5'
        });
    }).

    config(function(authProvider, $routeProvider, $locationProvider){

    $routeProvider.

        when("/home", {

            templateUrl: "../views/home-view.html",
            controller: "homeController"

        }).

        when("/bills", {

            templateUrl: "../views/bill-view.html",
            controller: "billController",
            requiresLogin: true

        }).

        when("/representative", {

            templateUrl: "../views/rep-view.html",
            controller: "repController",
            requiresLogin: true

        }).

        when("/export", {

        templateUrl: "../views/second-view.html",
        controller: "homeController"

    }).

        otherwise({redirectTo: "/home"});

        authProvider.init({
            domain: 'mastawu.auth0.com',
            clientID: 'LgrXG2C7GoQSVp4hdlNO31M9JQFkBHg5',
            callbackURL: location.href,
            // Here we add the URL to go if the user tries to access a resource he can't because he's not authenticated
            loginUrl: '/login'
        });

    }).config(function(paginationTemplateProvider) {

        paginationTemplateProvider.setPath('bower_components/angular-utils-pagination/dirPagination.tpl.html');

    }).

    run(function(auth) {
        // This hooks al auth events to check everything as soon as the app starts
        auth.hookEvents();
    }).

    config(function (authProvider, $routeProvider, $httpProvider, jwtInterceptorProvider) {
        // ...

        // We're annotating this function so that the `store` is injected correctly when this file is minified
        jwtInterceptorProvider.tokenGetter = ['store', function(store) {
            // Return the saved token
            return store.get('token');
        }];

        $httpProvider.interceptors.push('jwtInterceptor');
        // ...
    }).

    run(function($rootScope, auth, store, jwtHelper, $location) {
        // This events gets triggered on refresh or URL change
        $rootScope.$on('$locationChangeStart', function() {
            if (!auth.isAuthenticated) {
                var token = store.get('token');
                if (token) {
                    if (!jwtHelper.isTokenExpired(token)) {
                        auth.authenticate(store.get('profile'), token);
                    } else {
                        // Either show Login page or use the refresh token to get a new idToken
                        $location.path('/');
                    }
                }
            }
        });
    });
