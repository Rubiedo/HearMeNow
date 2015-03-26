//Services

angular.module('hearmenow.service', []).

    factory('govTrackUs', function($http){

        var bills = {};

        bills.getBills = function(){

            return $http({

                method: 'JSONP',
                url: 'https://www.govtrack.us/api/v2/bill?congress=112&order_by=-current_status_date&format=jsonp&callback=JSON_CALLBACK'

            });

        }

        bills.getSenator = function(){

            return $http({

                method: 'JSONP',
                url: 'https://www.govtrack.us/api/v2/person'

            });

        }

        return bills;

    });