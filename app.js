"use strict";

angular.module("angular-bootstrap-multiselect-test", ["ui.multiselect"]).controller("index", function($scope) {
	$scope.multiselectModel = ["", []];
	$scope.multiselectOptions = [
		"Apples",
		"Bananas",
		"Peaches"
	];
});