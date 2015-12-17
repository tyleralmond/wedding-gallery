'use strict';

/**
 * @ngdoc function
 * @name weddingGalleryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weddingGalleryApp
 */
angular.module('weddingGalleryApp')
  .controller('AboutCtrl', function ($scope, $stateParams) {
    	var index = $stateParams.id;
	 	$scope.data = images[index];
	  	$scope.nextImage = (++index);
	 	$scope.prevImage = (--index);
  });

