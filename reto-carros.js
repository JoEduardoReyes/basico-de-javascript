var cantidadDeCarros = prompt("Cuantos carros deseas ingresar?");
var autos = [];

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

for (i = 0; i < cantidadDeCarros; i++) {
  var marcaDelAuto = prompt(`Cual es la marca del auto numero ${i + 1}`);
  var modeloDelAuto = prompt(`Cual es el modelo del auto numero ${i + 1}`);
  var annioDelAuto = prompt(`Cual es el annio del auto numero ${i + 1}`);
  autos[i] = new auto(marcaDelAuto, modeloDelAuto, annioDelAuto);
}

console.table(autos);
