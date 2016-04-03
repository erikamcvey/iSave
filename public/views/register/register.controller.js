(function(){
    angular
        .module("iSaveApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, $scope, UserService) {
        $scope.register = register;
        $scope.completeReg = completeReg;

        function register(user) {
            if (user==undefined ||
                user.username == undefined ||
                user.password == undefined ||
                user.password2 == undefined ||
                user.email == undefined)
                alert('Fill Out All Fields');
            else {
            UserService.createUser(user, function (res) {
                $rootScope.registeringUser = user;
                $location.url("/confirm");
            });
        }
        }

        function completeReg() {
            $rootScope.currentUser = $rootScope.registeringUser;
            $location.url("/home");
        }
    }
})();