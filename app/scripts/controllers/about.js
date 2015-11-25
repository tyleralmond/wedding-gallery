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
    var index = $routeParams.id;
	  $scope.data = images[index];
	  $scope.nextImage = '/images/'+(index++);
	  $scope.prevImage = '/images/'+(index--);
  });

