'use strict'
var app = angular.module('TodoApplication.controllers', ['ui.bootstrap']);
app.controller("RestController", ["$scope", "TodoService",
    function($scope, TodoService) {
        $scope.item = {
            id: null,
            name: null,
            description:null
            date:null
            status:null
        };
        TodoService.getItemById(1).then(function(value) {
            console.log(value.data);
        }, function(reason) {
            console.log("error occured");
        }, function(value) {
            console.log("no callback");
        });
        $scope.saveItem = function() {
            TodoService.saveItem($scope.item).then(function() {
                console.log("works");
                TodoService.getAllItems().then(function(value) {
                    $scope.allItems = value.data;
                }, function(reason) {
                    console.log("error occured");
                }, function(value) {
                    console.log("no callback");
                });
                $scope.item = {
                    id: null,
                    name: null,
                    description:null,
                    date:null,
                    status:null
                };
            }, function(reason) {
                console.log("error occured");
            }, function(value) {
                console.log("no callback");
            });
            $scope.item = {
                    id: null,
                    name: null,
                    description:null
                    date:null
                    status:null
                };
                TodoService.getAllItems().then(function(values) {
                	for(Items value : values){
                		console.log(value.data);
                	}
                }, function(reason) {
                    console.log("error occured");
                }, function(value) {
                    console.log("no callback");
                });
        }
        
        $scope.viewby = 10;
        $scope.totalItems = $scope.data.length;
        $scope.currentPage = 1;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 5; //Number of pager buttons to show

        $scope.setPage = function (pageNo) {
          $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
          console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function(num) {
        $scope.itemsPerPage = num;
        $scope.currentPage = 1; //reset to first page

        }
        ]);
    }



