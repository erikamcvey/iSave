(function(){
    angular
        .module("iSaveApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService) {
        $scope.login = login;

        function login(user) {
            UserService.findUserByCredentials(user.username, user.password, function(res){
                if(res) {
                    $rootScope.currentUser = res;
                    $location.url("/home");
                }
            });
        }
    }
})();
