(function() {
    angular
        .module("iSaveApp")
        .factory("BudgetService", BudgetService);

    function BudgetService() {
        var budgets = [];

        var service = {
            createBudget: createBudget,
            usersBudget: usersBudget
        };

        return service;

        function createBudget(item, callback) {
            item._id = (new Date()).getTime();
            budgets.push(item);
            callback(budgets);
        }

        function usersBudget(userId, callback) {
            var user_budget = [];
            for (var i = 0; i < budgets.length; i++) {
                var item = budgets[i];
                if (item.userId === userId) {
                    user_budget.push(item);
                }
            }
            callback(user_budget);
        }
    }

})();