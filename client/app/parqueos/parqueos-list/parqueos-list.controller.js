'use strict';

(function(){

class ParqueosListComponent {
  constructor(parqueosService) {
    this.parqueosService = parqueosService;
  
  }
  $onInit(){
  this.traerParqueos ();
  }

  traerParqueos(){
    this.parqueosService.query().$promise
      .then(response =>{
        this.parqueos = response;
        console.log(this.parqueos);
      })
  }

  sacar(parqueo){
  if (parqueo.horas <= 3) {
        this.totalPagar = 2 * parqueo.horas;
      } else{
        this.totalPagar = 3 * 2;
        this.totalPagar += (parqueo.horas - 3) * 1.5;
         if (parqueo.horas > 5) {
        this.totalPagar = this.totalPagar - (this.totalPagar * 0.05);
      }
    } 
    
    parqueo.estado =! parqueo.estado;
this.parqueosService.update(parqueo).$promise
      .then(response =>{
        this.parqueos[this.parqueos.indexOf(parqueo)] = parqueo;
      })

  }

}


angular.module('paraisoCiclistaApp')
  .component('parqueosList', {
    templateUrl: 'app/parqueos/parqueos-list/parqueos-list.html',
    controller: ParqueosListComponent,
    controllerAs: 'vm'
  });

})();
