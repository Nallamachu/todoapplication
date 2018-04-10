'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
var app = angular.module('todoApp');

app.controller("TodoCtrl", [
		'$scope',
		'TodoService',
		function($scope, TodoService) {

			$scope.status = [ {
				id : 1,
				value : "Completed"
			}, {
				id : 2,
				value : "Pending"
			} ]
			
			$scope.CreateUpdateTask = function(){
				if($scope.id){
					$scope.updateTask();
				}else{
					$scope.createTask();
				}
			}
			
			

			$scope.createTask = function() {
				TodoService.createTask($scope.name, $scope.description,
						$scope.completionDate, $scope.statusValue.value).then(
						function(response) {
							$scope.findAll();
						}, function(error) {
							//err
						});
			};

			$scope.updateTask = function() {
				TodoService.updateTask($scope.id,$scope.name, $scope.description,
						$scope.completionDate, $scope.statusValue.value).then(
						function(response) {
							$scope.findAll();
						}, function(error) {
							//err
						});
			};

			$scope.findAll = function() {
				TodoService.findAll().then(function(response) {
					$scope.tasks = response.data;
					
					$scope.totalItems = $scope.tasks.length;
			        $scope.viewby = 10;
			        $scope.currentPage = 1;
			        $scope.itemsPerPage = $scope.viewby;
			        $scope.maxSize = 5; //Number of pager buttons to show
			        
				}, function(error) {
					//err
				});
			};

			$scope.editTask = function(task) {
				$scope.id = task.id;
				$scope.name = task.name;
				$scope.description = task.description;
				$scope.completionDate = task.date;
				$scope.stausValue = task.status;

			};

			$scope.reset = function(task) {

			};

			$scope.deleteTask = function(id) {
				TodoService.deleteTask(id).then(
						function(response) {
							$scope.findAll();
						}, function(error) {
							//err
						});
			};
			
		       
	

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

		} ]);

/*
 .controller('MainCtrl', function () {
 this.awesomeThings = [
 'HTML5 Boilerplate',
 'AngularJS',
 'Karma'
 ];
 });*/
