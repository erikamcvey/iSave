(function(){
    angular
        .module("iSaveApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, $scope, UserService) {
        $scope.register = register;

        function register(user) {
            UserService.createUser(user, function(res) {
                $rootScope.registeringUser = user;
                $location.url("/confirm");
            });
        }
    }
})();