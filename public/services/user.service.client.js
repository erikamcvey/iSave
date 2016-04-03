"use strict";
(function(){
    angular
        .module("iSaveApp")
        .factory("UserService", UserService);

    function UserService($rootScope){
        var users = [
            { "_id":1, "firstName":"Hermione", "lastName":"Granger", "username":"smartgirl",
                "password":"leviosa", "role":"user", zip:"12345" },
            { "_id":2, "firstName":"Harry", "lastName":"Potter", "username":"chosenone",
                "password":"hedwig", "role":"user", zip:"67891" },
            { "_id":3, "firstName":"Ron", "lastName":"Weasley", "username":"redhead",
                "password":"keeper", "role":"advertiser", zip:"54321" }
        ];
        var services = {
            users: users,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            logoutUser: logoutUser
        };
        return services;

        function findUserByCredentials(username, password, callback) {
            for (var u = 0; u < services.users.length; u++) {
                var user = services.users[u];
                if (user.username === username &&
                    user.password === password) {

                    callback(user);
                    break;
                }
            }
            callback(null);
        }

        function findAllUsers(callback) {
            callback(services.users);
        }

        function createUser(user, callback) {
            user["_id"] = (new Date()).getTime();
            services.users.push(user);
            callback(user);
        }

        function deleteUserById(userId, callback) {
            for (var u = 0; u < services.users.length; u++) {
                var user = services.users[u];
                if (user._id === userId) {
                    services.users.splice(u, 1);
                }
            }
            callback(services.users)
        }

        function updateUser(userId, user, callback) {
            for (var u = 0; u < services.users.length; u++) {
                var curUser = services.users[u];
                if (curUser._id === userId) {
                    services.users[u] = user;
                    callback(curUser);
                }
            }
        }

        function logoutUser() {
            $rootScope.currentUser = null;
        }
    }
})();