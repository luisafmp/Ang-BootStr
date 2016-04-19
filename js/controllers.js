var app =  angular.module("myFirstApp")
app.controller("validaController",function($scope){

    $scope.usuario={};
    $scope.personas=[];
    var personas= JSON.stringify($scope.personas);

	$scope.valida_usuario = function(){

		if($scope.usuario.nombre=="user" && $scope.usuario.contrasena=="12345"){
			window.location.href = "#/crear/"+personas;
		}			
		else{
			window.alert("usuario o contraseña incorrectos");
		}

	}
	
})
.controller("crearController",function($scope,$http,$routeParams){

	$scope.encabezado = "Ingrese los Datos de la persona";
	$scope.tipoPersistencia="Crear";
	
	$scope.personas = JSON.parse($routeParams.personas);
	$scope.persona={};
	
	$http.get("statics/departamentos.txt")
	.success(function(data){
		$scope.dptos=data;

	}).error(function(error){
		console.log(error);		
	});

	
	$scope.persistir = function(){
		
		$scope.personas.push($scope.persona);
		var	cadenaPersonas= JSON.stringify($scope.personas);
		window.location.href="#/consultar/"+cadenaPersonas;
	}

})
.controller("consultarController",function($scope,$routeParams){

	$scope.personas = JSON.parse($routeParams.personas);
	
})
.controller("editarController",function($scope,$http,$routeParams){

	$scope.personas = JSON.parse($routeParams.personas);
	$scope.persona = JSON.parse($routeParams.persona);
	
	$scope.bandera="true";
	$scope.tipoPersistencia="Actualizar";
	$scope.encabezado = "Los datos almacenados son:";

	$http.get("statics/departamentos.txt")
	.success(function(data){
		$scope.dptos=data;

	}).error(function(error){
		console.log(error);		
	});

	$scope.persistir = function(){
		
		console.log("inicia persistir");

		$scope.personas.forEach(function(item,index,array){
				if(item.cedula == $scope.persona.cedula)
					array[index] = $scope.persona;
			})

		console.log("entró al array");

		var	cadenaPersonas= JSON.stringify($scope.personas);

		console.log("stringify");
		window.location.href="#/consultar/"+cadenaPersonas;

	}


})
.controller("eliminarController",function($scope,$routeParams){

	$scope.personas = JSON.parse($routeParams.personas);
	$scope.persona = JSON.parse($routeParams.persona);

	$scope.personas = $scope.personas.filter(
			function(item){
			return item.cedula !== $scope.persona.cedula;
	});
		
})