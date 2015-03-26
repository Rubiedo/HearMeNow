//Controller

angular.module('hearmenow.controller', []).

    controller('billController', function($scope, govTrackUs){

        $scope.billsList = [];

        govTrackUs.getBills().success(function(response){

            $scope.billsList = response.objects;

        })

        $scope.click = function(bill){

            return bill.showInfo = ! bill.showInfo;

        }

    }).

    controller('homeController', function($scope){


    });