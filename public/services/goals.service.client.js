/**
 * Created by rachanadeshmukh on 3/22/16.
 */
"use strict";
(function(){
    angular
        .module("iSaveApp")
        .factory("GoalService", GoalService);

    function GoalService($rootScope){
        var goals = [
            { "_id":1, "name":"Car", "descr":"Purchase new car", "amount":5000,
                "date":new Date(), "completed":true, "notes":"", "link":""},
            { "_id":2, "name":"Paris", "descr":"Travel to Paris", "amount":3000,
                "date":new Date(), "completed":true, "notes":"", "link":""},
            { "_id":3, "name":"Coldplay", "descr":"Go to coldplay concert", "amount":200,
                "date":new Date(), "completed":true, "notes":"", "link":""}
        ];
        var api = {
            goals: goals,
            //getCompletedGoals: getCompletedGoals,
            getCurrentGoals: getCurrentGoals,
            setCurrentGoal: setCurrentGoal,
            createGoal:  createGoal,
            //deleteGoal: deleteGoal,
            //updategoal: updategoal
        };
        return api;


        function createGoal(goal) {
            goal["_id"] = (new Date()).getTime();
            goal["completed"] = false;
            api.goals.push(goal);
            //callback(goal);
        }

        function getCurrentGoals() {
            for (var goal in api.goals) {
                if (api.goals[goal].completed === false) {
                    return api.goals[goal];
                }
            }
        }

        function setCurrentGoal(goal) {
            $rootScope.currentGoal= goal;
        }
    }
})();