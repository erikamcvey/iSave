(function() {
    angular
        .module("iSaveApp")
        .factory("BudgetService", BudgetService);

    function BudgetService() {
        var budgets = [];

        var service = {
            createBudget: createBudget,
            usersBudget: usersBudget,
            editBudget: editBudget
        };

        return service;

        function createBudget(userId, item, callback) {
            item._id = (new Date()).getTime();
            item.userId = userId;
            budgets.push(item);
            callback(form);
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