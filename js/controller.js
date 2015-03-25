//Controller

angular.module('hearmenow.controller', []).

    controller('billController', function($scope, govTrackUs){

        $scope.bills = [];

        govTrackUs.getBills().success(function(response){

            $scope.bills = response.objects[0];

        })

    });