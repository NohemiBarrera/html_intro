-----Ejemplo de stack y queue

var notificaciones_whats = [];
notificaciones_whats.push("Hola, ya llegué");
notificaciones_whats.push("ábreme");
notificaciones_whats.push("traje otro gato");

while (notificaciones_whats.length != 0){
	console.log(notificaciones_whats.shift())
}

var initialLength = notificaciones_whats.length;
for(var i=0; i < initialLength; i++){
	console.log(notificaciones_whats[i]);
	notificaciones_whats.remove(i);
}



------Ejemplo de .map

var otro_a =[1,2,3,4,5,6];

var funcion_para_map = function(elemento_i_del_arreglo){
	return elemento_i_del_arreglo * 2;
}
nuevo_arreglo = otro_a.map(funcion_para_map);
console.log(otro_a);
console.log(nuevo_arreglo);