(function() {
    angular
        .module("iSaveApp")
        .controller("BudgetController", BudgetController);

    function BudgetController($scope, $rootScope, BudgetService) {

        $scope.addBudget = addBudget;

        function addBudget(newBudget) {
            var new_budget = {"name": newBudget.name,
                "amount": newBudget.amount,
                "type": newBudget.type,
                "freq": newBudget.freq};
            BudgetService.createBudget(new_budget, function(res) {
                $scope.budget = res;
            });
        }
    }
})();