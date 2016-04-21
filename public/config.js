(function(){
    angular
        .module("iSaveApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/login.view.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController"
            })
            .when("/confirm", {
                templateUrl: "views/register/confirmation.view.html"
            })
            .when("/security", {
                templateUrl: "views/register/security.view.html"
            })
            .when("/bank", {
                templateUrl: "views/register/bank.view.html"
            })
            .when("/createbudget", {
                templateUrl: "views/register/createbudget.view.html",
                controller: "BudgetController"
            })
            .when("/home", {
                templateUrl: "views/home.view.html"
            })
            .when("/profile", {
                templateUrl: "views/profile.view.html",
                controller: "ProfileController"
            })
            .when("/budget", {
                templateUrl: "views/budget.view.html"
            })
            .when("/goals", {
                templateUrl: "views/goals/goals.view.html",
                controller: "GoalController"
            })
            .when("/newgoal", {
                templateUrl: "views/goals/newgoal.view.html",
                controller: "CurrentGoalController"
            })
            .when("/prevgoals", {
                templateUrl: "views/goals/prevgoals.view.html"
            })
            .when("/habits", {
                templateUrl: "views/habits/habits.view.html",
                controller: "HabitController"
            })
            .when("/newhabit", {
                templateUrl: "views/habits/newhabit.view.html",
                controller: "CurrentHabitController"
            })
    }
})();