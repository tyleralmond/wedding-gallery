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

    // $scope.images = [
    // 	{src: '/images/3_14.jpg', title: 'image1', full: '/images/3_15.jpg'},
    // 	{src: '/images/3_15.jpg', title: 'image2'}
    // ];

  });
