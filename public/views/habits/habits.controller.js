

(function(){
    angular
        .module("iSaveApp")
        .controller("HabitController", HabitController);

    function HabitController($scope, $rootScope, $location, HabitService) {
        $scope.createHabit=createHabit;
        $scope.edithabit= edithabit;
        $scope.habit = HabitService.getCurrentHabits();
        console.log($scope.habit);

        function createHabit(habit) {
            console.log(habit)
            if (habit == undefined || habit.name == undefined || habit.amount == undefined) {
                alert('Fill In All Required Fields');
            }
            else {
                HabitService.createHabit(habit);
                $location.url("/habits");
            }
        }

        function edithabit(habit) {
            $location.url("/newhabit");
        }
    }
})();
