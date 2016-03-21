(function(){
    angular
        .module("iSaveApp")
        .controller("MainController", MainController);

    function MainController($scope, $location){
        $scope.$location = $location;

    }
})();