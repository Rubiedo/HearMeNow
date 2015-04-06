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
        $scope.usersPerPage = 10; // this should match however many results your API puts on one page
        $scope.totalReps = 0;
        getResultsPage(1);

        govTrackUs.getRep().success(function(response){

           $scope.repList = response.objects;

        });

        $scope.click = function(list){

            return list.showInfo = ! list.showInfo;

        };

        $scope.isCollapsed = true;

        $scope.pagination = {
            current: 1
        };

        $scope.pageChanged = function(newPage) {
            getResultsPage(newPage);
        };

        function getResultsPage(pageNumber) {
            // this is just an example, in reality this stuff should be in a service
            /*$http.get('https://www.govtrack.us/api/v2/person?format=jsonp&callback=JSON_CALLBACK&limit=10&offset=' + pageNumber)
                .then(function(result) {
                    $$scope.repList = result.objects;
                });*/

            var correctPageNumber = pageNumber - 1;

            govTrackUs.getRep(correctPageNumber).success(function(response){

                $scope.repList = response.objects;

                $scope.totalReps = (response.meta.total_count)/20;

            });

        }

    }).

    controller('mainController', function($scope, $location){

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    }).
    //User Controller (login, logout)
    controller('loginController', [$scope, $location, $window, 'UserService', 'AuthenticationService',
        function loginController($scope, $location, $window, UserService, AuthenticationService){

            $scope.logIn = function logIn(username, password){

                if(username !== undefined && password !== undefined){
                    UserService.success(function(data){
                        AuthenticationService.isLogged = true;
                        $window.sessionStorage.token = data.token;
                        $location.path("/admin");
                    }).error(function(status, data){
                        console.log(status);
                        console.log(data);
                    });
                }
            }

            $scope.logOut = function logOut(){
                if(AuthenticationService.isLogged){
                    AuthenticationService.isLogged = false;
                    delete $window.sessionStorage.token;
                    $location.path("/");
                }
            }
        }

]);