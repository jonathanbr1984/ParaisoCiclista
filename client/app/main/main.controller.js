'use strict';

(function() {

  class MainController {

    constructor(parqueosService) {
      this.parqueosService = parqueosService;
    }

    $onInit() {
      this.parqueosService.query().$promise
      .then(response => {
        this.parqueos = response;
      })
      .catch(err => {
        console.log('Error', err);
      })
    }
  }

  angular.module('paraisoCiclistaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });
})();
