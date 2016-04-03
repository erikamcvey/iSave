/**
 * Created by rachanadeshmukh on 3/22/16.
 */
"use strict";
(function(){
    angular
        .module("iSaveApp")
        .factory("GoalService", GoalService);

    function GoalService(){
        var goals = [
            { "_id":1, "name":"Car", "descr":"Purchase new car", "amount":5000,
                "date":new Date(), "completed":false, "notes":"", "link":""},
            { "_id":2, "name":"Paris", "descr":"Travel to Paris", "amount":3000,
                "date":new Date(), "completed":true, "notes":"", "link":""},
            { "_id":3, "name":"Coldplay", "descr":"Go to coldplay concert", "amount":200,
                "date":new Date(), "completed":true, "notes":"", "link":""}
        ];
        var api = {
            goals: goals,
            //getCompletedGoals: getCompletedGoals,
           //getCurrentGoals: getCurrentGoals,
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


    }
})();