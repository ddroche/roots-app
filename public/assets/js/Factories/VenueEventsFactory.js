
// creates a service that shares the venue object between controllers
rootsApp.factory('VenueEventsFactory', function($http) {
    // initialize venues object
    var venues = {};

    return{
        getVenues : function() {
            return  $http({
                url: '/api/event/getEvents',
                method: 'GET'
            }).success(function(result){
                    venues.data = result;
                })
                .error(function(data, status, headers, config) {
                    $log.warn(data, status, headers(), config);
                });
        },
        venues: venues
    };
});