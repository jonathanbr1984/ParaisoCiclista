'use strict';

(function(){

class ParqueosRemoveComponent {
  constructor(parqueosService) {
    this.parqueosService = parqueosService;
    this.totalPagar = undefined;
  }

  consultar(codigo){
  	this.parqueosService.find({codigo: codigo}).$promise
  	.then(response => {
  		this.parqueo = response;
  		this.calculoPrecio(response);
  		
  	})
  
  }

  calculoPrecio(parqueo){
  	if (parqueo.horas <= 3) {
  			this.totalPagar = 2 * parqueo.horas;
  		} else{
  			this.totalPagar = 3 * 2;
        this.totalPagar += (parqueo.horas - 3) * 1.5;
         if (parqueo.horas > 5) {
        this.totalPagar = this.totalPagar - (this.totalPagar * 0.05);
      }
  		} 
  		console.log(this.totalPagar);
  }

}

angular.module('paraisoCiclistaApp')
  .component('parqueosRemove', {
    templateUrl: 'app/parqueos/parqueos-remove/parqueos-remove.html',
    controller: ParqueosRemoveComponent,
    controllerAs: 'vm'
  });

})();
