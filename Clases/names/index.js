const prompt = require("prompt-sync")();
let nombres = [];
let continuar = true;
while (continuar) {
  const respuesta = prompt("Ingresa un nombre, finaliza la lista al escribir 'fin': ");
  if (respuesta === "fin") continuar = false;
  else nombres.push(respuesta);
}

console.log("El número de nombres ingresados fue:", nombres.length);
console.log("Nombres ingresados:", nombres);


const contadorNombres = {};
let nombreRepetido = null;
let cantidadRepetida = 0;
nombres.forEach(nombre => {
  contadorNombres[nombre] = (contadorNombres[nombre] || 0) + 1;
  if (contadorNombres[nombre] > cantidadRepetida) { 
    nombreRepetido = nombre;
    cantidadRepetida = contadorNombres[nombre];
  }
});
console.log("Nombre más repetido:", nombreRepetido, ", veces repetido:", cantidadRepetida);


let nombreMasLargo = nombres[0];
let nombreMasCorto = nombres[0];
nombres.forEach(nombre => {
  if (nombre.length > nombreMasLargo.length) nombreMasLargo = nombre;
  if (nombre.length < nombreMasCorto.length) nombreMasCorto = nombre;
});
console.log("Nombre más largo:", nombreMasLargo);
console.log("Nombre más corto:", nombreMasCorto);


    