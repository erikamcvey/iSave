(function(){
    angular
        .module("iSaveApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService) {
        $scope.login = login;

        function login(user) {
            console.log('no?');
            UserService.findUserByCredentials(user.username, user.password, function(res){
                if(res) {
                    console.log('hi');
                    $rootScope.currentUser = res;
                    $location.url("/home");
                }
            });
        }
    }
})();
