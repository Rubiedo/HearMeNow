//Looks

angular.module('hearmenow.looks', []).

    controller('tabsController', function($scope){

        $scope.tabs = [

            {title:'Home', content:'Home Page'},
            {title:'Bills', content:'Bills', disabled: true},
            {title:'Your Rep', content:'Your Representative', disabled: true}

        ];

    })