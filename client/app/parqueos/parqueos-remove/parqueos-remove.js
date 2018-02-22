'use strict';

angular.module('paraisoCiclistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueos-remove', {
        url: '/parqueos-remove',
        template: '<parqueos-remove></parqueos-remove>'
      });
  });
