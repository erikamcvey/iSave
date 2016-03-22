/**
 * Created by rachanadeshmukh on 3/22/16.
 */

(function(){
    angular
        .module("iSaveApp")
        .controller("CurrentGoalController", CurrentGoalController);

    function GoalController($scope, $rootScope, $location, GoalService) {
        $scope.createGoal=createGoal;

        function createGoal(goal) {
            console.log(goal);

            GoalService.createGoal(goal);
            $location.url("/goals");

        }
    }
})();
