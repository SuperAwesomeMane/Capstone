angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requiredBase: false
	});
	$routeProvider
		.when('/', {templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
});