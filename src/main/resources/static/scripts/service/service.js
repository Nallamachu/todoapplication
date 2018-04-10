'use strict';
var app = angular.module("todoApp");
app.factory("TodoService", [
		'$http',
		function($http) {
			var todoFactory = {};

			//findAll
			todoFactory.findAll = function() {
				return $http({
					method : 'GET',
					url : 'api/findALL'
				});
			}

			// Create
			todoFactory.createTask = function(name, description, date, status) {
				var data = {
						name: name,
						description: description,
						date: date,
						status:status
						};
				
				return $http.post('/api/save', JSON.stringify(data));
			}
			
			// Update
			todoFactory.updateTask = function(id, name, description, date, status) {
				var data = {
						id:id,
						name: name,
						description: description,
						date: date,
						status:status
						};
				
				return $http.post('/api/update/'+id, JSON.stringify(data));
			}
			
			// Delete
			todoFactory.deleteTask = function(id) {
				
				return $http.delete('/api/delete/'+id);
			}

			return todoFactory;
		} ]);
