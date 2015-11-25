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
	$scope.data = images[$routeParams.id];
  });

