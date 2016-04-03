/**
 * Created by rachanadeshmukh on 3/22/16.
 */

(function(){
    angular
        .module("iSaveApp")
        .controller("CurrentGoalController", CurrentGoalController);

    function CurrentGoalController($scope, $rootScope, $location, GoalService) {
        $scope.createGoal=createGoal;
        $scope.goal= GoalService.getCurrentGoals();

        function createGoal(goal) {
            console.log(goal);

            if (goal == undefined || goal.amount == undefined || goal.date == undefined) {
                alert('Fill In All Required Fields');
            }
            else {
                GoalService.createGoal(goal);
                $location.url("/goals");
            }
        }
    }
})();
