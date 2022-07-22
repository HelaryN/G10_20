

/* IMPLEMENTACION DE addEventListener */

window.onload = function (){

//__________Primer evento 

document.getElementById("MiBoton").addEventListener('click', function(){
    this.style.backgroundColor = "burlywood";
})

//__________Segundo evento
document.getElementById("MiParrafo").addEventListener('click', cambiarTexto);

} //Fin addEventListener

function cambiarTexto(){
    document.getElementById("MiParrafo").innerHTML = "UNAH II PAC22"
}

function FechaActual(){  //Boton Fecha actual
    var fecha = new Date();
    alert("La fecha actual es:  " + fecha.toUTCString());
}

function Sumar(){  // Botón sumar 
    var numero1 = Number(prompt("Ingrese el primer número: ", ""));
    var numero2 = Number(prompt("Ingrese el segundo número: ", ""));
    var Total = numero1 + numero2;
    alert("El resultado es: " + Total);
}



