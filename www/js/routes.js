angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('starCam', {
    url: '/',
    templateUrl: 'templates/starCam.html',
    controller: 'starCamCtrl'
  })

  .state('page2', {
    url: '/settings',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/view/live',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/view/recent',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/list',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/help',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/options',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page9', {
    url: '/settings/phone',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page11', {
    url: '/settings/password',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/settings/blackbox',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page13', {
    url: '/settings/storage',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page10', {
    url: '/list/detail',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page10b', {
    url: '/list/detailEdit',
    templateUrl: 'templates/page10b.html',
    controller: 'page10bCtrl'
  })

$urlRouterProvider.otherwise('/')

  

});