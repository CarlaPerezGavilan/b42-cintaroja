const { Bebida } = require('./Bebida');
const { Refresco } = require('./Refresco');
const { Cerveza } = require('./Cerveza');

// Pruebas
const te =  new Bebida(100);
const modelo = new Cerveza(200, 30);
const sprite = new Refresco(200, 10);

// Pruebas de getters
console.log(`Cantidad de azucar del refresco ${sprite.getAzucar()}`);
console.log(`Porcentaje de alcohol del refresco ${modelo.getPorcentajeAlcohol()}`);
console.log(`Cantidad de te ${te.getCantidad()}`);

// Pruebas de setters
te.setCantidad(50);
modelo.setPorcentajeAlcohol(40);
sprite.setAzucar(20);

console.log(`Cantidad de azucar del refresco ${sprite.getAzucar()}`);
console.log(`Porcentaje de alcohol del refresco ${modelo.getPorcentajeAlcohol()}`);
console.log(`Cantidad de te ${te.getCantidad()}`);
