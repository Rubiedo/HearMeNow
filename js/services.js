//Services

angular.module('hearmenow.service', []).

    factory('govTrackUs', function($http){

        var bills = {};

        bills.getBills = function(){

            return $http({

                method: 'JSONP',
                url: 'https://www.govtrack.us/api/v2/bill'

            });

        }

        bills.getSenator = function(){

            return $http({

                method: 'JSONP',
                url: 'https://www.govtrack.us/api/v2/person'

            });

        }

    });