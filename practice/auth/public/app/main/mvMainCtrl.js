angular.module('app').controller('mvMainCtrl', function($scope) {
	$scope.courses = [
		{name: 'C# for Sociopaths', featured: true},
		{name: 'C# for Non-Sociopaths', featured: true},
		{name: 'Super Duper Expert C#', featured: true},
		{name: 'Visual Basic for Visual Basic Developers', featured: true},
		{name: 'Telling Recruiters to Leave You Alone', featured: false},
		{name: "Writing Code that Doesn't Suck", featured: true},
	]
});