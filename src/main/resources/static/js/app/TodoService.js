'use strict'
angular.module('demo.services', []).factory('TodoService',
		[ "$http", "CONSTANTS", function($http, CONSTANTS) {
			var service = {};
			service.getItemById = function(id) {
				var url = CONSTANTS.getItemByIdUrl + id;
				return $http.get(url);
			}
			service.getAllItems = function() {
				return $http.get(CONSTANTS.getAllItems);
			}
			service.saveItem = function(item) {
				return $http.post(CONSTANTS.saveItem, item);
			}
			service.deleteItem = function(id) {
				return $http.get(CONSTANTS.deleteItem + id);
			}
			service.updateItem = function(item) {
				return $http.post(CONSTANTS.updateItem, item);
			}
			return service;
		} ]);