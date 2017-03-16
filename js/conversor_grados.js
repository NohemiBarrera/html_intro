
function calcularC(celsius){
	var gradoscelsius = document.getElementById("gradosC").value;

	var resultado = (gradoscelsius*1.8)+32;

	document.getElementById("resultadogradosC").value=resultado;
}

function calcularF(fahrenheit){
	var gradosfahrenheit = document.getElementById("gradosF").value;

	var resultado = (gradosfahrenheit-32)*1.8;

	document.getElementById("resultadogradosF").value=resultado;
}
