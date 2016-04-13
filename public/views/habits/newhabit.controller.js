
(function(){
    angular
        .module("iSaveApp")
        .controller("CurrentHabitController", CurrentHabitController);

    function CurrentHabitController($scope, $rootScope, $location, HabitService) {
        $scope.createHabit=createHabit;
        $scope.habit= HabitService.getCurrentHabits();

        function createHabit(habit) {
            console.log(habit);

            if (habit == undefined || habit.name == undefined) {
                alert('Fill In All Required Fields');
            }
            else {
                HabitService.createHabit(habit);
                $location.url("/habits");
            }
        }
    }
})();
