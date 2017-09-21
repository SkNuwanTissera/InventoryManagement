'use strict';

angular.module('TaxiApp').controller('UserController',['$scope','UserService',
    function ($scope,UserService) {
    /*
     * GETTERS
     * */
        //Form Validation Function
   //1. Get Users
    function getusers() {
        UserService.get().then(users => {
                $scope.users = users;
                $scope.userCount = users.length;
        });

    }
    //invoking getUsers
    getusers();


    /*
     * SETTERS
     * */

    //1. SetUser

        $scope.addUser = function(user) {

            if (validateForm()){

                swal({
                        title: "Do You Really Want To Add This ?",
                        text: "",
                        type: "info",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        showLoaderOnConfirm: true,
                    },
                    function(){

                        UserService.add(user).then((x) => {

                            MailService.add(x).then(() => {
                                console.log('Mail Sending.....');
                                setTimeout(function(){
                                    swal("Email Was Send To '"+x.email+"' !");
                                }, 3800);

                            });
                            //Update the table after adding new user
                            getusers();
                            user = {}

                        });
                        setTimeout(function(){
                            swal("New User Added Successfully!", "success");
                            setTimeout(function(){
                                window.location.href = './users';
                            },4800);
                        }, 4800);
                    });
            }
        };

        $scope.deleteUser = function(id) {
            swal({
                    title: "Are you sure?",
                    text: "This User Will Be Terminated Only!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, Terminate it!",
                    closeOnConfirm: false
                },
                function(){
                    UserService.delete(id).then(() => {
                        getusers();
                    });
                    swal("Terminated!", "The User is Terminated.", "success");
                    setTimeout(function(){
                        window.location.href = './users';
                    },1800);
                });
        };

        $scope.setObject = function(user) {
            $scope.user=user;

        };


        $scope.editUser = function(user,id) {

            if (true){
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

                        UserService.put(user,id).then(() => {
                            getusers();
                        });

                        setTimeout(function(){
                            swal("User Details Updated!",);
                            setTimeout(function(){
                                window.location.href = './users';
                            },1800);
                        }, 1000);
                    });
            }
        }

        $scope.setCurrentUser = function(user) {
            UserService.setCuser(user).then(currentUser=>{
                alert('Here!1s');
               $scope.currentUser=currentUser;
            });

        }

        $scope.getCurrentUser = function () {
            UserService.getCuser().then(currentUser=>{
                $scope.currentUser=currentUser;
                alert(currentUser.firstName);
            })
        }




}]);