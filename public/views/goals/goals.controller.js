/**
 * Created by rachanadeshmukh on 3/22/16.
 */

(function(){
    angular
        .module("iSaveApp")
        .controller("GoalController", GoalController);

    function GoalController($scope, $rootScope, $location, GoalService) {
        $scope.createGoal=createGoal;
        $scope.goal = GoalService.getCurrentGoals();
        console.log($scope.goal);

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
/**
 * Created by rachanadeshmukh on 4/3/16.
 */
