//Controller

angular.module('hearmenow.controller', []).

    controller('billController', function($scope, govTrackUs){

        $scope.billsList = [];

        govTrackUs.getBills().success(function(response){

            $scope.billsList = response.objects;

        });

        $scope.click = function(bill){

            return bill.showInfo = ! bill.showInfo;

        }

    }).

    controller('homeController', function($scope, sunLight){

        $scope.sunlightList = [];

        sunLight.getInfo().success(function(response){

            $scope.sunlightList = response.results;

        });

        $scope.click = function(list){

            return list.showInfo = ! list.showInfo;

        }

    });