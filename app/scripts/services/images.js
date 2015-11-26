'use strict';

/**
 * @ngdoc service
 * @name weddingGalleryApp.images
 * @description
 * # images
 * Factory in the weddingGalleryApp.
 */
angular.module('weddingGalleryApp')
  .factory('images', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });