'use strict'
var demoApp = angular.module('TodoApplication', ['ui.bootstrap', 'TodoApplication.controllers',
    'TodoApplication.services'
]);
demoApp.constant("CONSTANTS", {
    getItemByIdUrl: "/api//find/",
    getAllItems: "/api/findALL",
    saveItem: "/api/save"
    deleteItem: "/api/delete/"
    updateItem: "/api/update/"
});