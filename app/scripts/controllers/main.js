'use strict';

/**
 * @ngdoc function
 * @name weddingGalleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingGalleryApp
 */
angular.module('weddingGalleryApp')
  .controller('MainCtrl', function ($scope) {
    $scope.images = images;
  });
