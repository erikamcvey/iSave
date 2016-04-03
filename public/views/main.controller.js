(function(){
    angular
        .module("iSaveApp")
        .controller("MainController", MainController);

    function MainController($scope, $location, UserService){
        $scope.$location = $location;
        $scope.logout = logout;

        function logout(user) {
            UserService.logoutUser();
        }
    }
})();