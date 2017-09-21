'use strict';

angular.module('TaxiApp').factory('UserService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('/users').then(response => response.data),
            add: user => $http.post('/users', user).then(response => response.data),
            delete: id => $http.delete('/users/'+ id).then(response => response.data),
            put: (user,id) => $http.put('/users/'+id ,user).then(response => response.data),

        };
    }]);