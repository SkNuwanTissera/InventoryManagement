'use strict';

angular.module('InventoryApp').controller('MaterialController', ['$scope', 'MaterialService',
    function ($scope, MaterialService) {

        $scope.selectedVendors = "" ;
        $scope.selectedVendorName = "" ;

        //Form Validation Function
        function validateForm () {
            var valid=true;
            var materialName = document.getElementById('input1').value;
            var materialType = document.getElementById('input2').value;
            var stockedDate = document.getElementById('input3').value;
            var quantity = document.getElementById('input4').value;

            //Check Empty Fields
            if(materialName==""||materialType==""||stockedDate==""||quantity==""){
                valid=false;
                swal({
                        title: "Some Required Fields Are Empty!",
                        text: "Except Selling Drugs All Other Fields are Required!",
                        type: "warning",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Retry!",
                        closeOnConfirm: true
                    });
                return valid;
            }

            $scope.material.stockedDate = stockedDate;

            return valid;

        }

        //Get All Materials
        function getMaterials() {
            MaterialService.get().then(materials => {
                $scope.materials = materials;
            });
        };

        //Invoking Get All Materials function to load the table
        getMaterials();

        //Get Vendors from DB
        function getVendors() {
            MaterialService.getVendors().then(vendors => {
                $scope.vendors = vendors;
            });
        };

        getVendors();

        //Add new Material
        $scope.addMaterial = function(material) {
            if (validateForm()){
                swal({
                        title: "Do You Really Want To Add This Material?",
                        text: "",
                        type: "info",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        showLoaderOnConfirm: true,
                    },
                    function(){
                        var index;
                        var dNames = [];
                        for (index = 0; index < $scope.selectedVendors.length; index++) {
                            dNames.push($scope.selectedVendors[index].companyName);
                        }
                        $scope.material.company = dNames;

                        MaterialService.add(material).then(() => {
                            //Update the table after adding new material
                            getMaterials();
                            material = {};
                        });
                        setTimeout(function(){
                            swal("New Material Added Successfully!");
                            setTimeout(function(){
                                window.location.href = './materials';
                            },1800);
                        }, 1000);
                    });
            }
        };

        //Delete a Material
        $scope.deleteMaterial = function(id) {
            swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this material`s details!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function(){
                    MaterialService.delete(id).then(() => {
                        getMaterials();
                    });
                    swal("Deleted!", "The material has been deleted.", "success");
                    setTimeout(function(){
                        window.location.href = './materials';
                    },1800);
                });
        };

        //Edit Material
        $scope.editMaterial = function(material,id) {
            if (validateForm()){
                swal({
                        title: "Do You Really Want To Save The Changes?",
                        text: "",
                        type: "info",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        showLoaderOnConfirm: true,
                    },
                    function(){
                        var index;
                        var dNames = [];
                        for (index = 0; index < $scope.selectedVendors.length; index++) {
                            dNames.push($scope.selectedVendors[index].companyName);
                        }
                        $scope.material.company = dNames;

                        MaterialService.put(material,id).then(() => {
                            getMaterials();
                        });
                        setTimeout(function(){
                            swal("Material Details Saved!",);
                            setTimeout(function(){
                                window.location.href = './materials';
                            },1800);
                        }, 1000);
                    });
            }
        };

        //Get a particular Material
        $scope.getMaterialByID = function (id) {
            MaterialService.getById(id).then(material => {
                $scope.material = material;
            });
        }

        //Reset Material id before adding a new material
        $scope.resetMaterial = function () {
            $scope.material=null;
            $scope.material.materialName="";
        }

    }]);