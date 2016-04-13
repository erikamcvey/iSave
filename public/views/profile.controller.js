(function(){
    "use strict";
    angular
        .module("iSaveApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $scope, $rootScope, UserService) {
        $scope.update = update;

        function update(user) {
            UserService
                .updateUser(user._id, user)
                .then(
                    function (res) {
                        if (res) {
                            UserService.setUser(res);
                        }
                    }
                )
        }
    }
})();