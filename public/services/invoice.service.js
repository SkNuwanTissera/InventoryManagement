'use strict';

angular.module('InventoryApp').factory('InvoiceService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('/invoices').then(response => response.data),
            add: invoice => $http.post('/invoices', invoice).then(response => response.data),
            delete: id => $http.delete('/invoices/'+ id).then(response => response.data),
            edit: id => $http.delete('/invoices/'+ id,user).then(response => response.data)
        };
    }]);