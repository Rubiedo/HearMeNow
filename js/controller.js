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

        };

        $scope.isCollapsed = true;

    }).

    controller('repController', function($scope, govTrackUs){

        $scope.repList = [];

        govTrackUs.getRep().success(function(response){

           $scope.repList = response.objects;

        });

        $scope.click = function(list){

            return list.showInfo = ! list.showInfo;

        };

        $scope.isCollapsed = true;

    }).

    controller('mainController', function($scope, $location){

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    });