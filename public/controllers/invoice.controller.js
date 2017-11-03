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
        $scope.itemList=[];

        $scope.changedValue=function(item){

            $scope.itemList.push(item.name);
        }

        $scope.addInvoice = function(invoice) {
            alert('fdfdfdfdfdf');
            InvoiceService.add(invoice).then(() => {
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