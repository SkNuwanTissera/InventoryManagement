'use strict';

angular.module('InventoryApp').controller('InvoiceController',['$scope','InvoiceService',
    function ($scope,InvoiceService) {
    /*
     * GETTERS
     * */
    //1. Get getinvoices
    function getinvoices() {
        InvoiceService.get().then(invoices => {
            $scope.invoices = invoices;
        });

    }
    //invoking getinvoices
    getinvoices();


    /*
     * SETTERS
     * */

    //1. set nvoices

        $scope.addInvoice = function(invoice) {
            alert('fdfdfdfdfdf');
            InvoiceService.add(invoice).then(() => {
                alert('qqqq');
                getinvoices();
                invoice = {};


            });
        };

        $scope.deleteInvoice = function(id) {
            InvoiceService.delete(id).then(() => {
                getinvoices();
            });
        };



    $scope.test="Hello";


}]);