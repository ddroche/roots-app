rootsApp.controller("FormEventController", ['$scope', '$http', 'VenueEventsFactory', function($scope, $http, VenueEventsFactory) {
    $scope.event = {};
  //form data tied to model where possible
    $scope.submitEventForm = function () {
      var event = {
        venueName: $scope.venueName,
        eventDate: $scope.eventDate,
        arrivalTime: $scope.arrivalTime,
        gameTime: $scope.gameTime,
        submitBy: $scope.submitBy
      };
      $http({
        url: '/api/event/addEvent',
        method: 'post',
        data: event
      }).then(function () {
        VenueEventsFactory.getVenues();
        popupS.alert({
          content: 'Event Added'
        });
      });
      //$http({
      //  url: '/api/event/getEvents',
      //  method: 'get'
      //});

    };
  //should have a popupS modal confirmation

}]);