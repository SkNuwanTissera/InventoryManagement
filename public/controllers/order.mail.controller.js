'use strict';

angular.module('InventoryApp').controller('OrderMailController', ['$scope', 'MaterialService',
    function ($scope, MaterialService) {

        $scope.selectedMaterial;
        $scope.selectedVendor;
        $scope.selectedVendorEmail;
        $scope.quantity=1;
        $scope.description;
        $scope.date = new Date();

        $scope.getVendorsBySellingMaterial = function() {
            MaterialService.getById($scope.selectedMaterial._id).then(material => {
                $scope.materialSellingVendors = material.company;
                $scope.selectedVendorEmail="";
            });
        };

        $scope.getVendorEmail = function () {
            MaterialService.getVendorEmail($scope.selectedVendor).then(vendor => {
                $scope.selectedVendorEmail = vendor[0].email;
            });
        };

        //Get All Materials
        function getMaterials() {
            MaterialService.get().then(materials => {
                $scope.materials = materials;
            });
        };

        //Invoking Get All Materials function to load the table
        getMaterials();

        //Form Validation Function
        function validateForm (){
            var valid=true;
            if(document.getElementById("input1").selectedIndex <1){
                valid=false;
                swal({
                    title: "Please Select a Material!",
                    text: "",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Retry!",
                    closeOnConfirm: true
                });
                return valid;
            }
            if(document.getElementById("input2").selectedIndex <1){
                valid=false;
                swal({
                    title: "Please Select a Supplier!",
                    text: "",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Retry!",
                    closeOnConfirm: true
                });
                return valid;
            }
            if(document.getElementById('input5').value==""){
                valid=false;
                swal({
                    title: "Description Field is Empty!",
                    text: "",
                    type: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Retry!",
                    closeOnConfirm: true
                });
                return valid;
            }
            return valid;
        };

        $scope.sendMail = function () {
            if(validateForm()){
                swal({
                        title: "Do You Really Want To Place This Order?",
                        text: "",
                        type: "info",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        showLoaderOnConfirm: true,
                    },
                    function(){

                        var date = document.getElementById('input6').value;
                        var order={"material":$scope.selectedMaterial.materialName,"vendor":$scope.selectedVendor,"vendorEmail":$scope.selectedVendorEmail,"qty":$scope.quantity,"note":$scope.description,"orderDate":date,"status":"Pending","receivedDate":"-"};
                        MaterialService.addOrder(order);

                        var email={"material":$scope.selectedMaterial.materialName,"vendor":$scope.selectedVendor,"qty":$scope.quantity,"note":$scope.description,"date":date,"email":$scope.selectedVendorEmail};
                        MaterialService.sendMail(email);

                        setTimeout(function(){
                            swal("Order Was Placed!",);
                            setTimeout(function(){
                                window.location.href = './orders';
                            },3200);
                        }, 2500);
                    });
            }
        };

    }]);