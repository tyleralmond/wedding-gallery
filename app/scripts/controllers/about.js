'use strict';

/**
 * @ngdoc function
 * @name weddingGalleryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weddingGalleryApp
 */
angular.module('weddingGalleryApp')
  .controller('AboutCtrl', function ($scope, $routeParams) {
    	var index = parseInt($routeParams.id);
	 	$scope.data = images[index];
	  	$scope.nextImage = (++index);
	 	$scope.prevImage = (--index);
  });

