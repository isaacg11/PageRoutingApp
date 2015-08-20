
//----------------------ROUTER---------------------//
var app = angular.module('app', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('page1', {
		templateUrl: '/views/page1.html',
		url: '/page1',
		controller: "PageOneController"
	}).state('page2', {
		templateUrl: '/views/page2.html',
		url: '/page2',
		controller: "PageTwoController"
	}).state('page3', {
		templateUrl: '/views/page3.html',
		url: '/page3',
		controller: "PageThreeController"
	}).state('page4', {
		templateUrl: '/views/page4.html',
		url: '/page4',
		controller: "PageFourController"
	})}]);
//--------------------------------------------------//


