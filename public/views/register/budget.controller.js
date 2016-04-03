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
                "frequency": newBudget.frequency};
            BudgetService.createBudget($rootScope.currentUser._id, new_budget, function(res) {
                setForms();
                $scope.editForm = {"title": res.title, "_id": res._id, "userId": res.userId};
            });
        }

        function deleteForm(formId, formIndex) {
            FormService.deleteFormById(formId, updateUserForms);
        }

        function updateForm(newForm) {
            // The form with the given ID has been selected by the user
            // Update the form the user selected, with this new form
            FormService.updateFormById(newForm._id, newForm, updateUserForms);
        }

        function selectForm(formId, formIndex) {
            var selected_form = FormService.findFormById(formId);
            $scope.editForm = {"title" :selected_form.title, "userId": selected_form.userId, "_id": selected_form._id}
        }

        (function init() {
            setForms();
        })();

        function updateUserForms(res) {
            // A default callback function for updating this user's forms after some action
            // This is helpful because the FormService return everybody's forms
            setForms();
        }
    }
})();