/**
 * Created by Sk on 6/29/2017.
 */
var inventoryApp = angular.module('inventoryApp', []);

// configure our routes
inventoryApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'public/index.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/nerds', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
inventoryApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

inventoryApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

inventoryApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
