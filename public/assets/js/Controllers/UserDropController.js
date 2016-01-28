rootsApp.controller("UserDropController", ['$scope', 'UserRepoFactory', function($scope, UserRepoFactory) {
    var onFetchError = function (message) {
        $scope.error = "Error Fetching Users. Message:" + message;
    };
    var onFetchCompleted = function (data) {
        $scope.users = data;
    };
    var getContactEmails = function () {
        UserRepoFactory.get().then(onFetchCompleted, onFetchError);
    };

    getContactEmails();

}]);