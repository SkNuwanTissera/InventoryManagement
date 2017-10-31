'use strict';

angular.module('InventoryApp').controller('ItemController',['$scope',
    function ($scope) {
    /*
     * GETTERS
     * */

    $scope.items=[
        {
            name:'Plastic Bottle'
        },
        {
            name:'Plastic toy'
        },
        {
            name:'Plastic Basin'
        }
    ];

}]);