window.onload = function() {
  var computeButton = document.getElementById("celsiusF");
  computeButton.onclick = celsiusF;
};

function celsiusF(){
	var celsius = document.getElementById("celsius").value;
	var respuesta = document.getElementById("respuesta").value;
	var celsiusF = (celsius*1.8)+32;
	respuesta.innerHTML = "Grados Celsius: " + celsiusF.toFixed(2);
}