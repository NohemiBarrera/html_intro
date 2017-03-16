Métodos de arrays

var Array miArreglo = [323,434,454,345,546,567,567];
console.log(miArreglo);

for(var i=0; i < miArreglo.length; i++){
	console.log(miArreglo[i]);
};

var imprimir = function(elemento_i_del_arreglo){
	console.log(elemento_i_del_arreglo);
};

miArreglo.forEach(imprimir)


function forEach(funcion_callback, arreglo){
	for(var i=0; i < arreglo.length; i++){
		funcion_callback(arreglo[i]);
	};
}

forEach(imprimir, miArreglo);
miArreglo.forEach(imprimir);



