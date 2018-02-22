'use strict';

angular.module('paraisoCiclistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueos-list', {
        url: '/parqueos-list',
        template: '<parqueos-list></parqueos-list>'
      });
  });
