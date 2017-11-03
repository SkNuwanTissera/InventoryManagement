'use strict';

angular.module('InventoryApp').factory('MaterialService', ['$http',
    function ($http) {

        return {
            get: () => $http.get('/materials').then(response => response.data),
            add: vendor => $http.post('/materials', vendor).then(response => response.data),
            delete: id => $http.delete('/materials/'+ id).then(response => response.data),
            put: (vendor,id) => $http.put('/materials/'+id ,vendor).then(response => response.data),
            getById: id => $http.get('/materials/' + id).then(response => response.data),

            getDrugs: () => $http.get('/drugs').then(response => response.data),

            addDrugs: (id, drug) => $http.post('/materials/' + id + '/drugs', drug).then(response => response.data),
            getVendorsByDrugs:id => $http.get('/materials/drugs/' + id).then(response => response.data),

            sendMail: (mail) => $http.post('/ordermails', mail).then(response => response.data),

            //order service
            getOrder: () => $http.get('/orders').then(response => response.data),
            addOrder: order => $http.post('/orders', order).then(response => response.data),
            getOrderById: id => $http.get('/orders/' + id).then(response => response.data)
        };
    }]);