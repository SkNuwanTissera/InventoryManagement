'use strict';

angular.module('InventoryApp').controller('OrderController', ['$scope', 'MaterialService',
    function ($scope, MaterialService) {

        //Get All Orders
        function getOrders() {
            MaterialService.getOrder().then(orders => {
                $scope.orders = orders;
            });
        };

        //Invoking Get All Orders function to load the table
        getOrders();

        //Get a particular Vendor
        $scope.getOrderByID = function (id) {
            MaterialService.getOrderById(id).then(order => {
                $scope.order = order;
            });
        }

        //Update Order Status
        $scope.updateOrderStatus = function (id, order) {
            $scope.order.status = "Received";
            if(document.getElementById('receivedDate').value==""){
                swal({
                    title: "Select the Order Received Date!",
                    text: "",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Retry!",
                    closeOnConfirm: true
                });
            } else{

                swal({
                        title: "Do You Really Want To Update the Status ?",
                        text: "",
                        type: "info",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        showLoaderOnConfirm: true,
                    },
                    function(){

                        setTimeout(function(){
                            $scope.order.receivedDate = document.getElementById('receivedDate').value;
                            MaterialService.updateOrderStatus(id, order).then(order => {
                                window.location.href = './orders';
                            });
                        }, 1000);
                        
                    });
            }

        }


    }]);