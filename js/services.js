//Services

angular.module('hearmenow.service', []).factory('sunLight', function($http){

    var sunLight = {};

    sunLight.getInfo = function(){

        return $http({

            method: 'JSONP',
            url: 'https://congress.api.sunlightfoundation.com/bills/search?apikey=e48aa7cf09864232a1620c1a084dbe8c&&callback=JSON_CALLBACK'

        });

    }

    return sunLight;

}).

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