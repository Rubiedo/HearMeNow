//Services

angular.module('hearmenow.service', []).

    factory('sunLight', function($http){

    var sunLight = {};

    sunLight.getInfo = function(){

        return $http({

            method: 'JSONP',
            url: 'https://congress.api.sunlightfoundation.com/bills/search?apikey=e48aa7cf09864232a1620c1a084dbe8c&&callback=JSON_CALLBACK'

        });

    };

    return sunLight;

    }).

    factory('govTrackUs', function($http){

        var bills = {};

        bills.getBills = function(){

            return $http({

                method: 'JSONP',
                url: 'https://www.govtrack.us/api/v2/bill?congress=112&order_by=-current_status_date&format=jsonp&callback=JSON_CALLBACK'

            });

        };

        bills.getRep = function(pageNumber){

            var repUrl;

            if(pageNumber > 0){

                repUrl = 'https://www.govtrack.us/api/v2/person?format=jsonp&callback=JSON_CALLBACK&limit=20&offset=' + (pageNumber*10);

            } else {

                repUrl = 'https://www.govtrack.us/api/v2/person?format=jsonp&callback=JSON_CALLBACK&limit=20';

            }
            return $http({

                method: 'JSONP',
                url: repUrl

            });

        };

        return bills;

    });