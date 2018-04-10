'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description	
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [ 'ngRoute',
'ui.bootstrap'
//    'ngAnimate',
//    'ngCookies',
//    'ngResource',
   
//    'ngSanitize',
//    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TodoCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
