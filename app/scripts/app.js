'use strict';

/**
 * @ngdoc overview
 * @name weddingGalleryApp
 * @description
 * # weddingGalleryApp
 *
 * Main module of the application.
 */
angular
  .module('weddingGalleryApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        // controllerAs: 'main'
      })
      .state('main.images', {
        url: 'images/:id',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        // controllerAs: 'about'
      });
  });