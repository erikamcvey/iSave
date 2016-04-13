
"use strict";
(function(){
    angular
        .module("iSaveApp")
        .factory("HabitService", HabitService);

    function HabitService($rootScope){
        var habits = [
            { "_id":1, "name":"Starbucks", "descr":"Weekly coffee", "amount":5,
                "date":new Date(), "completed":false, "notes":""}
        ];
        var api = {
            habits: habits,
            getCurrentHabits: getCurrentHabits,
            setCurrentHabit: setCurrentHabit,
            createHabit:  createHabit,
        };
        return api;


        function createHabit(habit) {
            habit["_id"] = (new Date()).getTime();
            habit["completed"] = false;
            api.habits.push(habit);
        }

        function getCurrentHabits() {
            for (var habit in api.habits) {
                if (api.habits[habit].completed === false) {
                    return api.habits[habit];
                }
            }
        }

        function setCurrentHabit(habit) {
            $rootScope.currentHabit= habit;
        }
    }
})();