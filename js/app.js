angular.module("myFirstApp",["ngRoute"])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller : "validaController",
			templateUrl : "templates/login.html"
		})
		.when("/crear/:personas",{
			controller : "crearController",
			templateUrl : "templates/editar.html"
		})
		.when("/consultar/:personas",{
			controller : "consultarController",
			templateUrl : "templates/consulta.html"
		})
		.when("/editar/:persona/:personas",{
			controller : "editarController",
			templateUrl : "templates/editar.html"
		})
		.when("/eliminar/:persona/:personas",{
			controller : "eliminarController",
			templateUrl : "templates/consulta.html"
		})
		
})